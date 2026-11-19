import { RemoteVolume, StorageDestination } from '../types';
import repositoryManifest from '../data/online_repository_manifest.json';

const STORAGE_KEY_VOLUMES = 'civ_downloaded_volumes_v2';
const STORAGE_KEY_TARGET = 'civ_active_storage_target_v2';
const STORAGE_KEY_SD_PATH = 'civ_sd_card_path_v2';

export class ArchiveDownloaderService {
  private static volumes: RemoteVolume[] = [];
  private static storageDestinations: StorageDestination[] = [];
  private static activeTarget: 'internal' | 'sdcard' = 'sdcard';
  private static activeDownloads: Map<string, number> = new Map(); // volumeId -> timerId

  static initialize(): void {
    if (this.volumes.length > 0) return;

    // Load saved states
    let savedVolumeStates: Record<string, { status: string; targetStorage?: string }> = {};
    try {
      const raw = localStorage.getItem(STORAGE_KEY_VOLUMES);
      if (raw) savedVolumeStates = JSON.parse(raw);
    } catch (e) {
      console.warn('Failed to parse saved volume states', e);
    }

    try {
      const savedTarget = localStorage.getItem(STORAGE_KEY_TARGET);
      if (savedTarget === 'internal' || savedTarget === 'sdcard') {
        this.activeTarget = savedTarget;
      }
    } catch (e) {}

    // Initialize volumes
    this.volumes = (repositoryManifest.volumes as any[]).map(vol => {
      const saved = savedVolumeStates[vol.id];
      return {
        ...vol,
        status: saved?.status || vol.status || 'online',
        targetStorage: (saved?.targetStorage as 'internal' | 'sdcard') || 'sdcard',
        downloadProgress: saved?.status === 'mounted' ? 100 : 0
      };
    });

    // Initialize mock storage destinations
    this.storageDestinations = [
      {
        type: 'internal',
        name: 'Device Internal Storage',
        path: '/data/user/0/org.civilization.rebuilder/files/archives/',
        totalBytes: 128 * 1024 * 1024 * 1024, // 128 GB
        freeBytes: 38.4 * 1024 * 1024 * 1024,  // 38.4 GB free
        freeFormatted: '38.4 GB Free',
        totalFormatted: '128 GB',
        isMounted: true
      },
      {
        type: 'sdcard',
        name: 'External MicroSD / USB-OTG Card',
        path: localStorage.getItem(STORAGE_KEY_SD_PATH) || '/storage/0000-0000/CivilizationRebuild/',
        totalBytes: 256 * 1024 * 1024 * 1024, // 256 GB
        freeBytes: 184.2 * 1024 * 1024 * 1024, // 184.2 GB free
        freeFormatted: '184.2 GB Free',
        totalFormatted: '256 GB',
        isMounted: true
      }
    ];
  }

  static getVolumes(): RemoteVolume[] {
    this.initialize();
    return [...this.volumes];
  }

  static getCatalogMeta() {
    return {
      version: repositoryManifest.repository_version,
      updatedAt: repositoryManifest.updated_at,
      totalCompressed: repositoryManifest.total_catalog_size_compressed,
      totalBytes: repositoryManifest.total_catalog_size_bytes,
      totalArticles: repositoryManifest.total_catalog_articles,
      cdnEndpoint: repositoryManifest.default_cdn_endpoint
    };
  }

  static getStorageDestinations(): StorageDestination[] {
    this.initialize();
    return [...this.storageDestinations];
  }

  static getActiveTarget(): 'internal' | 'sdcard' {
    this.initialize();
    return this.activeTarget;
  }

  static setActiveTarget(target: 'internal' | 'sdcard'): void {
    this.activeTarget = target;
    localStorage.setItem(STORAGE_KEY_TARGET, target);
  }

  static updateSdCardPath(newPath: string): void {
    const sd = this.storageDestinations.find(d => d.type === 'sdcard');
    if (sd) {
      sd.path = newPath;
      localStorage.setItem(STORAGE_KEY_SD_PATH, newPath);
    }
  }

  /**
   * Start downloading an archive volume
   */
  static startDownload(
    volumeId: string, 
    onProgressUpdate: (vol: RemoteVolume) => void,
    onComplete: (vol: RemoteVolume) => void
  ): void {
    this.initialize();
    const volume = this.volumes.find(v => v.id === volumeId);
    if (!volume) return;

    volume.status = 'downloading';
    volume.downloadProgress = volume.downloadProgress || 0;
    volume.targetStorage = this.activeTarget;
    volume.downloadSpeed = '38.5 MB/s';

    this.saveState();
    onProgressUpdate(volume);

    // Simulate high-speed parallel stream download
    const interval = window.setInterval(() => {
      if (!volume.downloadProgress) volume.downloadProgress = 0;
      volume.downloadProgress += 12;

      // Fluctuating download speed
      const speed = (32 + Math.random() * 18).toFixed(1);
      volume.downloadSpeed = `${speed} MB/s`;

      if (volume.downloadProgress >= 100) {
        volume.downloadProgress = 100;
        volume.status = 'mounted';
        volume.downloadSpeed = undefined;
        clearInterval(interval);
        this.activeDownloads.delete(volumeId);
        this.saveState();
        onComplete(volume);
      } else {
        this.saveState();
        onProgressUpdate(volume);
      }
    }, 400);

    this.activeDownloads.set(volumeId, interval);
  }

  /**
   * Pause an active download
   */
  static pauseDownload(volumeId: string): void {
    const timer = this.activeDownloads.get(volumeId);
    if (timer) {
      clearInterval(timer);
      this.activeDownloads.delete(volumeId);
    }
    const volume = this.volumes.find(v => v.id === volumeId);
    if (volume) {
      volume.status = 'paused';
      volume.downloadSpeed = undefined;
      this.saveState();
    }
  }

  /**
   * Unmount / remove a downloaded volume from storage
   */
  static unmountVolume(volumeId: string): void {
    const volume = this.volumes.find(v => v.id === volumeId);
    if (!volume) return;

    volume.status = 'online';
    volume.downloadProgress = 0;
    volume.downloadSpeed = undefined;
    this.saveState();
  }

  private static saveState(): void {
    const states: Record<string, { status: string; targetStorage?: string }> = {};
    for (const v of this.volumes) {
      if (v.status !== 'online') {
        states[v.id] = {
          status: v.status,
          targetStorage: v.targetStorage
        };
      }
    }
    localStorage.setItem(STORAGE_KEY_VOLUMES, JSON.stringify(states));
  }
}