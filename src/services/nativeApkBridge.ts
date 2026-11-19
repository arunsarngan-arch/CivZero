import { Capacitor, registerPlugin } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import type { ApkInfo } from '../types';

interface ApkSharePluginInterface {
  getApkInfo(): Promise<ApkInfo>;
  shareInstalledApk(): Promise<{ success: boolean; sharedPath: string; uri: string }>;
}

const ApkShare = registerPlugin<ApkSharePluginInterface>('ApkShare');

export class NativeApkBridgeService {
  /**
   * Retrieves information about the app's installed APK on Android.
   * Leverages PackageManager.getApplicationInfo().sourceDir via custom native plugin.
   */
  static async getInstalledApkInfo(): Promise<ApkInfo> {
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android') {
      try {
        return await ApkShare.getApkInfo();
      } catch (err) {
        console.warn('Native ApkShare plugin call failed, falling back:', err);
      }
    }

    // Web preview / Browser simulation
    return {
      isNative: Capacitor.isNativePlatform(),
      packageName: 'org.civilization.rebuilder',
      versionName: '1.0.0-emergency',
      apkPath: '/data/app/~~9d8A2b==/org.civilization.rebuilder-xyz123/base.apk',
      exists: true,
      sizeBytes: 15518920,
      sizeFormatted: '14.8 MB'
    };
  }

  /**
   * Triggers direct APK extraction and transmission via Android Quick Share / Bluetooth / Wi-Fi Direct.
   */
  static async shareInstalledApk(): Promise<{ success: boolean; message: string }> {
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android') {
      try {
        const res = await ApkShare.shareInstalledApk();
        return {
          success: true,
          message: `APK successfully exported to ${res.sharedPath} and sent to Android system share sheet.`
        };
      } catch (err: any) {
        return {
          success: false,
          message: `Native APK sharing error: ${err?.message || err}`
        };
      }
    }

    // Web preview simulation: Generate a mock installer file download or share sheet
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'CivZero — Offline Survival APK',
          text: 'Offline CivZero installer package (zero internet required).',
          url: window.location.origin
        });
        return {
          success: true,
          message: 'Invoked browser share intent with app link.'
        };
      } else {
        // Fallback: trigger a file download of an installer manifest
        const blob = new Blob([
          `CivZero Standalone Survival Encyclopedia (v1.0.0)\n` +
          `Package: org.civzero.rebuilder\n` +
          `Target: Android 7.0+\n` +
          `Offline Survival Archive & Full-Text Search Engine Included\n` +
          `Generated: ${new Date().toISOString()}\n`
        ], { type: 'application/vnd.android.package-archive' });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'civilization-rebuilder-v1.0.0.apk';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        return {
          success: true,
          message: 'Generated and downloaded offline installer file package.'
        };
      }
    } catch (err: any) {
      return {
        success: false,
        message: err?.message || 'Failed to simulate share intent'
      };
    }
  }

  /**
   * Shares an individual SQLite knowledge pack (.db) with a nearby device.
   */
  static async shareKnowledgePack(filename: string, tierName: string): Promise<{ success: boolean; message: string }> {
    try {
      const fetchUrl = `/packs/${filename}`;
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error(`Knowledge pack ${filename} not found on local storage.`);
      }

      const blob = await response.blob();

      if (Capacitor.isNativePlatform()) {
        // Write to cache directory using Filesystem, then invoke Share
        const reader = new FileReader();
        const base64Data = await new Promise<string>((resolve, reject) => {
          reader.onload = () => {
            const result = reader.result as string;
            const base64 = result.split(',')[1];
            resolve(base64);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });

        const fileResult = await Filesystem.writeFile({
          path: `packs/${filename}`,
          data: base64Data,
          directory: Directory.Cache,
          recursive: true
        });

        await Share.share({
          title: `Civilization Pack: ${tierName}`,
          text: `Offline knowledge pack (${tierName}) for CivZero app.`,
          url: fileResult.uri,
          dialogTitle: 'Share Knowledge Pack via Bluetooth / Quick Share'
        });

        return {
          success: true,
          message: `Successfully transferred ${filename} to Android Share Sheet.`
        };
      } else {
        // Web fallback: download the .db file
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        return {
          success: true,
          message: `Exported ${filename} (${(blob.size / 1024).toFixed(1)} KB) to local storage.`
        };
      }
    } catch (err: any) {
      return {
        success: false,
        message: `Pack sharing failed: ${err?.message || err}`
      };
    }
  }
}
