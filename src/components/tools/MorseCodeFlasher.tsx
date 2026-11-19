import React, { useState, useEffect, useRef } from 'react';
import { Radio, Play, Square, AlertOctagon, Volume2, VolumeX, Eye } from 'lucide-react';

interface MorseCodeFlasherProps {
  nightVision: boolean;
}

const MORSE_MAP: Record<string, string> = {
  'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
  'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
  'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
  'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
  'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
  'Z': '--..',  '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '0': '-----', ' ': '/'
};

export const MorseCodeFlasher: React.FC<MorseCodeFlasherProps> = ({ nightVision }) => {
  const [inputMessage, setInputMessage] = useState('SOS');
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isStrobeActive, setIsStrobeActive] = useState(false);
  const [currentSymbol, setCurrentSymbol] = useState<string>('');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Encode text into Morse sequence
  const encodedMorse = inputMessage
    .toUpperCase()
    .split('')
    .map(c => MORSE_MAP[c] || '')
    .join(' ');

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playTone = (durationMs: number): Promise<void> => {
    return new Promise((resolve) => {
      setIsStrobeActive(true);

      let osc: OscillatorNode | null = null;
      let gain: GainNode | null = null;

      if (soundEnabled) {
        try {
          const ctx = getAudioContext();
          osc = ctx.createOscillator();
          gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(800, ctx.currentTime); // Standard 800Hz CW pitch
          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
        } catch (e) {
          console.warn('Audio play failed:', e);
        }
      }

      setTimeout(() => {
        if (osc) {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {}
        }
        setIsStrobeActive(false);
        resolve();
      }, durationMs);
    });
  };

  const sleep = (ms: number, signal: AbortSignal): Promise<void> => {
    return new Promise((resolve, reject) => {
      const id = setTimeout(resolve, ms);
      signal.addEventListener('abort', () => {
        clearTimeout(id);
        reject(new Error('Aborted'));
      });
    });
  };

  const startTransmission = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    // Unit timing standard: Dot = 1 unit (120ms), Dash = 3 units (360ms)
    const DOT = 120;
    const DASH = 360;
    const INTRA_CHAR = 120; // 1 unit between symbols in a letter
    const INTER_LETTER = 360; // 3 units between letters
    const INTER_WORD = 840; // 7 units between words

    try {
      while (!signal.aborted) {
        const letters = inputMessage.toUpperCase().split('');
        for (const char of letters) {
          if (signal.aborted) break;
          const morse = MORSE_MAP[char];

          if (char === ' ' || !morse) {
            await sleep(INTER_WORD, signal);
            continue;
          }

          setCurrentSymbol(char);

          for (let i = 0; i < morse.length; i++) {
            if (signal.aborted) break;
            const sym = morse[i];
            const dur = sym === '-' ? DASH : DOT;
            await playTone(dur);
            if (i < morse.length - 1) {
              await sleep(INTRA_CHAR, signal);
            }
          }

          await sleep(INTER_LETTER, signal);
        }

        // Delay between full message repeats
        await sleep(1500, signal);
      }
    } catch (e) {
      // stopped by user
    } finally {
      setIsPlaying(false);
      setIsStrobeActive(false);
      setCurrentSymbol('');
    }
  };

  const stopTransmission = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsPlaying(false);
    setIsStrobeActive(false);
  };

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div
      className={`p-5 rounded-2xl border space-y-4 transition-colors relative overflow-hidden ${
        isStrobeActive
          ? nightVision
            ? 'bg-red-900 border-red-500 shadow-2xl ring-4 ring-red-600'
            : 'bg-amber-500 border-amber-300 text-black shadow-2xl ring-4 ring-amber-400'
          : nightVision
          ? 'bg-[#120303] border-red-950 text-red-100'
          : 'bg-[#0d1117] border-zinc-800 text-zinc-100 shadow-xl'
      }`}
    >
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-tight">Morse Code Emergency Beacon</h3>
            <p className="text-xs text-zinc-400 font-mono">High-visibility optical strobe + 800Hz audio beeper</p>
          </div>
        </div>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
            soundEnabled
              ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
              : 'bg-zinc-800 border-zinc-700 text-zinc-400'
          }`}
          title={soundEnabled ? 'Mute 800Hz tone' : 'Enable 800Hz tone'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Input Message & Presets */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>Beacon Transmission Text:</span>
          <span className="text-amber-400 font-bold">{inputMessage.length} Characters</span>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={e => setInputMessage(e.target.value.toUpperCase().slice(0, 30))}
            placeholder="TYPE MESSAGE (E.G. SOS OR NEED WATER)..."
            disabled={isPlaying}
            className="flex-1 px-3 py-2.5 rounded-xl bg-black/60 border border-zinc-700 font-mono text-sm uppercase text-amber-400 outline-none focus:border-amber-400"
          />
          <button
            onClick={() => setInputMessage('SOS')}
            disabled={isPlaying}
            className="px-3 py-2.5 rounded-xl bg-red-950/60 border border-red-800 text-red-300 font-mono text-xs font-bold hover:bg-red-900/60 transition-colors"
          >
            SOS
          </button>
        </div>
      </div>

      {/* Morse Translation Stream */}
      <div className="p-3 rounded-xl bg-black/60 border border-zinc-800/80 font-mono space-y-1">
        <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Morse Code Encoding Stream:</div>
        <div className="text-base tracking-widest text-emerald-400 break-all font-mono">
          {encodedMorse || '... --- ...'}
        </div>
        {currentSymbol && (
          <div className="text-xs text-amber-300 font-bold">
            Transmitting: <span className="text-white text-base px-1.5 py-0.5 rounded bg-amber-500/20">{currentSymbol}</span>
          </div>
        )}
      </div>

      {/* Main Trigger Buttons */}
      <div className="pt-1">
        {!isPlaying ? (
          <button
            onClick={startTransmission}
            className="w-full py-3.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white shadow-lg shadow-red-900/40 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Broadcast Strobe &amp; Audio Beacon</span>
          </button>
        ) : (
          <button
            onClick={stopTransmission}
            className="w-full py-3.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 animate-pulse"
          >
            <Square className="w-4 h-4 fill-current" />
            <span>Halt Emergency Beacon</span>
          </button>
        )}
      </div>
    </div>
  );
};
