import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  BookMarked,
  Search,
  Sparkles,
  Scroll,
  Heart,
  Shield,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  Copy,
  Check,
  Bookmark,
  Share2,
  ChevronRight,
  ChevronLeft,
  Filter,
  Eye,
  Info,
  Sun,
  Compass,
  Wind,
  Flame,
  Scale,
} from 'lucide-react';
import { HOLY_BOOKS_CANON, HolyBook, ScriptureChapter } from '../data/holyBooksData';

const renderBookIcon = (name: string, className: string = 'w-4 h-4') => {
  switch (name) {
    case 'BookOpen': return <BookOpen className={className} />;
    case 'BookMarked': return <BookMarked className={className} />;
    case 'Sun': return <Sun className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Scale': return <Scale className={className} />;
    default: return <BookOpen className={className} />;
  }
};

interface HolyBooksScreenProps {
  nightVision: boolean;
  fontSize: 'normal' | 'large' | 'huge';
}

export const HolyBooksScreen: React.FC<HolyBooksScreenProps> = ({
  nightVision,
  fontSize,
}) => {
  const [selectedBookId, setSelectedBookId] = useState<string>('holy-bible');
  const [activeChapter, setActiveChapter] = useState<ScriptureChapter | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Audio Speech Synthesis state
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [voiceGender, setVoiceGender] = useState<'female' | 'male'>('female');

  // Bookmarks in localStorage
  const [bookmarkedChapters, setBookmarkedChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('civzero_holy_bookmarks');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  const selectedBook = useMemo(() => {
    return HOLY_BOOKS_CANON.find((b) => b.id === selectedBookId) || HOLY_BOOKS_CANON[0];
  }, [selectedBookId]);

  // Search results across all holy books
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results: { book: HolyBook; chapter: ScriptureChapter; matchedVerse?: { num: string; text: string } }[] = [];

    HOLY_BOOKS_CANON.forEach((book) => {
      book.chapters.forEach((chapter) => {
        const titleMatch = chapter.title.toLowerCase().includes(q) || chapter.theme.toLowerCase().includes(q);
        const verseMatch = chapter.verses.find((v) => v.text.toLowerCase().includes(q) || v.num.toLowerCase().includes(q));

        if (titleMatch || verseMatch) {
          results.push({
            book,
            chapter,
            matchedVerse: verseMatch,
          });
        }
      });
    });

    return results;
  }, [searchQuery]);

  // Audio Narration Handler
  const handleSpeak = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    const selectedVoice = voices.find((v) => {
      const name = v.name.toLowerCase();
      if (voiceGender === 'female') {
        return name.includes('female') || name.includes('zira') || name.includes('samantha') || name.includes('hazel');
      } else {
        return name.includes('male') || name.includes('david') || name.includes('george') || name.includes('mark');
      }
    });

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.rate = 0.95; // Gentle dignified cadence
    utterance.pitch = voiceGender === 'female' ? 1.05 : 0.9;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleBookmark = (chapterId: string) => {
    setBookmarkedChapters((prev) => {
      const next = prev.includes(chapterId) ? prev.filter((id) => id !== chapterId) : [...prev, chapterId];
      try {
        localStorage.setItem('civzero_holy_bookmarks', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-16 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div
        className={`p-5 rounded-2xl border transition-colors shadow-xl ${
          nightVision
            ? 'bg-[#150303] border-red-950 text-red-100'
            : 'bg-gradient-to-br from-[#0c121d] via-[#101726] to-[#161f33] border-amber-500/30 text-zinc-100'
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-400">
            <Scroll className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-mono tracking-tight flex items-center gap-2">
              <span>HOLY BOOKS &amp; SACRED WISDOM</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                100% OFFLINE
              </span>
            </h2>
            <p className="text-xs text-zinc-400 font-mono">
              Foundational Moral Laws, Sacred Covenants, Spiritual Fortitude &amp; Civilizational Ethics
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-300 leading-relaxed font-sans mt-2">
          When rebuilding civilization, physical engineering sustains the biological body, but moral law, sacred wisdom, and compassionate ethics sustain the human soul. This air-gapped canon preserves humanity’s most enduring scriptures across millennia.
        </p>

        {/* Search Bar */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all holy books for verses, themes (e.g. 'justice', 'charity', 'covenant', 'peace')..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-zinc-700/80 text-xs font-mono text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Search Results Display (if active) */}
      {searchQuery.trim().length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
            <span>SEARCH RESULTS ACROSS ALL TRADITIONS</span>
            <span>{searchResults.length} verses &amp; chapters matched</span>
          </div>

          {searchResults.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 text-zinc-500 font-mono text-xs">
              No matching scripture passages found for &quot;{searchQuery}&quot;. Try terms like &quot;mercy&quot;, &quot;commandment&quot;, or &quot;duty&quot;.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {searchResults.map(({ book, chapter, matchedVerse }, idx) => (
                <div
                  key={`${book.id}-${chapter.id}-${idx}`}
                  onClick={() => {
                    setSelectedBookId(book.id);
                    setActiveChapter(chapter);
                  }}
                  className="p-4 rounded-xl bg-[#0d121c] border border-zinc-800 hover:border-amber-500/50 cursor-pointer transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1.5 font-bold" style={{ color: book.color }}>
                      {renderBookIcon(book.iconName, 'w-4 h-4')}
                      <span>{book.title}</span>
                    </span>
                    <span className="text-zinc-500">{chapter.reference}</span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-200 group-hover:text-amber-400 transition-colors">
                    {chapter.title}
                  </h4>
                  {matchedVerse && (
                    <p className="text-xs text-zinc-400 italic line-clamp-2 bg-black/30 p-2 rounded border border-zinc-800/60">
                      <strong className="text-amber-400 not-italic mr-1">{matchedVerse.num}</strong>
                      &ldquo;{matchedVerse.text}&rdquo;
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Main Tradition Navigation Chips / Grid */}
      {searchQuery.trim().length === 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {HOLY_BOOKS_CANON.map((book) => {
              const isSelected = selectedBookId === book.id;
              return (
                <button
                  key={book.id}
                  onClick={() => {
                    setSelectedBookId(book.id);
                    setActiveChapter(null);
                    stopSpeaking();
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono flex items-center gap-2 flex-shrink-0 transition-all border ${
                    isSelected
                      ? nightVision
                        ? 'bg-red-950 border-red-500 text-white shadow-lg'
                        : 'bg-zinc-900 border-amber-500 text-white shadow-lg'
                      : 'bg-[#0d1117] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className={isSelected ? 'text-amber-400' : 'text-zinc-400'}>
                    {renderBookIcon(book.iconName, 'w-4 h-4')}
                  </div>
                  <span className="font-bold">{book.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Book Overview Card */}
          <div
            className={`p-5 rounded-2xl border transition-all ${
              nightVision
                ? 'bg-[#100303] border-red-950'
                : 'bg-[#0b1018] border-zinc-800'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/80">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  {renderBookIcon(selectedBook.iconName, 'w-6 h-6')}
                </div>
                <div>
                  <h3 className="text-base font-bold font-mono tracking-tight text-zinc-100">
                    {selectedBook.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {selectedBook.tradition} • {selectedBook.era}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-black/40 border border-zinc-800 text-zinc-400 self-start sm:self-auto">
                {selectedBook.languageOrigin}
              </span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-sans my-3">
              {selectedBook.overview}
            </p>

            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                Foundational Civilizational Tenets:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedBook.coreEthicalTenets.map((tenet, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    • {tenet}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Chapters and Passages Accordion / Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Core Canonical Passages &amp; Covenants ({selectedBook.chapters.length})</span>
            </h4>

            <div className="space-y-3">
              {selectedBook.chapters.map((chapter) => {
                const isOpen = activeChapter?.id === chapter.id;
                const isBookmarked = bookmarkedChapters.includes(chapter.id);

                return (
                  <div
                    key={chapter.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen
                        ? nightVision
                          ? 'bg-[#180303] border-red-700/80 shadow-lg'
                          : 'bg-[#0d131f] border-amber-500/60 shadow-xl'
                        : 'bg-[#0a0e16] border-zinc-800/80 hover:border-zinc-700'
                    }`}
                  >
                    {/* Chapter Header Bar */}
                    <div
                      onClick={() => {
                        setActiveChapter(isOpen ? null : chapter);
                        stopSpeaking();
                      }}
                      className="p-4 flex items-center justify-between cursor-pointer select-none"
                    >
                      <div className="space-y-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-amber-400">
                            {chapter.reference}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500">•</span>
                          <span className="text-[10px] font-mono text-zinc-400 truncate">
                            {chapter.theme}
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-zinc-100">{chapter.title}</h5>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(chapter.id);
                          }}
                          className={`p-1.5 rounded-lg border ${
                            isBookmarked
                              ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                          }`}
                          title="Bookmark this chapter"
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                        </button>
                        <ChevronRight
                          className={`w-4 h-4 text-zinc-400 transition-transform ${
                            isOpen ? 'rotate-90 text-amber-400' : ''
                          }`}
                        />
                      </div>
                    </div>

                    {/* Expanded Chapter Content */}
                    {isOpen && (
                      <div className="p-4 sm:p-6 pt-0 border-t border-zinc-800/60 space-y-4 animate-fadeIn">
                        {/* Audio Narration Bar */}
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-zinc-800">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                const fullText = `${chapter.title}. ${chapter.summary}. ${chapter.verses
                                  .map((v) => `${v.num}: ${v.text}`)
                                  .join(' ')}`;
                                handleSpeak(fullText);
                              }}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-colors ${
                                isSpeaking
                                  ? 'bg-red-950 border-red-500 text-red-200 animate-pulse'
                                  : 'bg-amber-500 hover:bg-amber-400 text-black border-amber-400 shadow-sm'
                              }`}
                            >
                              {isSpeaking ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                              <span>{isSpeaking ? 'Pause Audio' : 'Listen Narration'}</span>
                            </button>

                            {isSpeaking && (
                              <button
                                onClick={stopSpeaking}
                                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                                title="Stop Narration"
                              >
                                <Square className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          {/* Male / Female Voice Selector Pill */}
                          <div className="flex items-center gap-1 bg-zinc-900/90 p-1 rounded-lg border border-zinc-800">
                            <button
                              onClick={() => setVoiceGender('female')}
                              title="Female voice narration"
                              className={`px-2 py-0.5 rounded text-xs font-bold font-mono transition-colors ${
                                voiceGender === 'female'
                                  ? 'bg-amber-500 text-black shadow-sm'
                                  : 'text-zinc-400 hover:text-zinc-200'
                              }`}
                            >
                              ♀
                            </button>
                            <button
                              onClick={() => setVoiceGender('male')}
                              title="Male voice narration"
                              className={`px-2 py-0.5 rounded text-xs font-bold font-mono transition-colors ${
                                voiceGender === 'male'
                                  ? 'bg-amber-500 text-black shadow-sm'
                                  : 'text-zinc-400 hover:text-zinc-200'
                              }`}
                            >
                              ♂
                            </button>
                          </div>
                        </div>

                        {/* Chapter Summary */}
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-relaxed font-sans">
                          <strong>Core Insight:</strong> {chapter.summary}
                        </div>

                        {/* Scripture Verses */}
                        <div className="space-y-3 font-serif leading-relaxed text-zinc-200 text-sm sm:text-base">
                          {chapter.verses.map((verse) => (
                            <div
                              key={verse.num}
                              className="group p-2 rounded-lg hover:bg-zinc-900/40 transition-colors flex items-start gap-3"
                            >
                              <span className="text-xs font-mono font-bold text-amber-400/80 flex-shrink-0 pt-0.5 select-none min-w-[50px]">
                                {verse.num}
                              </span>
                              <div className="flex-1 space-y-1">
                                <p className="text-zinc-100">{verse.text}</p>
                              </div>
                              <button
                                onClick={() => handleCopy(`${verse.num}: ${verse.text}`, verse.num)}
                                className="opacity-0 group-hover:opacity-100 p-1 rounded text-zinc-500 hover:text-zinc-300 transition-opacity"
                                title="Copy verse"
                              >
                                {copiedId === verse.num ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Civilizational & Societal Recovery Context */}
                        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-1.5 font-mono text-xs">
                          <span className="text-sky-400 font-bold flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5" />
                            CIVILIZATIONAL REBUILDING CONTEXT:
                          </span>
                          <p className="text-zinc-400 leading-relaxed">
                            {chapter.civilizationalContext}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
