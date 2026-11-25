import React, { useState, useEffect, useMemo } from 'react';
import {
  BookText,
  Plus,
  Trash2,
  Pin,
  PinOff,
  Search,
  Volume2,
  VolumeX,
  Share2,
  Download,
  Upload,
  Calendar,
  Clock,
  CheckSquare,
  List,
  Sparkles,
  Smile,
  Tag,
  Save,
  Check,
  Edit3,
  Copy,
  ChevronRight,
  Filter
} from 'lucide-react';
import { getBestAmericanVoices, humanizeTextForSpeech } from '../../utils/speechUtils';

export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  category: 'diary' | 'notes' | 'survival';
  createdAt: string;
  updatedAt: string;
  isPinned?: boolean;
  mood?: string;
  tags?: string[];
}

const STORAGE_KEY = 'civzero_field_journal_entries_v2';
const LEGACY_STORAGE_KEY = 'civzero_field_journal_entries_v1';

const INITIAL_ENTRIES: JournalEntry[] = [];

const MOODS = ['☀️ Hopeful', '⚡ Productive', '🧭 Exploring', '🛡️ Vigilant', '🌧️ Exhausted', '🌙 Peaceful'];

interface FieldJournalToolProps {
  nightVision: boolean;
  initialNoteDraft?: { title: string; content: string } | null;
  onClearInitialNoteDraft?: () => void;
}

