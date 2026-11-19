import React, { useState } from 'react';
import { HeartPulse, Flame, Activity, ShieldAlert, CheckCircle2, AlertOctagon, Info, Droplet } from 'lucide-react';

interface Props {
  nightVision: boolean;
}

interface BodyRegion {
  id: string;
  name: string;
  adultPct: number;
  childPct: number;
}

const BODY_REGIONS: BodyRegion[] = [
  { id: 'head', name: 'Head & Neck', adultPct: 9, childPct: 18 },
  { id: 'chest', name: 'Chest (Anterior Torso)', adultPct: 9, childPct: 9 },
  { id: 'abdomen', name: 'Abdomen (Anterior Torso)', adultPct: 9, childPct: 9 },
  { id: 'upper_back', name: 'Upper Back (Posterior)', adultPct: 9, childPct: 9 },
  { id: 'lower_back', name: 'Lower Back & Buttocks', adultPct: 9, childPct: 9 },
  { id: 'left_arm', name: 'Left Arm & Hand', adultPct: 9, childPct: 9 },
  { id: 'right_arm', name: 'Right Arm & Hand', adultPct: 9, childPct: 9 },
  { id: 'left_leg_ant', name: 'Left Leg (Front)', adultPct: 9, childPct: 7 },
  { id: 'left_leg_post', name: 'Left Leg (Back)', adultPct: 9, childPct: 7 },
  { id: 'right_leg_ant', name: 'Right Leg (Front)', adultPct: 9, childPct: 7 },
  { id: 'right_leg_post', name: 'Right Leg (Back)', adultPct: 9, childPct: 7 },
  { id: 'groin', name: 'Perineum / Groin', adultPct: 1, childPct: 1 },
];

