import React, { useState, useEffect } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  Clock,
  Gauge,
  AlertTriangle
} from 'lucide-react';
import type { Guide } from '../types';
import { DatabaseService } from '../services/databaseService';
import { GuideDetailModal } from '../components/GuideDetailModal';

interface BookmarksScreenProps {
  nightVision: boolean;
  fontSize: 'normal' | 'large' | 'huge';
  onBookmarkChange: () => void;
}

export const BookmarksScreen: React.FC<BookmarksScreenProps> = ({
  nightVision,
  fontSize,
  onBookmarkChange
}) => {
  const [bookmarks, setBookmarks] = useState<Guide[]>([]);
  const [activeGuide, setActiveGuide] = useState<Guide | null>(null);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    const list = await DatabaseService.getBookmarks();
    setBookmarks(list);
  };

  const handleBookmarkToggle = (guideId: string, state: boolean) => {
    if (!state) {
      setBookmarks(prev => prev.filter(g => g.id !== guideId));
    }
    onBookmarkChange();
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

  return (
    <div className="space-y-4 animate-fadeIn pb-12">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
          <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          Saved Emergency Guides
        </span>
        <span className="text-xs font-mono text-zinc-500">
          {bookmarks.length} Pinned Articles
        </span>
      </div>

      <div className="space-y-3">
        {bookmarks.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-zinc-800 rounded-2xl p-6">
            <Bookmark className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
            <h3 className="font-mono text-sm font-bold text-zinc-300">No Guides Bookmarked Yet</h3>
            <p className="text-xs text-zinc-500 font-mono mt-1 max-w-sm mx-auto">
              Tap the bookmark icon on critical survival guides (e.g. Tourniquet or Water Purification) for instant single-tap access in high-stress situations.
            </p>
          </div>
        ) : (
          bookmarks.map(guide => {
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
                    <BookmarkCheck className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors mt-2" />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {activeGuide && (
        <GuideDetailModal
          guide={activeGuide}
          onClose={() => {
            setActiveGuide(null);
            loadBookmarks();
          }}
          nightVision={nightVision}
          fontSize={fontSize}
          onBookmarkToggled={handleBookmarkToggle}
        />
      )}
    </div>
  );
};