export const FieldJournalTool: React.FC<FieldJournalToolProps> = ({
  nightVision,
  initialNoteDraft,
  onClearInitialNoteDraft
}) => {
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      // 1. Check active storage
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: JournalEntry[] = JSON.parse(saved);
        return parsed.filter(e => !e.id.startsWith('entry-welcome-'));
      }

      // 2. Check legacy storage and migrate user entries only (strip out samples)
      const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacy) {
        const parsed: JournalEntry[] = JSON.parse(legacy);
        const userEntries = parsed.filter(e => !e.id.startsWith('entry-welcome-'));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userEntries));
        localStorage.removeItem(LEGACY_STORAGE_KEY);
        return userEntries;
      }
    } catch {
      // ignore
    }
    return INITIAL_ENTRIES;
  });

  const [activeCategory, setActiveCategory] = useState<'all' | 'diary' | 'notes' | 'survival' | 'pinned'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntryId, setSelectedEntryId] = useState<string>(() => entries[0]?.id || '');
  const [isEditing, setIsEditing] = useState(false);

  // Form states
  const [draftTitle, setDraftTitle] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [draftCategory, setDraftCategory] = useState<'diary' | 'notes' | 'survival'>('diary');
  const [draftMood, setDraftMood] = useState<string>('☀️ Hopeful');
  const [draftTags, setDraftTags] = useState('');

  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Handle incoming draft (e.g. from Dictionary or Guide)
  useEffect(() => {
    if (initialNoteDraft) {
      handleCreateNew('notes', initialNoteDraft.title, initialNoteDraft.content);
      if (onClearInitialNoteDraft) onClearInitialNoteDraft();
    }
  }, [initialNoteDraft]);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.warn('Failed to save journal to localStorage:', e);
    }
  }, [entries]);

  const selectedEntry = useMemo(() => {
    return entries.find(e => e.id === selectedEntryId) || null;
  }, [entries, selectedEntryId]);

  // Populate form when selected entry changes
  useEffect(() => {
    if (selectedEntry) {
      setDraftTitle(selectedEntry.title);
      setDraftContent(selectedEntry.content);
      setDraftCategory(selectedEntry.category);
      setDraftMood(selectedEntry.mood || '☀️ Hopeful');
      setDraftTags((selectedEntry.tags || []).join(' '));
    }
  }, [selectedEntryId]);

  const filteredEntries = useMemo(() => {
    return entries.filter(item => {
      // Category filter
      if (activeCategory === 'pinned' && !item.isPinned) return false;
      if (activeCategory !== 'all' && activeCategory !== 'pinned' && item.category !== activeCategory) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesContent = item.content.toLowerCase().includes(q);
        const matchesTags = (item.tags || []).some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesContent && !matchesTags) return false;
      }
      return true;
    }).sort((a, b) => {
      // Pinned entries first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  }, [entries, activeCategory, searchQuery]);

  const handleCreateNew = (cat: 'diary' | 'notes' | 'survival' = 'diary', initTitle = '', initContent = '') => {
    const isDiary = cat === 'diary';
    const now = new Date();
    const dateTitle = isDiary 
      ? `Diary: ${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
      : 'New Field Note';

    const defaultDiaryTemplate = isDiary
      ? `### How My Day Went:\n- \n\n### Highlights & Lessons:\n- \n\n### Plan for Tomorrow:\n- `
      : '';

    const newEntry: JournalEntry = {
      id: `entry-${Date.now()}`,
      title: initTitle || dateTitle,
      content: initContent || defaultDiaryTemplate,
      category: cat,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      isPinned: false,
      mood: isDiary ? '☀️ Hopeful' : undefined,
      tags: isDiary ? ['#diary'] : ['#notes']
    };

    setEntries(prev => [newEntry, ...prev]);
    setSelectedEntryId(newEntry.id);
    setIsEditing(true);
  };

  const handleSaveDraft = () => {
    if (!selectedEntryId) return;
    const now = new Date().toISOString();
    const parsedTags = draftTags.split(/\s+/).filter(t => t.startsWith('#') || t.length > 0).map(t => t.startsWith('#') ? t : `#${t}`);

    setEntries(prev => prev.map(item => {
      if (item.id === selectedEntryId) {
        return {
          ...item,
          title: draftTitle.trim() || 'Untitled Note',
          content: draftContent,
          category: draftCategory,
          mood: draftCategory === 'diary' ? draftMood : undefined,
          tags: parsedTags,
          updatedAt: now
        };
      }
      return item;
    }));
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    const remaining = entries.filter(e => e.id !== id);
    setEntries(remaining);
    if (selectedEntryId === id) {
      setSelectedEntryId(remaining[0]?.id || '');
    }
  };

  const handleTogglePin = (id: string) => {
    setEntries(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, isPinned: !item.isPinned };
      }
      return item;
    }));
  };

  const handleInsertText = (snippet: string) => {
    setDraftContent(prev => prev + '\n' + snippet);
  };

  const handleInsertTimestamp = () => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    handleInsertText(`**[${timeStr}]** `);
  };

  const handleCopyNote = (entry: JournalEntry) => {
    const text = `${entry.title}\n${entry.category.toUpperCase()} • ${new Date(entry.createdAt).toLocaleDateString()}\n\n${entry.content}`;
    navigator.clipboard.writeText(text);
    setCopiedId(entry.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportTextFile = (entry: JournalEntry) => {
    const text = `${entry.title}\nCategory: ${entry.category}\nDate: ${new Date(entry.createdAt).toLocaleString()}\n\n${entry.content}`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${entry.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportAllBackup = () => {
    const dataStr = JSON.stringify(entries, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `civzero_field_journal_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        if (Array.isArray(imported)) {
          setEntries(imported);
          if (imported.length > 0) setSelectedEntryId(imported[0].id);
          alert(`Successfully imported ${imported.length} journal entries!`);
        }
      } catch (err) {
        alert('Invalid journal JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const handleSpeak = (entry: JournalEntry) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanSpeech = humanizeTextForSpeech(`${entry.title}. ${entry.content}`);
    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    const voices = getBestAmericanVoices();
    if (voices.female) utterance.voice = voices.female;
    utterance.rate = 0.95;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

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
              <BookText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold font-mono tracking-tight text-white uppercase">
                  Field Journal & Survival Diary
                </h3>
              </div>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Record your daily thoughts, 'My Diary', survival logs & important knowledge memos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => handleCreateNew('diary')}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Diary Entry</span>
            </button>

            <button
              onClick={() => handleCreateNew('notes')}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-mono text-xs flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5 text-amber-400" />
              <span>New Note</span>
            </button>
          </div>
        </div>

        {/* Filter Navigation & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 mt-4 pt-3 border-t border-zinc-800">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Entries' },
              { id: 'diary', label: '📖 My Diary' },
              { id: 'notes', label: '📝 Field Notes' },
              { id: 'survival', label: '🛡️ Survival Log' },
              { id: 'pinned', label: '📌 Pinned' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[200px]">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search notes & diary..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-black/40 border border-zinc-700 text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Main Grid: Entry Sidebar + Editor/Viewer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left List of Entries */}
        <div
          className={`md:col-span-4 rounded-xl border p-3 flex flex-col h-[520px] ${
            nightVision ? 'bg-[#0f0404] border-red-950' : 'bg-[#0b0e14] border-zinc-800'
          }`}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span>{filteredEntries.length} Saved Entries</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleExportAllBackup}
                title="Backup all notes to JSON file"
                className="hover:text-amber-400"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
              <label title="Import notes from JSON backup" className="cursor-pointer hover:text-amber-400">
                <Upload className="w-3.5 h-3.5" />
                <input type="file" accept=".json" onChange={handleImportBackup} className="hidden" />
              </label>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {filteredEntries.length === 0 ? (
              <div className="p-8 text-center text-xs font-mono text-zinc-500 flex flex-col items-center justify-center space-y-2">
                <div>No saved entries yet.</div>
                <button
                  onClick={() => handleCreateNew('diary')}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-mono font-bold transition-all"
                >
                  + Write First Entry
                </button>
              </div>
            ) : (
              filteredEntries.map(entry => {
                const isSelected = selectedEntryId === entry.id;
                const dateFormatted = new Date(entry.createdAt).toLocaleDateString([], {
                  month: 'short',
                  day: 'numeric'
                });

                return (
                  <div
                    key={entry.id}
                    onClick={() => {
                      setSelectedEntryId(entry.id);
                      setIsEditing(false);
                    }}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? nightVision
                          ? 'bg-red-950/80 border-red-700/80 text-red-100 shadow-md'
                          : 'bg-zinc-900 border-amber-500/50 text-white shadow-md'
                        : 'bg-black/30 border-zinc-800/80 text-zinc-300 hover:bg-zinc-900/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1.5">
                      <h4 className="text-xs font-bold font-mono tracking-tight truncate flex-1">
                        {entry.title}
                      </h4>
                      {entry.isPinned && (
                        <Pin className="w-3 h-3 text-amber-400 fill-current flex-shrink-0" />
                      )}
                    </div>

                    <p className="text-[11px] font-sans text-zinc-400 line-clamp-2 mt-1 leading-snug">
                      {entry.content}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-zinc-800/60 text-[10px] font-mono text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <span className="uppercase text-[9px] px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                          {entry.category}
                        </span>
                        {entry.mood && <span>{entry.mood}</span>}
                      </div>
                      <span>{dateFormatted}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Editor / Reading Pane */}
        <div
          className={`md:col-span-8 rounded-xl border p-5 flex flex-col justify-between h-[520px] ${
            nightVision ? 'bg-[#120303] border-red-950 text-red-100' : 'bg-[#0d1117] border-zinc-800 text-zinc-100'
          }`}
        >
          {selectedEntry ? (
            isEditing ? (
              // EDIT MODE
              <div className="flex flex-col h-full space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <select
                      value={draftCategory}
                      onChange={e => setDraftCategory(e.target.value as any)}
                      className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-xs font-mono text-amber-400 focus:outline-none"
                    >
                      <option value="diary">📖 My Diary</option>
                      <option value="notes">📝 Field Note</option>
                      <option value="survival">🛡️ Survival Log</option>
                    </select>

                    {draftCategory === 'diary' && (
                      <select
                        value={draftMood}
                        onChange={e => setDraftMood(e.target.value)}
                        className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 focus:outline-none"
                      >
                        {MOODS.map(m => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleSaveDraft}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Note</span>
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-2.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white text-xs font-mono"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {/* Title Input */}
                <input
                  type="text"
                  value={draftTitle}
                  onChange={e => setDraftTitle(e.target.value)}
                  placeholder="Note / Diary Title..."
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-zinc-700 text-sm font-bold font-mono text-white focus:outline-none focus:border-amber-500"
                />

                {/* Quick formatting toolbar */}
                <div className="flex items-center gap-1.5 py-1 border-y border-zinc-800/80 text-xs font-mono text-zinc-400">
                  <button
                    onClick={handleInsertTimestamp}
                    title="Insert current time stamp"
                    className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center gap-1 text-[11px]"
                  >
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>Time</span>
                  </button>
                  <button
                    onClick={() => handleInsertText('- [ ] ')}
                    title="Insert checkbox"
                    className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center gap-1 text-[11px]"
                  >
                    <CheckSquare className="w-3 h-3 text-emerald-400" />
                    <span>Todo</span>
                  </button>
                  <button
                    onClick={() => handleInsertText('- ')}
                    title="Insert bullet"
                    className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center gap-1 text-[11px]"
                  >
                    <List className="w-3 h-3 text-cyan-400" />
                    <span>List</span>
                  </button>
                  <button
                    onClick={() => handleInsertText('### Section Header\n')}
                    title="Insert section header"
                    className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center gap-1 text-[11px]"
                  >
                    <span>Heading</span>
                  </button>
                </div>

                {/* Content Textarea */}
                <textarea
                  value={draftContent}
                  onChange={e => setDraftContent(e.target.value)}
                  placeholder="Write your thoughts, daily journal, coordinates, survival tips or observations here..."
                  className="w-full flex-1 p-3 rounded-lg bg-black/30 border border-zinc-800 focus:border-amber-500 text-xs font-mono leading-relaxed text-zinc-200 resize-none focus:outline-none"
                />

                {/* Tags input */}
                <div className="flex items-center gap-2 pt-1 text-xs font-mono text-zinc-400">
                  <Tag className="w-3.5 h-3.5 text-zinc-500" />
                  <input
                    type="text"
                    value={draftTags}
                    onChange={e => setDraftTags(e.target.value)}
                    placeholder="Tags separated by spaces (e.g. #water #shelter #diary)"
                    className="flex-1 bg-transparent border-b border-zinc-800 focus:border-amber-500 text-xs font-mono text-zinc-300 focus:outline-none py-0.5"
                  />
                </div>
              </div>
            ) : (
              // VIEW / READ MODE
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Top Note Header */}
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-zinc-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center leading-none px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase font-bold">
                          {selectedEntry.category === 'diary' ? '📖 MY DIARY' : selectedEntry.category === 'notes' ? '📝 FIELD NOTE' : '🛡️ SURVIVAL LOG'}
                        </span>
                        {selectedEntry.mood && (
                          <span className="text-xs font-mono text-zinc-300">
                            {selectedEntry.mood}
                          </span>
                        )}
                        <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(selectedEntry.createdAt).toLocaleDateString([], {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold font-mono tracking-tight text-white mt-1.5">
                        {selectedEntry.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleTogglePin(selectedEntry.id)}
                        title={selectedEntry.isPinned ? 'Unpin note' : 'Pin note to top'}
                        className="p-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-amber-400 transition-colors"
                      >
                        {selectedEntry.isPinned ? (
                          <PinOff className="w-3.5 h-3.5" />
                        ) : (
                          <Pin className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => handleSpeak(selectedEntry)}
                        title={isPlayingAudio ? 'Stop speech' : 'Read entry aloud (American Voice)'}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          isPlayingAudio
                            ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse'
                            : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-amber-400'
                        }`}
                      >
                        {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={() => handleCopyNote(selectedEntry)}
                        title="Copy note text"
                        className="p-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                      >
                        {copiedId === selectedEntry.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => handleExportTextFile(selectedEntry)}
                        title="Download as .txt file"
                        className="p-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-cyan-400 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setIsEditing(true)}
                        className="px-2.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs flex items-center gap-1 transition-colors"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDelete(selectedEntry.id)}
                        title="Delete note"
                        className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Note Body */}
                  <div className="mt-4 overflow-y-auto max-h-[350px] pr-2 space-y-2 text-xs font-mono leading-relaxed text-zinc-200 whitespace-pre-wrap bg-black/20 p-4 rounded-xl border border-zinc-800/60">
                    {selectedEntry.content}
                  </div>
                </div>

                {/* Footer Meta */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {(selectedEntry.tags || []).map(tag => (
                      <span key={tag} className="text-amber-400/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    Last edited {new Date(selectedEntry.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center my-auto text-center p-8 space-y-3 text-zinc-500">
              <BookText className="w-12 h-12 stroke-1 text-zinc-600 mb-1" />
              <div className="text-sm font-mono font-bold text-zinc-300">Your Journal &amp; Notes are Empty</div>
              <div className="text-xs font-mono max-w-xs text-zinc-500">
                Write your thoughts in My Diary, record field observations, or track survival checklists.
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => handleCreateNew('diary')}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Diary</span>
                </button>
                <button
                  onClick={() => handleCreateNew('notes')}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs border border-zinc-700 flex items-center gap-1.5 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Field Note</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
