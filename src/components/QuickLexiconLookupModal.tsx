import React, { useState, useEffect } from 'react';
import {
  Search,
  BookA,
  X,
  Volume2,
  VolumeX,
  Copy,
  Check,
  BookText
} from 'lucide-react';
import { dictionaryService, type WordDetail } from '../services/dictionaryService';
import { getBestAmericanVoices } from '../utils/speechUtils';

interface QuickLexiconLookupModalProps {
  initialWord?: string;
  onClose: () => void;
  nightVision: boolean;
  onSendToJournal?: (title: string, content: string) => void;
}

export const QuickLexiconLookupModal: React.FC<QuickLexiconLookupModalProps> = ({
  initialWord = '',
  onClose,
  nightVision,
  onSendToJournal
}) => {
  const [query, setQuery] = useState(initialWord);
  const [selectedWord, setSelectedWord] = useState<string>(initialWord.toUpperCase().trim());
  const [entry, setEntry] = useState<WordDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedWord) {
      loadWord(selectedWord);
    }
  }, [selectedWord]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      dictionaryService.search(query.trim(), 8).then(res => {
        setSuggestions(res.map(r => r.word));
      });
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const loadWord = async (w: string) => {
    if (!w) return;
    setLoading(true);
    try {
      const result = await dictionaryService.getWord(w);
      setEntry(result);
    } catch (e) {
      console.warn('Word lookup failed:', e);
      setEntry(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeak = (w: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(w.toLowerCase());
    const voices = getBestAmericanVoices();
    if (voices.female || voices.male) {
      utterance.voice = voices.female || voices.male;
    }
    utterance.rate = 0.85;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = () => {
    if (!entry) return;
    const text = `${entry.word}\n\nMeanings:\n${entry.meanings.map((m: string, i: number) => `${i + 1}. ${m}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportJournal = () => {
    if (!entry || !onSendToJournal) return;
    const content = [
      `# Lexicon Term: ${entry.word}`,
      `**Category:** Vocabulary & Technical Definition`,
      ``,
      `### Definitions:`,
      ...entry.meanings.map((m: string, i: number) => `${i + 1}. ${m}`),
      ...(entry.examples.length > 0 ? [``, `### Examples:`, ...entry.examples.map((ex: string) => `> "${ex}"`)] : []),
      ``,
      `*Source: CivZero Civilization Lexicon (Webster's Unabridged)*`
    ].join('\n');

    onSendToJournal(`Definition: ${entry.word}`, content);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className={`w-full max-w-lg rounded-2xl border shadow-2xl flex flex-col max-h-[85vh] overflow-hidden ${
          nightVision
            ? 'bg-[#120303] border-red-900/80 text-red-100'
            : 'bg-[#0d1117] border-zinc-800 text-zinc-100'
        }`}
      >
        {/* Header with Search Input */}
        <div className="p-4 border-b border-zinc-800/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <BookA className="w-5 h-5" />
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && query.trim()) {
                    setSelectedWord(query.trim().toUpperCase());
                  }
                }}
                placeholder="Lookup any word in 102k Lexicon..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-black/40 border border-zinc-700 text-xs font-mono text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                autoFocus
              />
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Suggestions Bar */}
        {suggestions.length > 0 && (
          <div className="px-4 py-2 border-b border-zinc-800/60 bg-black/30 flex items-center gap-1.5 overflow-x-auto text-xs font-mono scrollbar-none">
            <span className="text-[10px] text-zinc-500 uppercase flex-shrink-0">Suggestions:</span>
            {suggestions.map(s => (
              <button
                key={s}
                onClick={() => {
                  setQuery(s);
                  setSelectedWord(s);
                }}
                className="px-2 py-0.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-emerald-400 flex-shrink-0 text-[11px] cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Word Card Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {loading ? (
            <div className="flex items-center justify-center p-12 text-zinc-500 font-mono text-xs">
              <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mr-2" />
              Searching 102,223 words...
            </div>
          ) : entry ? (
            <div className="space-y-4">
              {/* Headword & Audio Bar */}
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-zinc-800/80">
                <div>
                  <h2 className="text-xl font-bold font-mono tracking-tight text-white uppercase">
                    {entry.word}
                  </h2>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Webster's Unabridged Canon • 102,223 Words
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleSpeak(entry.word)}
                    title="Audio Pronunciation"
                    className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                      isPlayingAudio
                        ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse'
                        : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-emerald-400'
                    }`}
                  >
                    {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleCopy}
                    title="Copy definition"
                    className="p-2 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Numbered Definitions */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold text-zinc-400">
                  {entry.meanings.length} Core {entry.meanings.length === 1 ? 'Meaning' : 'Meanings'}:
                </span>
                <div className="space-y-2">
                  {entry.meanings.map((meaning: string, idx: number) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/40 border border-zinc-800/80 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-sans leading-relaxed text-zinc-200">
                        {meaning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quotes & Examples */}
              {entry.examples && entry.examples.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase font-bold text-zinc-400">
                    Usage Citations:
                  </span>
                  <div className="space-y-1.5">
                    {entry.examples.map((ex: string, idx: number) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs italic text-zinc-300 leading-relaxed font-serif"
                      >
                        "{ex}"
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-2 text-zinc-500">
              <BookA className="w-8 h-8 stroke-1 text-zinc-600 mb-1" />
              <div className="text-xs font-mono font-bold text-zinc-400">
                {query ? `"${query}" not found in quick index` : 'Search any word above'}
              </div>
              <p className="text-[11px] font-mono text-zinc-500 max-w-xs">
                Type any common or scientific term to look up definitions instantly from the 102,223-word archive.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {entry && onSendToJournal && (
          <div className="p-3 border-t border-zinc-800 bg-black/40 flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-500">Need to remember this word?</span>
            <button
              onClick={handleExportJournal}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <BookText className="w-3.5 h-3.5" />
              <span>Copy to Field Journal</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
