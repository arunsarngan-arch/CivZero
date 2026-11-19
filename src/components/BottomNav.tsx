import React from 'react';
import { BookOpen, Search, Wrench, GitBranch, HardDrive, Share2, Bookmark } from 'lucide-react';
import type { ViewTab } from '../types';

interface BottomNavProps {
  currentTab: ViewTab;
  setTab: (tab: ViewTab) => void;
  bookmarkCount: number;
  nightVision: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  setTab,
  bookmarkCount,
  nightVision
}) => {
  const tabs = [
    { id: 'guides' as ViewTab, label: 'Guides', icon: BookOpen },
    { id: 'search' as ViewTab, label: 'Search', icon: Search },
    { id: 'tools' as ViewTab, label: 'Tools', icon: Wrench },
    { id: 'techtree' as ViewTab, label: 'Tech Tree', icon: GitBranch },
    { id: 'share' as ViewTab, label: 'P2P Beam', icon: Share2 },
    { id: 'packs' as ViewTab, label: 'Storage', icon: HardDrive },
    { id: 'bookmarks' as ViewTab, label: 'Saved', icon: Bookmark, badge: bookmarkCount }
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-lg px-1 py-1 safe-area-pb transition-colors duration-200 ${
        nightVision
          ? 'bg-[#090202]/95 border-red-950 text-red-200'
          : 'bg-[#090d16]/95 border-zinc-800/80 text-zinc-300'
      }`}
    >
      <div className="max-w-xl mx-auto flex items-center justify-between">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setTab(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-1.5 rounded-lg transition-all flex-1 min-w-0 ${
                isActive
                  ? nightVision
                    ? 'text-red-400 font-bold'
                    : 'text-amber-400 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {/* Active indicator dot */}
              {isActive && (
                <span
                  className={`absolute top-0 w-6 h-0.5 rounded-full ${
                    nightVision ? 'bg-red-500' : 'bg-amber-400'
                  }`}
                />
              )}

              <div className="relative mt-0.5">
                <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${isActive ? 'scale-110 transition-transform' : ''}`} />
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span
                    className={`absolute -top-1 -right-2 px-1 min-w-[14px] h-3.5 rounded-full text-[9px] font-mono font-bold flex items-center justify-center ${
                      nightVision ? 'bg-red-600 text-white' : 'bg-amber-500 text-black'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </div>

              <span className="text-[9px] sm:text-[10px] font-mono tracking-tighter sm:tracking-normal mt-0.5 truncate max-w-full">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
