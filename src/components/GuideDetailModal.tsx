import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Clock,
  Gauge,
  Tag,
  ShieldCheck,
  Check,
  Headphones,
  Volume2
} from 'lucide-react';
import type { Guide } from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';
import { DatabaseService } from '../services/databaseService';
import { ScrollToTop } from './ScrollToTop';
import { AudioGuidePlayer } from './AudioGuidePlayer';

interface GuideDetailModalProps {
  guide: Guide;
  onClose: () => void;
  nightVision: boolean;
  fontSize: 'normal' | 'large' | 'huge';
  onBookmarkToggled: (id: string, state: boolean) => void;
}

export const GuideDetailModal: React.FC<GuideDetailModalProps> = ({
  guide,
  onClose,
  nightVision,
  fontSize,
  onBookmarkToggled
}) => {
  const [isBookmarked, setIsBookmarked] = useState(!!guide.is_bookmarked);
  const [copied, setCopied] = useState(false);
  const [modalContainerEl, setModalContainerEl] = useState<HTMLDivElement | null>(null);
  const [showAudioPlayer, setShowAudioPlayer] = useState<boolean>(false);

  useEffect(() => {
    setIsBookmarked(!!guide.is_bookmarked);
  }, [guide]);

  // Prevent background scroll when modal is open and cancel speech when closing
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Handle ESC key to exit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleToggleBookmark = async () => {
    const newState = await DatabaseService.toggleBookmark(guide.id);
    setIsBookmarked(newState);
    onBookmarkToggled(guide.id, newState);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: guide.title,
          text: `${guide.title} — ${guide.summary}`,
          url: window.location.href
        });
      } catch (e) {
        // user cancelled or failed
      }
    } else {
      // Copy summary to clipboard
      await navigator.clipboard.writeText(`${guide.title}\n${guide.summary}\n\n${guide.content}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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

  return createPortal(
    <>
      <div
        ref={setModalContainerEl}
        className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center animate-fadeIn"
      >
        <div
          className={`w-full max-w-3xl min-h-screen border-x flex flex-col transition-colors duration-200 ${
            showAudioPlayer ? 'pb-44' : 'pb-32'
          } ${
            nightVision
              ? 'bg-[#080202] border-red-950 text-red-100'
              : 'bg-[#05070a] border-zinc-800 text-zinc-100'
          }`}
        >
          {/* Sticky Detail Top Bar */}
          <div
            className={`sticky top-0 z-20 px-4 py-3 border-b backdrop-blur-lg flex items-center justify-between gap-3 ${
              nightVision
                ? 'bg-[#080202]/95 border-red-950'
                : 'bg-[#05070a]/95 border-zinc-800'
            }`}
          >
            <button
              onClick={onClose}
              aria-label="Go Back"
              className={`p-2 rounded-lg border flex items-center gap-1.5 text-xs font-mono transition-colors ${
                nightVision
                  ? 'bg-red-950/40 border-red-900/40 text-red-300 hover:bg-red-900/60'
                  : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK</span>
            </button>

            <div className="flex items-center gap-2">
              {/* Audio Narrator Button */}
              <button
                onClick={() => setShowAudioPlayer(!showAudioPlayer)}
                aria-label="Hands-free Audio Narration"
                className={`px-3 py-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-mono ${
                  showAudioPlayer
                    ? nightVision
                      ? 'bg-red-900 border-red-500 text-white shadow-lg'
                      : 'bg-amber-500 border-amber-400 text-black font-bold shadow-lg'
                    : nightVision
                    ? 'bg-red-950/30 border-red-900/40 text-red-300 hover:bg-red-900/40'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <Headphones className="w-4 h-4" />
                <span>{showAudioPlayer ? 'LISTENING' : 'AUDIO'}</span>
              </button>

              {/* Bookmark button */}
              <button
                onClick={handleToggleBookmark}
                aria-label={isBookmarked ? 'Remove Bookmark' : 'Bookmark Guide'}
                className={`px-3 py-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-mono ${
                  isBookmarked
                    ? nightVision
                      ? 'bg-red-900 border-red-500 text-white'
                      : 'bg-amber-500 border-amber-400 text-black font-bold'
                    : nightVision
                    ? 'bg-red-950/30 border-red-900/40 text-red-400'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{isBookmarked ? 'SAVED' : 'SAVE'}</span>
              </button>

              {/* Share button */}
              <button
                onClick={handleShare}
                aria-label="Share Guide"
                className={`p-2 rounded-lg border transition-colors flex items-center gap-1 text-xs font-mono ${
                  nightVision
                    ? 'bg-red-950/30 border-red-900/40 text-red-300'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300'
                }`}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? 'COPIED' : 'SHARE'}</span>
              </button>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Header Metadata */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  style={{
                    backgroundColor: `${getTierColor(guide.tier)}20`,
                    borderColor: `${getTierColor(guide.tier)}60`,
                    color: getTierColor(guide.tier)
                  }}
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border tracking-wider uppercase"
                >
                  TIER {guide.tier} • {guide.category}
                </span>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    {guide.read_time}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5 text-zinc-500" />
                    {guide.difficulty} Difficulty
                  </span>
                </div>
              </div>

              <h1
                className={`font-bold font-mono tracking-tight leading-tight ${
                  fontSize === 'huge' ? 'text-3xl sm:text-4xl' : fontSize === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                } ${
                  nightVision ? 'text-red-400' : 'text-zinc-50'
                }`}
              >
                {guide.title}
              </h1>

              {/* Executive Summary Box */}
              <div
                className={`p-4 rounded-xl border leading-relaxed ${
                  fontSize === 'huge' ? 'text-base' : fontSize === 'large' ? 'text-sm' : 'text-xs'
                } ${
                  nightVision
                    ? 'bg-red-950/20 border-red-900/40 text-red-300'
                    : 'bg-zinc-900/70 border-zinc-800 text-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400/90 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Operational Summary
                  </div>
                  {!showAudioPlayer && (
                    <button
                      onClick={() => setShowAudioPlayer(true)}
                      className="text-[11px] font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Hear Guide</span>
                    </button>
                  )}
                </div>
                <p>{guide.summary}</p>
              </div>

              {/* Tags */}
              {guide.tags && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {guide.tags.split(',').map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400 flex items-center gap-1"
                    >
                      <Tag className="w-2.5 h-2.5 text-zinc-600" />
                      {t.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Render Full Markdown Body & Vector SVGs */}
            <div className="pt-4 border-t border-zinc-800/80">
              <MarkdownRenderer
                content={guide.content}
                fontSize={fontSize}
                nightVision={nightVision}
              />
            </div>

            {/* Physical Bottom Spacer for Reader View */}
            <div className="h-16 w-full" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <ScrollToTop
        nightVision={nightVision}
        targetEl={modalContainerEl}
        bottomOffsetClass={showAudioPlayer ? "bottom-36 right-4 sm:bottom-40 sm:right-6" : "bottom-6 right-4 sm:bottom-8 sm:right-6"}
        zIndexClass="z-[110]"
      />

      {/* Floating Hands-Free Field Audio Player */}
      {showAudioPlayer && (
        <AudioGuidePlayer
          title={guide.title}
          category={guide.category}
          tier={guide.tier}
          content={guide.content}
          summary={guide.summary}
          nightVision={nightVision}
          onClose={() => setShowAudioPlayer(false)}
        />
      )}
    </>,
    document.body
  );
};
