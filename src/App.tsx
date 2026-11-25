import React, { useState, useEffect } from 'react';
import type { ViewTab, StorageStats, Guide } from './types';
import { DatabaseService } from './services/databaseService';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { GuidesExplorer } from './pages/GuidesExplorer';
import { HolyBooksScreen } from './pages/HolyBooksScreen';
import { SearchScreen } from './pages/SearchScreen';
import { ToolsScreen, type ActiveTool } from './pages/ToolsScreen';
import { TechTreeVisualizer } from './components/techtree/TechTreeVisualizer';
import { PackManagerScreen } from './pages/PackManagerScreen';
import { ShareOfflineScreen } from './pages/ShareOfflineScreen';
import { BookmarksScreen } from './pages/BookmarksScreen';
import { GuideDetailModal } from './components/GuideDetailModal';
import { ScrollToTop } from './components/ScrollToTop';
import { SplashScreen } from './components/SplashScreen';
import { UpdateModal } from './components/UpdateModal';
import { EmergencySosModal } from './components/EmergencySosModal';
import { updateService, type UpdateInfo } from './services/updateService';

export const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [availableUpdate, setAvailableUpdate] = useState<UpdateInfo | null>(null);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [showSosModal, setShowSosModal] = useState<boolean>(false);
  const [pendingToolDraft, setPendingToolDraft] = useState<{ title: string; content: string } | null>(null);
  const [currentTab, setCurrentTab] = useState<ViewTab>('guides');
  const [selectedToolId, setSelectedToolId] = useState<ActiveTool>('journal');
  const [storageStats, setStorageStats] = useState<StorageStats | null>(null);
  const [nightVision, setNightVision] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>(() => {
    try {
      const saved = localStorage.getItem('civzero_font_size');
      if (saved === 'large' || saved === 'huge') return saved;
    } catch {
      // ignore
    }
    return 'normal';
  });
  const [bookmarkCount, setBookmarkCount] = useState<number>(0);
  const [modalGuide, setModalGuide] = useState<Guide | null>(null);

  // Apply root font-size scaling across entire document
  useEffect(() => {
    const root = document.documentElement;
    if (fontSize === 'large') {
      root.style.fontSize = '20px'; // 1.25x magnification
    } else if (fontSize === 'huge') {
      root.style.fontSize = '24px'; // 1.5x magnification
    } else {
      root.style.fontSize = '16px'; // 1.0x baseline
    }
    try {
      localStorage.setItem('civzero_font_size', fontSize);
    } catch {
      // ignore
    }
  }, [fontSize]);

  useEffect(() => {
    refreshStats();
    if (typeof navigator !== 'undefined' && navigator.onLine) {
      updateService.checkForUpdate().then(res => {
        if (res.hasUpdate && res.updateInfo) {
          setAvailableUpdate(res.updateInfo);
        }
      });
    }
  }, []);

  const refreshStats = async () => {
    const [stats, bookmarks] = await Promise.all([
      DatabaseService.getStorageStats(),
      DatabaseService.getBookmarks()
    ]);
    setStorageStats(stats);
    setBookmarkCount(bookmarks.length);
  };

  const handleOpenGuideById = async (guideId: string) => {
    const guide = await DatabaseService.getGuideById(guideId);
    if (guide) {
      setModalGuide(guide);
    }
  };

  const handleNavigateToTool = (toolId: string, draft?: { title: string; content: string }) => {
    if (draft) {
      setPendingToolDraft(draft);
    }
    setSelectedToolId(toolId as ActiveTool);
    setCurrentTab('tools');
    setModalGuide(null);
  };

  return (
    <>
      {showSplash && (
        <SplashScreen
          nightVision={nightVision}
          onComplete={() => setShowSplash(false)}
        />
      )}
      <div
        className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        nightVision
          ? 'bg-[#050101] text-red-100 selection:bg-red-900 selection:text-white'
          : 'bg-[#05070a] text-[#f0f6fc] selection:bg-amber-500 selection:text-black'
      }`}
    >
      {/* Top Header */}
      <Header
        storageStats={storageStats}
        nightVision={nightVision}
        setNightVision={setNightVision}
        fontSize={fontSize}
        setFontSize={setFontSize}
        availableUpdate={availableUpdate}
        onOpenUpdateModal={() => setShowUpdateModal(true)}
        onOpenJournal={() => {
          setCurrentTab('tools');
          setSelectedToolId('journal');
        }}
        onOpenDictionary={() => {
          setCurrentTab('tools');
          setSelectedToolId('dictionary');
        }}
        onOpenSos={() => setShowSosModal(true)}
      />

      {/* Main Content Pane */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 pb-36 sm:pb-44">
        {currentTab === 'guides' && (
          <GuidesExplorer
            nightVision={nightVision}
            fontSize={fontSize}
            onBookmarkChange={refreshStats}
            onNavigateTab={(tab) => setCurrentTab(tab)}
            onNavigateToTool={handleNavigateToTool}
          />
        )}

        {currentTab === 'holybooks' && (
          <HolyBooksScreen
            nightVision={nightVision}
            fontSize={fontSize}
          />
        )}

        {currentTab === 'search' && (
          <SearchScreen
            nightVision={nightVision}
            fontSize={fontSize}
            onBookmarkChange={refreshStats}
            onNavigateToTool={handleNavigateToTool}
          />
        )}

        {currentTab === 'tools' && (
          <ToolsScreen
            nightVision={nightVision}
            selectedToolId={selectedToolId}
            onSelectTool={(t) => setSelectedToolId(t)}
            externalDraft={pendingToolDraft}
            onClearExternalDraft={() => setPendingToolDraft(null)}
          />
        )}

        {currentTab === 'techtree' && (
          <TechTreeVisualizer
            nightVision={nightVision}
            onOpenGuide={handleOpenGuideById}
          />
        )}

        {currentTab === 'packs' && (
          <PackManagerScreen
            nightVision={nightVision}
            onStorageChange={refreshStats}
            onTriggerUpdateModal={(info) => {
              setAvailableUpdate(info);
              setShowUpdateModal(true);
            }}
          />
        )}

        {currentTab === 'share' && (
          <ShareOfflineScreen
            nightVision={nightVision}
          />
        )}

        {currentTab === 'bookmarks' && (
          <BookmarksScreen
            nightVision={nightVision}
            fontSize={fontSize}
            onBookmarkChange={refreshStats}
            onNavigateToTool={handleNavigateToTool}
          />
        )}

        {/* Physical Spacer ensuring bottom navigation never overlaps content on any device */}
        <div className="h-16 sm:h-24 w-full flex-shrink-0" aria-hidden="true" />
      </main>

      {/* Direct Modal when opened from Tech Tree or external action */}
      {modalGuide && (
        <GuideDetailModal
          guide={modalGuide}
          onClose={() => setModalGuide(null)}
          nightVision={nightVision}
          fontSize={fontSize}
          onBookmarkToggled={(id, state) => {
            refreshStats();
          }}
          onNavigateToTool={handleNavigateToTool}
        />
      )}

      {/* Emergency SOS Quick Triage Modal */}
      <EmergencySosModal
        isOpen={showSosModal}
        onClose={() => setShowSosModal(false)}
        nightVision={nightVision}
        onOpenGuideById={(id) => {
          setShowSosModal(false);
          handleOpenGuideById(id);
        }}
      />

      {/* Direct In-App Updater Modal */}
      {showUpdateModal && availableUpdate && (
        <UpdateModal
          updateInfo={availableUpdate}
          onClose={() => setShowUpdateModal(false)}
          nightVision={nightVision}
        />
      )}

      {/* Persistent Mobile Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        setTab={setCurrentTab}
        bookmarkCount={bookmarkCount}
        nightVision={nightVision}
      />

      {/* Floating Scroll to Top button on bottom right */}
      <ScrollToTop nightVision={nightVision} />
    </div>
    </>
  );
};

export default App;
