import React, { useState, useEffect } from 'react';
import { ShieldCheck, HardDrive, Cpu, WifiOff } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
  nightVision?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete, nightVision = false }) => {
  const [stage, setStage] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    // Sequence micro-diagnostics
    const t1 = setTimeout(() => setStage(1), 500);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => setStage(3), 1700);

    // Begin fade-out at 2.2 seconds
    const tFade = setTimeout(() => {
      setIsFadingOut(true);
    }, 2200);

    // Unmount completely at 2.7 seconds
    const tEnd = setTimeout(() => {
      onComplete();
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tFade);
      clearTimeout(tEnd);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(onComplete, 300);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between p-8 select-none cursor-pointer transition-opacity duration-500 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${
        nightVision ? 'bg-[#050101] text-red-100' : 'bg-[#05070a] text-zinc-100'
      }`}
    >
      {/* Top Branding Bar */}
      <div className="w-full flex items-center justify-between max-w-sm pt-4 opacity-60">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
          <WifiOff className="w-3 h-3 text-emerald-400" />
          AIR-GAPPED OFFLINE
        </span>
        <span className="text-[10px] font-mono tracking-wider text-amber-400/80">
          v1.0.0
        </span>
      </div>

      {/* Center Cinematic Emblem & Titles */}
      <div className="flex flex-col items-center text-center space-y-6 my-auto">
        {/* Glowing Logo Icon */}
        <div className="relative group">
          <div className="absolute -inset-3 rounded-3xl bg-amber-500/20 blur-xl opacity-75 animate-pulse" />
          <img
            src="/logo.webp"
            alt="CivZero Emblem"
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl shadow-2xl border border-amber-500/30 object-contain transform transition-transform duration-700 ease-out scale-100"
          />
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-mono tracking-[0.25em] text-white">
            CIVZERO
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-amber-400 font-semibold uppercase">
            Civilization Rebuilding Archive
          </p>
        </div>

        {/* Diagnostic Telemetry Sequence */}
        <div className="w-64 sm:w-72 space-y-2 pt-2">
          {/* Progress bar */}
          <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
            <div
              className={`h-full transition-all duration-500 ease-out ${
                nightVision ? 'bg-red-500' : 'bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300'
              }`}
              style={{
                width: stage === 0 ? '25%' : stage === 1 ? '55%' : stage === 2 ? '85%' : '100%'
              }}
            />
          </div>

          {/* Micro Status Text */}
          <div className="h-4 flex items-center justify-center">
            <p className="text-[11px] font-mono tracking-wider text-zinc-400 transition-all duration-300 flex items-center gap-1.5">
              {stage === 0 && (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  INITIALIZING ARCHIVE...
                </>
              )}
              {stage === 1 && (
                <>
                  <Cpu className="w-3 h-3 text-cyan-400" />
                  MOUNTING SQLITE FTS5 ENGINE...
                </>
              )}
              {stage === 2 && (
                <>
                  <HardDrive className="w-3 h-3 text-amber-400" />
                  VERIFYING 56 BLUEPRINTS...
                </>
              )}
              {stage >= 3 && (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">ALL 6 TIERS ONLINE</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Disclaimer */}
      <div className="pb-4 text-center">
        <p className="text-[10px] font-mono text-zinc-600 tracking-wider">
          Tap anywhere to enter
        </p>
      </div>
    </div>
  );
};
