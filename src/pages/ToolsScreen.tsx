import React, { useState, useEffect } from 'react';
import {
  BookText,
  BookA,
  Compass,
  Droplet,
  Radio,
  Apple,
  HelpCircle,
  Wrench,
  MapPin,
  Sun,
  FlaskConical,
  Zap,
  HeartPulse,
  Wifi,
  Gamepad2,
  Route,
  Sparkles
} from 'lucide-react';
import { FieldJournalTool } from '../components/tools/FieldJournalTool';
import { CivilizationLexiconTool } from '../components/tools/CivilizationLexiconTool';
import { TacticalCompassTool } from '../components/tools/TacticalCompassTool';
import { WaterDosingCalculator } from '../components/tools/WaterDosingCalculator';
import { MorseCodeFlasher } from '../components/tools/MorseCodeFlasher';
import { CalorieRationPlanner } from '../components/tools/CalorieRationPlanner';
import { UniversalEdibilityWizard } from '../components/tools/UniversalEdibilityWizard';
import { BiomeSettlementWizard } from '../components/tools/BiomeSettlementWizard';
import { CelestialLatitudeTool } from '../components/tools/CelestialLatitudeTool';
import { ChemistryTitrationCalculator } from '../components/tools/ChemistryTitrationCalculator';
import { KineticPowerCalculator } from '../components/tools/KineticPowerCalculator';
import { TraumaTriageCalculator } from '../components/tools/TraumaTriageCalculator';
import { AntennaCalculator } from '../components/tools/AntennaCalculator';
import { RetroArcadeTool } from '../components/tools/RetroArcadeTool';
import { TrailBacktrackMapper } from '../components/tools/TrailBacktrackMapper';

export type ActiveTool =
  | 'journal'
  | 'dictionary'
  | 'trail'
  | 'compass'
  | 'water'
  | 'morse'
  | 'calories'
  | 'edibility'
  | 'settlement'
  | 'celestial'
  | 'chemistry'
  | 'kinetic'
  | 'trauma'
  | 'antenna'
  | 'arcade';

interface ToolsScreenProps {
  nightVision: boolean;
  selectedToolId?: ActiveTool;
  onSelectTool?: (tool: ActiveTool) => void;
  externalDraft?: { title: string; content: string } | null;
  onClearExternalDraft?: () => void;
}

