import React, { useState } from 'react';
import { FlaskConical, AlertTriangle, ShieldCheck, Flame, Scale, Droplets } from 'lucide-react';

interface Props {
  nightVision: boolean;
}

export const ChemistryTitrationCalculator: React.FC<Props> = ({ nightVision }) => {
  const [chemMode, setChemMode] = useState<'gunpowder' | 'acid' | 'mortar' | 'soap'>('gunpowder');

  // Mode 1: Black Powder
  const [targetBatchGrams, setTargetBatchGrams] = useState<number>(500);

  // Mode 2: Acid Dilution
  const [c1Percent, setC1Percent] = useState<number>(98); // 98% concentrated vitriol H2SO4
  const [c2Percent, setC2Percent] = useState<number>(35); // 35% battery acid
  const [targetVolMl, setTargetVolMl] = useState<number>(1000); // 1 Liter

  // Mode 3: Quicklime Mortar
  const [quicklimeKg, setQuicklimeKg] = useState<number>(10);

  // Mode 4: Soap Saponification
  const [fatGrams, setFatGrams] = useState<number>(1000);
  const [fatType, setFatType] = useState<'tallow' | 'lard' | 'olive'>('tallow');
  const [lyeType, setLyeType] = useState<'naoh' | 'koh'>('naoh'); // NaOH hard soap, KOH soft liquid soap

  // Calculations
  // Black powder: 75% KNO3, 15% Charcoal, 10% Sulfur
  const kno3Grams = targetBatchGrams * 0.75;
  const charcoalGrams = targetBatchGrams * 0.15;
  const sulfurGrams = targetBatchGrams * 0.10;

  // Acid Dilution: C1 * V1 = C2 * V2 -> V1 = (C2 * V2) / C1
  const acidVolumeNeeded = c1Percent > 0 ? (c2Percent * targetVolMl) / c1Percent : 0;
  const waterVolumeNeeded = Math.max(0, targetVolMl - acidVolumeNeeded);

  // Quicklime: CaO + H2O -> Ca(OH)2
  // Molar mass: CaO (56.08), H2O (18.02) -> 0.321 kg water per kg CaO minimum
  const slakeWaterMinLiters = quicklimeKg * 0.321;
  const practicalSlakeWaterLiters = quicklimeKg * 0.45; // practical slaking allowance
  const sandKgNeeded = quicklimeKg * 3.5; // 1:3.5 lime to sand masonry mortar

  // Soap: SAP values (mg KOH per g fat)
  // Tallow: 0.141 (NaOH), 0.198 (KOH)
  // Lard: 0.138 (NaOH), 0.195 (KOH)
  // Olive: 0.135 (NaOH), 0.190 (KOH)
  const sapTable = {
    tallow: { naoh: 0.141, koh: 0.198 },
    lard: { naoh: 0.138, koh: 0.195 },
    olive: { naoh: 0.135, koh: 0.190 }
  };
  const baseLyeGrams = fatGrams * sapTable[fatType][lyeType];
  const discountedLyeGrams = baseLyeGrams * 0.95; // 5% superfat discount for skin safety
  const soapWaterGrams = fatGrams * 0.35; // 35% water by weight of oil

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
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}
          >
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-tight">Chemical Stoichiometry &amp; Formulations</h3>
            <p className="text-xs text-zinc-400 font-mono">Black Powder, Acid Dilution, Mortar Slaking &amp; Saponification</p>
          </div>
        </div>

        {/* Category selector */}
        <div className="flex flex-wrap gap-1 rounded-lg bg-zinc-900 border border-zinc-800 p-1">
          <button
            onClick={() => setChemMode('gunpowder')}
            className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
              chemMode === 'gunpowder' ? 'bg-amber-500 text-black shadow' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Black Powder
          </button>
          <button
            onClick={() => setChemMode('acid')}
            className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
              chemMode === 'acid' ? 'bg-amber-500 text-black shadow' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Acid Dilution
          </button>
          <button
            onClick={() => setChemMode('mortar')}
            className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
              chemMode === 'mortar' ? 'bg-amber-500 text-black shadow' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Lime Mortar
          </button>
          <button
            onClick={() => setChemMode('soap')}
            className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
              chemMode === 'soap' ? 'bg-amber-500 text-black shadow' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Soap Lye
          </button>
        </div>
      </div>

      {/* MODE 1: Black Powder */}
      {chemMode === 'gunpowder' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Target Propellant Batch Weight:</span>
                <span className="text-amber-400 font-bold">{targetBatchGrams} grams ({(targetBatchGrams / 1000).toFixed(2)} kg)</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={targetBatchGrams}
                onChange={e => setTargetBatchGrams(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-xs font-mono text-zinc-300">
              <div className="text-amber-400 font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4" />
                Standard 75:15:10 Stoichiometric Ratio:
              </div>
              <p className="text-zinc-400 leading-relaxed">
                2 KNO₃ + 3 C + S → K₂S + N₂ + 3 CO₂. Produces roughly 300 mL of expansion gas per gram of powder, generating high chamber pressures for blasting and propellant charges.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">Required Component Masses</div>
              
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-xs font-mono text-zinc-300 font-bold">1. Potassium Nitrate (KNO₃) - 75%:</span>
                <span className="text-base font-mono font-bold text-cyan-400">{kno3Grams.toFixed(1)} g</span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-xs font-mono text-zinc-300 font-bold">2. Fine Willow Charcoal (C) - 15%:</span>
                <span className="text-base font-mono font-bold text-amber-400">{charcoalGrams.toFixed(1)} g</span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-xs font-mono text-zinc-300 font-bold">3. Pure Sulfur (S) - 10%:</span>
                <span className="text-base font-mono font-bold text-yellow-300">{sulfurGrams.toFixed(1)} g</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-[11px] font-mono text-red-300 leading-relaxed flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>Safety Rule: NEVER dry-mill all three together. Wet-incorporate with 75% alcohol before pressing into corned cakes.</span>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: Acid Dilution */}
      {chemMode === 'acid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Concentrated Stock Acid (%):</span>
                <span className="text-cyan-400 font-bold">{c1Percent}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="98"
                value={c1Percent}
                onChange={e => setC1Percent(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Target Desired Acid (%):</span>
                <span className="text-amber-400 font-bold">{c2Percent}%</span>
              </div>
              <input
                type="range"
                min="1"
                max={c1Percent - 1}
                value={c2Percent}
                onChange={e => setC2Percent(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Target Final Volume (mL):</span>
                <span className="text-zinc-200 font-bold">{targetVolMl} mL ({(targetVolMl / 1000).toFixed(2)} L)</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={targetVolMl}
                onChange={e => setTargetVolMl(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">Titration Dosing Requirements</div>

              <div className="flex justify-between items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-xs font-mono text-zinc-300 font-bold">Concentrated Acid Volume:</span>
                <span className="text-lg font-mono font-bold text-amber-400">{acidVolumeNeeded.toFixed(1)} mL</span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-xs font-mono text-zinc-300 font-bold">Pure Distilled Water:</span>
                <span className="text-lg font-mono font-bold text-cyan-400">{waterVolumeNeeded.toFixed(1)} mL</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-red-950/30 border border-red-800 text-xs font-mono text-red-300 leading-relaxed flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block uppercase">CRITICAL SAFETY DIRECTIVE (A.A.):</strong>
                ALWAYS ADD ACID TO WATER. Never pour water into concentrated acid. Adding water to acid causes explosive flash-boiling and steam-induced acid splatter.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: Lime Mortar */}
      {chemMode === 'mortar' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Raw Quicklime (CaO) Mass:</span>
                <span className="text-amber-400 font-bold">{quicklimeKg} kg</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={quicklimeKg}
                onChange={e => setQuicklimeKg(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 space-y-1.5">
              <div className="text-amber-400 font-bold">Exothermic Slaking Reaction:</div>
              <p className="text-zinc-400 leading-relaxed">
                CaO + H₂O → Ca(OH)₂ + 65.2 kJ/mol. The mixture will violently boil and reach 150°C+ during initial slaking. Wear eye and skin protection against caustic quicklime burns.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 space-y-3">
            <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">Mortar Mixing Specs</div>

            <div className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
              <span className="text-zinc-300 font-bold">Water for Complete Slaking:</span>
              <span className="text-base font-bold text-cyan-400">{practicalSlakeWaterLiters.toFixed(1)} Liters</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
              <span className="text-zinc-300 font-bold">Clean Sharp Sand Required:</span>
              <span className="text-base font-bold text-amber-400">{sandKgNeeded.toFixed(1)} kg</span>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-[11px] font-mono text-emerald-300 leading-relaxed">
              ✓ Yields approx. {(quicklimeKg * 1.32 + sandKgNeeded).toFixed(0)} kg of workable masonry mortar. Sets over 30 days via carbonation (absorbing ambient CO₂ from air back into limestone CaCO₃).
            </div>
          </div>
        </div>
      )}

      {/* MODE 4: Soap Lye */}
      {chemMode === 'soap' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Rendered Fat / Tallow Mass:</span>
                <span className="text-amber-400 font-bold">{fatGrams} g ({(fatGrams / 1000).toFixed(2)} kg)</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={fatGrams}
                onChange={e => setFatGrams(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1">Fat Source:</label>
                <select
                  value={fatType}
                  onChange={e => setFatType(e.target.value as any)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-xs font-mono text-zinc-200"
                >
                  <option value="tallow">Beef Tallow</option>
                  <option value="lard">Pig Lard</option>
                  <option value="olive">Olive Oil</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1">Lye Type:</label>
                <select
                  value={lyeType}
                  onChange={e => setLyeType(e.target.value as any)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-xs font-mono text-zinc-200"
                >
                  <option value="naoh">NaOH (Hard Bar Soap)</option>
                  <option value="koh">KOH (Soft / Liquid Soap)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 space-y-3">
            <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">Saponification Batch Formula</div>

            <div className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
              <span className="text-zinc-300 font-bold">Lye Weight (5% Superfat Discount):</span>
              <span className="text-base font-bold text-amber-400">{discountedLyeGrams.toFixed(1)} g</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
              <span className="text-zinc-300 font-bold">Pure Water for Lye Solution:</span>
              <span className="text-base font-bold text-cyan-400">{soapWaterGrams.toFixed(1)} g (mL)</span>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 leading-relaxed">
              <strong className="text-amber-400">Process:</strong> Dissolve lye in cold water (water heats up). Allow both lye water and melted tallow to cool to ~45°C (115°F) before combining. Stir continuously until reaching &quot;trace&quot;.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
