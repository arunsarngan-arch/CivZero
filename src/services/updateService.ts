export interface UpdateInfo {
  version: string;
  versionCode: number;
  releaseDate: string;
  changelog: string[];
  downloadUrl: string;
  githubRepo?: string;
}

export const CURRENT_APP_VERSION = '1.1.1';
export const CURRENT_VERSION_CODE = 3;

// Default feed URL pointing to the raw GitHub version.json
export const DEFAULT_UPDATE_FEED_URL = 'https://raw.githubusercontent.com/arunsarngan-arch/CivZero/main/version.json';

class UpdateService {
  private updateCheckTimeoutMs = 5000;

  public async checkForUpdate(customFeedUrl?: string): Promise<{
    hasUpdate: boolean;
    updateInfo: UpdateInfo | null;
    isOffline?: boolean;
    error?: string;
  }> {
    // 1. Silent offline guard: never block offline functionality
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      return {
        hasUpdate: false,
        updateInfo: null,
        isOffline: true,
        error: 'System is in air-gapped offline mode. Connect to check for updates.'
      };
    }

    const feedUrl = customFeedUrl || this.getCustomFeedUrl() || DEFAULT_UPDATE_FEED_URL;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.updateCheckTimeoutMs);

      const response = await fetch(feedUrl, {
        cache: 'no-store',
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        return {
          hasUpdate: false,
          updateInfo: null,
          error: `HTTP ${response.status}: Unable to fetch version metadata.`
        };
      }

      const remoteData: UpdateInfo = await response.json();

      // Check if remote version is newer than current
      const isNewer = remoteData.versionCode > CURRENT_VERSION_CODE ||
        this.compareSemver(remoteData.version, CURRENT_APP_VERSION) > 0;

      return {
        hasUpdate: isNewer,
        updateInfo: remoteData
      };
    } catch (err: any) {
      return {
        hasUpdate: false,
        updateInfo: null,
        error: err.name === 'AbortError'
          ? 'Update check timed out. Archive operating offline.'
          : 'Could not reach update server.'
      };
    }
  }

  public getCustomFeedUrl(): string | null {
    try {
      return localStorage.getItem('civzero_custom_update_feed');
    } catch {
      return null;
    }
  }

  public setCustomFeedUrl(url: string): void {
    try {
      localStorage.setItem('civzero_custom_update_feed', url.trim());
    } catch {
      // ignore
    }
  }

  public startDownload(downloadUrl: string): void {
    if (!downloadUrl) return;
    // Open direct download link in browser or native system downloader
    window.open(downloadUrl, '_system');
  }

  private compareSemver(v1: string, v2: string): number {
    const p1 = v1.replace(/^v/, '').split('.').map(Number);
    const p2 = v2.replace(/^v/, '').split('.').map(Number);
    for (let i = 0; i < Math.max(p1.length, p2.length); i++) {
      const num1 = p1[i] || 0;
      const num2 = p2[i] || 0;
      if (num1 > num2) return 1;
      if (num1 < num2) return -1;
    }
    return 0;
  }
}

export const updateService = new UpdateService();
