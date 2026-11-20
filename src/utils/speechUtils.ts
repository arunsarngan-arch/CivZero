// High-Fidelity American English Voice Selector & Humanized TTS Engine
// Modeled after in-browser neural voice discovery from TrimFile Studio

export interface SelectedAmericanVoices {
  female: SpeechSynthesisVoice | null;
  male: SpeechSynthesisVoice | null;
  femaleName: string;
  maleName: string;
}

export function getBestAmericanVoices(): SelectedAmericanVoices {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return { female: null, male: null, femaleName: 'American Female', maleName: 'American Male' };
  }

  const allVoices = window.speechSynthesis.getVoices();
  if (!allVoices || allVoices.length === 0) {
    return { female: null, male: null, femaleName: 'American Female', maleName: 'American Male' };
  }

  // 1. Strictly prioritize American English (en-US, en_US)
  // Filters out British (en-GB), Australian (en-AU), etc.
  const usVoices = allVoices.filter((v) => {
    const l = (v.lang || '').replace('_', '-').toLowerCase();
    return l === 'en-us' || l.startsWith('en-us');
  });

  const pool = usVoices.length > 0 ? usVoices : allVoices.filter((v) => (v.lang || '').toLowerCase().startsWith('en'));

  // Priority ranking for Female American:
  // Microsoft Natural/Neural voices on Edge/Windows or Google US English on Chrome provide
  // the highest quality human-sounding phonemes with zero robotic artifacting.
  const femalePatterns = [
    /jenny.*natural/i,
    /aria.*natural/i,
    /google.*us.*english/i,
    /google.*us/i,
    /jenny/i,
    /aria/i,
    /samantha/i,
    /ava/i,
    /allison/i,
    /zira/i,
    /female/i,
  ];

  // Priority ranking for Male American:
  const malePatterns = [
    /guy.*natural/i,
    /christopher.*natural/i,
    /eric.*natural/i,
    /google.*us.*male/i,
    /guy/i,
    /christopher/i,
    /eric/i,
    /alex/i,
    /tom/i,
    /david/i,
    /male/i,
  ];

  let femaleVoice: SpeechSynthesisVoice | null = null;
  for (const pattern of femalePatterns) {
    const match = pool.find((v) => pattern.test(v.name));
    if (match) {
      femaleVoice = match;
      break;
    }
  }

  let maleVoice: SpeechSynthesisVoice | null = null;
  for (const pattern of malePatterns) {
    const match = pool.find((v) => pattern.test(v.name) && v !== femaleVoice);
    if (match) {
      maleVoice = match;
      break;
    }
  }

  // Fallbacks if not explicitly found by name
  if (!femaleVoice) {
    femaleVoice = pool[0] || allVoices[0] || null;
  }
  if (!maleVoice) {
    maleVoice = pool.find((v) => v !== femaleVoice) || pool[1] || allVoices[0] || null;
  }

  const cleanVoiceName = (v: SpeechSynthesisVoice | null, fallback: string) => {
    if (!v) return fallback;
    return v.name
      .replace(/Microsoft |Online |\(Natural\) |English \(United States\)|Google /gi, '')
      .replace(/[\(\)-]/g, '')
      .trim();
  };

  return {
    female: femaleVoice,
    male: maleVoice,
    femaleName: cleanVoiceName(femaleVoice, 'American Female'),
    maleName: cleanVoiceName(maleVoice, 'American Male'),
  };
}

/**
 * Clean text to introduce natural human speech cadence:
 * Expands technical abbreviations and inserts clean pauses.
 */
export function humanizeTextForSpeech(rawText: string): string {
  return rawText
    .replace(/[#*`_~]/g, '') // Strip markdown formatting
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Extract markdown links
    .replace(/\b(\d+)\s*L\/min\b/gi, '$1 liters per minute')
    .replace(/\bpH\b/g, 'P H')
    .replace(/\b(\d+)°C\b/g, '$1 degrees Celsius')
    .replace(/\b(\d+)°F\b/g, '$1 degrees Fahrenheit')
    .replace(/\bppm\b/gi, 'parts per million')
    .replace(/\bpsi\b/gi, 'P S I')
    .replace(/\bBCE\b/g, 'B C E')
    .replace(/\bCE\b/g, 'C E')
    .replace(/\bEx\s*(\d+):(\d+)\b/gi, 'Exodus chapter $1 verse $2')
    .replace(/\bMatt\s*(\d+):(\d+)\b/gi, 'Matthew chapter $1 verse $2')
    .replace(/\bPs\s*(\d+):(\d+)\b/gi, 'Psalm $1 verse $2')
    .replace(/\s+/g, ' ')
    .trim();
}
