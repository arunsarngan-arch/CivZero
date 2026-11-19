import React, { useState } from 'react';
import { Zap, Droplets, Wind, BatteryCharging, ShieldAlert, Info, Activity, Gauge } from 'lucide-react';

interface Props {
  nightVision: boolean;
}

export const KineticPowerCalculator: React.FC<Props> = ({ nightVision }) => {
  const [activeTab, setActiveTab] = useState<'hydro' | 'wind' | 'battery'>('hydro');

  // --- HYDRO INPUTS ---
  const [headMeters, setHeadMeters] = useState<number>(15); // Head in meters (vertical drop)
  const [flowLps, setFlowLps] = useState<number>(8); // Flow in Liters per second
  const [hydroEfficiency, setHydroEfficiency] = useState<number>(70); // % turbine + generator eff
  const [runnerDiameterCm, setRunnerDiameterCm] = useState<number>(18); // Pelton runner pitch diameter

  // --- WIND INPUTS ---
  const [windSpeedMs, setWindSpeedMs] = useState<number>(7.5); // Wind speed m/s
  const [rotorDiameterM, setRotorDiameterM] = useState<number>(2.4); // Rotor diameter in meters
  const [turbineType, setTurbineType] = useState<'hawt' | 'savonius' | 'darrieus'>('hawt');

  // --- BATTERY & SOLAR INPUTS ---
  const [dailyLoadWh, setDailyLoadWh] = useState<number>(1200); // 1200 Wh/day
  const [systemVoltage, setSystemVoltage] = useState<12 | 24 | 48>(12);
  const [autonomyDays, setAutonomyDays] = useState<number>(3); // 3 days no sun/wind
  const [batteryType, setBatteryType] = useState<'lead_acid' | 'lifepo4'>('lead_acid');
  const [peakSunHours, setPeakSunHours] = useState<number>(4.5); // Average solar irradiation hours

  // ================= HYDRO CALCULATIONS =================
  // P = rho * g * H * Q * efficiency
  // rho = 1000 kg/m3, g = 9.81 m/s2, Q in m3/s = flowLps / 1000
  const flowM3s = flowLps / 1000;
  const hydroWatts = Math.round(1000 * 9.81 * headMeters * flowM3s * (hydroEfficiency / 100));
  const hydroKwhPerDay = ((hydroWatts * 24) / 1000).toFixed(2);
  const jetVelocityMs = Math.sqrt(2 * 9.81 * headMeters); // v = sqrt(2gh)
  // Recommended nozzle orifice diameter (assuming 1 jet): Q = A * v -> d = sqrt(4Q / (pi * v))
  const nozzleDiameterMm = jetVelocityMs > 0 ? (Math.sqrt((4 * flowM3s) / (Math.PI * jetVelocityMs)) * 1000).toFixed(1) : '0';
  // Optimum Pelton RPM: Bucket velocity u = 0.46 * v_jet. u = (pi * D * RPM) / 60 -> RPM = (60 * 0.46 * v_jet) / (pi * D)
  const runnerDiameterM = runnerDiameterCm / 100;
  const peltonRpm = runnerDiameterM > 0 ? Math.round((60 * 0.46 * jetVelocityMs) / (Math.PI * runnerDiameterM)) : 0;

  // ================= WIND CALCULATIONS =================
  // Swept area A = pi * (D/2)^2 for HAWT; for Savonius barrel H * W (approx D * D * 0.8)
  const sweptAreaM2 = turbineType === 'savonius' 
    ? rotorDiameterM * (rotorDiameterM * 1.2)
    : Math.PI * Math.pow(rotorDiameterM / 2, 2);
  // Power coefficient Cp: HAWT ~0.38, Savonius ~0.18, Darrieus ~0.30
  const cpMap = { hawt: 0.38, savonius: 0.18, darrieus: 0.30 };
  const cp = cpMap[turbineType];
  const airDensity = 1.225; // kg/m3 at sea level
  // P = 0.5 * rho * A * v^3 * Cp * genEff(75%)
  const windWattsTheoretical = 0.5 * airDensity * sweptAreaM2 * Math.pow(windSpeedMs, 3);
  const windWattsElectrical = Math.round(windWattsTheoretical * cp * 0.75);
  const windKwhPerDay = ((windWattsElectrical * 12) / 1000).toFixed(2); // assuming 12 equivalent blowing hours

  // ================= BATTERY & SOLAR CALCULATIONS =================
  const dodLimit = batteryType === 'lead_acid' ? 0.50 : 0.80; // 50% max safe DoD for Lead-Acid, 80% for LiFePO4
  const totalStorageWhNeeded = Math.round((dailyLoadWh * autonomyDays) / dodLimit);
  const requiredBankAh = Math.round(totalStorageWhNeeded / systemVoltage);
  // Count of typical 100Ah 12V deep-cycle batteries
  const batteriesCount100Ah = Math.ceil(requiredBankAh / 100) * (systemVoltage / 12);
  // Solar PV sizing: DailyLoad / (peakSunHours * 0.75 system loss)
  const requiredSolarWatts = Math.round(dailyLoadWh / (peakSunHours * 0.75));

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
                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            }`}
          >
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-tight">Kinetic &amp; Off-Grid Power Sizer</h3>
            <p className="text-xs text-zinc-400 font-mono">Micro-hydro, wind generation &amp; battery bank storage math</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('hydro')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'hydro'
                ? nightVision
                  ? 'bg-red-900/50 text-white font-bold'
                  : 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Droplets className="w-3.5 h-3.5" />
            <span>Hydro Pelton</span>
          </button>
          <button
            onClick={() => setActiveTab('wind')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'wind'
                ? nightVision
                  ? 'bg-red-900/50 text-white font-bold'
                  : 'bg-sky-500/20 border border-sky-500/40 text-sky-300 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Wind className="w-3.5 h-3.5" />
            <span>Wind Rotor</span>
          </button>
          <button
            onClick={() => setActiveTab('battery')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'battery'
                ? nightVision
                  ? 'bg-red-900/50 text-white font-bold'
                  : 'bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BatteryCharging className="w-3.5 h-3.5" />
            <span>Battery &amp; Solar</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: HYDRO PELTON ================= */}
      {activeTab === 'hydro' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Controls */}
            <div className="space-y-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <Gauge className="w-4 h-4 text-emerald-400" />
                Stream &amp; Penstock Measurements
              </h4>

              {/* Head / Vertical Drop */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Vertical Fall (Head):</span>
                  <span className="text-emerald-400 font-bold">{headMeters} m ({Math.round(headMeters * 3.28084)} ft)</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  value={headMeters}
                  onChange={e => setHeadMeters(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[10px] text-zinc-500 font-mono">Elevation difference between intake forebay and nozzle.</p>
              </div>

              {/* Flow Rate */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Flow Rate:</span>
                  <span className="text-emerald-400 font-bold">{flowLps} L/sec ({Math.round(flowLps * 15.85)} GPM)</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="50"
                  step="0.5"
                  value={flowLps}
                  onChange={e => setFlowLps(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[10px] text-zinc-500 font-mono">Continuous flow available during dry summer baseflow.</p>
              </div>

              {/* Runner Diameter */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Runner Pitch Circle (PCD):</span>
                  <span className="text-emerald-400 font-bold">{runnerDiameterCm} cm ({Math.round(runnerDiameterCm / 2.54)} in)</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={runnerDiameterCm}
                  onChange={e => setRunnerDiameterCm(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
              </div>

              {/* System Efficiency */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Turbine + Alternator Efficiency:</span>
                  <span className="text-emerald-400 font-bold">{hydroEfficiency}%</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="85"
                  value={hydroEfficiency}
                  onChange={e => setHydroEfficiency(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[10px] text-zinc-500 font-mono">Typical field-built Pelton or Turgo system: 65% - 75%.</p>
              </div>
            </div>

            {/* Calculations & Results */}
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  nightVision
                    ? 'bg-red-950/40 border-red-900'
                    : 'bg-emerald-950/20 border-emerald-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Continuous Electrical Output</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">24/7 BASELOAD</span>
                </div>
                <div className="text-3xl font-bold font-mono text-emerald-400">
                  {hydroWatts} <span className="text-base text-zinc-400">Watts</span>
                </div>
                <p className="text-xs font-mono text-zinc-300 mt-1">
                  Yields <strong className="text-emerald-300">{hydroKwhPerDay} kWh</strong> per day ({Math.round(hydroWatts / 745.7 * 10) / 10} HP equivalent).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">WATER JET VELOCITY</div>
                  <div className="text-base font-bold text-zinc-200 mt-0.5">{jetVelocityMs.toFixed(1)} m/s</div>
                  <div className="text-[10px] text-zinc-400">{(jetVelocityMs * 3.6).toFixed(0)} km/h impact speed</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">NOZZLE ORIFICE DIA</div>
                  <div className="text-base font-bold text-amber-400 mt-0.5">{nozzleDiameterMm} mm</div>
                  <div className="text-[10px] text-zinc-400">Smooth brass / bronze jet</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">OPTIMUM RUNNER SHAFT</div>
                  <div className="text-base font-bold text-cyan-400 mt-0.5">{peltonRpm} RPM</div>
                  <div className="text-[10px] text-zinc-400">Bucket speed u = 0.46 v</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">COMMUNITY RUNWAY</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">
                    {Math.floor(hydroWatts / 15)} LED Bulbs
                  </div>
                  <div className="text-[10px] text-zinc-400">or {Math.floor(hydroWatts / 120)} field radios</div>
                </div>
              </div>

              {/* Technical Warning Box */}
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-amber-200/90 text-xs flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="font-sans leading-relaxed text-[11px]">
                  <strong>Penstock Sizing Rule:</strong> Water hammer surge pressure spikes can rupture pipes if shut down abruptly. Keep penstock velocity below 1.5 m/s. Maintain a minimum penstock pipe diameter of <strong className="text-amber-300 font-mono">{Math.round(Math.sqrt((4 * flowM3s) / (Math.PI * 1.5)) * 1000)} mm</strong>.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: WIND KINETIC ================= */}
      {activeTab === 'wind' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Controls */}
            <div className="space-y-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <Wind className="w-4 h-4 text-sky-400" />
                Atmospheric &amp; Aerodynamic Specs
              </h4>

              {/* Turbine Rotor Design */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400">Rotor Architecture:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setTurbineType('hawt')}
                    className={`p-2 rounded-lg border text-xs font-mono text-center transition-all ${
                      turbineType === 'hawt'
                        ? 'bg-sky-950/60 border-sky-500 text-sky-300 font-bold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    3-Blade HAWT
                    <span className="block text-[10px] text-zinc-500 font-normal">Cp ~0.38 (High)</span>
                  </button>
                  <button
                    onClick={() => setTurbineType('savonius')}
                    className={`p-2 rounded-lg border text-xs font-mono text-center transition-all ${
                      turbineType === 'savonius'
                        ? 'bg-sky-950/60 border-sky-500 text-sky-300 font-bold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    Savonius Drum
                    <span className="block text-[10px] text-zinc-500 font-normal">Cp ~0.18 (Drag)</span>
                  </button>
                  <button
                    onClick={() => setTurbineType('darrieus')}
                    className={`p-2 rounded-lg border text-xs font-mono text-center transition-all ${
                      turbineType === 'darrieus'
                        ? 'bg-sky-950/60 border-sky-500 text-sky-300 font-bold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    Darrieus VAWT
                    <span className="block text-[10px] text-zinc-500 font-normal">Cp ~0.30 (Lift)</span>
                  </button>
                </div>
              </div>

              {/* Wind Speed */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Wind Velocity:</span>
                  <span className="text-sky-400 font-bold">
                    {windSpeedMs} m/s ({(windSpeedMs * 1.94384).toFixed(1)} kts / {(windSpeedMs * 3.6).toFixed(1)} km/h)
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="0.5"
                  value={windSpeedMs}
                  onChange={e => setWindSpeedMs(Number(e.target.value))}
                  className="w-full accent-sky-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>3 m/s (Cut-In)</span>
                  <span>10 m/s (Brisk Gale)</span>
                  <span>18+ m/s (Storm/Furling)</span>
                </div>
              </div>

              {/* Rotor Diameter */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Rotor Diameter:</span>
                  <span className="text-sky-400 font-bold">{rotorDiameterM} m ({Math.round(rotorDiameterM * 3.28084)} ft)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.2"
                  value={rotorDiameterM}
                  onChange={e => setRotorDiameterM(Number(e.target.value))}
                  className="w-full accent-sky-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[10px] text-zinc-500 font-mono">Swept frontal area: {sweptAreaM2.toFixed(2)} m².</p>
              </div>
            </div>

            {/* Calculations & Results */}
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  nightVision
                    ? 'bg-red-950/40 border-red-900'
                    : 'bg-sky-950/20 border-sky-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Generated Electrical Power</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold">
                    CUBIC SPEED SCALING
                  </span>
                </div>
                <div className="text-3xl font-bold font-mono text-sky-400">
                  {windWattsElectrical} <span className="text-base text-zinc-400">Watts</span>
                </div>
                <p className="text-xs font-mono text-zinc-300 mt-1">
                  Theoretical kinetic air stream power: <strong className="text-zinc-200">{Math.round(windWattsTheoretical)} W</strong> (Betz Limit = 59.3% max).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">DAILY ENERGY RUNWAY</div>
                  <div className="text-base font-bold text-zinc-200 mt-0.5">{windKwhPerDay} kWh/day</div>
                  <div className="text-[10px] text-zinc-400">Assuming 12 gust/blow hrs</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">AERODYNAMIC DRAG FORCE</div>
                  <div className="text-base font-bold text-amber-400 mt-0.5">
                    {Math.round(0.5 * 1.225 * sweptAreaM2 * Math.pow(windSpeedMs, 2) * 1.2)} N
                  </div>
                  <div className="text-[10px] text-zinc-400">Tower mast guy-wire strain</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-red-950/20 border border-red-800/40 text-red-200/90 text-xs flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div className="font-sans leading-relaxed text-[11px]">
                  <strong>High Wind Furling Danger:</strong> Kinetic power scales with the cube of wind velocity (v³). Doubling wind speed from 7 m/s to 14 m/s generates <strong>8x the destructive torque</strong>. Always construct an automatic tilt-back tail vane or manual short-circuit stator brake.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: BATTERY & SOLAR ================= */}
      {activeTab === 'battery' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Controls */}
            <div className="space-y-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <BatteryCharging className="w-4 h-4 text-amber-400" />
                Consumption &amp; Autonomy Specs
              </h4>

              {/* Daily Consumption Wh */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Daily Camp Consumption:</span>
                  <span className="text-amber-400 font-bold">{dailyLoadWh} Wh/day</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="6000"
                  step="100"
                  value={dailyLoadWh}
                  onChange={e => setDailyLoadWh(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[10px] text-zinc-500 font-mono">Lighting, water pumping, radio transceivers, freezer.</p>
              </div>

              {/* System Voltage */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400">DC Bus Voltage:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[12, 24, 48].map(v => (
                    <button
                      key={v}
                      onClick={() => setSystemVoltage(v as 12 | 24 | 48)}
                      className={`p-2 rounded-lg border text-xs font-mono text-center transition-all ${
                        systemVoltage === v
                          ? 'bg-amber-950/60 border-amber-500 text-amber-300 font-bold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {v}V DC
                      <span className="block text-[10px] text-zinc-500 font-normal">
                        {v === 12 ? 'Small Cabins' : v === 24 ? 'Homestead' : 'Micro-Grid'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Battery Chemistry */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400">Battery Chemistry &amp; Depth of Discharge:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setBatteryType('lead_acid')}
                    className={`p-2 rounded-lg border text-xs font-mono text-left transition-all ${
                      batteryType === 'lead_acid'
                        ? 'bg-amber-950/60 border-amber-500 text-amber-300 font-bold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    Deep-Cycle Lead-Acid
                    <span className="block text-[10px] text-zinc-500 font-normal">50% DoD Max (Flooded / AGM)</span>
                  </button>
                  <button
                    onClick={() => setBatteryType('lifepo4')}
                    className={`p-2 rounded-lg border text-xs font-mono text-left transition-all ${
                      batteryType === 'lifepo4'
                        ? 'bg-amber-950/60 border-amber-500 text-amber-300 font-bold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    LiFePO4 Lithium
                    <span className="block text-[10px] text-zinc-500 font-normal">80% DoD Safe Extraction</span>
                  </button>
                </div>
              </div>

              {/* Autonomy Days */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Zero-Generation Autonomy:</span>
                  <span className="text-amber-400 font-bold">{autonomyDays} Days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={autonomyDays}
                  onChange={e => setAutonomyDays(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-zinc-800 h-2 rounded cursor-pointer"
                />
                <p className="text-[10px] text-zinc-500 font-mono">Consecutive overcast, blizzard, or calm wind days.</p>
              </div>
            </div>

            {/* Calculations & Results */}
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  nightVision
                    ? 'bg-red-950/40 border-red-900'
                    : 'bg-amber-950/20 border-amber-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Required Bank Capacity</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                    {systemVoltage}V BUS
                  </span>
                </div>
                <div className="text-3xl font-bold font-mono text-amber-400">
                  {requiredBankAh} <span className="text-base text-zinc-400">Ah @ {systemVoltage}V</span>
                </div>
                <p className="text-xs font-mono text-zinc-300 mt-1">
                  Total raw storage: <strong className="text-amber-300 font-mono">{(totalStorageWhNeeded / 1000).toFixed(1)} kWh</strong> ({Math.round(dailyLoadWh * autonomyDays)} Wh usable).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">100Ah 12V MODULES</div>
                  <div className="text-base font-bold text-zinc-200 mt-0.5">{batteriesCount100Ah} Units</div>
                  <div className="text-[10px] text-zinc-400">Total deep cycle cells</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">MIN SOLAR PV ARRAY</div>
                  <div className="text-base font-bold text-amber-400 mt-0.5">{requiredSolarWatts} W</div>
                  <div className="text-[10px] text-zinc-400">At {peakSunHours}h sun &amp; 75% derate</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">CURRENT DRAW @ PEAK</div>
                  <div className="text-base font-bold text-cyan-400 mt-0.5">
                    {Math.round((dailyLoadWh / 8) / systemVoltage)} A
                  </div>
                  <div className="text-[10px] text-zinc-400">Needs 10-6 AWG copper</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">SULFATION LIMIT</div>
                  <div className="text-base font-bold text-red-400 mt-0.5">
                    {batteryType === 'lead_acid' ? '12.05 V' : '12.80 V'}
                  </div>
                  <div className="text-[10px] text-zinc-400">Cut-off under load</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800 text-zinc-400 text-xs flex items-start gap-2.5">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="font-sans leading-relaxed text-[11px]">
                  <strong>Wiring Architecture:</strong> To configure a {systemVoltage}V bank with 12V 100Ah batteries, wire {systemVoltage / 12} batteries in series per string, and then wire {Math.ceil(requiredBankAh / 100)} strings in parallel using equal-length cross-diagonal heavy gauge busbars.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
