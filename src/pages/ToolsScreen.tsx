import React, { useState } from 'react';
import { Droplet, Radio, Apple, HelpCircle, Wrench, Compass } from 'lucide-react';
import { WaterDosingCalculator } from '../components/tools/WaterDosingCalculator';
import { MorseCodeFlasher } from '../components/tools/MorseCodeFlasher';
import { CalorieRationPlanner } from '../components/tools/CalorieRationPlanner';
import { UniversalEdibilityWizard } from '../components/tools/UniversalEdibilityWizard';
import { BiomeSettlementWizard } from '../components/tools/BiomeSettlementWizard';

interface ToolsScreenProps {
  nightVision: boolean;
}

type ActiveTool = 'water' | 'morse' | 'calories' | 'edibility' | 'settlement';

export const ToolsScreen: React.FC<ToolsScreenProps> = ({ nightVision }) => {
  const [activeTool, setActiveTool] = useState<ActiveTool>('water');

  const tools = [
    { id: 'water' as ActiveTool, label: 'Water Dosing', icon: Droplet, desc: 'Chemical titration & disinfection' },
    { id: 'morse' as ActiveTool, label: 'Morse Beacon', icon: Radio, desc: 'Optical strobe + 800Hz beeper' },
    { id: 'calories' as ActiveTool, label: 'Calorie Planner', icon: Apple, desc: 'Burn rate & stockpile runway' },
    { id: 'edibility' as ActiveTool, label: 'Edibility Test', icon: HelpCircle, desc: '8-stage plant toxicity triage' },
    { id: 'settlement' as ActiveTool, label: 'Settlement Wizard', icon: Compass, desc: 'Biome & terrain colonization' },
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
              Offline computational calculators, optical beacons &amp; diagnostic wizards
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
          Real-time mathematical and diagnostic utilities designed to run with zero cellular connectivity, helping you make accurate life-or-death decisions in the field.
        </p>
      </div>

      {/* Tool Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
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
                <span className="text-xs font-bold font-mono">{tool.label}</span>
              </div>
              <p className="text-[10px] text-zinc-500 font-mono truncate">{tool.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Active Tool View */}
      <div className="pt-2">
        {activeTool === 'water' && <WaterDosingCalculator nightVision={nightVision} />}
        {activeTool === 'morse' && <MorseCodeFlasher nightVision={nightVision} />}
        {activeTool === 'calories' && <CalorieRationPlanner nightVision={nightVision} />}
        {activeTool === 'edibility' && <UniversalEdibilityWizard nightVision={nightVision} />}
        {activeTool === 'settlement' && <BiomeSettlementWizard nightVision={nightVision} />}
      </div>
    </div>
  );
};
