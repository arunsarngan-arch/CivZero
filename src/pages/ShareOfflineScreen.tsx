import React, { useState, useEffect } from 'react';
import {
  Share2,
  Radio,
  Wifi,
  Bluetooth,
  HardDrive,
  Download,
  CheckCircle2,
  AlertTriangle,
  Smartphone,
  Cpu,
  Layers,
  ArrowRight,
  Send,
  Zap,
  Info
} from 'lucide-react';
import type { ApkInfo, PackManifest } from '../types';
import { NativeApkBridgeService } from '../services/nativeApkBridge';
import { DatabaseService } from '../services/databaseService';

interface ShareOfflineScreenProps {
  nightVision: boolean;
}

export const ShareOfflineScreen: React.FC<ShareOfflineScreenProps> = ({
  nightVision
}) => {
  const [apkInfo, setApkInfo] = useState<ApkInfo | null>(null);
  const [manifest, setManifest] = useState<PackManifest | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async () => {
    const info = await NativeApkBridgeService.getInstalledApkInfo();
    setApkInfo(info);
    setManifest(DatabaseService.getManifest());
  };

  const handleShareApk = async () => {
    setIsSharing(true);
    setStatusMessage('Preparing offline installer package for beam transfer...');
    const res = await NativeApkBridgeService.shareInstalledApk();
    setStatusMessage(res.message);
    setIsSharing(false);
  };

  const handleSharePack = async (filename: string, name: string) => {
    setStatusMessage(`Preparing knowledge archive ${name} for beam transfer...`);
    const res = await NativeApkBridgeService.shareKnowledgePack(filename, name);
    setStatusMessage(res.message);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* P2P Header Banner */}
      <div
        className={`p-5 rounded-2xl border transition-colors ${
          nightVision
            ? 'bg-[#150303] border-red-950 text-red-100'
            : 'bg-gradient-to-br from-[#0d1117] to-[#161b22] border-zinc-800 text-zinc-100 shadow-xl'
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Radio className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-mono tracking-tight">Zero-Internet P2P Sharing</h2>
            <p className="text-xs text-zinc-400 font-mono">
              Beam the entire encyclopedia & modular survival archives directly to other devices
            </p>
          </div>
        </div>

        <p className="text-xs text-zinc-300 font-sans leading-relaxed mt-2">
          This system is engineered for complete electrical grid failure and telecommunication collapse.
          You can transmit the full offline application and knowledge archives peer-to-peer using
          <strong className="text-white"> Android Quick Share, Bluetooth, or Wi-Fi Direct</strong> without requiring cellular data, Wi-Fi routers, or internet servers.
        </p>

        {statusMessage && (
          <div className="mt-4 p-3 rounded-lg bg-zinc-900 border border-amber-500/50 text-amber-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
            <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}
      </div>

      {/* Feature 1: Complete App Beam */}
      <div
        className={`p-5 rounded-2xl border space-y-4 ${
          nightVision
            ? 'bg-[#0e0404] border-red-950 text-red-100'
            : 'bg-[#0d1117] border-zinc-800 text-zinc-200 shadow-md'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                DIRECT DEVICE BEAM
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {apkInfo?.sizeFormatted || '14.8 MB'}
              </span>
            </div>

            <h3 className="text-base font-bold font-mono tracking-tight flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-amber-400" />
              Beam Complete Survival Encyclopedia
            </h3>
            <p className="text-xs text-zinc-400 font-sans">
              Transmits this entire standalone application directly to a nearby phone so they can run and rebuild with zero internet.
            </p>
          </div>
        </div>

        {/* Transmission Parameters */}
        <div className="p-3 rounded-xl bg-black/50 border border-zinc-800/80 font-mono text-xs space-y-1.5 text-zinc-400">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-zinc-500">Archive Package:</span>
            <span className="text-zinc-200">CivZero Standalone Edition</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-zinc-500">Transmission Medium:</span>
            <span className="text-amber-400/90 truncate max-w-[240px] sm:max-w-xs">Quick Share / Bluetooth / Direct Link</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-zinc-500">Network Dependency:</span>
            <span className="text-emerald-400">
              Zero Internet • 100% Offline Mesh Ready
            </span>
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={handleShareApk}
          disabled={isSharing}
          className="w-full py-3 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Beam Application to Nearby Device</span>
        </button>
      </div>

      {/* Feature 2: Modular Knowledge Packs Exporter */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            Share Modular Knowledge Archives
          </span>
          <span className="text-[11px] font-mono text-zinc-500">
            Zero-Internet Knowledge Packs
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {manifest?.tiers.map(t => (
            <div
              key={t.tier}
              className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                nightVision
                  ? 'bg-[#0f0404] border-red-950'
                  : 'bg-[#0d1117] border-zinc-800'
              }`}
            >
              <div className="min-w-0">
                <div className="text-xs font-bold font-mono text-zinc-200 truncate">
                  {t.name}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                  Tier {t.tier} Knowledge Archive • {t.size_formatted}
                </div>
              </div>

              <button
                onClick={() => handleSharePack(t.filename, t.name)}
                className="p-2 rounded-lg border border-zinc-700 bg-zinc-900 text-amber-400 hover:text-amber-300 hover:border-amber-500 transition-colors flex items-center gap-1 text-xs font-mono"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">BEAM</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Field Survival Mesh Transmission Instructions */}
      <div
        className={`p-4 rounded-xl border font-mono text-xs space-y-3 ${
          nightVision
            ? 'bg-[#120202] border-red-950/70 text-red-300'
            : 'bg-zinc-950 border-zinc-800 text-zinc-300'
        }`}
      >
        <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
          <Info className="w-4 h-4" />
          Field Survival P2P Transmission Protocol
        </div>

        <ol className="space-y-2 text-zinc-400 pl-4 list-decimal leading-relaxed">
          <li>
            <strong className="text-zinc-200">Zero Cellular Required:</strong> On receiving device, enable
            <strong className="text-white"> Android Quick Share</strong> or turn on <strong className="text-white">Portable Wi-Fi Hotspot</strong> (cellular data can be 100% OFF).
          </li>
          <li>
            <strong className="text-zinc-200">Direct Wireless Transfer:</strong> Tap <strong className="text-amber-400">"Beam APK"</strong> above. Android will broadcast the installer package over local ad-hoc Wi-Fi or Bluetooth.
          </li>
          <li>
            <strong className="text-zinc-200">Install Base App:</strong> On receiving phone, accept the incoming file, open <strong className="text-white">Files / Downloads</strong>, and tap <strong className="text-white">Civilization-Rebuilder.apk</strong> to install.
          </li>
          <li>
            <strong className="text-zinc-200">Full Knowledge Parity:</strong> The receiver now possesses the complete offline survival encyclopedia and can recursively beam it to subsequent survivors.
          </li>
        </ol>
      </div>
    </div>
  );
};
