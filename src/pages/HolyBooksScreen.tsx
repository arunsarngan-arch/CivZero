import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  BookMarked,
  Search,
  Scroll,
  Play,
  Pause,
  Square,
  Copy,
  Check,
  Bookmark,
  ChevronRight,
  ArrowLeft,
  Sun,
  Compass,
  Wind,
  Flame,
  Scale,
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';
import { HOLY_BOOKS_CANON, HolyBook, ScriptureChapter } from '../data/holyBooksData';
import {
  BIBLE_BOOKS_MANIFEST,
  BIBLE_VERSIONS,
  BibleBookMeta,
  BibleBookPayload,
  fetchBibleBook,
  VerseItem
} from '../data/bibleManifest';
import { getBestAmericanVoices, humanizeTextForSpeech } from '../utils/speechUtils';

const renderBookIcon = (name: string, className: string = 'w-5 h-5') => {
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

const renderTraditionWatermark = (id: string) => {
  switch (id) {
    case 'holy-bible':
      // Latin Christian Cross
      return (
        <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 2h6v6h6v4h-6v10H9V12H3V8h6V2z" />
        </svg>
      );
    case 'holy-quran':
      // Star and Crescent
      return (
        <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9c2.8 0 5.3-1.28 6.95-3.3-3.6.4-7.05-2.2-7.05-5.7 0-2.8 1.8-5.2 4.45-6.2C13.9 2.3 12.5 2 11 2zm6.5 4l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3.9-1.8z" />
        </svg>
      );
    case 'bhagavad-gita':
      // Sacred Hindu Om / Aum (ॐ)
      return (
        <span className="text-6xl sm:text-7xl font-serif font-black select-none leading-none pr-1">
          ॐ
        </span>
      );
    case 'the-dhammapada':
      // Buddhist Dharmachakra (Wheel of Dharma)
      return (
        <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
          <line x1="12" y1="2" x2="12" y2="9" />
          <line x1="12" y1="15" x2="12" y2="22" />
          <line x1="2" y1="12" x2="9" y2="12" />
          <line x1="15" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="4.93" x2="9.88" y2="9.88" />
          <line x1="14.12" y1="14.12" x2="19.07" y2="19.07" />
          <line x1="19.07" y1="4.93" x2="14.12" y2="9.88" />
          <line x1="9.88" y1="14.12" x2="4.93" y2="19.07" />
        </svg>
      );
    case 'tao-te-ching':
      // Taoist Yin-Yang (Taijitu)
      return (
        <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 0 1 0-16 4 4 0 0 1 0 8 4 4 0 0 0 0 8zm0-11a1.5 1.5 0 1 0 1.5-1.5A1.5 1.5 0 0 0 12 9zm0 6a1.5 1.5 0 1 0-1.5 1.5A1.5 1.5 0 0 0 12 15z" />
        </svg>
      );
    case 'guru-granth-sahib':
      // Sikh Khanda (☬)
      return (
        <span className="text-6xl sm:text-7xl font-serif font-black select-none leading-none pr-1">
          ☬
        </span>
      );
    case 'universal-golden-rule':
      // Scales of Justice / Universal Law
      return (
        <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v18M6 8l6-2 6 2M6 8l-3 7h6l-3-7zM18 8l-3 7h6l-3-7zM4 21h16" />
        </svg>
      );
    default:
      return null;
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
  // Navigation Hierarchy States
  // 1. Root: Selected Tradition (null = show 7 boxes in 4x2 grid)
  const [selectedTraditionId, setSelectedTraditionId] = useState<string | null>(null);

  // 2. Bible Hierarchy
  const [bibleVersion, setBibleVersion] = useState<'kjv' | 'geneva' | null>(null);
  const [bibleTestament, setBibleTestament] = useState<'OT' | 'NT' | null>(null);
  const [selectedBibleBook, setSelectedBibleBook] = useState<BibleBookMeta | null>(null);
  const [selectedBibleChapter, setSelectedBibleChapter] = useState<number | null>(null);
  const [bibleBookData, setBibleBookData] = useState<BibleBookPayload | null>(null);
  const [isLoadingBook, setIsLoadingBook] = useState<boolean>(false);

  // 3. Other Holy Books Hierarchy
  const [activeGenericChapter, setActiveGenericChapter] = useState<ScriptureChapter | null>(null);

  // Search & Copy & Bookmark States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Speech Synthesis
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [voiceGender, setVoiceGender] = useState<'female' | 'male'>('female');

  // Bookmarks in localStorage
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('civzero_holy_bookmarks');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  // Whenever user selects a Bible Book and Version, fetch book payload
  useEffect(() => {
    if (selectedBibleBook && bibleVersion) {
      let isCurrent = true;
      setIsLoadingBook(true);
      fetchBibleBook(bibleVersion, selectedBibleBook.id).then((data) => {
        if (isCurrent) {
          setBibleBookData(data);
          setIsLoadingBook(false);
        }
      });
      return () => {
        isCurrent = false;
      };
    } else {
      setBibleBookData(null);
    }
  }, [selectedBibleBook, bibleVersion]);

  // Audio Speech Handler
  const handleSpeak = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const spokenText = humanizeTextForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(spokenText);
    const { female, male } = getBestAmericanVoices();

    const selectedVoice = voiceGender === 'female' ? female : male;
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.rate = voiceGender === 'female' ? 0.94 : 0.92;
    utterance.pitch = voiceGender === 'female' ? 1.0 : 0.96;

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

  const toggleBookmark = (id: string) => {
    setBookmarkedItems((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('civzero_holy_bookmarks', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Reset to root or previous level
  const resetToRoot = () => {
    stopSpeaking();
    setSelectedTraditionId(null);
    setBibleVersion(null);
    setBibleTestament(null);
    setSelectedBibleBook(null);
    setSelectedBibleChapter(null);
    setActiveGenericChapter(null);
  };

  // Current Holy Book definition from canon
  const currentTradition = useMemo(() => {
    return HOLY_BOOKS_CANON.find((b) => b.id === selectedTraditionId) || null;
  }, [selectedTraditionId]);

  // Filtered books for Bible testament
  const testamentBooks = useMemo(() => {
    if (!bibleTestament) return [];
    return BIBLE_BOOKS_MANIFEST.filter((b) => b.testament === bibleTestament);
  }, [bibleTestament]);

  // Verses for selected Bible chapter
  const currentChapterVerses: VerseItem[] = useMemo(() => {
    if (!bibleBookData || selectedBibleChapter === null) return [];
    return bibleBookData.chapters[selectedBibleChapter.toString()] || [];
  }, [bibleBookData, selectedBibleChapter]);

  // Search Results across all scriptures
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results: {
      traditionTitle: string;
      chapterTitle: string;
      reference: string;
      matchedText: string;
      onSelect: () => void;
    }[] = [];

    // Search through Holy Books Canon
    HOLY_BOOKS_CANON.forEach((book) => {
      book.chapters.forEach((ch) => {
        const titleMatch = ch.title.toLowerCase().includes(q) || ch.theme.toLowerCase().includes(q);
        const verseMatch = ch.verses.find((v) => v.text.toLowerCase().includes(q) || v.num.toLowerCase().includes(q));

        if (titleMatch || verseMatch) {
          results.push({
            traditionTitle: book.title,
            chapterTitle: ch.title,
            reference: ch.reference,
            matchedText: verseMatch ? `${verseMatch.num}: "${verseMatch.text}"` : ch.summary,
            onSelect: () => {
              setSelectedTraditionId(book.id);
              setActiveGenericChapter(ch);
              setSearchQuery('');
            }
          });
        }
      });
    });

    // Also match Bible book names
    BIBLE_BOOKS_MANIFEST.forEach((b) => {
      if (b.name.toLowerCase().includes(q)) {
        results.push({
          traditionTitle: 'The Holy Bible',
          chapterTitle: b.name,
          reference: `${b.testament === 'OT' ? 'Old Testament' : 'New Testament'} • ${b.chapters} Chapters`,
          matchedText: `Complete 66-book canon: ${b.name} (${b.chapters} chapters available in KJV and Geneva versions).`,
          onSelect: () => {
            setSelectedTraditionId('holy-bible');
            setBibleVersion('kjv');
            setBibleTestament(b.testament);
            setSelectedBibleBook(b);
            setSelectedBibleChapter(1);
            setSearchQuery('');
          }
        });
      }
    });

    return results;
  }, [searchQuery]);

  return (
    <div className="space-y-6 animate-fadeIn pb-16 max-w-4xl mx-auto">
      {/* 1. TOP HEADER DESCRIPTION & SEARCH BAR (Retained as requested) */}
      <div
        className={`p-5 rounded-2xl border transition-colors shadow-xl ${
          nightVision
            ? 'bg-[#150303] border-red-950 text-red-100'
            : 'bg-gradient-to-br from-[#0c121d] via-[#101726] to-[#161f33] border-amber-500/30 text-zinc-100'
        }`}
      >
        <div className="flex items-start gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-400 shrink-0 mt-0.5">
            <Scroll className="w-6 h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base sm:text-lg font-bold font-mono tracking-tight text-zinc-100">
                HOLY BOOKS &amp; SACRED WISDOM
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-1">
              Foundational Moral Laws, Sacred Covenants, Spiritual Fortitude &amp; Civilizational Ethics
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-300 leading-relaxed font-sans mt-2">
          When rebuilding civilization, physical engineering sustains the biological body, but moral law, sacred wisdom, and compassionate ethics sustain the human soul. This air-gapped canon preserves humanity’s most enduring scriptures across millennia.
        </p>

        {/* Search Bar at the bottom of description */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all holy books for verses, chapters, themes..."
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

      {/* SEARCH RESULTS VIEW (if search bar has text) */}
      {searchQuery.trim().length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
            <span>SEARCH RESULTS ACROSS ALL TRADITIONS</span>
            <span>{searchResults.length} matches found</span>
          </div>

          {searchResults.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 text-zinc-500 font-mono text-xs">
              No matching scripture passages found for &quot;{searchQuery}&quot;. Try terms like &quot;Genesis&quot;, &quot;Psalms&quot;, &quot;mercy&quot;, or &quot;covenant&quot;.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {searchResults.map((res, idx) => (
                <div
                  key={idx}
                  onClick={res.onSelect}
                  className="p-4 rounded-xl bg-[#0d121c] border border-zinc-800 hover:border-amber-500/50 cursor-pointer transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-amber-400">{res.traditionTitle}</span>
                    <span className="text-zinc-500 text-[11px]">{res.reference}</span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                    {res.chapterTitle}
                  </h4>
                  <p className="text-xs text-zinc-300 italic line-clamp-2 bg-black/30 p-2 rounded border border-zinc-800/60">
                    {res.matchedText}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MAIN NAVIGATION HIERARCHY (When search is inactive) */}
      {!searchQuery.trim() && (
        <>
          {/* ======================================================== */}
          {/* STEP 2: 7 ROUND-CORNERED BOXES IN 4x2 GRID STRUCTURE     */}
          {/* ======================================================== */}
          {selectedTraditionId === null && (
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 px-1 flex items-center justify-between">
                <span>Select Sacred Wisdom Tradition:</span>
                <span className="text-[11px] text-zinc-500">7 Canonical Traditions</span>
              </div>

              {/* 4 Rows, 2 Columns Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { id: 'holy-bible', title: 'Holy Bible', color: '#38bdf8' },
                  { id: 'holy-quran', title: 'Holy Quran', color: '#10b981' },
                  { id: 'bhagavad-gita', title: 'Bhagavad Gita', color: '#f59e0b' },
                  { id: 'the-dhammapada', title: 'Dhammapada', color: '#eab308' },
                  { id: 'tao-te-ching', title: 'Tao Te Ching', color: '#06b6d4' },
                  { id: 'guru-granth-sahib', title: 'Guru Granth Sahib', color: '#8b5cf6' },
                  { id: 'universal-golden-rule', title: 'Universal Moral Law Matrix', color: '#ec4899' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedTraditionId(item.id);
                      setBibleVersion(null);
                      setBibleTestament(null);
                      setSelectedBibleBook(null);
                      setSelectedBibleChapter(null);
                      setActiveGenericChapter(null);
                      stopSpeaking();
                    }}
                    className={`relative overflow-hidden p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 group hover:scale-[1.02] shadow-md flex items-center min-h-[96px] sm:min-h-[110px] ${
                      nightVision
                        ? 'bg-[#120303] border-red-900/60 hover:border-red-500 text-red-100 hover:bg-red-950/40'
                        : 'bg-[#0d121c] border-zinc-800 hover:border-amber-400 text-zinc-100 hover:bg-[#121926]'
                    }`}
                  >
                    {/* Light-colored Background Sacred Sign / Watermark */}
                    <div
                      className="absolute -right-1 -bottom-1 sm:right-1 sm:bottom-0 pointer-events-none select-none opacity-15 group-hover:opacity-25 transition-all duration-300 transform group-hover:scale-105"
                      style={{ color: item.color }}
                    >
                      {renderTraditionWatermark(item.id)}
                    </div>

                    {/* Full Book Name (Whole name clearly visible with zero truncation) */}
                    <span className="relative z-10 font-mono font-bold text-sm sm:text-base leading-snug tracking-tight text-zinc-100 group-hover:text-amber-300 transition-colors pr-2">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* THE HOLY BIBLE FLOW (Steps 3, 4, 5, 6, 7)                */}
          {/* ======================================================== */}
          {selectedTraditionId === 'holy-bible' && (
            <div className="space-y-4">
              {/* Breadcrumb Navigation Bar */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-zinc-800 text-xs font-mono">
                <button
                  onClick={() => {
                    if (selectedBibleChapter !== null) {
                      setSelectedBibleChapter(null);
                      stopSpeaking();
                    } else if (selectedBibleBook !== null) {
                      setSelectedBibleBook(null);
                    } else if (bibleTestament !== null) {
                      setBibleTestament(null);
                    } else if (bibleVersion !== null) {
                      setBibleVersion(null);
                    } else {
                      resetToRoot();
                    }
                  }}
                  className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>
                    {selectedBibleChapter !== null
                      ? 'Back to Chapters'
                      : selectedBibleBook !== null
                      ? 'Back to Books'
                      : bibleTestament !== null
                      ? 'Back to Testaments'
                      : bibleVersion !== null
                      ? 'Back to Versions'
                      : 'Back to Traditions'}
                  </span>
                </button>

                {/* Path indicator */}
                <div className="flex items-center gap-1 text-[11px] text-zinc-400 truncate max-w-[60%] justify-end">
                  <span className="text-zinc-500 cursor-pointer hover:text-zinc-300" onClick={resetToRoot}>Bible</span>
                  {bibleVersion && <span>&gt; {bibleVersion.toUpperCase()}</span>}
                  {bibleTestament && <span>&gt; {bibleTestament === 'OT' ? 'Old' : 'New'}</span>}
                  {selectedBibleBook && <span className="text-zinc-200 font-bold">&gt; {selectedBibleBook.name}</span>}
                  {selectedBibleChapter && <span className="text-amber-400 font-bold">&gt; Ch {selectedBibleChapter}</span>}
                </div>
              </div>

              {/* STEP 3: 2 VERSIONS (KJV & GENEVA) IN ROUND-CORNERED BOXES */}
              {bibleVersion === null && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 px-1">
                    Select English Bible Version:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BIBLE_VERSIONS.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setBibleVersion(v.id)}
                        className={`p-6 rounded-2xl border text-left transition-all duration-200 group hover:scale-[1.01] shadow-md flex flex-col justify-between min-h-[140px] ${
                          nightVision
                            ? 'bg-[#140303] border-red-900/60 hover:border-red-500 text-red-100'
                            : 'bg-[#0d121c] border-zinc-800 hover:border-amber-400 text-zinc-100 hover:bg-[#121926]'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center justify-center whitespace-nowrap text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/30 leading-none">
                              {v.year}
                            </span>
                            <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                          </div>
                          <h3 className="font-mono font-bold text-base text-zinc-100 group-hover:text-amber-300 transition-colors">
                            {v.name}
                          </h3>
                          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                            {v.description}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/60">
                          {v.subtitle} • Complete 66 Books
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: 2 TESTAMENTS (OLD TESTAMENT & NEW TESTAMENT) IN ROUND-CORNERED BOXES */}
              {bibleVersion !== null && bibleTestament === null && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 px-1">
                    Select Testament ({bibleVersion === 'kjv' ? 'King James Version 1611' : 'Geneva Bible 1599'}):
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        id: 'OT' as const,
                        title: 'Old Testament',
                        booksCount: 39,
                        era: '1500 BCE – 400 BCE',
                        description: 'Law (Torah), Historical Chronicles, Wisdom & Poetry, and the Major & Minor Prophets.'
                      },
                      {
                        id: 'NT' as const,
                        title: 'New Testament',
                        booksCount: 27,
                        era: '50 CE – 100 CE',
                        description: 'The Four Gospels, Apostolic History (Acts), Epistles of Paul & Apostles, and Revelation.'
                      }
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setBibleTestament(t.id)}
                        className={`p-6 rounded-2xl border text-left transition-all duration-200 group hover:scale-[1.01] shadow-md flex flex-col justify-between min-h-[140px] ${
                          nightVision
                            ? 'bg-[#140303] border-red-900/60 hover:border-red-500 text-red-100'
                            : 'bg-[#0d121c] border-zinc-800 hover:border-amber-400 text-zinc-100 hover:bg-[#121926]'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center justify-center whitespace-nowrap text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 leading-none">
                              {t.booksCount} Books
                            </span>
                            <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                          </div>
                          <h3 className="font-mono font-bold text-lg text-zinc-100 group-hover:text-amber-300 transition-colors">
                            {t.title}
                          </h3>
                          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                            {t.description}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/60">
                          {t.era}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: NORMAL LIST OF BOOKS IN SELECTED TESTAMENT */}
              {bibleVersion !== null && bibleTestament !== null && selectedBibleBook === null && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
                    <span className="uppercase tracking-wider">
                      {bibleTestament === 'OT' ? 'Old Testament' : 'New Testament'} Books ({testamentBooks.length}):
                    </span>
                    <span className="text-[11px] text-zinc-500">Tap book to select chapter</span>
                  </div>

                  {/* Clean Normal List */}
                  <div className="rounded-2xl border border-zinc-800 bg-[#0d121c] divide-y divide-zinc-800/80 overflow-hidden shadow-lg">
                    {testamentBooks.map((b) => (
                      <div
                        key={b.id}
                        onClick={() => {
                          setSelectedBibleBook(b);
                          setSelectedBibleChapter(null);
                        }}
                        className="p-3.5 sm:p-4 flex items-center justify-between hover:bg-amber-500/10 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 text-center text-xs font-mono font-bold text-zinc-500 group-hover:text-amber-400">
                            {b.index.toString().padStart(2, '0')}
                          </span>
                          <div>
                            <h4 className="text-sm font-mono font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                              {b.name}
                            </h4>
                            <span className="text-[11px] font-mono text-zinc-400">
                              {b.chapters} {b.chapters === 1 ? 'Chapter' : 'Chapters'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300 hidden sm:inline">
                            Open Book
                          </span>
                          <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 6: CHAPTER NUMBERS IN 5x5 GRID STRUCTURE (5 COLUMNS MANDATORY) */}
              {selectedBibleBook !== null && selectedBibleChapter === null && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-zinc-800 bg-[#0d121c] flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold font-mono text-zinc-100 flex items-center gap-2">
                        <span>{selectedBibleBook.name}</span>
                        <span className="text-xs font-normal text-amber-400">
                          ({selectedBibleBook.chapters} {selectedBibleBook.chapters === 1 ? 'Chapter' : 'Chapters'})
                        </span>
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono">
                        Select a chapter to read full verses:
                      </p>
                    </div>

                    <span className="inline-flex items-center justify-center whitespace-nowrap text-xs font-mono px-2.5 py-1 rounded-lg bg-black/40 border border-zinc-800 text-zinc-300 leading-none">
                      5-Column Chapter Grid
                    </span>
                  </div>

                  {/* 5-Column Grid with Flexible Rows (e.g. 30x5 for Psalms) */}
                  <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
                    {Array.from({ length: selectedBibleBook.chapters }, (_, i) => i + 1).map((chNum) => (
                      <button
                        key={chNum}
                        onClick={() => setSelectedBibleChapter(chNum)}
                        className={`p-3.5 sm:p-4 rounded-xl border text-center font-mono font-bold text-sm sm:text-base transition-all duration-150 hover:scale-[1.03] shadow-sm ${
                          nightVision
                            ? 'bg-[#160303] border-red-900/60 hover:border-red-500 text-red-100 hover:bg-red-900/40'
                            : 'bg-[#0d121c] border-zinc-800 hover:border-amber-400 text-zinc-100 hover:bg-amber-500/15 hover:text-amber-300'
                        }`}
                      >
                        {chNum}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 7: VERSES OF THE PARTICULAR SELECTED CHAPTER */}
              {selectedBibleBook !== null && selectedBibleChapter !== null && (
                <div className="space-y-4">
                  {/* Chapter Reading Header & Audio Controls */}
                  <div className={`p-4 sm:p-5 rounded-2xl border shadow-lg ${
                    nightVision ? 'bg-[#150303] border-red-900/80' : 'bg-[#0d121c] border-zinc-800'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800/80">
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                          {bibleVersion === 'kjv' ? 'King James Version (1611)' : 'Geneva Bible (1599)'}
                        </span>
                        <h2 className="text-xl font-bold font-mono text-zinc-100">
                          {selectedBibleBook.name} — Chapter {selectedBibleChapter}
                        </h2>
                      </div>

                      {/* American English Narration & Playback Controls */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          onClick={() => {
                            const fullText = `${selectedBibleBook.name} chapter ${selectedBibleChapter}. ` +
                              currentChapterVerses.map(v => `Verse ${v.verse}: ${v.text}`).join(' ');
                            handleSpeak(fullText);
                          }}
                          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-colors ${
                            isSpeaking
                              ? 'bg-red-950 border-red-500 text-red-200 animate-pulse'
                              : 'bg-amber-500 hover:bg-amber-400 text-black border-amber-400 shadow-sm'
                          }`}
                        >
                          {isSpeaking ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          <span>{isSpeaking ? 'Pause Audio' : 'Listen Chapter'}</span>
                        </button>

                        {isSpeaking && (
                          <button
                            onClick={stopSpeaking}
                            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                            title="Stop Narration"
                          >
                            <Square className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {/* Male / Female Voice Selector Pill */}
                        <div className="flex items-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800">
                          <button
                            onClick={() => setVoiceGender('female')}
                            title="Female American Voice"
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition-colors ${
                              voiceGender === 'female' ? 'bg-amber-500 text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
                            }`}
                          >
                            ♀ US
                          </button>
                          <button
                            onClick={() => setVoiceGender('male')}
                            title="Male American Voice"
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition-colors ${
                              voiceGender === 'male' ? 'bg-amber-500 text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
                            }`}
                          >
                            ♂ US
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Chapter Chapter Navigation bar */}
                    <div className="flex items-center justify-between pt-3 text-xs font-mono">
                      <button
                        disabled={selectedBibleChapter <= 1}
                        onClick={() => {
                          setSelectedBibleChapter(prev => (prev && prev > 1 ? prev - 1 : prev));
                          stopSpeaking();
                        }}
                        className="px-3 py-1.5 rounded-lg border border-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-800 text-zinc-300"
                      >
                        ← Prev Chapter
                      </button>

                      <span className="text-zinc-400">
                        {currentChapterVerses.length} Verses Total
                      </span>

                      <button
                        disabled={selectedBibleChapter >= selectedBibleBook.chapters}
                        onClick={() => {
                          setSelectedBibleChapter(prev => (prev && prev < selectedBibleBook.chapters ? prev + 1 : prev));
                          stopSpeaking();
                        }}
                        className="px-3 py-1.5 rounded-lg border border-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-800 text-zinc-300"
                      >
                        Next Chapter →
                      </button>
                    </div>
                  </div>

                  {/* Verses Container */}
                  {isLoadingBook ? (
                    <div className="p-12 text-center rounded-2xl border border-zinc-800 bg-[#0d121c] font-mono text-xs text-zinc-400">
                      Loading verses from offline archive...
                    </div>
                  ) : currentChapterVerses.length === 0 ? (
                    <div className="p-12 text-center rounded-2xl border border-zinc-800 bg-[#0d121c] font-mono text-xs text-zinc-400">
                      Chapter content loading or empty.
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {currentChapterVerses.map((v) => {
                        const verseUniqueId = `${selectedBibleBook.id}-${selectedBibleChapter}-${v.verse}`;
                        const isBookmarked = bookmarkedItems.includes(verseUniqueId);

                        return (
                          <div
                            key={v.verse}
                            className={`p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 group ${
                              nightVision
                                ? 'bg-[#120303] border-red-950 hover:border-red-900/80 text-red-100'
                                : 'bg-[#0d121c] border-zinc-800/80 hover:border-zinc-700 text-zinc-100'
                            }`}
                          >
                            {/* Verse Number Badge */}
                            <span className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {v.verse}
                            </span>

                            {/* Verse Text */}
                            <div className="flex-1 space-y-1">
                              <p className={`leading-relaxed font-sans ${
                                fontSize === 'huge' ? 'text-lg' : fontSize === 'large' ? 'text-base' : 'text-sm'
                              }`}>
                                {v.text}
                              </p>
                            </div>

                            {/* Actions: Copy & Bookmark */}
                            <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => handleCopy(`${selectedBibleBook.name} ${selectedBibleChapter}:${v.verse} — "${v.text}"`, verseUniqueId)}
                                className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white"
                                title="Copy verse"
                              >
                                {copiedId === verseUniqueId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                              <button
                                onClick={() => toggleBookmark(verseUniqueId)}
                                className={`p-1.5 rounded-lg hover:bg-zinc-800 ${
                                  isBookmarked ? 'text-amber-400' : 'text-zinc-500 hover:text-zinc-300'
                                }`}
                                title="Bookmark verse"
                              >
                                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ======================================================== */}
          {/* OTHER HOLY BOOKS TRADITIONS (Quran, Gita, etc.)          */}
          {/* ======================================================== */}
          {selectedTraditionId !== null && selectedTraditionId !== 'holy-bible' && currentTradition && (
            <div className="space-y-4">
              {/* Breadcrumb Navigation Bar */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-zinc-800 text-xs font-mono">
                <button
                  onClick={() => {
                    if (activeGenericChapter !== null) {
                      setActiveGenericChapter(null);
                      stopSpeaking();
                    } else {
                      resetToRoot();
                    }
                  }}
                  className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{activeGenericChapter !== null ? 'Back to Chapters' : 'Back to Traditions'}</span>
                </button>

                <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                  <span className="text-zinc-500 cursor-pointer hover:text-zinc-300" onClick={resetToRoot}>Holy Books</span>
                  <span>&gt; {currentTradition.title}</span>
                  {activeGenericChapter && <span className="text-amber-400 font-bold">&gt; {activeGenericChapter.title}</span>}
                </div>
              </div>

              {/* Tradition Overview Card (when chapter is not active) */}
              {activeGenericChapter === null && (
                <div className={`p-5 rounded-2xl border transition-all ${
                  nightVision ? 'bg-[#100303] border-red-950' : 'bg-[#0b1018] border-zinc-800'
                }`}>
                  <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      {renderBookIcon(currentTradition.iconName, 'w-6 h-6')}
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-mono tracking-tight text-zinc-100">
                        {currentTradition.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono">
                        {currentTradition.tradition} • {currentTradition.era}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans my-3">
                    {currentTradition.overview}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      Foundational Principles:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentTradition.coreEthicalTenets.map((tenet, idx) => (
                        <span key={idx} className="inline-flex items-center justify-center whitespace-nowrap text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 leading-none">
                          • {tenet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Chapters List (when no chapter is active) */}
              {activeGenericChapter === null && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
                    <span className="uppercase tracking-wider">
                      Canonical Chapters &amp; Cantos ({currentTradition.chapters.length}):
                    </span>
                    <span className="text-[11px] text-zinc-500">Tap to read full chapter &amp; listen</span>
                  </div>

                  {/* Clean Normal List for Chapters / Vaggas */}
                  <div className="rounded-2xl border border-zinc-800 bg-[#0d121c] divide-y divide-zinc-800/80 overflow-hidden shadow-lg">
                    {currentTradition.chapters.map((ch, idx) => (
                      <div
                        key={ch.id}
                        onClick={() => {
                          setActiveGenericChapter(ch);
                          stopSpeaking();
                        }}
                        className="p-3.5 sm:p-4 flex items-center justify-between hover:bg-amber-500/10 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 text-center text-xs font-mono font-bold text-zinc-500 group-hover:text-amber-400">
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                          <div>
                            <h4 className="text-sm font-mono font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                              {ch.title}
                            </h4>
                            <span className="text-[11px] font-mono text-zinc-400">
                              {ch.reference} • {ch.theme}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300 hidden sm:inline">
                            Read Verses
                          </span>
                          <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Active Chapter Reading View */}
              {activeGenericChapter !== null && (
                <div className="space-y-4">
                  {/* Chapter Header Card & Audio Player */}
                  <div className={`p-4 sm:p-5 rounded-2xl border shadow-lg ${
                    nightVision ? 'bg-[#150303] border-red-900/80' : 'bg-[#0d121c] border-zinc-800'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800/80">
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                          {activeGenericChapter.reference}
                        </span>
                        <h2 className="text-xl font-bold font-mono text-zinc-100">
                          {activeGenericChapter.title}
                        </h2>
                        <p className="text-xs text-zinc-400 font-mono mt-0.5">
                          {activeGenericChapter.theme}
                        </p>
                      </div>

                      {/* American English Audio Player */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          onClick={() => {
                            const fullText = `${activeGenericChapter.title}. ${activeGenericChapter.summary}. ` +
                              activeGenericChapter.verses.map(v => `${v.num}: ${v.text}`).join(' ');
                            handleSpeak(fullText);
                          }}
                          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-colors ${
                            isSpeaking
                              ? 'bg-red-950 border-red-500 text-red-200 animate-pulse'
                              : 'bg-amber-500 hover:bg-amber-400 text-black border-amber-400 shadow-sm'
                          }`}
                        >
                          {isSpeaking ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          <span>{isSpeaking ? 'Pause Audio' : 'Listen Chapter'}</span>
                        </button>

                        {isSpeaking && (
                          <button
                            onClick={stopSpeaking}
                            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                            title="Stop Narration"
                          >
                            <Square className="w-3.5 h-3.5" />
                          </button>
                        )}

                        <div className="flex items-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800">
                          <button
                            onClick={() => setVoiceGender('female')}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition-colors ${
                              voiceGender === 'female' ? 'bg-amber-500 text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
                            }`}
                          >
                            ♀ US
                          </button>
                          <button
                            onClick={() => setVoiceGender('male')}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition-colors ${
                              voiceGender === 'male' ? 'bg-amber-500 text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
                            }`}
                          >
                            ♂ US
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-300 font-sans leading-relaxed pt-3">
                      {activeGenericChapter.summary}
                    </p>
                  </div>

                  {/* Verses Container */}
                  <div className="space-y-2.5">
                    {activeGenericChapter.verses.map((v, idx) => {
                      const verseUniqueId = `${activeGenericChapter.id}-${idx}`;
                      const isBookmarked = bookmarkedItems.includes(verseUniqueId);

                      return (
                        <div
                          key={idx}
                          className={`p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 group ${
                            nightVision
                              ? 'bg-[#120303] border-red-950 hover:border-red-900/80 text-red-100'
                              : 'bg-[#0d121c] border-zinc-800/80 hover:border-zinc-700 text-zinc-100'
                          }`}
                        >
                          <span className="px-2 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                            {v.num}
                          </span>

                          <div className="flex-1 space-y-1">
                            <p className={`leading-relaxed font-sans ${
                              fontSize === 'huge' ? 'text-lg' : fontSize === 'large' ? 'text-base' : 'text-sm'
                            }`}>
                              {v.text}
                            </p>
                          </div>

                          <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleCopy(`${activeGenericChapter.title} (${v.num}) — "${v.text}"`, verseUniqueId)}
                              className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white"
                              title="Copy verse"
                            >
                              {copiedId === verseUniqueId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              onClick={() => toggleBookmark(verseUniqueId)}
                              className={`p-1.5 rounded-lg hover:bg-zinc-800 ${
                                isBookmarked ? 'text-amber-400' : 'text-zinc-500 hover:text-zinc-300'
                              }`}
                              title="Bookmark verse"
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
