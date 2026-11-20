export interface BibleBookMeta {
  id: string;
  index: number;
  name: string;
  testament: 'OT' | 'NT';
  chapters: number;
}

export interface BibleVersionMeta {
  id: 'kjv' | 'geneva';
  name: string;
  year: string;
  subtitle: string;
  description: string;
}

export const BIBLE_VERSIONS: BibleVersionMeta[] = [
  {
    id: 'kjv',
    name: 'King James Version (KJV)',
    year: '1611',
    subtitle: 'Classic Authorized Translation',
    description: 'The monumental 1611 translation that shaped modern English literature, civil law, and global culture.'
  },
  {
    id: 'geneva',
    name: 'Geneva Bible (Historical)',
    year: '1599',
    subtitle: 'Older Pre-KJV Translation',
    description: 'The historic English translation used by William Shakespeare, John Bunyan, and the early American pilgrims.'
  }
];

export const BIBLE_BOOKS_MANIFEST: BibleBookMeta[] = [
  // OLD TESTAMENT (39 Books)
  { id: 'genesis', index: 1, name: 'Genesis', testament: 'OT', chapters: 50 },
  { id: 'exodus', index: 2, name: 'Exodus', testament: 'OT', chapters: 40 },
  { id: 'leviticus', index: 3, name: 'Leviticus', testament: 'OT', chapters: 27 },
  { id: 'numbers', index: 4, name: 'Numbers', testament: 'OT', chapters: 36 },
  { id: 'deuteronomy', index: 5, name: 'Deuteronomy', testament: 'OT', chapters: 34 },
  { id: 'joshua', index: 6, name: 'Joshua', testament: 'OT', chapters: 24 },
  { id: 'judges', index: 7, name: 'Judges', testament: 'OT', chapters: 21 },
  { id: 'ruth', index: 8, name: 'Ruth', testament: 'OT', chapters: 4 },
  { id: '1-samuel', index: 9, name: '1 Samuel', testament: 'OT', chapters: 31 },
  { id: '2-samuel', index: 10, name: '2 Samuel', testament: 'OT', chapters: 24 },
  { id: '1-kings', index: 11, name: '1 Kings', testament: 'OT', chapters: 22 },
  { id: '2-kings', index: 12, name: '2 Kings', testament: 'OT', chapters: 25 },
  { id: '1-chronicles', index: 13, name: '1 Chronicles', testament: 'OT', chapters: 29 },
  { id: '2-chronicles', index: 14, name: '2 Chronicles', testament: 'OT', chapters: 36 },
  { id: 'ezra', index: 15, name: 'Ezra', testament: 'OT', chapters: 10 },
  { id: 'nehemiah', index: 16, name: 'Nehemiah', testament: 'OT', chapters: 13 },
  { id: 'esther', index: 17, name: 'Esther', testament: 'OT', chapters: 10 },
  { id: 'job', index: 18, name: 'Job', testament: 'OT', chapters: 42 },
  { id: 'psalms', index: 19, name: 'Psalms', testament: 'OT', chapters: 150 },
  { id: 'proverbs', index: 20, name: 'Proverbs', testament: 'OT', chapters: 31 },
  { id: 'ecclesiastes', index: 21, name: 'Ecclesiastes', testament: 'OT', chapters: 12 },
  { id: 'song-of-solomon', index: 22, name: 'Song of Solomon', testament: 'OT', chapters: 8 },
  { id: 'isaiah', index: 23, name: 'Isaiah', testament: 'OT', chapters: 66 },
  { id: 'jeremiah', index: 24, name: 'Jeremiah', testament: 'OT', chapters: 52 },
  { id: 'lamentations', index: 25, name: 'Lamentations', testament: 'OT', chapters: 5 },
  { id: 'ezekiel', index: 26, name: 'Ezekiel', testament: 'OT', chapters: 48 },
  { id: 'daniel', index: 27, name: 'Daniel', testament: 'OT', chapters: 12 },
  { id: 'hosea', index: 28, name: 'Hosea', testament: 'OT', chapters: 14 },
  { id: 'joel', index: 29, name: 'Joel', testament: 'OT', chapters: 3 },
  { id: 'amos', index: 30, name: 'Amos', testament: 'OT', chapters: 9 },
  { id: 'obadiah', index: 31, name: 'Obadiah', testament: 'OT', chapters: 1 },
  { id: 'jonah', index: 32, name: 'Jonah', testament: 'OT', chapters: 4 },
  { id: 'micah', index: 33, name: 'Micah', testament: 'OT', chapters: 7 },
  { id: 'nahum', index: 34, name: 'Nahum', testament: 'OT', chapters: 3 },
  { id: 'habakkuk', index: 35, name: 'Habakkuk', testament: 'OT', chapters: 3 },
  { id: 'zephaniah', index: 36, name: 'Zephaniah', testament: 'OT', chapters: 3 },
  { id: 'haggai', index: 37, name: 'Haggai', testament: 'OT', chapters: 2 },
  { id: 'zechariah', index: 38, name: 'Zechariah', testament: 'OT', chapters: 14 },
  { id: 'malachi', index: 39, name: 'Malachi', testament: 'OT', chapters: 4 },

  // NEW TESTAMENT (27 Books)
  { id: 'matthew', index: 40, name: 'Matthew', testament: 'NT', chapters: 28 },
  { id: 'mark', index: 41, name: 'Mark', testament: 'NT', chapters: 16 },
  { id: 'luke', index: 42, name: 'Luke', testament: 'NT', chapters: 24 },
  { id: 'john', index: 43, name: 'John', testament: 'NT', chapters: 21 },
  { id: 'acts', index: 44, name: 'Acts', testament: 'NT', chapters: 28 },
  { id: 'romans', index: 45, name: 'Romans', testament: 'NT', chapters: 16 },
  { id: '1-corinthians', index: 46, name: '1 Corinthians', testament: 'NT', chapters: 16 },
  { id: '2-corinthians', index: 47, name: '2 Corinthians', testament: 'NT', chapters: 13 },
  { id: 'galatians', index: 48, name: 'Galatians', testament: 'NT', chapters: 6 },
  { id: 'ephesians', index: 49, name: 'Ephesians', testament: 'NT', chapters: 6 },
  { id: 'philippians', index: 50, name: 'Philippians', testament: 'NT', chapters: 4 },
  { id: 'colossians', index: 51, name: 'Colossians', testament: 'NT', chapters: 4 },
  { id: '1-thessalonians', index: 52, name: '1 Thessalonians', testament: 'NT', chapters: 5 },
  { id: '2-thessalonians', index: 53, name: '2 Thessalonians', testament: 'NT', chapters: 3 },
  { id: '1-timothy', index: 54, name: '1 Timothy', testament: 'NT', chapters: 6 },
  { id: '2-timothy', index: 55, name: '2 Timothy', testament: 'NT', chapters: 4 },
  { id: 'titus', index: 56, name: 'Titus', testament: 'NT', chapters: 3 },
  { id: 'philemon', index: 57, name: 'Philemon', testament: 'NT', chapters: 1 },
  { id: 'hebrews', index: 58, name: 'Hebrews', testament: 'NT', chapters: 13 },
  { id: 'james', index: 59, name: 'James', testament: 'NT', chapters: 5 },
  { id: '1-peter', index: 60, name: '1 Peter', testament: 'NT', chapters: 5 },
  { id: '2-peter', index: 61, name: '2 Peter', testament: 'NT', chapters: 3 },
  { id: '1-john', index: 62, name: '1 John', testament: 'NT', chapters: 5 },
  { id: '2-john', index: 63, name: '2 John', testament: 'NT', chapters: 1 },
  { id: '3-john', index: 64, name: '3 John', testament: 'NT', chapters: 1 },
  { id: 'jude', index: 65, name: 'Jude', testament: 'NT', chapters: 1 },
  { id: 'revelation', index: 66, name: 'Revelation', testament: 'NT', chapters: 22 }
];

export interface VerseItem {
  verse: number;
  text: string;
}

export interface BibleBookPayload {
  id: string;
  book: string;
  version: 'kjv' | 'geneva';
  versionName: string;
  testament: 'OT' | 'NT';
  chapterCount: number;
  chapters: Record<string, VerseItem[]>;
}

// In-memory cache of loaded books to prevent refetching
const bookCache: Record<string, BibleBookPayload> = {};

export async function fetchBibleBook(version: 'kjv' | 'geneva', bookId: string): Promise<BibleBookPayload | null> {
  const cacheKey = `${version}_${bookId}`;
  if (bookCache[cacheKey]) {
    return bookCache[cacheKey];
  }

  try {
    const res = await fetch(`/bibles/${version}/${bookId}.json`);
    if (!res.ok) {
      throw new Error(`Failed to load book: ${res.statusText}`);
    }
    const data: BibleBookPayload = await res.json();
    bookCache[cacheKey] = data;
    return data;
  } catch (err) {
    console.warn(`Error loading bible book ${bookId} (${version}):`, err);
    return null;
  }
}
