import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Wheat,
  Zap,
  Cpu,
  Hammer,
  Radio,
  Clock,
  Gauge,
  Tag,
  Bookmark,
  ChevronRight,
  Filter,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import type { Guide, Tier } from '../types';
import { DatabaseService } from '../services/databaseService';
import { GuideDetailModal } from '../components/GuideDetailModal';

interface GuidesExplorerProps {
  nightVision: boolean;
  fontSize: 'normal' | 'large' | 'huge';
  onBookmarkChange: () => void;
}

export const GuidesExplorer: React.FC<GuidesExplorerProps> = ({
  nightVision,
  fontSize,
  onBookmarkChange
}) => {
  const [tiers, setTiers] = useState<Tier[]>([]);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeGuide, setActiveGuide] = useState<Guide | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [allTiers, allGuides] = await Promise.all([
      DatabaseService.getTiers(),
      DatabaseService.getAllGuides()
    ]);
    setTiers(allTiers);
    setGuides(allGuides);
    setLoading(false);
  };

  const getTierIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4" />;
      case 'Wheat': return <Wheat className="w-4 h-4" />;
      case 'Hammer': return <Hammer className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Radio': return <Radio className="w-4 h-4" />;
      default: return <ShieldAlert className="w-4 h-4" />;
    }
  };

  // Filter guides by selected tier and category
  const filteredGuides = guides.filter(g => {
    if (selectedTier !== null && g.tier !== selectedTier) return false;
    if (selectedCategory !== null && g.category !== selectedCategory) return false;
    return true;
  });

  // Unique categories in current view
  const categories = Array.from(
    new Set(
      guides
        .filter(g => selectedTier === null || g.tier === selectedTier)
        .map(g => g.category)
    )
  );

  const getTierColor = (t: number) => {
    switch (t) {
      case 1: return '#ef4444'; // Red
      case 2: return '#f59e0b'; // Amber
      case 3: return '#eab308'; // Warm Gold
      case 4: return '#10b981'; // Green
      case 5: return '#06b6d4'; // Cyan
      case 6: return '#8b5cf6'; // Violet
      default: return '#cbd5e1';
    }
  };

  const handleBookmarkToggle = (guideId: string, state: boolean) => {
    setGuides(prev => prev.map(g => g.id === guideId ? { ...g, is_bookmarked: state } : g));
    onBookmarkChange();
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Tier Selection Carousel / Tabs */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            Knowledge Tiers
          </span>
          <span className="text-xs font-mono text-zinc-500">
            {filteredGuides.length} Guides Available
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {tiers.map(tier => {
            const isSelected = selectedTier === tier.id;
            const isInstalled = tier.is_installed;

            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(isSelected ? null : tier.id)}
                className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? nightVision
                      ? 'bg-red-950/60 border-red-500 text-white'
                      : 'bg-zinc-900 border-amber-500/80 text-white shadow-lg'
                    : isInstalled
                    ? nightVision
                      ? 'bg-[#100303] border-red-950/60 text-zinc-300 hover:border-red-900'
                      : 'bg-[#0d1117] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    : 'bg-zinc-950/40 border-zinc-900 opacity-50 cursor-not-allowed'
                }`}
              >
                {/* Top tier pill */}
                <div className="flex items-center justify-between mb-1.5">
                  <div
                    style={{ color: tier.color }}
                    className="flex items-center gap-1 text-xs font-mono font-bold"
                  >
                    {getTierIcon(tier.icon)}
                    <span>T{tier.id}</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-zinc-400 border border-zinc-800">
                    {tier.guide_count}
                  </span>
                </div>

                <div className="text-xs font-bold font-mono truncate leading-tight">
                  {tier.name.split(':')[1] || tier.name}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono mt-0.5 truncate">
                  {tier.subtitle}
                </div>

                {/* Active indicator bar */}
                {isSelected && (
                  <div
                    style={{ backgroundColor: tier.color }}
                    className="absolute bottom-0 left-0 right-0 h-1"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Chips Bar */}
      {categories.length > 1 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-full text-xs font-mono flex-shrink-0 transition-colors border ${
              selectedCategory === null
                ? nightVision
                  ? 'bg-red-900/60 border-red-600 text-white'
                  : 'bg-amber-500 border-amber-400 text-black font-bold'
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All Categories ({filteredGuides.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              className={`px-3 py-1 rounded-full text-xs font-mono flex-shrink-0 transition-colors border ${
                selectedCategory === cat
                  ? nightVision
                    ? 'bg-red-900/60 border-red-600 text-white'
                    : 'bg-amber-500 border-amber-400 text-black font-bold'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Guide Cards Grid */}
      <div className="space-y-3">
        {filteredGuides.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-zinc-800 rounded-2xl p-6">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2 opacity-80" />
            <h3 className="font-mono text-sm font-bold text-zinc-300">No Guides Found in This Tier</h3>
            <p className="text-xs text-zinc-500 font-mono mt-1 max-w-sm mx-auto">
              This tier pack might be uninstalled or has no articles matching the selected category. Check Pack Manager to reinstall.
            </p>
          </div>
        ) : (
          filteredGuides.map(guide => {
            const tierColor = getTierColor(guide.tier);

            return (
              <div
                key={guide.id}
                onClick={() => setActiveGuide(guide)}
                className={`p-4 rounded-xl border transition-all cursor-pointer group hover:scale-[1.008] active:scale-[0.99] ${
                  nightVision
                    ? 'bg-[#0f0404] border-red-950 hover:border-red-800 text-red-100'
                    : 'bg-[#0d1117] border-zinc-800/90 hover:border-zinc-700 text-zinc-200 shadow-md'
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
                      className={`font-bold font-mono tracking-tight group-hover:text-amber-400 transition-colors leading-snug ${
                        fontSize === 'huge' ? 'text-xl' : fontSize === 'large' ? 'text-lg' : 'text-base'
                      } ${
                        nightVision ? 'group-hover:text-red-400' : ''
                      }`}
                    >
                      {guide.title}
                    </h2>

                    <p
                      className={`text-zinc-400 line-clamp-2 leading-relaxed font-sans ${
                        fontSize === 'huge' ? 'text-sm' : fontSize === 'large' ? 'text-xs' : 'text-xs'
                      }`}
                    >
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

                {/* Tags Footer */}
                {guide.tags && (
                  <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-zinc-800/50">
                    {guide.tags.split(',').slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800"
                      >
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
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
