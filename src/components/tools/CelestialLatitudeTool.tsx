import React, { useState } from 'react';
import { Compass, Sun, Moon, ArrowUpRight, ShieldAlert, Info } from 'lucide-react';

interface Props {
  nightVision: boolean;
}

export const CelestialLatitudeTool: React.FC<Props> = ({ nightVision }) => {
  const [method, setMethod] = useState<'gnomon' | 'polaris'>('gnomon');
  
  // Gnomon shadow stick inputs
  const [stickHeight, setStickHeight] = useState<number>(100); // cm
  const [shadowLength, setShadowLength] = useState<number>(75); // cm
  const [dayOfYear, setDayOfYear] = useState<number>(80); // Day 80 is ~March 21 (Equinox)
  const [hemisphere, setHemisphere] = useState<'north' | 'south'>('north');

  // Polaris inputs
  const [polarisAngle, setPolarisAngle] = useState<number>(37.5); // degrees measured by sextant

  // Calculate Solar Declination angle based on day of year
  // Cooper's equation: delta = 23.45 * sin(360/365 * (284 + n))
  const delta = 23.45 * Math.sin(((360 / 365) * (284 + dayOfYear) * Math.PI) / 180);

  // Solar Zenith angle = arctan(shadowLength / stickHeight)
  const zenithRad = Math.atan(shadowLength / stickHeight);
  const zenithDeg = (zenithRad * 180) / Math.PI;

  // Latitude = Zenith + Declination (if shadow points North at solar noon in Northern Hemisphere)
  const calculatedLatGnomon = hemisphere === 'north' ? zenithDeg + delta : -(zenithDeg - delta);

  return (
    <div
      className={`p-5 rounded-2xl border transition-colors space-y-6 ${
        nightVision
          ? 'bg-[#150404] border-red-950 text-red-100'
          : 'bg-[#0d1117] border-zinc-800 text-zinc-100 shadow-xl'
      }`}
    >
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div
            className={`p-2.5 rounded-xl border ${
              nightVision
                ? 'bg-red-950 border-red-800 text-red-400'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}
          >
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-tight">Celestial Latitude &amp; True North</h3>
            <p className="text-xs text-zinc-400 font-mono">Solar Noon Gnomon Shadow &amp; Polaris Sextant Sights</p>
          </div>
        </div>

        {/* Method Toggle */}
        <div className="flex rounded-lg bg-zinc-900 border border-zinc-800 p-1">
          <button
            onClick={() => setMethod('gnomon')}
            className={`px-3 py-1 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
              method === 'gnomon'
                ? 'bg-amber-500 text-black shadow'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            Solar Gnomon
          </button>
          <button
            onClick={() => setMethod('polaris')}
            className={`px-3 py-1 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
              method === 'polaris'
                ? 'bg-amber-500 text-black shadow'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            Polaris Night Sight
          </button>
        </div>
      </div>

      {method === 'gnomon' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Gnomon Stick Height:</span>
                <span className="text-amber-400 font-bold">{stickHeight} cm</span>
              </div>
              <input
                type="range"
                min="30"
                max="250"
                value={stickHeight}
                onChange={e => setStickHeight(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <p className="text-[10px] text-zinc-500 font-mono">Use a straight, plumb stick verified with a plumb bob.</p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Shortest Shadow Length at Solar Noon:</span>
                <span className="text-amber-400 font-bold">{shadowLength} cm</span>
              </div>
              <input
                type="range"
                min="5"
                max="300"
                value={shadowLength}
                onChange={e => setShadowLength(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <p className="text-[10px] text-zinc-500 font-mono">Record the exact moment the shadow reaches its minimum length.</p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Approximate Day of Year (1 - 365):</span>
                <span className="text-amber-400 font-bold">Day {dayOfYear}</span>
              </div>
              <input
                type="range"
                min="1"
                max="365"
                value={dayOfYear}
                onChange={e => setDayOfYear(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-0.5">
                <span>Jan (1)</span>
                <span>Equinox (80)</span>
                <span>Solstice (172)</span>
                <span>Dec (365)</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-zinc-400 block mb-1">Hemisphere &amp; Shadow Direction:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setHemisphere('north')}
                  className={`py-2 px-3 rounded-lg text-xs font-mono border font-bold transition-colors ${
                    hemisphere === 'north'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  North (Shadow Points True North)
                </button>
                <button
                  onClick={() => setHemisphere('south')}
                  className={`py-2 px-3 rounded-lg text-xs font-mono border font-bold transition-colors ${
                    hemisphere === 'south'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  South (Shadow Points True South)
                </button>
              </div>
            </div>
          </div>

          {/* Results Display & Geometric Vector Diagram */}
          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider mb-1">Calculated Geographical Coordinate</div>
              <div className="text-3xl font-extrabold font-mono text-amber-400 tracking-tight">
                {Math.abs(calculatedLatGnomon).toFixed(2)}° {calculatedLatGnomon >= 0 ? 'N' : 'S'}
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mt-2">
                <span>Zenith: {zenithDeg.toFixed(1)}°</span>
                <span>•</span>
                <span>Solar Declination (δ): {delta.toFixed(1)}°</span>
              </div>
            </div>

            {/* Geometric SVG Diagram */}
            <div className="bg-[#090d16] p-3 rounded-lg border border-zinc-800">
              <svg viewBox="0 0 260 110" className="w-full h-auto">
                {/* Ground */}
                <line x1="20" y1="90" x2="240" y2="90" stroke="#475569" strokeWidth="2" />
                {/* Plumb Gnomon */}
                <line x1="80" y1="90" x2="80" y2="25" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
                <text x="75" y="55" fill="#f59e0b" fontSize="9" fontFamily="monospace" textAnchor="end">H: {stickHeight}cm</text>
                {/* Shadow */}
                <line x1="80" y1="90" x2="190" y2="90" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                <text x="135" y="103" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">Shadow: {shadowLength}cm</text>
                {/* Sun Ray Hypotenuse */}
                <line x1="80" y1="25" x2="190" y2="90" stroke="#fde68a" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Sun */}
                <circle cx="50" cy="15" r="7" fill="#f59e0b" />
                <line x1="50" y1="5" x2="50" y2="1" stroke="#f59e0b" strokeWidth="1.5" />
                <line x1="40" y1="15" x2="36" y2="15" stroke="#f59e0b" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-400 leading-relaxed">
              <strong className="text-amber-400">Finding True North:</strong> In the Northern Hemisphere outside the tropics, the shortest shadow of the day at solar noon points exactly towards <strong>True Geographic North</strong>.
            </div>
          </div>
        </div>
      ) : (
        /* Polaris Method */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>Polaris Sextant Altitude Angle:</span>
                <span className="text-amber-400 font-bold">{polarisAngle.toFixed(1)}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                step="0.1"
                value={polarisAngle}
                onChange={e => setPolarisAngle(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <p className="text-[10px] text-zinc-500 font-mono">Measured from horizontal sea-level horizon to Polaris with a quadrant or sextant.</p>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 space-y-2">
              <div className="font-bold text-amber-400">Finding Polaris (North Star):</div>
              <p className="text-zinc-400 leading-relaxed">
                Locate the Big Dipper (Ursa Major). Trace a line through the two pointer stars on the edge of the bowl (Merak and Dubhe). Extend that line 5 times the distance between them straight to the moderately bright star: <strong>Polaris</strong>.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider mb-1">Direct Latitude Derivation</div>
              <div className="text-3xl font-extrabold font-mono text-cyan-400 tracking-tight">
                {polarisAngle.toFixed(2)}° N
              </div>
              <p className="text-xs text-zinc-400 font-mono mt-2 leading-relaxed">
                Because Polaris is aligned directly over Earth&apos;s rotational axis (&lt; 0.7° offset), its elevation above the horizon in degrees is <strong>directly equal to your exact geographic Latitude</strong>.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-[11px] font-mono text-emerald-400 leading-relaxed flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Zero calendar calculation needed. The altitude angle equals your latitude instantly.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
