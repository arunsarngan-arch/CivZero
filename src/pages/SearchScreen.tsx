import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  Zap,
  Bookmark,
  ChevronRight,
  Clock,
  Gauge,
  Sparkles
} from 'lucide-react';
import type { Guide } from '../types';
import { DatabaseService } from '../services/databaseService';
import { GuideDetailModal } from '../components/GuideDetailModal';

interface SearchScreenProps {
  nightVision: boolean;
  fontSize: 'normal' | 'large' | 'huge';
  onBookmarkChange: () => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({
  nightVision,
  fontSize,
  onBookmarkChange
}) => {
  const [query, setQuery] = useState('');
  const [tierFilter, setTierFilter] = useState<number | null>(null);
  const [results, setResults] = useState<Guide[]>([]);
  const [activeGuide, setActiveGuide] = useState<Guide | null>(null);
  const [searchTimeMs, setSearchTimeMs] = useState<number>(0);

  const quickTerms = [
    'Water',
    'Tourniquet',
    'Shelter',
    'Fire',
    'Sanitation',
    'Stove',
    'Seed',
    'Forge',
    'Hydro Turbine',
    'Battery',
    'Radio'
  ];

  useEffect(() => {
    executeSearch();
  }, [query, tierFilter]);

  const executeSearch = async () => {
    const start = performance.now();
    const hits = await DatabaseService.searchGuides(query, tierFilter);
    const elapsed = Math.round((performance.now() - start) * 100) / 100;
    setResults(hits);
    setSearchTimeMs(elapsed);
  };

  const getTierColor = (t: number) => {
    switch (t) {
      case 1: return '#ef4444';
      case 2: return '#f59e0b';
      case 3: return '#eab308';
      case 4: return '#10b981';
      case 5: return '#06b6d4';
      case 6: return '#8b5cf6';
      default: return '#cbd5e1';
    }
  };

  const handleBookmarkToggle = (guideId: string, state: boolean) => {
    setResults(prev => prev.map(g => g.id === guideId ? { ...g, is_bookmarked: state } : g));
    onBookmarkChange();
  };

  return (
    <div className="space-y-4 animate-fadeIn pb-12">
      {/* Search Bar Input */}
      <div className="space-y-2">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search survival guides, blueprints, chemicals, procedures..."
            className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm font-mono transition-all outline-none ${
              nightVision
                ? 'bg-[#150404] border-red-950 focus:border-red-600 text-red-200 placeholder-red-900/60'
                : 'bg-[#0d1117] border-zinc-800 focus:border-amber-500/80 text-zinc-100 placeholder-zinc-500'
            }`}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search Stats & Tier Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
            <Search className="w-3 h-3 text-amber-400" />
            <span>Instant Search:</span>
            <span className="text-emerald-400 font-bold">{results.length} matches</span>
            <span>({searchTimeMs} ms)</span>
          </div>

          {/* Tier Pills */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setTierFilter(null)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-colors ${
                tierFilter === null
                  ? 'bg-amber-500 text-black border-amber-400 font-bold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800'
              }`}
            >
              All
            </button>
            {[1, 2, 3, 4, 5, 6].map(t => (
              <button
                key={t}
                onClick={() => setTierFilter(tierFilter === t ? null : t)}
                style={{
                  borderColor: tierFilter === t ? getTierColor(t) : undefined,
                  color: tierFilter === t ? getTierColor(t) : undefined
                }}
                className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-colors ${
                  tierFilter === t
                    ? 'bg-black/80 font-bold'
                    : 'bg-zinc-900 text-zinc-500 border-zinc-800'
                }`}
              >
                T{t}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Terms Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
          <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1 flex-shrink-0">
            <Sparkles className="w-3 h-3 text-amber-400" /> Suggested:
          </span>
          {quickTerms.map(term => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:border-amber-500/50 hover:text-amber-300 transition-colors flex-shrink-0"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Search Results List */}
      <div className="space-y-3 pt-2">
        {results.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-zinc-800 rounded-2xl p-6">
            <Search className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
            <h3 className="font-mono text-sm font-bold text-zinc-300">No Matching Articles Found</h3>
            <p className="text-xs text-zinc-500 font-mono mt-1">
              Try broader search terms like "water", "fire", "forge", "battery", or clear the tier filter.
            </p>
          </div>
        ) : (
          results.map(guide => {
            const tierColor = getTierColor(guide.tier);

            return (
              <div
                key={guide.id}
                onClick={() => setActiveGuide(guide)}
                className={`p-4 rounded-xl border transition-all cursor-pointer group hover:scale-[1.008] active:scale-[0.99] ${
                  nightVision
                    ? 'bg-[#0f0404] border-red-950 hover:border-red-800 text-red-100'
                    : 'bg-[#0d1117] border-zinc-800/90 hover:border-zinc-700 text-zinc-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        style={{
                          color: tierColor,
                          backgroundColor: `${tierColor}15`,
                          borderColor: `${tierColor}40`
                        }}
                        className="px-2 py-0.5 rounded text-xs font-mono font-bold border tracking-wider uppercase"
                      >
                        TIER {guide.tier} • {guide.category}
                      </span>

                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {guide.read_time}
                      </span>

                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <Gauge className="w-3.5 h-3.5" />
                        {guide.difficulty}
                      </span>
                    </div>

                    <h2
                      className={`text-base font-bold font-mono tracking-tight group-hover:text-amber-400 transition-colors leading-snug ${
                        nightVision ? 'group-hover:text-red-400' : ''
                      }`}
                    >
                      {guide.title}
                    </h2>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                      {guide.summary}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    {guide.is_bookmarked && (
                      <Bookmark className="w-4 h-4 text-amber-400 fill-amber-400" />
                    )}
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors mt-2" />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Guide Detail Reader View */}
      {activeGuide && (
        <GuideDetailModal
          guide={activeGuide}
          onClose={() => setActiveGuide(null)}
          nightVision={nightVision}
          fontSize={fontSize}
          onBookmarkToggled={handleBookmarkToggle}
        />
      )}
    </div>
  );
};
