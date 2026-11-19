import React, { useState } from 'react';
import { Radio, Wifi, Compass, ShieldAlert, Info, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Props {
  nightVision: boolean;
}

interface FreqPreset {
  freq: number;
  label: string;
  band: string;
  notes: string;
}

const EMERGENCY_FREQS: FreqPreset[] = [
  { freq: 146.520, label: '146.520 MHz', band: 'VHF 2m', notes: 'National VHF Ham calling & wilderness search frequency' },
  { freq: 462.5625, label: '462.5625 MHz', band: 'UHF FRS/GMRS', notes: 'Channel 1 default emergency channel on all consumer walkie-talkies' },
  { freq: 27.185, label: '27.185 MHz', band: 'HF CB Ch 19', notes: 'Standard highway trucker & off-road emergency calling' },
  { freq: 14.300, label: '14.300 MHz', band: 'HF 20m', notes: 'Maritime Mobile Service Network & Global Intercontinental Net' },
  { freq: 7.175, label: '7.175 MHz', band: 'HF 40m', notes: 'Regional day/night survival & continental emergency net' },
  { freq: 3.860, label: '3.860 MHz', band: 'HF 80m', notes: 'Local NVIS night net (0-400 miles over mountains)' },
];

export const AntennaCalculator: React.FC<Props> = ({ nightVision }) => {
  const [activeTab, setActiveTab] = useState<'dipole' | 'vertical' | 'horizon'>('dipole');

  // --- ANTENNA FREQUENCY STATE ---
  const [frequencyMhz, setFrequencyMhz] = useState<number>(146.520);
  const [wireInsulation, setWireInsulation] = useState<'bare' | 'insulated'>('insulated');

  // --- LINE OF SIGHT HORIZON STATE ---
  const [txHeightM, setTxHeightM] = useState<number>(2); // 2m (~6.5 ft handheld)
  const [rxHeightM, setRxHeightM] = useState<number>(25); // 25m (~82 ft tower/hill)

  // Velocity factor (Vf) for wire
  const velocityFactor = wireInsulation === 'bare' ? 0.98 : 0.95;

  // ================= DIPOLE CALCULATIONS =================
  // Total Length in feet = (468 * Vf) / f_mhz
  // Total Length in meters = (142.6 * Vf) / f_mhz
  const dipoleTotalM = frequencyMhz > 0 ? (142.6 * velocityFactor) / frequencyMhz : 0;
  const dipoleTotalFt = frequencyMhz > 0 ? (468 * velocityFactor) / frequencyMhz : 0;
  const dipoleLegM = dipoleTotalM / 2;
  const dipoleLegFt = dipoleTotalFt / 2;
  const dipoleLegInches = (dipoleLegFt * 12).toFixed(1);

  // ================= 1/4-WAVE GROUND PLANE VERTICAL =================
  // Whip length = (71.3 * Vf) / f_mhz meters, or (234 * Vf) / f_mhz feet
  const vertWhipM = frequencyMhz > 0 ? (71.3 * velocityFactor) / frequencyMhz : 0;
  const vertWhipFt = frequencyMhz > 0 ? (234 * velocityFactor) / frequencyMhz : 0;
  // 4 Ground radials are cut ~5% longer to lower resonant angle: 75.0 / f_mhz
  const radialLengthM = frequencyMhz > 0 ? (75.0 * velocityFactor) / frequencyMhz : 0;
  const radialLengthFt = frequencyMhz > 0 ? (246 * velocityFactor) / frequencyMhz : 0;

  // ================= RADIO HORIZON CALCULATIONS =================
  // Radio line-of-sight takes 4/3 earth refraction into account:
  // d (km) = 3.57 * (sqrt(h1_m) + sqrt(h2_m))
  const horizonKm = (3.57 * (Math.sqrt(txHeightM) + Math.sqrt(rxHeightM))).toFixed(1);
  const horizonMiles = (parseFloat(horizonKm) * 0.621371).toFixed(1);

  return (
    <div
      className={`p-5 rounded-2xl border transition-colors space-y-6 ${
        nightVision
          ? 'bg-[#150404] border-red-950 text-red-100'
          : 'bg-[#0d1117] border-zinc-800 text-zinc-100 shadow-xl'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div
            className={`p-2.5 rounded-xl border ${
              nightVision
                ? 'bg-red-950 border-red-800 text-red-400'
                : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
            }`}
          >
            <Radio className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-tight">Emergency RF &amp; Antenna Sizer</h3>
            <p className="text-xs text-zinc-400 font-mono">Wire dipole length, 1/4-wave verticals &amp; VHF radio horizon range</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('dipole')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'dipole'
                ? nightVision
                  ? 'bg-red-900/50 text-white font-bold'
                  : 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Wifi className="w-3.5 h-3.5" />
            <span>1/2-Wave Dipole</span>
          </button>
          <button
            onClick={() => setActiveTab('vertical')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'vertical'
                ? nightVision
                  ? 'bg-red-900/50 text-white font-bold'
                  : 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>1/4-Wave Ground Plane</span>
          </button>
          <button
            onClick={() => setActiveTab('horizon')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'horizon'
                ? nightVision
                  ? 'bg-red-900/50 text-white font-bold'
                  : 'bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Radio Horizon</span>
          </button>
        </div>
      </div>

      {/* Preset Frequencies */}
      {(activeTab === 'dipole' || activeTab === 'vertical') && (
        <div className="space-y-2">
          <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Quick Emergency Frequency Presets:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {EMERGENCY_FREQS.map(preset => {
              const isSelected = Math.abs(frequencyMhz - preset.freq) < 0.001;
              return (
                <button
                  key={preset.freq}
                  onClick={() => setFrequencyMhz(preset.freq)}
                  className={`p-2 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-cyan-950/60 border-cyan-500 text-white font-bold shadow-md shadow-cyan-950/40'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="text-[11px] font-mono font-bold truncate">{preset.label}</div>
                  <div className="text-[9px] text-zinc-500 truncate">{preset.band}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= TAB 1: 1/2-WAVE DIPOLE ================= */}
      {activeTab === 'dipole' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tuning Controls */}
            <div className="space-y-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                Frequency &amp; Wire Selection
              </h4>

              {/* Custom Frequency Input */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Target Operating Frequency:</span>
                  <span className="text-cyan-400 font-bold">{frequencyMhz.toFixed(3)} MHz</span>
                </div>
                <input
                  type="number"
                  step="0.025"
                  min="1"
                  max="500"
                  value={frequencyMhz}
                  onChange={e => setFrequencyMhz(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm font-mono rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Wire Insulation / Velocity Factor */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400">Wire Type (Velocity Factor):</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setWireInsulation('insulated')}
                    className={`p-2 rounded-lg border text-xs font-mono text-left transition-all ${
                      wireInsulation === 'insulated'
                        ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    Insulated Stranded Copper
                    <span className="block text-[10px] text-zinc-500 font-normal">Vf = 0.95 (Standard THHN/speaker wire)</span>
                  </button>
                  <button
                    onClick={() => setWireInsulation('bare')}
                    className={`p-2 rounded-lg border text-xs font-mono text-left transition-all ${
                      wireInsulation === 'bare'
                        ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    Bare Solid Copper
                    <span className="block text-[10px] text-zinc-500 font-normal">Vf = 0.98 (Fence / naked wire)</span>
                  </button>
                </div>
              </div>

              <div className="pt-2 text-xs font-sans text-zinc-400 leading-relaxed">
                The center-fed half-wave dipole is the most dependable emergency antenna in human history: high efficiency, naturally resonant at ~73Ω, and works with direct 50Ω coax feedlines.
              </div>
            </div>

            {/* Dipole Cut Dimensions */}
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  nightVision
                    ? 'bg-red-950/40 border-red-900'
                    : 'bg-cyan-950/20 border-cyan-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Total End-to-End Length</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                    RESONANT 1/2 WAVE
                  </span>
                </div>
                <div className="text-3xl font-bold font-mono text-cyan-400">
                  {dipoleTotalM.toFixed(2)} m <span className="text-base text-zinc-400">({dipoleTotalFt.toFixed(2)} ft)</span>
                </div>
                <p className="text-xs font-mono text-zinc-300 mt-1">
                  Cut wire into <strong className="text-white">TWO equal quarter-wave legs</strong>.
                </p>
              </div>

              {/* Detailed Cut Specs */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">EACH LEG (LEFT / RIGHT)</div>
                  <div className="text-base font-bold text-amber-400 mt-0.5">{dipoleLegM.toFixed(3)} m</div>
                  <div className="text-[10px] text-zinc-400">{dipoleLegFt.toFixed(2)} ft ({dipoleLegInches} in)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">FEEDPOINT IMPEDANCE</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">~72 - 75 Ω</div>
                  <div className="text-[10px] text-zinc-400">&lt;1.5:1 SWR with 50Ω coax</div>
                </div>
              </div>

              {/* Visual ASCII / Vector Wire Diagram */}
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 font-mono text-[11px] text-zinc-300 space-y-1">
                <div className="text-zinc-500 text-[10px] uppercase">Field Rigging Architecture:</div>
                <div className="text-cyan-400">
                  [Tree End]====({dipoleLegM.toFixed(2)}m)====[Center Balun]====({dipoleLegM.toFixed(2)}m)====[Tree End]
                </div>
                <div className="text-zinc-400 pl-24">
                  | |  (Coaxial 50Ω cable down to radio)
                </div>
              </div>

              {/* Pro-Tip Box */}
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="font-sans leading-relaxed text-[11px]">
                  <strong>Always cut 4-6 inches long:</strong> Fold the excess wire back on itself through the end insulators rather than snipping. This allows fine-tuning resonance and lowest SWR in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: 1/4-WAVE GROUND PLANE VERTICAL ================= */}
      {activeTab === 'vertical' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                Vertical Omnidirectional Architecture
              </h4>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Target Operating Frequency:</span>
                  <span className="text-emerald-400 font-bold">{frequencyMhz.toFixed(3)} MHz</span>
                </div>
                <input
                  type="number"
                  step="0.025"
                  min="1"
                  max="500"
                  value={frequencyMhz}
                  onChange={e => setFrequencyMhz(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm font-mono rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-xs font-sans text-zinc-300">
                <div className="font-bold text-emerald-400 font-mono">SO-239 Field Connector Trick:</div>
                <p className="text-[11px] leading-relaxed text-zinc-400">
                  Solder a stiff vertical brass or copper rod to the center pin of a standard SO-239 chassis connector. Solder 4 downward-sloping wire radials to the four chassis screw holes. Angle them 45° downward to achieve a perfect 50Ω match!
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  nightVision
                    ? 'bg-red-950/40 border-red-900'
                    : 'bg-emerald-950/20 border-emerald-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Vertical Radiator Whip</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    OMNIDIRECTIONAL 360°
                  </span>
                </div>
                <div className="text-3xl font-bold font-mono text-emerald-400">
                  {vertWhipM.toFixed(3)} m <span className="text-base text-zinc-400">({vertWhipFt.toFixed(2)} ft)</span>
                </div>
                <p className="text-xs font-mono text-zinc-300 mt-1">
                  Length in inches: <strong className="text-white">{(vertWhipFt * 12).toFixed(1)} inches</strong>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">RADIAL LENGTH (4 WIRES)</div>
                  <div className="text-base font-bold text-amber-400 mt-0.5">{radialLengthM.toFixed(3)} m</div>
                  <div className="text-[10px] text-zinc-400">{(radialLengthFt * 12).toFixed(1)} inches each</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">RADIAL DROOP ANGLE</div>
                  <div className="text-base font-bold text-cyan-400 mt-0.5">45° Downward</div>
                  <div className="text-[10px] text-zinc-400">Transforms 36Ω to 50Ω</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: RADIO HORIZON ================= */}
      {activeTab === 'horizon' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                VHF / UHF Line-of-Sight Elevation
              </h4>

              {/* Tx Antenna Height */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Transmitter Antenna Elevation (h1):</span>
                  <span className="text-amber-400 font-bold">{txHeightM} m ({Math.round(txHeightM * 3.28084)} ft)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={txHeightM}
                  onChange={e => setTxHeightM(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[10px] text-zinc-500 font-mono">Height above surrounding ground terrain.</p>
              </div>

              {/* Rx Antenna Height */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Remote Station / Repeater Elevation (h2):</span>
                  <span className="text-cyan-400 font-bold">{rxHeightM} m ({Math.round(rxHeightM * 3.28084)} ft)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={rxHeightM}
                  onChange={e => setRxHeightM(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[10px] text-zinc-500 font-mono">Mountain peak, hilltop outpost, or repeater tower.</p>
              </div>

              <div className="pt-2 text-xs font-sans text-zinc-400 leading-relaxed">
                VHF (144 MHz) and UHF (440 MHz) do not bounce off the ionosphere; they travel via line-of-sight. The 4/3 earth curvature refraction allows signals to travel approximately 15% farther than optical visual sight.
              </div>
            </div>

            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  nightVision
                    ? 'bg-red-950/40 border-red-900'
                    : 'bg-amber-950/20 border-amber-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Maximum Line-of-Sight Range</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                    4/3 EARTH CURVATURE
                  </span>
                </div>
                <div className="text-4xl font-bold font-mono text-amber-400">
                  {horizonKm} <span className="text-xl text-zinc-400">km</span>
                </div>
                <p className="text-xs font-mono text-zinc-300 mt-1">
                  Equivalent to <strong className="text-white">{horizonMiles} Miles</strong> horizon range.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">TX OPTICAL HORIZON</div>
                  <div className="text-sm font-bold text-zinc-200 mt-0.5">
                    {(3.57 * Math.sqrt(txHeightM)).toFixed(1)} km
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">RX OPTICAL HORIZON</div>
                  <div className="text-sm font-bold text-zinc-200 mt-0.5">
                    {(3.57 * Math.sqrt(rxHeightM)).toFixed(1)} km
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
                <span className="text-[11px] font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  Terrain Obstruction Rules:
                </span>
                <ul className="text-xs space-y-1.5 text-zinc-400 font-sans">
                  <li>• Hills or dense wet foliage directly along the line-of-sight cause 20-40 dB signal attenuation.</li>
                  <li>• To communicate past mountains without a repeater, switch to <strong>HF 40m/80m NVIS</strong> (Near Vertical Incidence Skywave) which shoots radio waves straight up into the F2 ionosphere layer to rain down in valleys.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