export const ToolsScreen: React.FC<ToolsScreenProps> = ({
  nightVision,
  selectedToolId,
  onSelectTool,
  externalDraft,
  onClearExternalDraft
}) => {
  const [internalTool, setInternalTool] = useState<ActiveTool>('journal');
  const [journalDraft, setJournalDraft] = useState<{ title: string; content: string } | null>(null);

  useEffect(() => {
    if (externalDraft) {
      setJournalDraft(externalDraft);
      setInternalTool('journal');
      if (onSelectTool) onSelectTool('journal');
      if (onClearExternalDraft) onClearExternalDraft();
    }
  }, [externalDraft]);

  const activeTool = selectedToolId || internalTool;

  const setActiveTool = (t: ActiveTool) => {
    setInternalTool(t);
    if (onSelectTool) onSelectTool(t);
  };

  const handleSendToJournal = (title: string, content: string) => {
    setJournalDraft({ title, content });
    setActiveTool('journal');
  };

  const tools = [
    { id: 'journal' as ActiveTool, label: 'Field Journal', icon: BookText, desc: "My Diary, daily logs & survival notes", isNew: true },
    { id: 'dictionary' as ActiveTool, label: 'Offline Lexicon', icon: BookA, desc: '102,000+ words, definitions & speech', isNew: true },
    { id: 'trail' as ActiveTool, label: 'Trail & Backtrack', icon: Route, desc: 'GPS breadcrumb map & return HUD' },
    { id: 'compass' as ActiveTool, label: 'Field Compass', icon: Compass, desc: 'Live magnetometer azimuth & mils' },
    { id: 'water' as ActiveTool, label: 'Water Dosing', icon: Droplet, desc: 'Chemical titration & disinfection' },
    { id: 'morse' as ActiveTool, label: 'Morse Beacon', icon: Radio, desc: 'Optical strobe + 800Hz beeper' },
    { id: 'calories' as ActiveTool, label: 'Calorie Planner', icon: Apple, desc: 'Burn rate & stockpile runway' },
    { id: 'edibility' as ActiveTool, label: 'Edibility Test', icon: HelpCircle, desc: '8-stage plant toxicity triage' },
    { id: 'settlement' as ActiveTool, label: 'Settlement Wizard', icon: MapPin, desc: 'Biome & terrain colonization' },
    { id: 'celestial' as ActiveTool, label: 'Celestial Nav', icon: Sun, desc: 'Gnomon & Polaris latitude' },
    { id: 'chemistry' as ActiveTool, label: 'Chem Titration', icon: FlaskConical, desc: 'Black powder, acid & mortar' },
    { id: 'kinetic' as ActiveTool, label: 'Kinetic Power', icon: Zap, desc: 'Hydro, wind & solar/battery' },
    { id: 'trauma' as ActiveTool, label: 'Trauma Triage', icon: HeartPulse, desc: 'Parkland burns & Shock Index' },
    { id: 'antenna' as ActiveTool, label: 'RF & Antenna', icon: Wifi, desc: 'Wire dipole & radio horizon' },
    { id: 'arcade' as ActiveTool, label: 'Field Arcade', icon: Gamepad2, desc: '4 Retro chiptune arcade games & scores' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Banner */}
      <div
        className={`p-5 rounded-2xl border transition-colors ${
          nightVision
            ? 'bg-[#150303] border-red-950 text-red-100'
            : 'bg-gradient-to-br from-[#0d1117] to-[#161b22] border-zinc-800 text-zinc-100 shadow-xl'
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Wrench className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-mono tracking-tight">Interactive Survival Utilities & Logbook</h2>
            <p className="text-xs text-zinc-400 font-mono">
              15 Offline calculators, breadcrumb mappers, personal diary & 102,000+ word lexicon
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
          Comprehensive offline operational tools designed to run with zero cellular connectivity: write your daily thoughts in <strong className="text-amber-400">My Diary</strong>, record survival memos, look up any English or scientific word in the <strong className="text-amber-400">Civilization Lexicon</strong>, or calculate critical survival formulas.
        </p>
      </div>

      {/* Tool Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {tools.map(tool => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;

          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`relative p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? nightVision
                    ? 'bg-red-950/60 border-red-500 text-white shadow-lg'
                    : 'bg-zinc-900 border-amber-500 text-white shadow-lg ring-1 ring-amber-500/30'
                  : 'bg-[#0d1117] border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              {tool.isNew && (
                <span className="absolute top-2 right-2 px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-amber-500 text-black leading-tight">
                  NEW
                </span>
              )}
              <div className="flex items-center gap-2 mb-1">
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-zinc-500'}`} />
                <span className="text-xs font-bold font-mono truncate">{tool.label}</span>
              </div>
              <p className="text-[10px] text-zinc-500 font-mono truncate">{tool.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Active Tool View */}
      <div className="pt-2">
        {activeTool === 'journal' && (
          <FieldJournalTool
            nightVision={nightVision}
            initialNoteDraft={journalDraft}
            onClearInitialNoteDraft={() => setJournalDraft(null)}
          />
        )}
        {activeTool === 'dictionary' && (
          <CivilizationLexiconTool
            nightVision={nightVision}
            onSendToJournal={handleSendToJournal}
          />
        )}
        {activeTool === 'trail' && <TrailBacktrackMapper nightVision={nightVision} />}
        {activeTool === 'compass' && <TacticalCompassTool nightVision={nightVision} />}
        {activeTool === 'water' && <WaterDosingCalculator nightVision={nightVision} />}
        {activeTool === 'morse' && <MorseCodeFlasher nightVision={nightVision} />}
        {activeTool === 'calories' && <CalorieRationPlanner nightVision={nightVision} />}
        {activeTool === 'edibility' && <UniversalEdibilityWizard nightVision={nightVision} />}
        {activeTool === 'settlement' && <BiomeSettlementWizard nightVision={nightVision} />}
        {activeTool === 'celestial' && <CelestialLatitudeTool nightVision={nightVision} />}
        {activeTool === 'chemistry' && <ChemistryTitrationCalculator nightVision={nightVision} />}
        {activeTool === 'kinetic' && <KineticPowerCalculator nightVision={nightVision} />}
        {activeTool === 'trauma' && <TraumaTriageCalculator nightVision={nightVision} />}
        {activeTool === 'antenna' && <AntennaCalculator nightVision={nightVision} />}
        {activeTool === 'arcade' && <RetroArcadeTool nightVision={nightVision} />}
      </div>
    </div>
  );
};
