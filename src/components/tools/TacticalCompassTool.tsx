import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  Crosshair,
  Lock,
  Unlock,
  RotateCcw,
  ShieldAlert,
  Info,
  CheckCircle2,
  Navigation,
  Smartphone,
  Sliders,
} from 'lucide-react';

interface Props {
  nightVision: boolean;
}

export const TacticalCompassTool: React.FC<Props> = ({ nightVision }) => {
  // Compass Heading state (0 to 359 degrees)
  const [heading, setHeading] = useState<number>(0);
  const [lockedHeading, setLockedHeading] = useState<number | null>(null);
  const [declination, setDeclination] = useState<number>(0); // Magnetic declination (+/- degrees)
  const [useTrueNorth, setUseTrueNorth] = useState<boolean>(false);
  const [hasSensor, setHasSensor] = useState<boolean>(false);
  const [sensorActive, setSensorActive] = useState<boolean>(false);
  const [permissionState, setPermissionState] = useState<'prompt' | 'granted' | 'denied' | 'unsupported'>('prompt');
  const [pitch, setPitch] = useState<number>(0); // beta (-180 to 180)
  const [roll, setRoll] = useState<number>(0); // gamma (-90 to 90)

  // Manual fallback simulation slider
  const [manualMode, setManualMode] = useState<boolean>(false);

  // Track if sensor is providing updates
  const sensorFiredRef = useRef<boolean>(false);

  // Initialize and listen to device orientation sensors
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      sensorFiredRef.current = true;
      setHasSensor(true);
      setSensorActive(true);

      let rawHeading: number | null = null;

      // 1. iOS Safari / WebKit native compass heading
      if ((e as any).webkitCompassHeading !== undefined && (e as any).webkitCompassHeading !== null) {
        rawHeading = (e as any).webkitCompassHeading;
      }
      // 2. Android Chrome deviceorientationabsolute or deviceorientation
      else if (e.alpha !== null && e.alpha !== undefined) {
        // In Android, alpha is counter-clockwise 0-360
        // When device is held flat, compass heading = (360 - alpha) % 360
        rawHeading = (360 - e.alpha) % 360;
      }

      if (rawHeading !== null && !isNaN(rawHeading)) {
        setHeading(Math.round(rawHeading));
      }

      if (e.beta !== null && e.beta !== undefined) {
        setPitch(Math.round(e.beta));
      }
      if (e.gamma !== null && e.gamma !== undefined) {
        setRoll(Math.round(e.gamma));
      }
    };

    // Try listening to standard deviceorientationabsolute (most accurate on Android)
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientationabsolute', handleOrientation as any, true);
      window.addEventListener('deviceorientation', handleOrientation, true);
    } else {
      setPermissionState('unsupported');
    }

    // Check after 1.5 seconds if sensor fired; if not, suggest manual / calibration
    const checkTimer = setTimeout(() => {
      if (!sensorFiredRef.current) {
        // Likely desktop or sensor permissions required
        setSensorActive(false);
      }
    }, 1500);

    return () => {
      clearTimeout(checkTimer);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientationabsolute', handleOrientation as any, true);
        window.removeEventListener('deviceorientation', handleOrientation, true);
      }
    };
  }, []);

  // iOS 13+ sensor permission request
  const requestSensorPermission = async () => {
    if (
      typeof (DeviceOrientationEvent as any) !== 'undefined' &&
      typeof (DeviceOrientationEvent as any).requestPermission === 'function'
    ) {
      try {
        const response = await (DeviceOrientationEvent as any).requestPermission();
        if (response === 'granted') {
          setPermissionState('granted');
          setSensorActive(true);
        } else {
          setPermissionState('denied');
        }
      } catch (err) {
        setPermissionState('denied');
      }
    } else {
      // Android / non-iOS standard
      setSensorActive(true);
    }
  };

  // True North calculation
  const effectiveHeading = (useTrueNorth ? (heading + declination + 360) % 360 : heading) % 360;

  // Reciprocal (back-bearing) heading
  const backBearing = (effectiveHeading + 180) % 360;

  // NATO Mils (6400 mils in 360 degrees = 17.7778 mils per degree)
  const natoMils = Math.round(effectiveHeading * (6400 / 360));

  // Determine Cardinal / Intercardinal point label
  const getCardinalDirection = (deg: number): string => {
    const directions = [
      'N', 'NNE', 'NE', 'ENE',
      'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW',
      'W', 'WNW', 'NW', 'NNW',
    ];
    const index = Math.round((deg % 360) / 22.5) % 16;
    return directions[index];
  };

  const cardinal = getCardinalDirection(effectiveHeading);

  // Check if device is held flat (within +/- 25 degrees)
  const isLevel = Math.abs(pitch) < 25 && Math.abs(roll) < 25;

  // Off-course calculation if heading is locked
  let offCourseDeg = 0;
  let offCourseDirection = '';
  if (lockedHeading !== null) {
    let diff = (effectiveHeading - lockedHeading + 360) % 360;
    if (diff > 180) diff -= 360; // range -180 to +180
    offCourseDeg = Math.abs(Math.round(diff));
    offCourseDirection = diff > 0 ? 'Right' : 'Left';
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
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}
          >
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold font-mono tracking-tight">Tactical Sighting Compass</h3>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  sensorActive
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                    : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                }`}
              >
                {sensorActive ? 'LIVE MAGNETOMETER' : 'SIMULATION / MANUAL'}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Field azimuth sighting, NATO mils, reciprocal back-bearings &amp; declination
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {!sensorActive && (
            <button
              onClick={requestSensorPermission}
              className="px-3 py-1.5 text-xs font-mono rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 flex items-center gap-1.5 transition-all"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Enable Phone Sensor</span>
            </button>
          )}

          <button
            onClick={() => setManualMode(!manualMode)}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg border flex items-center gap-1.5 transition-all ${
              manualMode
                ? 'bg-zinc-800 border-amber-500 text-amber-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{manualMode ? 'Hide Dial' : 'Manual Dial'}</span>
          </button>
        </div>
      </div>

      {/* Manual Heading Slider (For desktop testing or manual azimuth calculation) */}
      {manualMode && (
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-zinc-400">Manual Heading Dial Simulator:</span>
            <span className="text-amber-400 font-bold">{heading}° {getCardinalDirection(heading)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="359"
            value={heading}
            onChange={e => setHeading(Number(e.target.value))}
            className="w-full accent-amber-500 bg-zinc-800 h-2 rounded cursor-pointer"
          />
          <p className="text-[10px] text-zinc-500 font-mono">
            Use this slider to inspect any azimuth or calculate reciprocal bearings on devices without a hardware magnetometer.
          </p>
        </div>
      )}

      {/* Main Tactical Compass Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left / Center: Rotating Tactical Compass Rose (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4">
          {/* Compass Rose Container */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Outer Static NATO Mils Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-zinc-800/80"></div>
            <div className="absolute inset-2 rounded-full border border-zinc-800/60"></div>

            {/* Sighting Lubber Line (Top Center Marker) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-30 flex flex-col items-center">
              <div
                className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] ${
                  nightVision ? 'border-t-red-500' : 'border-t-amber-400'
                }`}
              ></div>
              <div
                className={`w-0.5 h-6 ${
                  nightVision ? 'bg-red-500' : 'bg-amber-400'
                }`}
              ></div>
            </div>

            {/* Locked Azimuth Sighting Needle Indicator */}
            {lockedHeading !== null && (
              <div
                className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center transition-transform duration-300"
                style={{
                  transform: `rotate(${lockedHeading - effectiveHeading}deg)`,
                }}
              >
                <div className="w-full flex justify-between items-center px-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/40"></div>
                </div>
              </div>
            )}

            {/* ROTATING COMPASS DIAL */}
            <div
              className="absolute inset-4 rounded-full border border-zinc-700/80 shadow-2xl flex items-center justify-center transition-transform duration-150 ease-out"
              style={{
                transform: `rotate(${-effectiveHeading}deg)`,
                background: nightVision
                  ? 'radial-gradient(circle, #250505 0%, #150303 80%)'
                  : 'radial-gradient(circle, #161b22 0%, #0d1117 80%)',
              }}
            >
              {/* Ticks around perimeter */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                {/* 36 Major Degree Ticks (Every 10 degrees) */}
                {Array.from({ length: 36 }).map((_, i) => {
                  const deg = i * 10;
                  const isCardinal = deg % 90 === 0;
                  const isMajor = deg % 30 === 0;
                  const length = isCardinal ? 14 : isMajor ? 10 : 6;
                  const strokeColor = isCardinal
                    ? deg === 0 ? '#ef4444' : '#f59e0b'
                    : '#52525b';

                  return (
                    <line
                      key={deg}
                      x1="150"
                      y1="8"
                      x2="150"
                      y2={8 + length}
                      stroke={strokeColor}
                      strokeWidth={isCardinal ? 2.5 : isMajor ? 1.5 : 1}
                      transform={`rotate(${deg} 150 150)`}
                    />
                  );
                })}

                {/* 4 Cardinal Letters (N, E, S, W) inside dial */}
                <text x="150" y="42" textAnchor="middle" fill="#ef4444" fontSize="18" fontWeight="bold" fontFamily="monospace">N</text>
                <text x="262" y="156" textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="bold" fontFamily="monospace">E</text>
                <text x="150" y="272" textAnchor="middle" fill="#a1a1aa" fontSize="16" fontWeight="bold" fontFamily="monospace">S</text>
                <text x="38" y="156" textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="bold" fontFamily="monospace">W</text>

                {/* Intercardinal Points (NE, SE, SW, NW) */}
                <text x="228" y="78" textAnchor="middle" fill="#71717a" fontSize="11" fontFamily="monospace">NE</text>
                <text x="228" y="234" textAnchor="middle" fill="#71717a" fontSize="11" fontFamily="monospace">SE</text>
                <text x="72" y="234" textAnchor="middle" fill="#71717a" fontSize="11" fontFamily="monospace">SW</text>
                <text x="72" y="78" textAnchor="middle" fill="#71717a" fontSize="11" fontFamily="monospace">NW</text>
              </svg>

              {/* Crosshair Center Reticle */}
              <div className="absolute w-20 h-20 rounded-full border border-dashed border-zinc-700/60 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                <div className="absolute w-8 h-[1px] bg-zinc-700/80"></div>
                <div className="absolute h-8 w-[1px] bg-zinc-700/80"></div>
              </div>
            </div>

            {/* Digital Heading Readout Overlay in Center */}
            <div className="absolute z-20 flex flex-col items-center pointer-events-none">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {String(effectiveHeading).padStart(3, '0')}°
              </span>
              <span className="text-xs font-bold font-mono tracking-widest text-amber-400 uppercase">
                {cardinal}
              </span>
            </div>
          </div>

          {/* Level Bubble Warning */}
          {!isLevel && sensorActive && (
            <div className="mt-3 px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-800 text-amber-300 text-[11px] font-mono flex items-center gap-2 animate-pulse">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Hold phone horizontal for accurate magnetic reading (Pitch: {pitch}°, Roll: {roll}°)</span>
            </div>
          )}
        </div>

        {/* Right Column: Sighting Tools, Declination & Azimuth Math (5 cols) */}
        <div className="lg:col-span-5 space-y-4 font-mono">
          {/* Target Heading Lock Button */}
          <div
            className={`p-4 rounded-xl border ${
              lockedHeading !== null
                ? 'bg-cyan-950/30 border-cyan-500/60'
                : 'bg-zinc-900/60 border-zinc-800'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-zinc-400 uppercase tracking-wider">Field Azimuth Lock</span>
              {lockedHeading !== null ? (
                <button
                  onClick={() => setLockedHeading(null)}
                  className="px-2 py-0.5 text-xs text-zinc-400 hover:text-white flex items-center gap-1 rounded bg-zinc-800"
                >
                  <Unlock className="w-3 h-3" />
                  <span>Release</span>
                </button>
              ) : (
                <button
                  onClick={() => setLockedHeading(effectiveHeading)}
                  className="px-2.5 py-1 text-xs text-cyan-300 hover:text-white flex items-center gap-1 rounded bg-cyan-950 border border-cyan-500/40"
                >
                  <Lock className="w-3 h-3" />
                  <span>Lock {effectiveHeading}°</span>
                </button>
              )}
            </div>

            {lockedHeading !== null ? (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-300">Target Bearing:</span>
                  <span className="text-base font-bold text-cyan-400">{lockedHeading}° ({getCardinalDirection(lockedHeading)})</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-800">
                  <span className="text-zinc-400">Steering Deviation:</span>
                  <span
                    className={`font-bold ${
                      offCourseDeg <= 3
                        ? 'text-emerald-400'
                        : offCourseDeg <= 10
                        ? 'text-amber-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {offCourseDeg <= 2
                      ? 'ON AZIMUTH (±2°)'
                      : `Steer ${offCourseDeg}° ${offCourseDirection}`}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                Aim phone along a distant mountain peak or landmark, then tap <strong>Lock</strong> to freeze your march bearing. The cyan marker will guide your heading.
              </p>
            )}
          </div>

          {/* Navigation Matrix Readouts */}
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            {/* Reciprocal Back-Bearing */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-500 text-[10px] uppercase">Back Bearing</div>
              <div className="text-base font-bold text-amber-400 mt-0.5">
                {String(backBearing).padStart(3, '0')}°
              </div>
              <div className="text-[10px] text-zinc-400">Return to base march</div>
            </div>

            {/* NATO Artillery Mils */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-500 text-[10px] uppercase">NATO Mils</div>
              <div className="text-base font-bold text-zinc-200 mt-0.5">
                {natoMils} mils
              </div>
              <div className="text-[10px] text-zinc-400">6400 mils per circle</div>
            </div>

            {/* True North vs Magnetic North */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-500 text-[10px] uppercase">Reference Datum</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">
                {useTrueNorth ? 'TRUE NORTH' : 'MAGNETIC NORTH'}
              </div>
              <div className="text-[10px] text-zinc-400">
                {useTrueNorth ? `Offset: ${declination > 0 ? `+${declination}` : declination}°` : 'Direct needle'}
              </div>
            </div>

            {/* Quadrant Bearing */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-500 text-[10px] uppercase">Surveyor Quadrant</div>
              <div className="text-sm font-bold text-cyan-400 mt-0.5">
                {effectiveHeading <= 90
                  ? `N ${effectiveHeading}° E`
                  : effectiveHeading <= 180
                  ? `S ${180 - effectiveHeading}° E`
                  : effectiveHeading <= 270
                  ? `S ${effectiveHeading - 180}° W`
                  : `N ${360 - effectiveHeading}° W`}
              </div>
              <div className="text-[10px] text-zinc-400">Cartographic standard</div>
            </div>
          </div>

          {/* Magnetic Declination Adjustment */}
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-bold">Magnetic Declination Offset:</span>
              <button
                onClick={() => setUseTrueNorth(!useTrueNorth)}
                className={`px-2 py-0.5 rounded text-[11px] border transition-all ${
                  useTrueNorth
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                }`}
              >
                {useTrueNorth ? 'True North ON' : 'Magnetic Only'}
              </button>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>Declination Angle:</span>
                <span className="text-amber-400 font-bold">
                  {declination > 0 ? `+${declination}° East` : declination < 0 ? `${declination}° West` : '0°'}
                </span>
              </div>
              <input
                type="range"
                min="-30"
                max="30"
                value={declination}
                onChange={e => setDeclination(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800 h-1.5 rounded cursor-pointer"
              />
              <p className="text-[10px] text-zinc-500 font-sans leading-tight">
                Topographic maps list local magnetic declination in the map legend (the angular difference between Grid North and Magnetic North). Adjust slider to align with map grid lines.
              </p>
            </div>
          </div>

          {/* Field Sensor Calibration Instruction */}
          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div className="font-sans leading-relaxed text-[11px]">
              <strong>Magnetometer Calibration:</strong> If the heading drifts or lags, rotate the phone in a <strong>figure-8 pattern</strong> through the air for 5 seconds to recalibrate the phone's 3-axis internal magnetometer against ambient metallic interference.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
