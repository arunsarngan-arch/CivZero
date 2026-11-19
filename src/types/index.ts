export interface Tier {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  badge: string;
  icon: string;
  guide_count: number;
  is_installed: boolean;
}

export interface Guide {
  id: string;
  tier: number;
  tier_name: string;
  title: string;
  category: string;
  read_time: string;
  difficulty: 'Low' | 'Medium' | 'High';
  tags: string;
  summary: string;
  content: string;
  created_at?: string;
  is_bookmarked?: boolean;
}

export interface PackManifest {
  version: string;
  generated_at: string;
  total_guides: number;
  master_pack: {
    filename: string;
    size_bytes: number;
    size_formatted: string;
  };
  tiers: {
    tier: number;
    name: string;
    filename: string;
    guide_count: number;
    size_bytes: number;
    size_formatted: string;
  }[];
}

export interface StorageStats {
  totalBytes: number;
  formattedSize: string;
  totalGuides: number;
  installedTiers: number;
  totalTiers: number;
  lastSynced: string;
}

export interface ApkInfo {
  isNative: boolean;
  packageName: string;
  versionName: string;
  apkPath: string;
  exists: boolean;
  sizeBytes: number;
  sizeFormatted: string;
}

export type VolumeCategory = 
  | 'Medical & Surgery'
  | 'Engineering & Mechanics'
  | 'Universal Encyclopedia'
  | 'Science, Math & Computing'
  | 'Agronomy & Seed Science'
  | 'Emergency Survival Core';

export interface RemoteVolume {
  id: string;
  title: string;
  category: VolumeCategory;
  tier: number;
  description: string;
  articleCount: number;
  downloadSizeFormatted: string;
  downloadSizeBytes: number;
  uncompressedSizeFormatted: string;
  uncompressedSizeBytes: number;
  sourceAttribution: string;
  version: string;
  format: 'SQLite Indexed Pack (.db)' | 'Open ZIM Container (.zim)' | 'Zstandard Shard (.zst)';
  status: 'online' | 'downloading' | 'paused' | 'mounted';
  downloadProgress?: number;
  downloadSpeed?: string;
  targetStorage?: 'internal' | 'sdcard';
  downloadUrl?: string;
  torrentMagnet?: string;
}

export interface StorageDestination {
  type: 'internal' | 'sdcard';
  name: string;
  path: string;
  totalBytes: number;
  freeBytes: number;
  freeFormatted: string;
  totalFormatted: string;
  isMounted: boolean;
}

export type ViewTab = 'guides' | 'holybooks' | 'search' | 'tools' | 'techtree' | 'packs' | 'share' | 'bookmarks';
