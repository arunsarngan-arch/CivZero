import React, { useState } from 'react';
import {
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
} from 'lucide-react';
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

interface ToolsScreenProps {
  nightVision: boolean;
}

type ActiveTool =
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
  | 'antenna';

export const ToolsScreen: React.FC<ToolsScreenProps> = ({ nightVision }) => {
  const [activeTool, setActiveTool] = useState<ActiveTool>('compass');

  const tools = [
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
            <h2 className="text-lg font-bold font-mono tracking-tight">Interactive Survival Utilities</h2>
            <p className="text-xs text-zinc-400 font-mono">
              11 Offline computational calculators, optical beacons &amp; diagnostic wizards
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
          Real-time mathematical, sensor, and diagnostic utilities designed to run with zero cellular connectivity, helping you make accurate life-or-death decisions in the field.
        </p>
      </div>

      {/* Tool Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {tools.map(tool => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;

          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? nightVision
                    ? 'bg-red-950/60 border-red-500 text-white shadow-lg'
                    : 'bg-zinc-900 border-amber-500 text-white shadow-lg'
                  : 'bg-[#0d1117] border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
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
      </div>
    </div>
  );
};
