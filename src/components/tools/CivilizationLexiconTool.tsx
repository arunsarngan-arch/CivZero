import React, { useState, useEffect, useMemo } from 'react';
import {
  BookA,
  Search,
  Volume2,
  VolumeX,
  Star,
  Shuffle,
  Copy,
  Check,
  X,
  Sparkles,
  Layers,
  ArrowRight,
  BookOpen,
  Share2,
  Quote,
  ChevronDown,
  ChevronUp,
  PlusCircle
} from 'lucide-react';
import { dictionaryService, type WordDetail, type DictionaryManifest } from '../../services/dictionaryService';
import { getBestAmericanVoices, humanizeTextForSpeech } from '../../utils/speechUtils';

interface CivilizationLexiconToolProps {
  nightVision: boolean;
  onSendToJournal?: (title: string, content: string) => void;
}

export const CivilizationLexiconTool: React.FC<CivilizationLexiconToolProps> = ({
  nightVision,
  onSendToJournal
}) => {
  const [manifest, setManifest] = useState<DictionaryManifest | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string>('A');
  const [activeFilter, setActiveFilter] = useState<'all' | 'starred'>('all');
  const [words, setWords] = useState<WordDetail[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(200);
  const [selectedWord, setSelectedWord] = useState<WordDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [copiedWord, setCopiedWord] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [voiceGender, setVoiceGender] = useState<'female' | 'male'>('female');
  const [showFullUnabridged, setShowFullUnabridged] = useState(false);

  const alphabet = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), []);

  useEffect(() => {
    dictionaryService.getManifest().then(setManifest);
    loadLetterWords('A');
  }, []);

  const loadLetterWords = async (letter: string) => {
    setLoading(true);
    setActiveLetter(letter.toUpperCase());
    setVisibleCount(200);
    try {
      const data = await dictionaryService.getLetterWords(letter);
      const list = Object.entries(data).map(([w, raw]) => {
        const meanings = (raw.m && raw.m.length > 0) ? raw.m : (raw.d ? [raw.d] : ['Definition not available.']);
        const examples = raw.e || [];
        const definition = raw.d || meanings.join('\n\n');
        return {
          word: w,
          meanings,
          examples,
          definition,
          letter: letter.toLowerCase(),
          isBookmarked: dictionaryService.isBookmarked(w)
        };
      });
      setWords(list);
      if (list.length > 0) {
        setSelectedWord(list[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (text: string) => {
    setSearchQuery(text);
    setVisibleCount(200);
    if (!text.trim()) {
      loadLetterWords(activeLetter);
      return;
    }
    setLoading(true);
    try {
      const results = await dictionaryService.search(text, 120);
      setWords(results);
      if (results.length > 0) {
        setSelectedWord(results[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRandomWord = async () => {
    setLoading(true);
    try {
      const rand = await dictionaryService.getRandomWord();
      if (rand) {
        setSelectedWord(rand);
        setWords([rand, ...words.filter(w => w.word !== rand.word)]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleToggleBookmark = (word: string) => {
    const isNow = dictionaryService.toggleBookmark(word);
    setWords(prev => prev.map(w => w.word === word ? { ...w, isBookmarked: isNow } : w));
    if (selectedWord && selectedWord.word === word) {
      setSelectedWord({ ...selectedWord, isBookmarked: isNow });
    }
    if (activeFilter === 'starred') {
      loadStarredWords();
    }
  };

  const loadStarredWords = async () => {
    setLoading(true);
    try {
      const starredKeys = dictionaryService.getStarredWords();
      const loaded: WordDetail[] = [];
      for (const key of starredKeys) {
        const item = await dictionaryService.getWord(key);
        if (item) loaded.push(item);
      }
      setWords(loaded);
      if (loaded.length > 0) {
        setSelectedWord(loaded[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (wordObj: WordDetail) => {
    const formatted = `${wordObj.word}\n\nMeanings:\n${wordObj.meanings.map((m, i) => `${i + 1}. ${m}`).join('\n')}\n\nExamples:\n${wordObj.examples.map(e => `• "${e}"`).join('\n')}`;
    navigator.clipboard.writeText(formatted);
    setCopiedWord(wordObj.word);
    setTimeout(() => setCopiedWord(null), 2000);
  };

  const handleSpeak = (wordObj: WordDetail) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanWord = wordObj.word.toLowerCase();
    const topMeaning = wordObj.meanings[0] ? humanizeTextForSpeech(wordObj.meanings[0]) : '';
    const topExample = wordObj.examples[0] ? `For example: ${humanizeTextForSpeech(wordObj.examples[0])}` : '';
    const speechText = `${cleanWord}. Meaning: ${topMeaning}. ${topExample}`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    const voices = getBestAmericanVoices();
    const chosenVoice = voiceGender === 'female' ? voices.female : voices.male;
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }
    utterance.rate = 0.95;
    utterance.pitch = voiceGender === 'female' ? 1.0 : 0.9;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  const currentLetterTotal = manifest?.letters[activeLetter] || words.length;

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Top Banner */}
      <div
        className={`p-4 rounded-xl border transition-colors ${
          nightVision
            ? 'bg-[#150303] border-red-950 text-red-100'
            : 'bg-[#0d1117] border-zinc-800 text-zinc-100 shadow-lg'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 rounded-xl border ${
                nightVision
                  ? 'bg-red-950/60 border-red-800 text-red-400'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
              }`}
            >
              <BookA className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold font-mono tracking-tight text-white uppercase">
                  Civilization Lexicon &amp; Complete English Dictionary
                </h3>
                <span className="inline-flex items-center justify-center leading-none px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 whitespace-nowrap font-bold">
                  102,000+ UNABRIDGED WORDS
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Every word with 2–4 detailed meanings, parts of speech &amp; real-world usage examples
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRandomWord}
              title="Discover a random word from the lexicon"
              className="px-2.5 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-amber-400 flex items-center gap-1.5 transition-colors"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Random Word</span>
            </button>

            <button
              onClick={() => {
                if (activeFilter === 'starred') {
                  setActiveFilter('all');
                  loadLetterWords(activeLetter);
                } else {
                  setActiveFilter('starred');
                  loadStarredWords();
                }
              }}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-colors ${
                activeFilter === 'starred'
                  ? 'bg-amber-500 text-black border-amber-400 font-bold'
                  : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Saved ({dictionaryService.getStarredWords().length})</span>
            </button>
          </div>
        </div>

        {/* Search input */}
        <div className="relative mt-3">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search across all 102,223 English words for multiple meanings &amp; examples..."
            className="w-full pl-9 pr-8 py-2 rounded-lg bg-black/50 border border-zinc-700 focus:border-amber-500 text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* A-Z Alphabet Quick Bar */}
        <div className="flex items-center gap-1 overflow-x-auto py-2 mt-2 scrollbar-none border-t border-zinc-800/80">
          {alphabet.map((letter) => {
            const isSelected = activeLetter === letter && !searchQuery && activeFilter === 'all';
            return (
              <button
                key={letter}
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                  loadLetterWords(letter);
                }}
                className={`min-w-[26px] h-7 px-1.5 rounded text-xs font-mono font-bold flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'bg-zinc-900/90 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 border border-zinc-800'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Layout: Word List + Definition Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left Column: Word List */}
        <div
          className={`md:col-span-5 rounded-xl border p-3 flex flex-col h-[540px] ${
            nightVision ? 'bg-[#0f0404] border-red-950' : 'bg-[#0b0e14] border-zinc-800'
          }`}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span>
              {activeFilter === 'starred'
                ? `Saved Words (${words.length})`
                : searchQuery
                ? `Search Matches (${words.length})`
                : `Letter "${activeLetter}" (${currentLetterTotal.toLocaleString()} Words)`}
            </span>
            <span className="text-zinc-500">
              Showing {Math.min(visibleCount, words.length)} of {words.length}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-1 pr-1">
            {loading ? (
              <div className="p-8 text-center text-xs font-mono text-zinc-500 animate-pulse">
                Accessing unabridged lexicon shards...
              </div>
            ) : words.length === 0 ? (
              <div className="p-8 text-center text-xs font-mono text-zinc-500">
                No matching words found.
              </div>
            ) : (
              <>
                {words.slice(0, visibleCount).map((item) => {
                  const isSelected = selectedWord?.word === item.word;
                  return (
                    <button
                      key={item.word}
                      onClick={() => {
                        setSelectedWord(item);
                        setShowFullUnabridged(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors ${
                        isSelected
                          ? nightVision
                            ? 'bg-red-950/80 text-red-200 border border-red-700/80 font-bold'
                            : 'bg-amber-500/15 text-amber-300 border border-amber-500/40 font-bold'
                          : 'text-zinc-300 hover:bg-zinc-900/70'
                      }`}
                    >
                      <span className="truncate">{item.word}</span>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {item.meanings.length > 1 && (
                          <span className="text-[9px] px-1 rounded bg-zinc-800/80 text-zinc-400 font-mono">
                            {item.meanings.length} defs
                          </span>
                        )}
                        {item.isBookmarked && (
                          <Star className="w-3 h-3 text-amber-400 fill-current" />
                        )}
                      </div>
                    </button>
                  );
                })}

                {/* Load More Button for Infinite Browsing */}
                {visibleCount < words.length && (
                  <button
                    onClick={() => setVisibleCount(prev => prev + 200)}
                    className="w-full py-2.5 mt-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-amber-400 font-bold border border-zinc-700/80 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Load 200 More Words ({words.length - visibleCount} remaining)</span>
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right Column: Word Definition & Tools */}
        <div
          className={`md:col-span-7 rounded-xl border p-5 flex flex-col justify-between min-h-[540px] overflow-hidden ${
            nightVision ? 'bg-[#120303] border-red-950 text-red-100' : 'bg-[#0d1117] border-zinc-800 text-zinc-100'
          }`}
        >
          {selectedWord ? (
            <div className="flex flex-col h-full justify-between space-y-4">
              <div>
                {/* Header / Actions */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-zinc-800">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white uppercase">
                      {selectedWord.word}
                    </h2>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="inline-flex items-center justify-center leading-none px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
                        {selectedWord.meanings.length} DISTINCT MEANINGS
                      </span>
                      {selectedWord.examples.length > 0 && (
                        <span className="inline-flex items-center justify-center leading-none px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          {selectedWord.examples.length} EXAMPLES
                        </span>
                      )}
                      <span className="inline-flex items-center justify-center leading-none px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-400 border border-zinc-700">
                        LETTER {selectedWord.letter.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Voice Switcher */}
                    <button
                      onClick={() => setVoiceGender(voiceGender === 'female' ? 'male' : 'female')}
                      title={`Voice: ${voiceGender.toUpperCase()} (tap to switch)`}
                      className="px-2 py-1 rounded text-[10px] font-mono border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white"
                    >
                      {voiceGender === 'female' ? '♀ FEMALE' : '♂ MALE'}
                    </button>

                    {/* Speech Button */}
                    <button
                      onClick={() => handleSpeak(selectedWord)}
                      title={isPlayingAudio ? 'Stop speech' : 'Listen to word and definition'}
                      className={`p-2 rounded-lg border transition-colors ${
                        isPlayingAudio
                          ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse'
                          : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-amber-400 hover:bg-zinc-800'
                      }`}
                    >
                      {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    {/* Bookmark Button */}
                    <button
                      onClick={() => handleToggleBookmark(selectedWord.word)}
                      title={selectedWord.isBookmarked ? 'Remove from saved' : 'Save word'}
                      className="p-2 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          selectedWord.isBookmarked ? 'text-amber-400 fill-current' : ''
                        }`}
                      />
                    </button>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(selectedWord)}
                      title="Copy word and meanings"
                      className="p-2 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                      {copiedWord === selectedWord.word ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Meanings & Examples Scroll Area */}
                <div className="mt-4 overflow-y-auto max-h-[350px] pr-2 space-y-4">
                  {/* Meanings List */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                      <span>Definitions &amp; Senses:</span>
                    </div>

                    <div className="space-y-2">
                      {selectedWord.meanings.map((meaning, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-black/40 border border-zinc-800/90 flex items-start gap-3 transition-colors hover:border-zinc-700"
                        >
                          <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-xs sm:text-sm font-sans leading-relaxed text-zinc-200">
                            {meaning}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real-world Examples List */}
                  {selectedWord.examples.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                      <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                        <Quote className="w-3.5 h-3.5" />
                        <span>Real-World Usage &amp; Literary Examples:</span>
                      </div>

                      <div className="space-y-1.5">
                        {selectedWord.examples.map((example, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-emerald-300 text-xs sm:text-sm font-sans italic flex items-start gap-2.5"
                          >
                            <span className="text-emerald-400 font-serif text-lg leading-none mt-0.5">“</span>
                            <span className="flex-1 leading-relaxed">{example}</span>
                            <span className="text-emerald-400 font-serif text-lg leading-none mt-0.5">”</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expandable Unabridged Original Entry */}
                  <div className="pt-2 border-t border-zinc-800/60">
                    <button
                      onClick={() => setShowFullUnabridged(!showFullUnabridged)}
                      className="text-[11px] font-mono text-zinc-400 hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                    >
                      {showFullUnabridged ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      <span>{showFullUnabridged ? 'Hide' : 'View'} Full Webster's Unabridged Text &amp; Etymology</span>
                    </button>

                    {showFullUnabridged && (
                      <div className="mt-2 p-3 rounded-xl bg-black/60 border border-zinc-800 text-xs font-mono text-zinc-400 leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
                        {selectedWord.definition}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Send to Notepad Shortcut */}
              {onSendToJournal && (
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">
                    Keep this vocabulary word in your field notes:
                  </span>
                  <button
                    onClick={() => {
                      const meaningsText = selectedWord.meanings.map((m, i) => `${i + 1}. ${m}`).join('\n');
                      const examplesText = selectedWord.examples.length > 0 
                        ? `\n\n### Examples:\n${selectedWord.examples.map(e => `- "${e}"`).join('\n')}` 
                        : '';
                      onSendToJournal(
                        `Lexicon Note: ${selectedWord.word}`,
                        `## ${selectedWord.word}\n\n### Meanings:\n${meaningsText}${examplesText}\n\n*Reference: CivZero Unabridged Lexicon*`
                      );
                    }}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-amber-400 font-bold flex items-center gap-1.5 transition-colors border border-zinc-700 shadow-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Copy to Notepad</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center my-auto text-center p-8 space-y-2 text-zinc-500">
              <BookA className="w-10 h-10 stroke-1 text-zinc-600 mb-2" />
              <div className="text-sm font-mono font-bold text-zinc-400">Select a Word</div>
              <div className="text-xs font-mono">
                Browse through 102,000+ words or use the search bar above to look up multiple meanings and examples.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
