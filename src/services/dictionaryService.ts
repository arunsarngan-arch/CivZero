// Offline Unabridged Dictionary Service for CivZero
export interface DictionaryManifest {
  title: string;
  totalWords: number;
  generatedAt: string;
  features?: string[];
  letters: Record<string, number>;
}

export interface QuickWordItem {
  w: string;
  l: string;
  d: string;
}

export interface RawWordEntry {
  m?: string[]; // meanings (2-4 definitions)
  e?: string[]; // examples
  d?: string;   // full definition text
}

export interface WordDetail {
  word: string;
  meanings: string[];
  examples: string[];
  definition: string;
  letter: string;
  isBookmarked?: boolean;
}

const STARRED_WORDS_KEY = 'civzero_starred_words_v1';

class DictionaryService {
  private manifestCache: DictionaryManifest | null = null;
  private quickIndexCache: QuickWordItem[] | null = null;
  private letterCache: Map<string, Record<string, RawWordEntry>> = new Map();
  private starredWords: Set<string> = new Set();

  constructor() {
    this.loadStarredWords();
  }

  private loadStarredWords(): void {
    try {
      const saved = localStorage.getItem(STARRED_WORDS_KEY);
      if (saved) {
        this.starredWords = new Set(JSON.parse(saved));
      }
    } catch {
      this.starredWords = new Set();
    }
  }

  public getStarredWords(): string[] {
    return Array.from(this.starredWords);
  }

  public isBookmarked(word: string): boolean {
    return this.starredWords.has(word.toUpperCase());
  }

  public toggleBookmark(word: string): boolean {
    const upper = word.toUpperCase();
    if (this.starredWords.has(upper)) {
      this.starredWords.delete(upper);
    } else {
      this.starredWords.add(upper);
    }
    try {
      localStorage.setItem(STARRED_WORDS_KEY, JSON.stringify(Array.from(this.starredWords)));
    } catch {
      // ignore
    }
    return this.starredWords.has(upper);
  }

  public async getManifest(): Promise<DictionaryManifest> {
    if (this.manifestCache) return this.manifestCache;
    try {
      const res = await fetch('/dictionary/manifest.json');
      if (!res.ok) throw new Error('Failed to load dictionary manifest');
      this.manifestCache = await res.json();
      return this.manifestCache!;
    } catch (err) {
      console.warn('Error fetching manifest, using fallback:', err);
      return {
        title: 'CivZero Offline Lexicon',
        totalWords: 102223,
        generatedAt: new Date().toISOString(),
        letters: {}
      };
    }
  }

  public async getQuickIndex(): Promise<QuickWordItem[]> {
    if (this.quickIndexCache) return this.quickIndexCache;
    try {
      const res = await fetch('/dictionary/quick-index.json');
      if (!res.ok) throw new Error('Failed to load quick index');
      this.quickIndexCache = await res.json();
      return this.quickIndexCache!;
    } catch {
      return [];
    }
  }

  public async getLetterWords(letter: string): Promise<Record<string, RawWordEntry>> {
    const l = letter.toLowerCase();
    if (this.letterCache.has(l)) {
      return this.letterCache.get(l)!;
    }
    try {
      const res = await fetch(`/dictionary/${l}.json`);
      if (!res.ok) throw new Error(`Letter file not found: ${l}`);
      const data: Record<string, RawWordEntry> = await res.json();
      this.letterCache.set(l, data);
      return data;
    } catch (err) {
      console.warn(`Failed to fetch dictionary letter ${l}:`, err);
      return {};
    }
  }

  private normalizeEntry(word: string, letter: string, raw: RawWordEntry | string): WordDetail {
    const isBookmarked = this.isBookmarked(word);
    if (!raw) {
      return {
        word,
        meanings: ['Definition not available.'],
        examples: [],
        definition: 'Definition not available.',
        letter,
        isBookmarked
      };
    }

    if (typeof raw === 'string') {
      return {
        word,
        meanings: [raw],
        examples: [],
        definition: raw,
        letter,
        isBookmarked
      };
    }

    const meanings = (raw.m && raw.m.length > 0) ? raw.m : (raw.d ? [raw.d] : ['Definition not available.']);
    const examples = raw.e || [];
    const definition = raw.d || meanings.join('\n\n');

    return {
      word,
      meanings,
      examples,
      definition,
      letter,
      isBookmarked
    };
  }

  public async search(query: string, maxResults = 80): Promise<WordDetail[]> {
    const q = query.trim().toUpperCase();
    if (!q) {
      // Initial headwords from 'A'
      const aWords = await this.getLetterWords('a');
      return Object.entries(aWords)
        .slice(0, maxResults)
        .map(([w, raw]) => this.normalizeEntry(w, 'a', raw));
    }

    const firstChar = q.charAt(0);
    const letter = (firstChar >= 'A' && firstChar <= 'Z') ? firstChar.toLowerCase() : 'other';

    // 1. Fetch the exact letter chunk for deep and precise matching
    const letterMap = await this.getLetterWords(letter);
    const results: WordDetail[] = [];

    // Exact match first
    if (letterMap[q]) {
      results.push(this.normalizeEntry(q, letter, letterMap[q]));
    }

    // Prefix matches next
    for (const [w, raw] of Object.entries(letterMap)) {
      if (w === q) continue;
      if (w.startsWith(q)) {
        results.push(this.normalizeEntry(w, letter, raw));
        if (results.length >= maxResults) break;
      }
    }

    // Substring in headword matches if still under limit
    if (results.length < maxResults) {
      for (const [w, raw] of Object.entries(letterMap)) {
        if (w.startsWith(q)) continue;
        if (w.includes(q)) {
          results.push(this.normalizeEntry(w, letter, raw));
          if (results.length >= maxResults) break;
        }
      }
    }

    return results;
  }

  public async getWord(word: string): Promise<WordDetail | null> {
    const clean = word.trim().toUpperCase();
    if (!clean) return null;
    const firstChar = clean.charAt(0);
    const letter = (firstChar >= 'A' && firstChar <= 'Z') ? firstChar.toLowerCase() : 'other';
    const letterMap = await this.getLetterWords(letter);
    if (letterMap[clean]) {
      return this.normalizeEntry(clean, letter, letterMap[clean]);
    }
    return null;
  }

  public async getRandomWord(): Promise<WordDetail | null> {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'p', 'r', 's', 't', 'w'];
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const letterMap = await this.getLetterWords(randomLetter);
    const keys = Object.keys(letterMap);
    if (keys.length === 0) return null;
    const randomWord = keys[Math.floor(Math.random() * keys.length)];
    return this.normalizeEntry(randomWord, randomLetter, letterMap[randomWord]);
  }
}

export const dictionaryService = new DictionaryService();
