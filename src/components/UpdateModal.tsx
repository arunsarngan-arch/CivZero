import React from 'react';
import { createPortal } from 'react-dom';
import { DownloadCloud, Sparkles, X, ArrowRight, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';
import type { UpdateInfo } from '../services/updateService';
import { updateService, CURRENT_APP_VERSION } from '../services/updateService';

interface UpdateModalProps {
  updateInfo: UpdateInfo;
  onClose: () => void;
  nightVision?: boolean;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({ updateInfo, onClose, nightVision = false }) => {
  const handleDownload = () => {
    updateService.startDownload(updateInfo.downloadUrl);
  };

  return createPortal(
    <div className="fixed inset-0 z-[120] overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div
        className={`w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 ${
          nightVision
            ? 'bg-[#150505] border-red-900/60 text-red-100'
            : 'bg-[#0d1117] border-amber-500/30 text-zinc-100'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`p-5 border-b flex items-start justify-between ${
            nightVision
              ? 'bg-red-950/40 border-red-900/50'
              : 'bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-zinc-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center border font-mono ${
                nightVision
                  ? 'bg-red-900/40 border-red-700 text-red-400'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-400'
              }`}
            >
              <DownloadCloud className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Civilization Archive Update
              </div>
              <h2 className="text-lg font-bold font-mono tracking-tight text-white">
                CivZero v{updateInfo.version}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Version delta badge */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">CURRENT:</span>
              <span className="inline-flex items-center justify-center whitespace-nowrap leading-none px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 font-bold">
                v{CURRENT_APP_VERSION}
              </span>
            </div>

            <ArrowRight className="w-4 h-4 text-amber-400" />

            <div className="flex items-center gap-2">
              <span className="text-zinc-500">NEW:</span>
              <span className="inline-flex items-center justify-center whitespace-nowrap leading-none px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
                v{updateInfo.version}
              </span>
            </div>
          </div>

          {/* Release Date */}
          {updateInfo.releaseDate && (
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              <span>Released: {updateInfo.releaseDate}</span>
            </div>
          )}

          {/* Changelog list */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400/90 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              What's New in this Version:
            </h3>

            <div className="p-4 rounded-xl bg-[#070b12] border border-zinc-800/80 max-h-48 overflow-y-auto space-y-2 text-xs leading-relaxed text-zinc-300">
              {updateInfo.changelog && updateInfo.changelog.length > 0 ? (
                updateInfo.changelog.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))
              ) : (
                <p className="text-zinc-500 italic">Technical optimizations and knowledge pack updates.</p>
              )}
            </div>
          </div>

          {/* Integrity Note */}
          <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-[11px] font-mono text-emerald-400/90 leading-relaxed">
            ✓ Signed with official CivZero release key. Your bookmarks, offline caches, and personal settings will be 100% preserved.
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-5 border-t border-zinc-800/80 bg-zinc-950/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          {updateInfo.githubRepo ? (
            <a
              href={updateInfo.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Release Notes
            </a>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
            >
              Later
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <DownloadCloud className="w-4 h-4" />
              Download & Install APK
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
