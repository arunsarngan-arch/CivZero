import React from 'react';
import {
  ShieldAlert,
  Moon,
  Sun,
  Eye,
  Type,
  WifiOff,
  HardDrive,
  Sparkles
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
}

export const Header: React.FC<HeaderProps> = ({
  storageStats,
  nightVision,
  setNightVision,
  fontSize,
  setFontSize,
  availableUpdate,
  onOpenUpdateModal
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
            src="/logo.svg"
            alt="CivZero Logo"
            className="w-8 h-8 rounded-lg flex-shrink-0 object-contain shadow-sm border border-amber-500/30"
          />
          <div className="min-w-0">
            <h1 className="text-sm font-bold font-mono tracking-tight leading-tight truncate">
              CIVZERO
            </h1>
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <WifiOff className="w-2.5 h-2.5" />
                100% OFFLINE
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-amber-400 font-semibold">
                ARCHIVE READY
              </span>
            </div>
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
