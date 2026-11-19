import React, { useState } from 'react';
import { Droplet, AlertTriangle, ShieldCheck, Clock, Flame, Sun, Sparkles } from 'lucide-react';

interface WaterDosingCalculatorProps {
  nightVision: boolean;
}

export const WaterDosingCalculator: React.FC<WaterDosingCalculatorProps> = ({ nightVision }) => {
  const [volume, setVolume] = useState<number>(5); // default 5L
  const [unit, setUnit] = useState<'liters' | 'gallons'>('liters');
  const [turbidity, setTurbidity] = useState<'clear' | 'cloudy'>('clear');
  const [waterTemp, setWaterTemp] = useState<'normal' | 'cold'>('normal');
  const [altitudeHigh, setAltitudeHigh] = useState<boolean>(false);

  // Convert to liters for standardized calculations
  const liters = unit === 'gallons' ? volume * 3.78541 : volume;

  // Bleach calculation: 2 drops/L for clear, 4 drops/L for cloudy
  const bleachDropsPerL = turbidity === 'clear' ? 2 : 4;
  const bleachTotalDrops = Math.round(liters * bleachDropsPerL);
  const bleachMl = (bleachTotalDrops * 0.05).toFixed(2); // ~20 drops per ml

  // Iodine calculation: 5 drops/L clear, 10 drops/L cloudy/cold
  const iodineDropsPerL = (turbidity === 'cloudy' || waterTemp === 'cold') ? 10 : 5;
  const iodineTotalDrops = Math.round(liters * iodineDropsPerL);

  // Boiling time
  const boilMinutes = altitudeHigh ? 3 : 1;

  // Wait time
  const waitMinutes = (turbidity === 'cloudy' || waterTemp === 'cold') ? 60 : 30;

  return (
    <div
      className={`p-5 rounded-2xl border space-y-5 transition-colors ${
        nightVision
          ? 'bg-[#120303] border-red-950 text-red-100'
          : 'bg-[#0d1117] border-zinc-800 text-zinc-100 shadow-xl'
      }`}
    >
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Droplet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-tight">Water Treatment Dosing Calculator</h3>
            <p className="text-xs text-zinc-400 font-mono">Chemical titration &amp; pathogen sterilization</p>
          </div>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Volume & Unit */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-zinc-400 flex items-center justify-between">
            <span>Water Batch Volume:</span>
            <span className="text-amber-400 font-bold">{volume} {unit.toUpperCase()}</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="1"
              max="100"
              value={volume}
              onChange={e => setVolume(Number(e.target.value))}
              className="flex-1 accent-cyan-400 bg-zinc-800 h-2 rounded-lg cursor-pointer"
            />
            <button
              onClick={() => setUnit(unit === 'liters' ? 'gallons' : 'liters')}
              className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white"
            >
              {unit === 'liters' ? 'Switch to Gal' : 'Switch to L'}
            </button>
          </div>
        </div>

        {/* Water Quality / Turbidity */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-zinc-400">Water Clarity / Source:</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setTurbidity('clear')}
              className={`py-1.5 px-3 rounded-lg text-xs font-mono border transition-all ${
                turbidity === 'clear'
                  ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Clear River / Tap
            </button>
            <button
              onClick={() => setTurbidity('cloudy')}
              className={`py-1.5 px-3 rounded-lg text-xs font-mono border transition-all ${
                turbidity === 'cloudy'
                  ? 'bg-amber-950/60 border-amber-500 text-amber-300 font-bold'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Cloudy / Floodwater
            </button>
          </div>
        </div>

        {/* Temperature & Altitude Checkboxes */}
        <div className="flex items-center gap-4 sm:col-span-2 pt-1">
          <label className="flex items-center gap-2 text-xs font-mono text-zinc-300 cursor-pointer">
            <input
              type="checkbox"
              checked={waterTemp === 'cold'}
              onChange={e => setWaterTemp(e.target.checked ? 'cold' : 'normal')}
              className="rounded accent-cyan-400"
            />
            <span>Icy Cold Water (&lt;10°C / 50°F)</span>
          </label>

          <label className="flex items-center gap-2 text-xs font-mono text-zinc-300 cursor-pointer">
            <input
              type="checkbox"
              checked={altitudeHigh}
              onChange={e => setAltitudeHigh(e.target.checked)}
              className="rounded accent-cyan-400"
            />
            <span>High Altitude (&gt;2,000m / 6,500ft)</span>
          </label>
        </div>
      </div>

      {/* Calculated Results Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {/* Card 1: Bleach */}
        <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-cyan-900/40 space-y-2">
          <div className="flex items-center justify-between text-cyan-400 font-mono text-xs font-bold">
            <span className="flex items-center gap-1.5">
              <Droplet className="w-3.5 h-3.5" /> BLEACH (5-8%)
            </span>
            <span className="text-[10px] text-zinc-500">Unscented</span>
          </div>

          <div className="text-xl font-bold font-mono text-white">
            {bleachTotalDrops} <span className="text-xs font-normal text-cyan-300">drops</span>
          </div>
          <div className="text-[11px] font-mono text-zinc-400">
            or ≈ {bleachMl} mL (1/2 tsp ≈ 2.5 mL)
          </div>
          <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <Clock className="w-3 h-3" /> Wait: {waitMinutes} min contact
          </div>
        </div>

        {/* Card 2: Iodine */}
        <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-amber-900/40 space-y-2">
          <div className="flex items-center justify-between text-amber-400 font-mono text-xs font-bold">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> IODINE 2%
            </span>
            <span className="text-[10px] text-zinc-500">Tincture</span>
          </div>

          <div className="text-xl font-bold font-mono text-white">
            {iodineTotalDrops} <span className="text-xs font-normal text-amber-300">drops</span>
          </div>
          <div className="text-[11px] font-mono text-zinc-400">
            Avoid if pregnant or thyroid issue
          </div>
          <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <Clock className="w-3 h-3" /> Wait: {waitMinutes} min contact
          </div>
        </div>

        {/* Card 3: Boiling */}
        <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-red-900/40 space-y-2">
          <div className="flex items-center justify-between text-red-400 font-mono text-xs font-bold">
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" /> THERMAL BOIL
            </span>
            <span className="text-[10px] text-zinc-500">Zero Chem</span>
          </div>

          <div className="text-xl font-bold font-mono text-white">
            {boilMinutes} <span className="text-xs font-normal text-red-300">min</span>
          </div>
          <div className="text-[11px] font-mono text-zinc-400">
            Vigorous rolling boil kills 100% cysts
          </div>
          <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> 100% Giardia / Crypto kill
          </div>
        </div>
      </div>

      {/* Operational Sniff Test Directive */}
      <div className="p-3 rounded-lg bg-black/40 border border-zinc-800 text-xs font-mono flex items-start gap-2 text-zinc-400">
        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <span>
          <strong className="text-zinc-200">The Sniff Verification:</strong> After {waitMinutes} minutes, water MUST smell slightly of chlorine. If no smell is perceptible, repeat the dosage and wait 15 more minutes.
        </span>
      </div>
    </div>
  );
};
