import React, { useState } from 'react';
import { Apple, Users, Calendar, TrendingDown, ShieldAlert, Award } from 'lucide-react';

interface CalorieRationPlannerProps {
  nightVision: boolean;
}

export const CalorieRationPlanner: React.FC<CalorieRationPlannerProps> = ({ nightVision }) => {
  const [adults, setAdults] = useState<number>(3);
  const [children, setChildren] = useState<number>(1);
  const [activityLevel, setActivityLevel] = useState<'low' | 'medium' | 'high'>('medium');

  // Inventory in kg or liters
  const [grainsKg, setGrainsKg] = useState<number>(25);   // Rice, oats, wheat (approx 3600 kcal/kg)
  const [beansKg, setBeansKg] = useState<number>(15);     // Beans, lentils (approx 3400 kcal/kg)
  const [fatsLiters, setFatsLiters] = useState<number>(5); // Oil, lard, tallow (approx 8800 kcal/L)
  const [cannedKg, setCannedKg] = useState<number>(10);   // Meats, stew (approx 1500 kcal/kg)
  const [sugarKg, setSugarKg] = useState<number>(5);      // Sugar, honey (approx 3900 kcal/kg)

  // Energy multiplier
  const adultBaseKcal = activityLevel === 'low' ? 1800 : activityLevel === 'medium' ? 2200 : 2800;
  const childBaseKcal = activityLevel === 'low' ? 1200 : activityLevel === 'medium' ? 1500 : 1900;

  const totalDailyBurnKcal = (adults * adultBaseKcal) + (children * childBaseKcal);

  // Total Calories in stock
  const totalKcal =
    (grainsKg * 3600) +
    (beansKg * 3400) +
    (fatsLiters * 8840) +
    (cannedKg * 1500) +
    (sugarKg * 3870);

  const daysRemaining = totalDailyBurnKcal > 0 ? Math.floor(totalKcal / totalDailyBurnKcal) : 0;
  const stretchedDays75 = totalDailyBurnKcal > 0 ? Math.floor(totalKcal / (totalDailyBurnKcal * 0.75)) : 0;

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
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Apple className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-tight">Survival Rationing &amp; Calorie Planner</h3>
            <p className="text-xs text-zinc-400 font-mono">Basal energy expenditure vs. pantry stockpile reserves</p>
          </div>
        </div>
      </div>

      {/* Group Configuration */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-mono text-zinc-400">Adults (18+ yrs):</label>
          <input
            type="number"
            min="1"
            max="50"
            value={adults}
            onChange={e => setAdults(Math.max(1, Number(e.target.value)))}
            className="w-full px-3 py-2 rounded-lg bg-black/60 border border-zinc-700 font-mono text-sm text-zinc-200 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-zinc-400">Children (&lt;18 yrs):</label>
          <input
            type="number"
            min="0"
            max="50"
            value={children}
            onChange={e => setChildren(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 rounded-lg bg-black/60 border border-zinc-700 font-mono text-sm text-zinc-200 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-zinc-400">Activity Level:</label>
          <select
            value={activityLevel}
            onChange={e => setActivityLevel(e.target.value as any)}
            className="w-full px-3 py-2 rounded-lg bg-black/60 border border-zinc-700 font-mono text-sm text-zinc-200 outline-none"
          >
            <option value="low">Sedentary / Shelter</option>
            <option value="medium">Moderate Farming / Patrol</option>
            <option value="high">Heavy Labor / Trekking</option>
          </select>
        </div>
      </div>

      {/* Stockpile Inventory Inputs */}
      <div className="space-y-2">
        <div className="text-xs font-mono uppercase tracking-wider text-amber-400">Dry Pantry Inventory</div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 space-y-1">
            <span className="text-[10px] font-mono text-zinc-400 block">Grains / Rice (kg)</span>
            <input
              type="number"
              min="0"
              value={grainsKg}
              onChange={e => setGrainsKg(Math.max(0, Number(e.target.value)))}
              className="w-full bg-transparent font-mono text-sm font-bold text-white outline-none"
            />
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 space-y-1">
            <span className="text-[10px] font-mono text-zinc-400 block">Beans / Lentils (kg)</span>
            <input
              type="number"
              min="0"
              value={beansKg}
              onChange={e => setBeansKg(Math.max(0, Number(e.target.value)))}
              className="w-full bg-transparent font-mono text-sm font-bold text-white outline-none"
            />
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 space-y-1">
            <span className="text-[10px] font-mono text-zinc-400 block">Oils / Fats (L)</span>
            <input
              type="number"
              min="0"
              value={fatsLiters}
              onChange={e => setFatsLiters(Math.max(0, Number(e.target.value)))}
              className="w-full bg-transparent font-mono text-sm font-bold text-white outline-none"
            />
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 space-y-1">
            <span className="text-[10px] font-mono text-zinc-400 block">Canned Food (kg)</span>
            <input
              type="number"
              min="0"
              value={cannedKg}
              onChange={e => setCannedKg(Math.max(0, Number(e.target.value)))}
              className="w-full bg-transparent font-mono text-sm font-bold text-white outline-none"
            />
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 space-y-1">
            <span className="text-[10px] font-mono text-zinc-400 block">Sugar / Honey (kg)</span>
            <input
              type="number"
              min="0"
              value={sugarKg}
              onChange={e => setSugarKg(Math.max(0, Number(e.target.value)))}
              className="w-full bg-transparent font-mono text-sm font-bold text-white outline-none"
            />
          </div>
        </div>
      </div>

      {/* Burn Rate & Runway Projection Output Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
          <div className="text-[11px] font-mono text-zinc-400">Group Caloric Requirement</div>
          <div className="text-xl font-bold font-mono text-amber-400">
            {totalDailyBurnKcal.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">kcal/day</span>
          </div>
          <div className="text-[10px] font-mono text-zinc-500">
            {adults + children} individuals total
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900 border border-emerald-900/50 space-y-1">
          <div className="text-[11px] font-mono text-zinc-400">Full Calorie Runway</div>
          <div className="text-2xl font-bold font-mono text-emerald-400">
            {daysRemaining} <span className="text-xs text-zinc-400 font-normal">Days</span>
          </div>
          <div className="text-[10px] font-mono text-zinc-500">
            100% daily caloric baseline
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900 border border-cyan-900/50 space-y-1">
          <div className="text-[11px] font-mono text-zinc-400">Emergency Ration Runway (-25%)</div>
          <div className="text-2xl font-bold font-mono text-cyan-400">
            {stretchedDays75} <span className="text-xs text-zinc-400 font-normal">Days</span>
          </div>
          <div className="text-[10px] font-mono text-emerald-400">
            +{(stretchedDays75 - daysRemaining)} days extended survival
          </div>
        </div>
      </div>
    </div>
  );
};
