import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Square,
  FastForward,
  Rewind,
  VolumeX,
  Headphones,
  X,
  Gauge,
} from 'lucide-react';
import { getBestAmericanVoices } from '../utils/speechUtils';

interface Props {
  title: string;
  category: string;
  tier: number;
  content: string;
  summary: string;
  nightVision: boolean;
  onClose: () => void;
}

/**
 * Clean markdown for natural text-to-speech audio narration
 * Strips SVG graphics, XML tags, code blocks, raw URLs, and formats headers into spoken announcements.
 */
export const cleanMarkdownForSpeech = (rawContent: string, title: string, summary: string): string[] => {
  const chunks: string[] = [];

  // Opening introduction
  chunks.push(`Guide: ${title}.`);
  if (summary && summary.trim().length > 0) {
    chunks.push(`Operational Summary: ${summary.trim()}`);
  }

  // 1. Remove SVGs, styles, scripts and HTML tags
  let cleaned = rawContent
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\/?[^>]+(>|$)/g, '');

  // 2. Remove code blocks (they sound confusing when spelled out by TTS)
  cleaned = cleaned.replace(/```[\s\S]*?```/g, ' [Refer to visual technical specification diagram]. ');

  // 3. Process lines
  const lines = cleaned.split('\n');
  let currentParagraph = '';

  for (let line of lines) {
    line = line.trim();
    if (!line) {
      if (currentParagraph.trim().length > 0) {
        chunks.push(currentParagraph.trim());
        currentParagraph = '';
      }
      continue;
    }

    // Markdown Headers
    if (line.startsWith('#')) {
      if (currentParagraph.trim().length > 0) {
        chunks.push(currentParagraph.trim());
        currentParagraph = '';
      }
      const headerText = line.replace(/^#+\s*/, '').trim();
      chunks.push(`Section: ${headerText}.`);
      continue;
    }

    // Bullet points / lists
    if (line.startsWith('- ') || line.startsWith('* ') || /^\d+\.\s/.test(line)) {
      const bulletText = line.replace(/^[-*]\s+|\d+\.\s+/, '').trim();
      // Clean inline formatting
      const cleanBullet = bulletText
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      chunks.push(`${cleanBullet}.`);
      continue;
    }

    // Blockquotes
    if (line.startsWith('>')) {
      const quoteText = line.replace(/^>\s*/, '').trim();
      const cleanQuote = quoteText
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      chunks.push(`Notice: ${cleanQuote}`);
      continue;
    }

    // Clean inline markdown
    const cleanLine = line
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '');

    currentParagraph += (currentParagraph ? ' ' : '') + cleanLine;

    // Keep chunks to manageable lengths (~200 chars) for reliable TTS utterance playback
    if (currentParagraph.length > 200 && /[.!?]$/.test(currentParagraph)) {
      chunks.push(currentParagraph.trim());
      currentParagraph = '';
    }
  }

  if (currentParagraph.trim().length > 0) {
    chunks.push(currentParagraph.trim());
  }

  // Filter out empty or punctuation-only chunks
  return chunks.filter(c => c.replace(/[^a-zA-Z0-9]/g, '').length > 3);
};

