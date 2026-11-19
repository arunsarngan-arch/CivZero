import React, { useState, useEffect } from 'react';
import {
  HardDrive,
  Download,
  Trash2,
  Share2,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  RefreshCw,
  Layers,
  ArrowDownToLine,
  CloudDownload,
  Smartphone,
  ExternalLink,
  Pause,
  Play,
  Copy,
  Check,
  FolderOpen,
  Info,
  Server,
  Sparkles,
  DownloadCloud
} from 'lucide-react';
import type { Tier, PackManifest, StorageStats, RemoteVolume, StorageDestination, VolumeCategory } from '../types';
import { DatabaseService } from '../services/databaseService';
import { NativeApkBridgeService } from '../services/nativeApkBridge';
import { ArchiveDownloaderService } from '../services/archiveDownloaderService';
import { updateService, CURRENT_APP_VERSION, type UpdateInfo } from '../services/updateService';

interface PackManagerScreenProps {
  nightVision: boolean;
  onStorageChange: () => void;
  onTriggerUpdateModal?: (info: UpdateInfo) => void;
}

export const PackManagerScreen: React.FC<PackManagerScreenProps> = ({
  nightVision,
  onStorageChange,
  onTriggerUpdateModal
}) => {
  const [activeTab, setActiveTab] = useState<'local' | 'cloud'>('local');
  const [tiers, setTiers] = useState<Tier[]>([]);
  const [stats, setStats] = useState<StorageStats | null>(null);
  const [manifest, setManifest] = useState<PackManifest | null>(null);
  const [integrityStatus, setIntegrityStatus] = useState<string | null>(null);
  const [busyTier, setBusyTier] = useState<number | null>(null);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  // In-App Updater states
  const [checkingUpdate, setCheckingUpdate] = useState(false);
  const [updateStatusText, setUpdateStatusText] = useState<string | null>(null);
  const [showFeedInput, setShowFeedInput] = useState(false);
  const [feedUrlInput, setFeedUrlInput] = useState(() => updateService.getCustomFeedUrl() || '');

  // Cloud 200+ GB Repository states
  const [remoteVolumes, setRemoteVolumes] = useState<RemoteVolume[]>([]);
  const [storageDestinations, setStorageDestinations] = useState<StorageDestination[]>([]);
  const [activeTarget, setActiveTarget] = useState<'internal' | 'sdcard'>('sdcard');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedMagnet, setCopiedMagnet] = useState<string | null>(null);
  const [isEditingSdPath, setIsEditingSdPath] = useState(false);
  const [sdPathInput, setSdPathInput] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [t, s] = await Promise.all([
      DatabaseService.getTiers(),
      DatabaseService.getStorageStats()
    ]);
    setTiers(t);
    setStats(s);
    setManifest(DatabaseService.getManifest());

    // Load cloud archive data
    ArchiveDownloaderService.initialize();
    setRemoteVolumes(ArchiveDownloaderService.getVolumes());
    const dests = ArchiveDownloaderService.getStorageDestinations();
    setStorageDestinations(dests);
    setActiveTarget(ArchiveDownloaderService.getActiveTarget());
    const sd = dests.find(d => d.type === 'sdcard');
    if (sd) setSdPathInput(sd.path);
  };

  const handleTogglePack = async (tier: Tier) => {
    setBusyTier(tier.id);
    if (tier.is_installed) {
      await DatabaseService.uninstallTierPack(tier.id);
      setActionMessage(`Tier ${tier.id} uninstalled from offline storage.`);
    } else {
      await DatabaseService.installTierPack(tier.id);
      setActionMessage(`Tier ${tier.id} knowledge pack installed and indexed for offline access.`);
    }
    await loadData();
    onStorageChange();
    setBusyTier(null);
    setTimeout(() => setActionMessage(null), 3000);
  };

  const handleVerifyIntegrity = async () => {
    setIntegrityStatus('Verifying knowledge archive integrity and blueprint checksums...');
    const result = await DatabaseService.verifyDatabaseIntegrity();
    setIntegrityStatus(result.message);
    setTimeout(() => setIntegrityStatus(null), 4000);
  };

  const handleExportDatabase = async (filename: string, name: string) => {
    const res = await NativeApkBridgeService.shareKnowledgePack(filename, name);
    setActionMessage(res.message);
    setTimeout(() => setActionMessage(null), 4000);
  };

  const handleCheckUpdate = async () => {
    setCheckingUpdate(true);
    setUpdateStatusText(null);
    const res = await updateService.checkForUpdate();
    setCheckingUpdate(false);
    if (res.hasUpdate && res.updateInfo) {
      setUpdateStatusText(`New version CivZero v${res.updateInfo.version} is available!`);
      if (onTriggerUpdateModal) {
        onTriggerUpdateModal(res.updateInfo);
      }
    } else if (res.isOffline) {
      setUpdateStatusText('Air-gapped offline mode. Connect to check for updates.');
    } else if (res.error) {
      setUpdateStatusText(res.error);
    } else {
      setUpdateStatusText(`✓ CivZero v${CURRENT_APP_VERSION} is currently up to date.`);
    }
    setTimeout(() => setUpdateStatusText(null), 7000);
  };

  const handleSaveFeed = () => {
    updateService.setCustomFeedUrl(feedUrlInput);
    setShowFeedInput(false);
    setActionMessage('Custom update repository URL saved.');
    setTimeout(() => setActionMessage(null), 3000);
  };

  // Cloud download handlers
  const handleStartDownload = (volumeId: string) => {
    ArchiveDownloaderService.startDownload(
      volumeId,
      updatedVol => {
        setRemoteVolumes(prev => prev.map(v => v.id === updatedVol.id ? { ...updatedVol } : v));
      },
      completedVol => {
        setRemoteVolumes(prev => prev.map(v => v.id === completedVol.id ? { ...completedVol } : v));
        setActionMessage(`Mounted ${completedVol.title} (${completedVol.downloadSizeFormatted}) into offline search index.`);
        setTimeout(() => setActionMessage(null), 4000);
        onStorageChange();
      }
    );
  };

  const handlePauseDownload = (volumeId: string) => {
    ArchiveDownloaderService.pauseDownload(volumeId);
    setRemoteVolumes(ArchiveDownloaderService.getVolumes());
  };

  const handleUnmountVolume = (volumeId: string) => {
    ArchiveDownloaderService.unmountVolume(volumeId);
    setRemoteVolumes(ArchiveDownloaderService.getVolumes());
    setActionMessage(`Unmounted volume from storage.`);
    setTimeout(() => setActionMessage(null), 3000);
  };

  const handleSelectStorageTarget = (target: 'internal' | 'sdcard') => {
    setActiveTarget(target);
    ArchiveDownloaderService.setActiveTarget(target);
  };

  const handleSaveSdPath = () => {
    ArchiveDownloaderService.updateSdCardPath(sdPathInput);
    setStorageDestinations(ArchiveDownloaderService.getStorageDestinations());
    setIsEditingSdPath(false);
    setActionMessage('Updated external storage directory path.');
    setTimeout(() => setActionMessage(null), 3000);
  };

  const handleCopyMagnet = (magnet: string, id: string) => {
    navigator.clipboard.writeText(magnet);
    setCopiedMagnet(id);
    setTimeout(() => setCopiedMagnet(null), 2000);
  };

  const getTierColor = (t: number) => {
    switch (t) {
      case 1: return '#ef4444';
      case 2: return '#f59e0b';
      case 3: return '#eab308';
      case 4: return '#10b981';
      case 5: return '#06b6d4';
      case 6: return '#8b5cf6';
      default: return '#cbd5e1';
    }
  };

  const categories = ['All', 'Medical & Surgery', 'Engineering & Mechanics', 'Universal Encyclopedia', 'Science, Math & Computing', 'Agronomy & Seed Science'];

  const filteredVolumes = remoteVolumes.filter(vol => {
    if (selectedCategory === 'All') return true;
    return vol.category === selectedCategory;
  });

  const catalogMeta = ArchiveDownloaderService.getCatalogMeta();

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Main Navigation Tabs: Local Storage vs Online Cloud */}
      <div className="flex rounded-xl bg-zinc-900/90 p-1 border border-zinc-800">
        <button
          onClick={() => setActiveTab('local')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'local'
              ? nightVision
                ? 'bg-red-950 text-white border border-red-700 shadow-lg'
                : 'bg-amber-500 text-black shadow-lg font-bold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <HardDrive className="w-4 h-4" />
          <span>Local Device Storage</span>
        </button>

        <button
          onClick={() => setActiveTab('cloud')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'cloud'
              ? nightVision
                ? 'bg-red-950 text-white border border-red-700 shadow-lg'
                : 'bg-amber-500 text-black shadow-lg font-bold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <CloudDownload className="w-4 h-4" />
          <span>Online Knowledge Cloud (200+ GB)</span>
        </button>
      </div>

      {/* Action message banner */}
      {actionMessage && (
        <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{actionMessage}</span>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 1: LOCAL DEVICE STORAGE                                 */}
      {/* ============================================================ */}
      {activeTab === 'local' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Storage Dashboard Widget */}
          <div
            className={`p-5 rounded-2xl border transition-colors ${
              nightVision
                ? 'bg-[#120303] border-red-950 text-red-100'
                : 'bg-[#0d1117] border-zinc-800 text-zinc-100 shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold font-mono tracking-tight">Offline Knowledge Storage</h2>
                  <p className="text-xs text-zinc-400 font-mono">Civilization Knowledge Base Footprint</p>
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg font-bold font-mono text-emerald-400">
                  {stats?.formattedSize || '0 KB'}
                </div>
                <div className="text-[10px] font-mono text-zinc-500">
                  {stats?.totalGuides} Cached Guides
                </div>
              </div>
            </div>

            {/* Storage Bar Indicator */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>Local Capacity Allocation</span>
                <span>{stats?.installedTiers}/{stats?.totalTiers} Tiers Active (100% Offline)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden flex">
                {manifest?.tiers.map(t => {
                  const tierObj = tiers.find(item => item.id === t.tier);
                  if (!tierObj?.is_installed) return null;
                  const widthPct = Math.max(15, (t.size_bytes / (stats?.totalBytes || 1)) * 100);

                  return (
                    <div
                      key={t.tier}
                      style={{
                        width: `${widthPct}%`,
                        backgroundColor: getTierColor(t.tier)
                      }}
                      title={`Tier ${t.tier}: ${t.size_formatted}`}
                      className="h-full border-r border-black/50 transition-all"
                    />
                  );
                })}
              </div>
            </div>

            {/* Database Integrity Diagnostic Banner */}
            {integrityStatus && (
              <div className="mt-4 p-3 rounded-lg bg-cyan-950/40 border border-cyan-800 text-cyan-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                <FileCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{integrityStatus}</span>
              </div>
            )}

            {/* Master Database Actions */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-zinc-800/80">
              <button
                onClick={handleVerifyIntegrity}
                className="px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
              >
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verify Archive Integrity</span>
              </button>

              <button
                onClick={() => handleExportDatabase('civilization_master.db', 'Complete Master Civilization Archive')}
                className="px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-amber-400" />
                <span>Export Master Archive</span>
              </button>
            </div>

            {/* In-App Self-Updater Card */}
            <div className="mt-4 pt-4 border-t border-zinc-800/80">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg border font-mono ${
                      nightVision
                        ? 'bg-red-950 border-red-800 text-red-400'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                    }`}
                  >
                    <DownloadCloud className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold font-mono tracking-tight flex items-center gap-2">
                      CivZero Software Engine
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-amber-400 border border-zinc-700">
                        v{CURRENT_APP_VERSION}
                      </span>
                    </h3>
                    <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                      Direct In-App Updates & Releases (Bypasses App Store)
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCheckUpdate}
                  disabled={checkingUpdate}
                  className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3 h-3 ${checkingUpdate ? 'animate-spin' : ''}`} />
                  <span>{checkingUpdate ? 'Checking...' : 'Check for Updates'}</span>
                </button>
              </div>

              {/* Status Message */}
              {updateStatusText && (
                <div className="mt-3 p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-300 flex items-center gap-2 animate-fadeIn">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{updateStatusText}</span>
                </div>
              )}

              {/* Advanced Feed URL Toggle */}
              <div className="mt-3 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Update Channel: GitHub Official Releases</span>
                <button
                  onClick={() => setShowFeedInput(!showFeedInput)}
                  className="text-amber-400/80 hover:underline"
                >
                  {showFeedInput ? 'Close' : 'Configure Repository'}
                </button>
              </div>

              {showFeedInput && (
                <div className="mt-2 p-2.5 rounded-lg bg-black/40 border border-zinc-800 space-y-2 animate-fadeIn">
                  <label className="text-[10px] font-mono text-zinc-400 block">
                    Custom Update Feed URL (version.json):
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={feedUrlInput}
                      onChange={e => setFeedUrlInput(e.target.value)}
                      placeholder="https://raw.githubusercontent.com/.../version.json"
                      className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-1 text-[11px] font-mono text-zinc-200 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      onClick={handleSaveFeed}
                      className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-amber-400 font-bold border border-zinc-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Modular Knowledge Packs List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                Modular Knowledge Packs
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Modular Offline Knowledge Tiers
              </span>
            </div>

            <div className="space-y-3">
              {tiers.map(tier => {
                const manifestTier = manifest?.tiers.find(t => t.tier === tier.id);
                const isInstalled = tier.is_installed;
                const isBusy = busyTier === tier.id;
                const tierColor = getTierColor(tier.id);

                return (
                  <div
                    key={tier.id}
                    className={`p-4 rounded-xl border transition-all ${
                      nightVision
                        ? 'bg-[#0e0404] border-red-950 text-red-100'
                        : 'bg-[#0d1117] border-zinc-800 text-zinc-200 shadow-md'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      {/* Left Info */}
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            style={{
                              color: tierColor,
                              backgroundColor: `${tierColor}15`,
                              borderColor: `${tierColor}50`
                            }}
                            className="px-2 py-0.5 rounded text-[10px] font-mono font-bold border tracking-wider uppercase"
                          >
                            TIER {tier.id} PACK
                          </span>

                          <span className="text-xs font-mono text-zinc-400">
                            {manifestTier?.size_formatted || '120 KB'}
                          </span>

                          <span className="text-xs font-mono text-zinc-500">•</span>

                          <span className="text-xs font-mono text-zinc-400">
                            {tier.guide_count} Articles
                          </span>
                        </div>

                        <h3 className="text-sm font-bold font-mono tracking-tight">
                          {tier.name}
                        </h3>

                        <p className="text-xs text-zinc-400 line-clamp-1 font-sans">
                          {tier.description}
                        </p>
                      </div>

                      {/* Right Actions */}
                      <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                        <button
                          onClick={() => handleExportDatabase(manifestTier?.filename || `tier_${tier.id}_pack.db`, tier.name)}
                          title="Export this Tier's offline knowledge archive"
                          className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleTogglePack(tier)}
                          disabled={isBusy}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                            isInstalled
                              ? 'bg-red-950/40 border-red-800 text-red-300 hover:bg-red-900/60'
                              : 'bg-amber-500 border-amber-400 text-black hover:bg-amber-400'
                          }`}
                        >
                          {isBusy ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : isInstalled ? (
                            <Trash2 className="w-3.5 h-3.5" />
                          ) : (
                            <Download className="w-3.5 h-3.5" />
                          )}
                          <span>{isInstalled ? 'UNINSTALL' : 'INSTALL'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 2: ONLINE KNOWLEDGE CLOUD (200+ GB REPOSITORY)           */}
      {/* ============================================================ */}
      {activeTab === 'cloud' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 200+ GB Central Repository Header */}
          <div
            className={`p-5 rounded-2xl border transition-colors ${
              nightVision
                ? 'bg-[#150303] border-red-950 text-red-100'
                : 'bg-gradient-to-br from-[#0b1329] via-[#0d1117] to-[#161b22] border-blue-900/40 text-zinc-100 shadow-xl'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Server className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-mono tracking-tight flex items-center gap-2">
                    Online Civilization Knowledge Cloud
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono">
                      v{catalogMeta.version}
                    </span>
                  </h2>
                  <p className="text-xs text-zinc-400 font-mono">
                    200+ GB Worldwide Human Knowledge Preservation Database
                  </p>
                </div>
              </div>

              {/* Total Catalog Size Badge */}
              <div className="text-right bg-black/40 px-3 py-1.5 rounded-xl border border-blue-500/20 self-start sm:self-auto">
                <div className="text-sm font-bold font-mono text-cyan-400">
                  {catalogMeta.totalCompressed}
                </div>
                <div className="text-[10px] font-mono text-zinc-400">
                  {catalogMeta.totalArticles.toLocaleString()} Articles
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              This online database stores the full 200+ GB human civilization curriculum. While internet connectivity remains available, you can select and download modular knowledge volumes directly onto your phone's internal storage or external <strong>256 GB MicroSD / USB-OTG drive</strong>. Once downloaded, all knowledge works 100% offline forever.
            </p>
          </div>

          {/* Storage Destination Target Selector */}
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              nightVision ? 'bg-[#0f0404] border-red-950' : 'bg-[#0d1117] border-zinc-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
                Download Storage Destination Target
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                Direct External Mount Ready
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {storageDestinations.map(dest => {
                const isSelected = activeTarget === dest.type;
                const isSd = dest.type === 'sdcard';

                return (
                  <div
                    key={dest.type}
                    onClick={() => handleSelectStorageTarget(dest.type)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between gap-2 ${
                      isSelected
                        ? nightVision
                          ? 'bg-red-950/40 border-red-500 text-white shadow-lg'
                          : 'bg-blue-950/20 border-blue-500/80 text-white shadow-lg'
                        : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {isSd ? <HardDrive className="w-4 h-4 text-cyan-400" /> : <Smartphone className="w-4 h-4 text-amber-400" />}
                        <span className="text-xs font-bold font-mono text-zinc-200">
                          {dest.name}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        isSelected ? 'bg-blue-500 text-black' : 'bg-black/50 text-zinc-500'
                      }`}>
                        {isSelected ? 'ACTIVE TARGET' : 'SELECT'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-500">Available Space:</span>
                      <span className="text-emerald-400 font-bold">{dest.freeFormatted}</span>
                    </div>

                    <div className="text-[10px] font-mono text-zinc-500 truncate">
                      {dest.path}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom MicroSD Path Editor */}
            <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-zinc-500" />
                Target Path: <code className="text-zinc-300">{sdPathInput}</code>
              </span>
              <button
                onClick={() => setIsEditingSdPath(!isEditingSdPath)}
                className="text-[11px] text-amber-400 hover:text-amber-300 underline"
              >
                {isEditingSdPath ? 'Cancel' : 'Change Storage Directory'}
              </button>
            </div>

            {isEditingSdPath && (
              <div className="flex gap-2 mt-2 pt-2 border-t border-zinc-800">
                <input
                  type="text"
                  value={sdPathInput}
                  onChange={e => setSdPathInput(e.target.value)}
                  placeholder="/storage/XXXX-XXXX/CivZero/"
                  className="flex-1 bg-black border border-zinc-700 rounded-lg px-3 py-1.5 text-xs font-mono text-zinc-200 outline-none"
                />
                <button
                  onClick={handleSaveSdPath}
                  className="px-3 py-1.5 bg-amber-500 text-black font-bold font-mono text-xs rounded-lg hover:bg-amber-400"
                >
                  Save Path
                </button>
              </div>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono flex-shrink-0 transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-blue-600 border-blue-500 text-white font-bold'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Remote Knowledge Volumes Grid */}
          <div className="space-y-4">
            {filteredVolumes.map(vol => {
              const isMounted = vol.status === 'mounted';
              const isDownloading = vol.status === 'downloading';
              const isPaused = vol.status === 'paused';
              const tierColor = getTierColor(vol.tier);

              return (
                <div
                  key={vol.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    nightVision
                      ? 'bg-[#0e0404] border-red-950 text-red-100'
                      : isMounted
                      ? 'bg-[#0d161a] border-emerald-900/60 shadow-lg'
                      : 'bg-[#0d1117] border-zinc-800 text-zinc-200 shadow-md'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Left Meta & Summary */}
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          style={{
                            color: tierColor,
                            backgroundColor: `${tierColor}15`,
                            borderColor: `${tierColor}50`
                          }}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-bold border tracking-wider uppercase"
                        >
                          TIER {vol.tier}
                        </span>

                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                          {vol.category}
                        </span>

                        <span className="text-xs font-mono text-zinc-500">•</span>

                        <span className="text-xs font-mono text-zinc-400">
                          {vol.articleCount.toLocaleString()} Articles
                        </span>

                        {isMounted && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            MOUNTED & READY
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold font-mono tracking-tight text-white">
                        {vol.title}
                      </h3>

                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                        {vol.description}
                      </p>

                      {/* Source attribution & format */}
                      <div className="text-[11px] font-mono text-zinc-500 flex flex-wrap items-center gap-2 pt-1">
                        <span>Source: <strong className="text-zinc-400">{vol.sourceAttribution}</strong></span>
                        <span>•</span>
                        <span>Format: <strong className="text-cyan-400">{vol.format}</strong></span>
                      </div>
                    </div>

                    {/* Right Footprint & Action Block */}
                    <div className="flex flex-col items-end gap-2 flex-shrink-0 self-stretch sm:self-auto sm:min-w-[190px]">
                      <div className="text-right">
                        <div className="text-base font-bold font-mono text-cyan-400">
                          {vol.downloadSizeFormatted}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500">
                          Uncompressed: {vol.uncompressedSizeFormatted}
                        </div>
                      </div>

                      {/* Download / Pause / Unmount Action Buttons */}
                      <div className="w-full flex items-center gap-2 mt-2">
                        {isMounted ? (
                          <button
                            onClick={() => handleUnmountVolume(vol.id)}
                            className="w-full py-2 px-3 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-red-400 hover:border-red-700 transition-colors text-xs font-mono flex items-center justify-center gap-1.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>UNMOUNT</span>
                          </button>
                        ) : isDownloading ? (
                          <button
                            onClick={() => handlePauseDownload(vol.id)}
                            className="w-full py-2 px-3 rounded-lg border border-amber-600 bg-amber-950/40 text-amber-300 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <Pause className="w-3.5 h-3.5" />
                            <span>PAUSE ({vol.downloadProgress}%)</span>
                          </button>
                        ) : isPaused ? (
                          <button
                            onClick={() => handleStartDownload(vol.id)}
                            className="w-full py-2 px-3 rounded-lg border border-blue-500 bg-blue-900/40 text-blue-200 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <Play className="w-3.5 h-3.5" />
                            <span>RESUME</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStartDownload(vol.id)}
                            className="w-full py-2 px-3 rounded-lg border border-blue-500 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>DOWNLOAD</span>
                          </button>
                        )}
                      </div>

                      {/* Sideload Torrent Magnet Link Button */}
                      {vol.torrentMagnet && (
                        <button
                          onClick={() => handleCopyMagnet(vol.torrentMagnet!, vol.id)}
                          title="Copy BitTorrent Magnet URI to download via PC"
                          className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 flex items-center gap-1 mt-1 transition-colors"
                        >
                          {copiedMagnet === vol.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedMagnet === vol.id ? 'Magnet Copied!' : 'Copy Magnet URI'}</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Active Download Progress Bar & Speed Indicator */}
                  {isDownloading && (
                    <div className="mt-4 pt-3 border-t border-zinc-800/80 space-y-1.5 animate-fadeIn">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-zinc-400 flex items-center gap-1.5">
                          <RefreshCw className="w-3 h-3 text-blue-400 animate-spin" />
                          Streaming to {vol.targetStorage === 'sdcard' ? 'MicroSD Card' : 'Internal Memory'}...
                        </span>
                        <span className="text-blue-400 font-bold">{vol.downloadSpeed || '35.0 MB/s'} • {vol.downloadProgress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                        <div
                          style={{ width: `${vol.downloadProgress}%` }}
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* PC Batch Download & MicroSD Sideload Guide Box */}
          <div
            className={`p-5 rounded-2xl border font-mono text-xs space-y-3 ${
              nightVision
                ? 'bg-[#120202] border-red-950/70 text-red-300'
                : 'bg-[#0d1117] border-zinc-800 text-zinc-300'
            }`}
          >
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <HardDrive className="w-4 h-4" />
              <span>How to Sideload the 200+ GB Archive via PC</span>
            </div>

            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              If your mobile phone has limited cellular data or battery, you can download all 200+ GB modular archive files on a desktop computer using broadband fiber or BitTorrent, then transfer them directly to a 256 GB MicroSD card:
            </p>

            <ol className="list-decimal list-inside space-y-1.5 text-zinc-300 pl-1 text-[11px]">
              <li>Insert a 256 GB MicroSD card into your computer's card reader and format as <strong className="text-white">exFAT</strong> (supports files over 4 GB).</li>
              <li>Create a folder named <strong className="text-amber-400">CivZero</strong> in the root of the card.</li>
              <li>Download the desired volume files (or copy the Magnet URIs into your PC torrent client).</li>
              <li>Move the downloaded <strong className="text-cyan-400">.db</strong> and <strong className="text-cyan-400">.zim</strong> archive files directly into that folder.</li>
              <li>Insert the MicroSD card into your Android phone and select <strong className="text-white">External MicroSD Card</strong> above. The app will immediately mount and index all 200+ GB without consuming phone memory.</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};