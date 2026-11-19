import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  nightVision: boolean;
  targetRef?: React.RefObject<HTMLElement | null>;
  targetEl?: HTMLElement | null;
  threshold?: number;
  bottomOffsetClass?: string;
  zIndexClass?: string;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({
  nightVision,
  targetRef,
  targetEl,
  threshold = 200,
  bottomOffsetClass = 'bottom-20 right-4 sm:bottom-24 sm:right-6',
  zIndexClass = 'z-40'
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = targetEl || targetRef?.current;

    const handleScroll = () => {
      let currentScrollY = 0;
      if (el) {
        currentScrollY = el.scrollTop;
      } else {
        currentScrollY = window.scrollY || document.documentElement.scrollTop;
      }
      setVisible(currentScrollY > threshold);
    };

    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [targetEl, targetRef, threshold]);

  const scrollToTop = () => {
    const el = targetEl || targetRef?.current;
    if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Take to top"
      title="Take to top"
      className={`fixed ${bottomOffsetClass} ${zIndexClass} w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 transform active:scale-90 hover:scale-110 focus:outline-none animate-fadeIn ${
        nightVision
          ? 'bg-[#150404]/90 border-red-800 text-red-300 hover:bg-red-900/80 hover:border-red-500 hover:text-white shadow-red-950/50'
          : 'bg-[#0d1117]/95 border-zinc-700/80 text-amber-400 hover:bg-amber-500 hover:text-black hover:border-amber-400 shadow-black/60'
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
    </button>
  );
};