export const AudioGuidePlayer: React.FC<Props> = ({
  title,
  category,
  tier,
  content,
  summary,
  nightVision,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [chunks, setChunks] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [speechRate, setSpeechRate] = useState<number>(1.0); // 0.85x, 1.0x, 1.25x, 1.5x

  // Voice Gender: 'female' | 'male'
  const [voiceGender, setVoiceGender] = useState<'female' | 'male'>(() => {
    return (localStorage.getItem('civzero_tts_gender') as 'female' | 'male') || 'female';
  });

  const [femaleVoice, setFemaleVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [maleVoice, setMaleVoice] = useState<SpeechSynthesisVoice | null>(null);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  isPlayingRef.current = isPlaying;

  const currentIndexRef = useRef<number>(0);
  currentIndexRef.current = currentIndex;

  const chunksRef = useRef<string[]>([]);
  chunksRef.current = chunks;

  const femaleVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  femaleVoiceRef.current = femaleVoice;

  const maleVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  maleVoiceRef.current = maleVoice;

  const voiceGenderRef = useRef<'female' | 'male'>(voiceGender);
  voiceGenderRef.current = voiceGender;

  // Prepare text chunks and discover male & female system voices
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    const parsedChunks = cleanMarkdownForSpeech(content, title, summary);
    setChunks(parsedChunks);

    const loadVoices = () => {
      const selected = getBestAmericanVoices();
      setFemaleVoice(selected.female);
      setMaleVoice(selected.male);
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [content, title, summary]);

  // Play a specific chunk with voice gender & pitch settings
  const playChunk = (index: number, overrideGender?: 'female' | 'male') => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    if (index < 0 || index >= chunksRef.current.length) {
      setIsPlaying(false);
      setCurrentIndex(0);
      return;
    }

    const currentGender = overrideGender || voiceGenderRef.current;
    const textToSpeak = chunksRef.current[index];
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Apply voice and distinct acoustic pitch for female / male
    const targetVoice = currentGender === 'female' ? femaleVoiceRef.current : maleVoiceRef.current;
    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    // Humanized American English acoustic tuning:
    // Natural unmodified human formants with relaxed documentary cadence
    utterance.rate = speechRate * (currentGender === 'female' ? 0.96 : 0.94);
    utterance.pitch = currentGender === 'female' ? 1.0 : 0.95;

    utterance.onend = () => {
      if (isPlayingRef.current) {
        if (currentIndexRef.current + 1 < chunksRef.current.length) {
          setCurrentIndex(prev => prev + 1);
          playChunk(currentIndexRef.current + 1);
        } else {
          setIsPlaying(false);
          setCurrentIndex(0);
        }
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn('TTS playback note:', e.error);
      }
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
      } else {
        playChunk(currentIndex);
      }
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex + 1 < chunks.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (isPlaying) {
        playChunk(nextIdx);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      if (isPlaying) {
        playChunk(prevIdx);
      }
    }
  };

  const handleSpeedCycle = () => {
    const speeds = [0.85, 1.0, 1.25, 1.5];
    const nextIndex = (speeds.indexOf(speechRate) + 1) % speeds.length;
    const newSpeed = speeds[nextIndex];
    setSpeechRate(newSpeed);

    if (isPlaying) {
      setTimeout(() => playChunk(currentIndex), 50);
    }
  };

  const handleToggleVoiceGender = () => {
    const nextGender = voiceGender === 'female' ? 'male' : 'female';
    setVoiceGender(nextGender);
    localStorage.setItem('civzero_tts_gender', nextGender);

    if (isPlaying) {
      setTimeout(() => playChunk(currentIndex, nextGender), 50);
    }
  };

  const progressPercent = chunks.length > 0 ? Math.round(((currentIndex + 1) / chunks.length) * 100) : 0;

  if (!isSupported) {
    return (
      <div className="fixed bottom-4 left-4 right-4 max-w-lg mx-auto z-[120] p-3 rounded-xl bg-red-950/90 border border-red-800 text-red-200 text-xs font-mono flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <VolumeX className="w-4 h-4 text-red-400" />
          <span>Speech synthesis not supported in this browser.</span>
        </div>
        <button onClick={onClose} className="p-1 hover:text-white">
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[120] border-t backdrop-blur-xl transition-all duration-300 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] ${
        nightVision
          ? 'bg-[#150303]/95 border-red-900/60 text-red-100'
          : 'bg-[#0a0d13]/95 border-amber-500/30 text-zinc-100'
      }`}
    >
      {/* Top Thin Progress Bar */}
      <div className="w-full h-1 bg-zinc-800/80">
        <div
          className={`h-full transition-all duration-300 ${
            nightVision ? 'bg-red-500' : 'bg-amber-400'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 py-3 sm:py-3.5 space-y-2.5">
        {/* Top Info Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <div
              className={`p-1.5 rounded-lg border ${
                isPlaying
                  ? nightVision
                    ? 'bg-red-900/60 border-red-500 text-white animate-pulse'
                    : 'bg-amber-500/20 border-amber-500 text-amber-400 animate-pulse'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-400'
              }`}
            >
              <Headphones className="w-4 h-4" />
            </div>
            <div className="truncate">
              <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                <span className="font-bold text-amber-400">HANDS-FREE FIELD AUDIO</span>
                <span>•</span>
                <span>Tier {tier}</span>
                <span>•</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="text-xs font-mono font-bold text-zinc-200 truncate">
                {title}
              </div>
            </div>
          </div>

          {/* Close audio player */}
          <button
            onClick={() => {
              handleStop();
              onClose();
            }}
            aria-label="Close audio player"
            className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Audio Teleprompter (Spoken Paragraph Snippet) */}
        <div
          className={`p-2.5 rounded-lg border font-mono text-xs leading-relaxed max-h-14 overflow-hidden relative ${
            nightVision
              ? 'bg-red-950/40 border-red-950 text-red-200'
              : 'bg-zinc-900/70 border-zinc-800/80 text-zinc-300'
          }`}
        >
          <div className="text-[9px] uppercase tracking-wider text-amber-400/90 font-bold mb-0.5">
            Speaking Paragraph ({currentIndex + 1} / {chunks.length}):
          </div>
          <p className="line-clamp-2 italic font-sans text-[11px]">
            "{chunks[currentIndex] || 'Ready to start narration...'}"
          </p>
        </div>

        {/* Player Controls Bar */}
        <div className="flex items-center justify-between gap-2 pt-0.5">
          {/* Left Controls: Speed Selector & Voice Gender Toggle */}
          <div className="flex items-center gap-1.5">
            {/* Speed Selector */}
            <button
              onClick={handleSpeedCycle}
              className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all flex items-center gap-1 ${
                nightVision
                  ? 'bg-red-950/50 border-red-900/60 text-red-300 hover:bg-red-900/40'
                  : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              <Gauge className="w-3.5 h-3.5 text-amber-400" />
              <span>{speechRate}x</span>
            </button>

            {/* Voice Gender Toggle (Symbol Only: ♀ / ♂) */}
            <button
              onClick={handleToggleVoiceGender}
              aria-label={`Current voice: ${voiceGender}. Click to switch voice gender.`}
              title={`Voice: ${voiceGender === 'female' ? 'Female (♀)' : 'Male (♂)'}`}
              className={`w-7 h-7 rounded-lg border transition-all flex items-center justify-center ${
                voiceGender === 'female'
                  ? nightVision
                    ? 'bg-rose-950/60 border-rose-800 text-rose-300 font-bold'
                    : 'bg-rose-950/40 border-rose-500/50 text-rose-300 font-bold hover:bg-rose-900/40 shadow-sm shadow-rose-950/30'
                  : nightVision
                  ? 'bg-sky-950/60 border-sky-800 text-sky-300 font-bold'
                  : 'bg-sky-950/40 border-sky-500/50 text-sky-300 font-bold hover:bg-sky-900/40 shadow-sm shadow-sky-950/30'
              }`}
            >
              <span className="leading-none text-sm select-none">
                {voiceGender === 'female' ? '♀' : '♂'}
              </span>
            </button>
          </div>

          {/* Core Transport Controls (Rewind, Play/Pause, Next, Stop) */}
          <div className="flex items-center gap-2">
            {/* Previous chunk */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Section"
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white disabled:opacity-40 disabled:hover:text-zinc-300 transition-colors"
            >
              <Rewind className="w-4 h-4" />
            </button>

            {/* Play / Pause Primary Button */}
            <button
              onClick={handleTogglePlay}
              aria-label={isPlaying ? 'Pause Narration' : 'Start Narration'}
              className={`px-4 py-2 rounded-xl border flex items-center gap-2 font-mono text-xs font-bold transition-all shadow-lg ${
                isPlaying
                  ? nightVision
                    ? 'bg-red-900 border-red-500 text-white shadow-red-950/50'
                    : 'bg-amber-500 border-amber-400 text-black shadow-amber-500/20'
                  : nightVision
                  ? 'bg-red-950 border-red-800 text-red-200 hover:bg-red-900'
                  : 'bg-zinc-800 border-zinc-600 text-white hover:bg-zinc-700'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>

            {/* Next chunk */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= chunks.length - 1}
              aria-label="Next Section"
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white disabled:opacity-40 disabled:hover:text-zinc-300 transition-colors"
            >
              <FastForward className="w-4 h-4" />
            </button>

            {/* Stop button */}
            <button
              onClick={handleStop}
              aria-label="Stop Narration"
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-red-400 transition-colors"
            >
              <Square className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
