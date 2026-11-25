import React from 'react';
import {
  ShieldAlert,
  Moon,
  Sun,
  Eye,
  Type,
  HardDrive,
  Sparkles,
  BookText,
  BookA
} from 'lucide-react';
import type { StorageStats } from '../types';
import type { UpdateInfo } from '../services/updateService';

interface HeaderProps {
  storageStats: StorageStats | null;
  nightVision: boolean;
  setNightVision: (v: boolean) => void;
  fontSize: 'normal' | 'large' | 'huge';
  setFontSize: (v: 'normal' | 'large' | 'huge') => void;
  availableUpdate?: UpdateInfo | null;
  onOpenUpdateModal?: () => void;
  onOpenJournal?: () => void;
  onOpenDictionary?: () => void;
  onOpenSos?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  storageStats,
  nightVision,
  setNightVision,
  fontSize,
  setFontSize,
  availableUpdate,
  onOpenUpdateModal,
  onOpenJournal,
  onOpenDictionary,
  onOpenSos
}) => {
  const cycleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('huge');
    else setFontSize('normal');
  };

  const readinessPercent = storageStats
    ? Math.round((storageStats.installedTiers / storageStats.totalTiers) * 100)
    : 100;

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md px-4 py-2.5 transition-colors duration-200 ${
        nightVision
          ? 'bg-[#080202]/95 border-red-950 text-red-100'
          : 'bg-[#05070a]/95 border-zinc-800/80 text-zinc-100'
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* App Title & Offline Status */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src="/logo.webp"
            alt="CivZero Logo"
            className="w-8 h-8 rounded-lg flex-shrink-0 object-contain shadow-sm border border-amber-500/30"
          />
          <div className="min-w-0">
            <h1 className="text-sm font-bold font-mono tracking-tight leading-tight truncate">
              CIVZERO
            </h1>
          </div>
        </div>

        {/* Offline Readiness Badge & Control Toggles */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* New Update Available Badge */}
          {availableUpdate && onOpenUpdateModal && (
            <button
              onClick={onOpenUpdateModal}
              title={`New update CivZero v${availableUpdate.version} available! Click to inspect & download.`}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500 hover:bg-amber-400 text-black shadow-md shadow-amber-500/20 animate-pulse transition-all cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>UPDATE v{availableUpdate.version}</span>
            </button>
          )}

          {/* Readiness Status Pill */}
          <div
            title="Civilization Knowledge Archive Status"
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${
              readinessPercent === 100
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
            }`}
          >
            <HardDrive className="w-3 h-3" />
            <span>
              ARCHIVES: {storageStats?.installedTiers || 6}/{storageStats?.totalTiers || 6} TIERS
            </span>
          </div>

          {/* Emergency SOS Quick Triage Button */}
          {onOpenSos && (
            <button
              onClick={onOpenSos}
              title="Immediate Emergency SOS Protocols (Arterial Bleeding, CPR 110 BPM, Burns, Choking)"
              className="px-2.5 py-1 rounded-md text-xs font-mono font-black border transition-all flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white border-red-500 shadow-md shadow-red-950 active:scale-95 animate-pulse cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono font-black tracking-wider">SOS</span>
            </button>
          )}

          {/* Quick Diary & Dictionary Shortcuts */}
          {onOpenJournal && (
            <button
              onClick={onOpenJournal}
              title="Open My Diary & Field Journal"
              className={`px-2 py-1 rounded-md text-xs font-mono border transition-colors flex items-center gap-1.5 ${
                nightVision
                  ? 'bg-red-950/60 border-red-900/60 text-red-300 hover:bg-red-900/40'
                  : 'bg-zinc-900 border-zinc-700/80 text-zinc-300 hover:text-amber-400 hover:bg-zinc-800'
              }`}
            >
              <BookText className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline text-[10px] font-mono font-bold">DIARY</span>
            </button>
          )}

          {onOpenDictionary && (
            <button
              onClick={onOpenDictionary}
              title="Open Civilization Lexicon & Dictionary"
              className={`px-2 py-1 rounded-md text-xs font-mono border transition-colors flex items-center gap-1.5 ${
                nightVision
                  ? 'bg-red-950/60 border-red-900/60 text-red-300 hover:bg-red-900/40'
                  : 'bg-zinc-900 border-zinc-700/80 text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800'
              }`}
            >
              <BookA className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline text-[10px] font-mono font-bold">DICT</span>
            </button>
          )}

          {/* Font Size Toggle Button */}
          <button
            onClick={cycleFontSize}
            title={`Font Size: ${fontSize.toUpperCase()} (tap to toggle)`}
            className={`px-2 py-1 rounded-md text-xs font-mono font-bold border transition-colors flex items-center gap-1 ${
              nightVision
                ? 'bg-red-950/60 border-red-900/60 text-red-300 hover:bg-red-900/40'
                : 'bg-zinc-900 border-zinc-700/80 text-zinc-300 hover:bg-zinc-800'
            }`}
          >
            <Type className="w-3 h-3" />
            <span className="uppercase text-[10px]">
              {fontSize === 'normal' ? '1.0X' : fontSize === 'large' ? '1.25X' : '1.5X'}
            </span>
          </button>

          {/* Night Vision / Blackout Preservation Toggle */}
          <button
            onClick={() => setNightVision(!nightVision)}
            title="Night Vision / Red Filter Mode (preserves dark-adapted eyesight)"
            className={`px-2 py-1 rounded-md text-xs font-mono border transition-colors flex items-center gap-1 ${
              nightVision
                ? 'bg-red-900/80 border-red-600 text-red-100 ring-1 ring-red-500'
                : 'bg-zinc-900 border-zinc-700/80 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-red-400" />
            <span className="hidden md:inline text-[10px] font-mono">
              {nightVision ? 'NIGHT ON' : 'RED FILTER'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