export const TraumaTriageCalculator: React.FC<Props> = ({ nightVision }) => {
  const [activeTab, setActiveTab] = useState<'burns' | 'shock' | 'gcs'>('burns');

  // --- BURNS STATE ---
  const [patientWeightKg, setPatientWeightKg] = useState<number>(70);
  const [isPediatric, setIsPediatric] = useState<boolean>(false);
  const [selectedRegions, setSelectedRegions] = useState<string[]>(['chest', 'left_arm']);
  const [hoursSinceBurn, setHoursSinceBurn] = useState<number>(1);
  const [dripFactor, setDripFactor] = useState<15 | 60>(15); // 15 gtt/ml standard macro, 60 micro

  // --- SHOCK INDEX STATE ---
  const [heartRate, setHeartRate] = useState<number>(115);
  const [systolicBp, setSystolicBp] = useState<number>(90);

  // --- GCS STATE ---
  const [gcsEye, setGcsEye] = useState<number>(4);
  const [gcsVerbal, setGcsVerbal] = useState<number>(5);
  const [gcsMotor, setGcsMotor] = useState<number>(6);

  // ================= BURNS CALCULATIONS =================
  const totalTbsa = selectedRegions.reduce((sum, regId) => {
    const reg = BODY_REGIONS.find(r => r.id === regId);
    if (!reg) return sum;
    return sum + (isPediatric ? reg.childPct : reg.adultPct);
  }, 0);

  // Parkland Formula: 4 mL * kg * %TBSA (Capped clinically at 50% for initial calculation)
  const effectiveTbsa = Math.min(totalTbsa, 50);
  const totalParklandMl = Math.round(4 * patientWeightKg * effectiveTbsa);
  const first8HoursMl = Math.round(totalParklandMl / 2);
  const next16HoursMl = Math.round(totalParklandMl / 2);

  // Adjust for elapsed time (first half must be given within 8 hours of injury)
  const remainingFirst8Hours = Math.max(1, 8 - hoursSinceBurn);
  const rateFirst8HrMlHr = Math.round(first8HoursMl / remainingFirst8Hours);
  const rateNext16HrMlHr = Math.round(next16HoursMl / 16);

  // Drip rates (drops per minute = (mL/hr * gtt/mL) / 60)
  const gttPerMinFirst8 = Math.round((rateFirst8HrMlHr * dripFactor) / 60);
  const gttPerMinNext16 = Math.round((rateNext16HrMlHr * dripFactor) / 60);

  // Target Urine Output: 0.5 - 1.0 mL/kg/hr adult, 1.0 - 2.0 child
  const targetUrineLow = isPediatric ? Math.round(1.0 * patientWeightKg) : Math.round(0.5 * patientWeightKg);
  const targetUrineHigh = isPediatric ? Math.round(2.0 * patientWeightKg) : Math.round(1.0 * patientWeightKg);

  const toggleRegion = (id: string) => {
    if (selectedRegions.includes(id)) {
      setSelectedRegions(selectedRegions.filter(r => r !== id));
    } else {
      setSelectedRegions([...selectedRegions, id]);
    }
  };

  // ================= SHOCK INDEX CALCULATIONS =================
  const shockIndex = systolicBp > 0 ? parseFloat((heartRate / systolicBp).toFixed(2)) : 0;
  let shockSeverity = 'Normal';
  let shockColor = 'text-emerald-400';
  let shockDescription = 'Normal hemodynamics. Maintain observation.';
  let bloodLossClass = 'Class I (<15% / <750 mL)';

  if (shockIndex >= 1.3) {
    shockSeverity = 'Severe Uncompensated Shock';
    shockColor = 'text-red-500';
    shockDescription = 'Critical decompensation. Massive transfusion protocol and immediate tourniquet / surgical hemostasis indicated.';
    bloodLossClass = 'Class IV (>40% / >2000 mL)';
  } else if (shockIndex >= 1.0) {
    shockSeverity = 'High Risk Decompensated Shock';
    shockColor = 'text-orange-500';
    shockDescription = 'Impaired tissue perfusion. High probability of internal hemorrhage or tension pneumothorax.';
    bloodLossClass = 'Class III (30-40% / 1500-2000 mL)';
  } else if (shockIndex >= 0.7) {
    shockSeverity = 'Mild / Compensated Shock';
    shockColor = 'text-amber-400';
    shockDescription = 'Compensated occult shock. Tachycardia masking falling venous return. Keep patient warm.';
    bloodLossClass = 'Class II (15-30% / 750-1500 mL)';
  }

  // ================= GCS CALCULATIONS =================
  const totalGcs = gcsEye + gcsVerbal + gcsMotor;
  let gcsTbiTier = 'Mild Head Injury';
  let gcsColor = 'text-emerald-400';
  let gcsWarning = 'Neurologically intact or mild concussion. Serial reassessment every 2 hours.';

  if (totalGcs <= 8) {
    gcsTbiTier = 'Severe Head Injury (Comatose)';
    gcsColor = 'text-red-500';
    gcsWarning = 'GCS ≤ 8: High risk of airway compromise. Secure airway, place in lateral recovery position if no cervical fracture.';
  } else if (totalGcs <= 12) {
    gcsTbiTier = 'Moderate Head Injury';
    gcsColor = 'text-amber-400';
    gcsWarning = 'Significant neurological deficit. Elevate head 30°, maintain cervical spine immobilization, prepare for deterioration.';
  }

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
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}
          >
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-tight">Trauma &amp; Burn Triage Calculator</h3>
            <p className="text-xs text-zinc-400 font-mono">Parkland burn resuscitation, shock index &amp; Glasgow coma scale</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('burns')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'burns'
                ? nightVision
                  ? 'bg-red-900/50 text-white font-bold'
                  : 'bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Parkland Burns</span>
          </button>
          <button
            onClick={() => setActiveTab('shock')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'shock'
                ? nightVision
                  ? 'bg-red-900/50 text-white font-bold'
                  : 'bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Shock Index</span>
          </button>
          <button
            onClick={() => setActiveTab('gcs')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'gcs'
                ? nightVision
                  ? 'bg-red-900/50 text-white font-bold'
                  : 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>GCS Coma</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: PARKLAND BURNS ================= */}
      {activeTab === 'burns' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Body Regions & Patient Info (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-400">Patient Mode:</span>
                  <button
                    onClick={() => setIsPediatric(!isPediatric)}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-all ${
                      isPediatric
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                        : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                    }`}
                  >
                    {isPediatric ? 'Pediatric (<14 yrs)' : 'Adult Standard'}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400">IV Set:</span>
                  <button
                    onClick={() => setDripFactor(dripFactor === 15 ? 60 : 15)}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-800 border border-zinc-700 text-zinc-300"
                  >
                    {dripFactor} gtt/mL
                  </button>
                </div>
              </div>

              {/* Patient Weight & Time Elapsed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">Body Weight:</span>
                    <span className="text-rose-400 font-bold">{patientWeightKg} kg ({Math.round(patientWeightKg * 2.20462)} lbs)</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="140"
                    value={patientWeightKg}
                    onChange={e => setPatientWeightKg(Number(e.target.value))}
                    className="w-full accent-rose-500 bg-zinc-800 h-2 rounded cursor-pointer"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">Time Since Burn:</span>
                    <span className="text-rose-400 font-bold">{hoursSinceBurn} Hours</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="7"
                    value={hoursSinceBurn}
                    onChange={e => setHoursSinceBurn(Number(e.target.value))}
                    className="w-full accent-rose-500 bg-zinc-800 h-2 rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* Interactive Rule of Nines Region Picker */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Rule of Nines — Burned Regions (2nd &amp; 3rd Degree Only):
                  </label>
                  <span className="text-xs font-mono text-rose-400 font-bold">
                    {totalTbsa}% TBSA Selected
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {BODY_REGIONS.map(reg => {
                    const isSelected = selectedRegions.includes(reg.id);
                    const pct = isPediatric ? reg.childPct : reg.adultPct;

                    return (
                      <button
                        key={reg.id}
                        onClick={() => toggleRegion(reg.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all text-xs font-mono ${
                          isSelected
                            ? 'bg-rose-950/60 border-rose-500 text-white font-bold shadow-md shadow-rose-950/40'
                            : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate">{reg.name}</span>
                          <span className={isSelected ? 'text-rose-300' : 'text-zinc-500'}>
                            {pct}%
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Resuscitation Protocol Output (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  nightVision
                    ? 'bg-red-950/40 border-red-900'
                    : 'bg-rose-950/20 border-rose-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Total 24-Hr Parkland Fluid</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">
                    RINGER'S LACTATE
                  </span>
                </div>
                <div className="text-3xl font-bold font-mono text-rose-400">
                  {totalParklandMl.toLocaleString()} <span className="text-base text-zinc-400">mL</span>
                </div>
                <p className="text-xs font-mono text-zinc-300 mt-1">
                  Formula: 4 mL × {patientWeightKg} kg × {effectiveTbsa}% TBSA
                </p>
              </div>

              {/* Infusion Timing Schedule */}
              <div className="space-y-2.5 font-mono text-xs">
                {/* First 8 Hours */}
                <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300 font-bold">FIRST 8 HOURS ({remainingFirst8Hours}h remaining)</span>
                    <span className="text-rose-400 font-bold">{first8HoursMl.toLocaleString()} mL</span>
                  </div>
                  <div className="flex justify-between text-zinc-400 text-[11px] pt-1 border-t border-zinc-800">
                    <span>Flow Rate: <strong className="text-zinc-200">{rateFirst8HrMlHr} mL/hr</strong></span>
                    <span>IV Drip: <strong className="text-amber-400">{gttPerMinFirst8} gtt/min</strong></span>
                  </div>
                </div>

                {/* Next 16 Hours */}
                <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300 font-bold">NEXT 16 HOURS (Maintenance)</span>
                    <span className="text-zinc-400 font-bold">{next16HoursMl.toLocaleString()} mL</span>
                  </div>
                  <div className="flex justify-between text-zinc-400 text-[11px] pt-1 border-t border-zinc-800">
                    <span>Flow Rate: <strong className="text-zinc-200">{rateNext16HrMlHr} mL/hr</strong></span>
                    <span>IV Drip: <strong className="text-amber-400">{gttPerMinNext16} gtt/min</strong></span>
                  </div>
                </div>

                {/* Target Urine Output Monitor */}
                <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">TARGET URINE OUTPUT:</span>
                    <span className="text-emerald-400 font-bold">{targetUrineLow} - {targetUrineHigh} mL/hr</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-sans leading-tight">
                    Titrate fluid rates based on catheter bag volume. If urine drops below {targetUrineLow} mL/hr, increase rate by 20%.
                  </p>
                </div>
              </div>

              {/* Crucial Clinical Field Note */}
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="font-sans leading-relaxed text-[11px]">
                  <strong>Field Alternative:</strong> If sterile Ringer's Lactate is unavailable, use normal physiological saline (0.9% NaCl). Avoid sterile water alone without electrolytes to prevent lethal cerebral edema.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: SHOCK INDEX ================= */}
      {activeTab === 'shock' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vital Signs Inputs */}
            <div className="space-y-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-400" />
                Hemodynamic Vital Signs
              </h4>

              {/* Heart Rate */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Heart Rate (Pulse):</span>
                  <span className="text-amber-400 font-bold">{heartRate} BPM</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="190"
                  value={heartRate}
                  onChange={e => setHeartRate(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>60 (Bradycardia)</span>
                  <span>100 (Tachycardia)</span>
                  <span>150+ (Critical)</span>
                </div>
              </div>

              {/* Systolic BP */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Systolic Blood Pressure (SBP):</span>
                  <span className="text-cyan-400 font-bold">{systolicBp} mmHg</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="180"
                  value={systolicBp}
                  onChange={e => setSystolicBp(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>&lt;90 (Hypotension)</span>
                  <span>120 (Normal)</span>
                  <span>140+ (Elevated)</span>
                </div>
              </div>

              <div className="pt-2 text-xs font-sans text-zinc-400 leading-relaxed">
                The <strong>Shock Index (SI = HR / SBP)</strong> is clinically superior to blood pressure alone in detecting occult uncompensated hemorrhage before catastrophic cardiovascular collapse.
              </div>
            </div>

            {/* Shock Diagnostic Tiers */}
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  nightVision
                    ? 'bg-red-950/40 border-red-900'
                    : shockIndex >= 1.0
                    ? 'bg-red-950/30 border-red-900/60'
                    : shockIndex >= 0.7
                    ? 'bg-amber-950/30 border-amber-900/60'
                    : 'bg-emerald-950/30 border-emerald-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Shock Index Score</span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded font-bold ${shockColor} bg-zinc-900/80`}>
                    {shockSeverity.toUpperCase()}
                  </span>
                </div>
                <div className={`text-4xl font-bold font-mono ${shockColor}`}>
                  {shockIndex.toFixed(2)}
                </div>
                <p className="text-xs text-zinc-300 font-sans mt-2 leading-relaxed">
                  {shockDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">ESTIMATED BLOOD LOSS</div>
                  <div className="text-sm font-bold text-amber-400 mt-0.5">{bloodLossClass}</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">TRIAGE PRIORITY</div>
                  <div className="text-sm font-bold text-rose-400 mt-0.5">
                    {shockIndex >= 1.0 ? 'IMMEDIATE (RED)' : shockIndex >= 0.7 ? 'DELAYED (YELLOW)' : 'MINOR (GREEN)'}
                  </div>
                </div>
              </div>

              {/* Triage Protocol Action Checklist */}
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
                <span className="text-[11px] font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  Field Hemorrhage Protocol:
                </span>
                <ul className="text-xs space-y-1.5 text-zinc-400 font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Apply windlass combat tourniquet 2-3 inches proximal to limb bleeding site.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Pack junctional groin/axilla wounds with kaolin/hemostatic gauze; hold direct pressure 3 min.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Wrap active hypothermia wrap. Hypothermia impairs clotting cascade (lethal triad).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: GCS COMA SCALE ================= */}
      {activeTab === 'gcs' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GCS Categories */}
            <div className="space-y-4">
              {/* Eye Opening */}
              <div className="space-y-1.5 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-300 font-bold">1. Eye Opening (E):</span>
                  <span className="text-indigo-400 font-bold">E{gcsEye} / 4</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { val: 4, label: 'Spontaneous (4)' },
                    { val: 3, label: 'To Sound/Voice (3)' },
                    { val: 2, label: 'To Painful Pressure (2)' },
                    { val: 1, label: 'No Response (1)' },
                  ].map(item => (
                    <button
                      key={item.val}
                      onClick={() => setGcsEye(item.val)}
                      className={`p-2 rounded-lg border text-[11px] font-mono text-left transition-all ${
                        gcsEye === item.val
                          ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300 font-bold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Verbal Response */}
              <div className="space-y-1.5 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-300 font-bold">2. Verbal Response (V):</span>
                  <span className="text-indigo-400 font-bold">V{gcsVerbal} / 5</span>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {[
                    { val: 5, label: 'Oriented to person, place, and time (5)' },
                    { val: 4, label: 'Confused, answers questions inappropriately (4)' },
                    { val: 3, label: 'Inappropriate words / random swear words (3)' },
                    { val: 2, label: 'Incomprehensible sounds, groaning, moaning (2)' },
                    { val: 1, label: 'No verbal sound response (1)' },
                  ].map(item => (
                    <button
                      key={item.val}
                      onClick={() => setGcsVerbal(item.val)}
                      className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-mono text-left transition-all ${
                        gcsVerbal === item.val
                          ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300 font-bold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Motor Response */}
              <div className="space-y-1.5 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-300 font-bold">3. Motor Response (M):</span>
                  <span className="text-indigo-400 font-bold">M{gcsMotor} / 6</span>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {[
                    { val: 6, label: 'Obeys motor commands fully (6)' },
                    { val: 5, label: 'Localizes to trapezius painful pressure (5)' },
                    { val: 4, label: 'Withdrawal / normal flexion to pain (4)' },
                    { val: 3, label: 'Abnormal flexion (Decorticate rigidity) (3)' },
                    { val: 2, label: 'Extensor posture (Decerebrate rigidity) (2)' },
                    { val: 1, label: 'No motor movement / flaccid (1)' },
                  ].map(item => (
                    <button
                      key={item.val}
                      onClick={() => setGcsMotor(item.val)}
                      className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-mono text-left transition-all ${
                        gcsMotor === item.val
                          ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300 font-bold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results & TBI Classification */}
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  nightVision
                    ? 'bg-red-950/40 border-red-900'
                    : totalGcs <= 8
                    ? 'bg-red-950/30 border-red-900/60'
                    : totalGcs <= 12
                    ? 'bg-amber-950/30 border-amber-900/60'
                    : 'bg-indigo-950/30 border-indigo-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Glasgow Coma Score</span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded font-bold ${gcsColor} bg-zinc-900/80`}>
                    {gcsTbiTier.toUpperCase()}
                  </span>
                </div>
                <div className={`text-4xl font-bold font-mono ${gcsColor}`}>
                  {totalGcs} <span className="text-base text-zinc-400">/ 15</span>
                </div>
                <p className="text-xs font-mono text-zinc-300 mt-1">
                  Breakdown: E{gcsEye} + V{gcsVerbal} + M{gcsMotor}
                </p>
                <p className="text-xs text-zinc-300 font-sans mt-2 leading-relaxed">
                  {gcsWarning}
                </p>
              </div>

              {totalGcs <= 8 && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800 text-red-200 text-xs flex items-start gap-2.5">
                  <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div className="font-sans leading-relaxed text-[11px]">
                    <strong>Critical Airway Alert (GCS ≤ 8):</strong> Patient cannot maintain protective pharyngeal/gag reflexes. Place immediately into left lateral recovery position to avoid fatal vomitus aspiration, unless spinal injury prevents movement.
                  </div>
                </div>
              )}

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <span className="text-[11px] font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  Post-Concussive Danger Signs:
                </span>
                <ul className="text-xs space-y-1.5 text-zinc-400 font-sans">
                  <li>• Asymmetrical / "blown" unreactive pupil (uncal herniation)</li>
                  <li>• Cushing's Triad: Bradycardia, irregular breathing, hypertension</li>
                  <li>• Clear CSF fluid leaking from nose (rhinorrhea) or ears (otorrhea)</li>
                  <li>• "Battle's sign" (mastoid ecchymosis behind ear) or raccoon eyes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
