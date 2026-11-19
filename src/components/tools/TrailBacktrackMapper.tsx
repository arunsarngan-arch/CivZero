import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Route,
  Navigation,
  Compass,
  MapPin,
  Flag,
  Droplet,
  Tent,
  AlertTriangle,
  Apple,
  Package,
  Crosshair,
  Play,
  Pause,
  RotateCcw,
  Save,
  Trash2,
  Share2,
  Download,
  Plus,
  Eye,
  Check,
  ChevronRight,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  LocateFixed,
  Radio,
  Clock,
  Gauge,
  Sparkles,
  ArrowUp,
  Volume2,
  VolumeX,
  Wheat,
  ShieldAlert,
  Shield,
  Hammer,
  Zap,
  Cpu,
} from 'lucide-react';

interface TrailBacktrackMapperProps {
  nightVision: boolean;
}

export type WaypointType =
  | 'shelter'
  | 'food'
  | 'workshop'
  | 'power'
  | 'tech'
  | 'signal'
  | 'water'
  | 'hazard'
  | 'camp'
  | 'cache'
  | 'flag'
  | 'fork';

export interface Waypoint {
  id: string;
  lat: number;
  lng: number;
  title: string;
  type: WaypointType;
  timestamp: number;
  elevation?: number;
}

export interface BreadcrumbPoint {
  lat: number;
  lng: number;
  timestamp: number;
  altitude?: number;
  speed?: number;
  heading?: number;
}

export interface SavedTrail {
  id: string;
  name: string;
  createdAt: number;
  points: BreadcrumbPoint[];
  waypoints: Waypoint[];
  totalDistanceMeters: number;
  durationSeconds: number;
}

const STORAGE_KEY = 'civzero_saved_trails_v1';

// Haversine Distance (in meters)
function getDistanceMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // Earth radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Bearing from point 1 to point 2 (degrees 0-360)
function getBearingDegrees(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;
  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  const theta = Math.atan2(y, x);
  return ((theta * 180) / Math.PI + 360) % 360;
}

// Tactical Vector Icon Renderer (Zero Cartoon Emojis)
function renderWaypointIcon(type: WaypointType, className: string = 'w-4 h-4') {
  switch (type) {
    case 'shelter':
      return <Shield className={`${className} text-red-400`} />;
    case 'food':
      return <Wheat className={`${className} text-amber-400`} />;
    case 'workshop':
      return <Hammer className={`${className} text-yellow-400`} />;
    case 'power':
      return <Zap className={`${className} text-emerald-400`} />;
    case 'tech':
      return <Cpu className={`${className} text-cyan-400`} />;
    case 'signal':
      return <Radio className={`${className} text-indigo-400`} />;
    case 'camp':
      return <Tent className={`${className} text-emerald-400`} />;
    case 'water':
      return <Droplet className={`${className} text-sky-400`} />;
    case 'hazard':
      return <AlertTriangle className={`${className} text-rose-500`} />;
    case 'cache':
      return <Package className={`${className} text-blue-400`} />;
    case 'flag':
    default:
      return <Flag className={`${className} text-yellow-400`} />;
  }
}

export const TrailBacktrackMapper: React.FC<TrailBacktrackMapperProps> = ({ nightVision }) => {
  // GPS & Tracking States
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isBacktrackMode, setIsBacktrackMode] = useState<boolean>(false);
  const [currentPosition, setCurrentPosition] = useState<BreadcrumbPoint | null>(null);
  const [points, setPoints] = useState<BreadcrumbPoint[]>([]);
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);
  const [activeTrailName, setActiveTrailName] = useState<string>('Scouting Route 01');

  // Device orientation / heading
  const [deviceHeading, setDeviceHeading] = useState<number>(0);
  const [compassMode, setCompassMode] = useState<'north' | 'heading'>('north');

  // Canvas Viewport transform
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [autoCenter, setAutoCenter] = useState<boolean>(true);

  // Modal States
  const [showWaypointModal, setShowWaypointModal] = useState<boolean>(false);
  const [selectedWaypointType, setSelectedWaypointType] = useState<WaypointType>('water');
  const [waypointTitleInput, setWaypointTitleInput] = useState<string>('');
  const [showSavedList, setShowSavedList] = useState<boolean>(false);
  const [savedTrails, setSavedTrails] = useState<SavedTrail[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  // Simulation mode (for indoor or desktop testing)
  const [simulationMode, setSimulationMode] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Haptic trigger helper
  const triggerHaptic = useCallback((pattern: number | number[] = 15) => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch {}
    }
  }, []);

  // Compute Total Distance
  const totalDistanceMeters = useMemo(() => {
    if (points.length < 2) return 0;
    let dist = 0;
    for (let i = 1; i < points.length; i++) {
      dist += getDistanceMeters(points[i - 1].lat, points[i - 1].lng, points[i].lat, points[i].lng);
    }
    return dist;
  }, [points]);

  // Backtrack Metrics
  const backtrackMetrics = useMemo(() => {
    if (!currentPosition || points.length === 0) return null;

    // Find nearest point on outbound trail
    let minDistance = Infinity;
    let nearestIdx = 0;

    points.forEach((pt, idx) => {
      const d = getDistanceMeters(currentPosition.lat, currentPosition.lng, pt.lat, pt.lng);
      if (d < minDistance) {
        minDistance = d;
        nearestIdx = idx;
      }
    });

    const startPoint = points[0];
    const distanceToBase = getDistanceMeters(
      currentPosition.lat,
      currentPosition.lng,
      startPoint.lat,
      startPoint.lng
    );

    // Target next waypoint on reverse path (towards point 0)
    const targetIdx = Math.max(0, nearestIdx - 1);
    const targetPoint = points[targetIdx];
    const bearingToNext = getBearingDegrees(
      currentPosition.lat,
      currentPosition.lng,
      targetPoint.lat,
      targetPoint.lng
    );

    // Relative angle against device heading
    const relativeAngle = (bearingToNext - deviceHeading + 360) % 360;

    // Off-trail drift status (alert if > 18 meters away from recorded track)
    const isDrifting = minDistance > 18;

    return {
      minDistanceToTrack: Math.round(minDistance),
      distanceToBase: Math.round(distanceToBase),
      bearingToNext: Math.round(bearingToNext),
      relativeAngle: Math.round(relativeAngle),
      targetPoint,
      isDrifting,
    };
  }, [currentPosition, deviceHeading, points]);

  // Geolocation Watcher
  useEffect(() => {
    if (simulationMode) return;

    if (!('geolocation' in navigator)) {
      setSimulationMode(true);
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const newPt: BreadcrumbPoint = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          timestamp: pos.timestamp,
          altitude: pos.coords.altitude || undefined,
          speed: pos.coords.speed || undefined,
          heading: pos.coords.heading || undefined,
        };

        setCurrentPosition(newPt);

        if (isRecording) {
          setPoints((prev) => {
            if (prev.length === 0) return [newPt];
            const last = prev[prev.length - 1];
            const dist = getDistanceMeters(last.lat, last.lng, newPt.lat, newPt.lng);
            // Append breadcrumb if moved >= 5 meters
            if (dist >= 5) {
              return [...prev, newPt];
            }
            return prev;
          });
        }
      },
      (err) => {
        console.warn('GPS location error:', err.message);
        // Fallback to simulation mode if location unavailable
        setSimulationMode(true);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 1000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [isRecording, simulationMode]);

  // Device Orientation Compass
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      const iosHeading = (e as unknown as { webkitCompassHeading?: number }).webkitCompassHeading;
      if (typeof iosHeading === 'number') {
        setDeviceHeading(iosHeading);
      } else if (e.alpha !== null) {
        setDeviceHeading(360 - e.alpha);
      }
    };

    window.addEventListener('deviceorientation', handleOrientation, true);
    return () => window.removeEventListener('deviceorientation', handleOrientation, true);
  }, []);

  // Off-route alert haptic buzz in Backtrack mode
  useEffect(() => {
    if (isBacktrackMode && backtrackMetrics?.isDrifting) {
      triggerHaptic([80, 40, 80]);
    }
  }, [isBacktrackMode, backtrackMetrics?.isDrifting, triggerHaptic]);

  // Simulation Controls (for desktop / indoors)
  const simulateMove = (dxMeters: number, dyMeters: number) => {
    const defaultLat = 37.7749;
    const defaultLng = -122.4194;
    const current = currentPosition || { lat: defaultLat, lng: defaultLng, timestamp: Date.now() };

    // 1 deg lat ~ 111,000m; 1 deg lng ~ 111,000 * cos(lat)
    const latOffset = dyMeters / 111000;
    const lngOffset = dxMeters / (111000 * Math.cos((current.lat * Math.PI) / 180));

    const nextPt: BreadcrumbPoint = {
      lat: current.lat + latOffset,
      lng: current.lng + lngOffset,
      timestamp: Date.now(),
    };

    setCurrentPosition(nextPt);
    if (isRecording) {
      setPoints((prev) => [...prev, nextPt]);
    }
  };

  // Add Waypoint Handler
  const handleAddWaypoint = () => {
    if (!currentPosition) return;
    const newWp: Waypoint = {
      id: `wp-${Date.now()}`,
      lat: currentPosition.lat,
      lng: currentPosition.lng,
      title: waypointTitleInput.trim() || `${selectedWaypointType.toUpperCase()} Point`,
      type: selectedWaypointType,
      timestamp: Date.now(),
      elevation: currentPosition.altitude,
    };

    setWaypoints((prev) => [...prev, newWp]);
    setShowWaypointModal(false);
    setWaypointTitleInput('');
    triggerHaptic(25);
  };

  // Save Trail Handler
  const handleSaveTrail = () => {
    if (points.length < 2) return;
    const newTrail: SavedTrail = {
      id: `trail-${Date.now()}`,
      name: activeTrailName.trim() || 'Scouting Expedition',
      createdAt: Date.now(),
      points,
      waypoints,
      totalDistanceMeters,
      durationSeconds: Math.round((points[points.length - 1].timestamp - points[0].timestamp) / 1000),
    };

    const updated = [newTrail, ...savedTrails];
    setSavedTrails(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    triggerHaptic([30, 30, 50]);
    alert(`Trail "${newTrail.name}" saved to device memory!`);
  };

  // Load Saved Trail
  const handleLoadTrail = (trail: SavedTrail) => {
    setPoints(trail.points);
    setWaypoints(trail.waypoints);
    setActiveTrailName(trail.name);
    if (trail.points.length > 0) {
      setCurrentPosition(trail.points[trail.points.length - 1]);
    }
    setShowSavedList(false);
    setIsRecording(false);
    setIsBacktrackMode(false);
    triggerHaptic(20);
  };

  // Delete Saved Trail
  const handleDeleteTrail = (trailId: string) => {
    const updated = savedTrails.filter((t) => t.id !== trailId);
    setSavedTrails(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  // Export GPX string
  const handleExportGPX = () => {
    if (points.length === 0) return;
    const gpx = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="CivZero Offline Navigator" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>${activeTrailName}</name>
    <time>${new Date().toISOString()}</time>
  </metadata>
  <trk>
    <name>${activeTrailName}</name>
    <trkseg>
      ${points
        .map(
          (p) => `<trkpt lat="${p.lat}" lon="${p.lng}"><time>${new Date(p.timestamp).toISOString()}</time></trkpt>`
        )
        .join('\n      ')}
    </trkseg>
  </trk>
  ${waypoints
    .map(
      (w) =>
        `<wpt lat="${w.lat}" lon="${w.lng}"><name>${w.title}</name><sym>${w.type}</sym></wpt>`
    )
    .join('\n  ')}
</gpx>`;

    const blob = new Blob([gpx], { type: 'application/gpx+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeTrailName.replace(/\s+/g, '_')}.gpx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ==========================================
  // VECTOR CANVAS RENDERER
  // ==========================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Viewport dimensions
    const width = canvas.width;
    const height = canvas.height;

    // Center Coordinate Origin
    const centerPoint = currentPosition || (points.length > 0 ? points[0] : { lat: 37.7749, lng: -122.4194 });

    // Clear background
    ctx.fillStyle = nightVision ? '#100202' : '#070a0f';
    ctx.fillRect(0, 0, width, canvas.height);

    // Meters to pixel scale (approx at current zoom: 1 pixel = 1 meter / zoom)
    const metersPerPixel = Math.max(0.05, 1.2 / zoomLevel);

    // Coordinate conversion function
    const toScreen = (lat: number, lng: number) => {
      // Delta meters from center
      const dNorth = (lat - centerPoint.lat) * 111000;
      const dEast = (lng - centerPoint.lng) * (111000 * Math.cos((centerPoint.lat * Math.PI) / 180));

      let x = width / 2 + dEast / metersPerPixel + (autoCenter ? 0 : panOffset.x);
      let y = height / 2 - dNorth / metersPerPixel + (autoCenter ? 0 : panOffset.y);

      // Rotate if heading-up mode
      if (compassMode === 'heading') {
        const rad = (-deviceHeading * Math.PI) / 180;
        const cx = width / 2;
        const cy = height / 2;
        const rx = Math.cos(rad) * (x - cx) - Math.sin(rad) * (y - cy) + cx;
        const ry = Math.sin(rad) * (x - cx) + Math.cos(rad) * (y - cy) + cy;
        x = rx;
        y = ry;
      }

      return { x, y };
    };

    // Draw Tactical Radar Rings & Distance Grid
    ctx.strokeStyle = nightVision ? '#300808' : '#172033';
    ctx.lineWidth = 1;

    // Rings every 50m, 100m, 250m, 500m
    const centerScreen = { x: width / 2, y: height / 2 };
    [50, 100, 250, 500].forEach((radiusMeters) => {
      const rPx = radiusMeters / metersPerPixel;
      if (rPx < width * 1.5) {
        ctx.beginPath();
        ctx.arc(centerScreen.x, centerScreen.y, rPx, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = nightVision ? '#661515' : '#334155';
        ctx.font = '9px monospace';
        ctx.fillText(`${radiusMeters}m`, centerScreen.x + 4, centerScreen.y - rPx + 10);
      }
    });

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(centerScreen.x, 0);
    ctx.lineTo(centerScreen.x, height);
    ctx.moveTo(0, centerScreen.y);
    ctx.lineTo(width, centerScreen.y);
    ctx.stroke();

    // ----------------------------------------
    // Draw Recorded Breadcrumb Trail
    // ----------------------------------------
    if (points.length > 1) {
      ctx.beginPath();
      const first = toScreen(points[0].lat, points[0].lng);
      ctx.moveTo(first.x, first.y);

      for (let i = 1; i < points.length; i++) {
        const sc = toScreen(points[i].lat, points[i].lng);
        ctx.lineTo(sc.x, sc.y);
      }

      // Trail Glow
      ctx.strokeStyle = isBacktrackMode ? '#f59e0b' : '#38bdf8';
      ctx.lineWidth = isBacktrackMode ? 3.5 : 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      // Individual breadcrumb dots
      points.forEach((p, idx) => {
        const sc = toScreen(p.lat, p.lng);
        ctx.fillStyle = isBacktrackMode ? '#f59e0b' : '#0284c7';
        ctx.beginPath();
        ctx.arc(sc.x, sc.y, idx === 0 ? 5 : 2, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // ----------------------------------------
    // Draw Waypoints (Tactical Vector Glyphs)
    // ----------------------------------------
    waypoints.forEach((wp) => {
      const sc = toScreen(wp.lat, wp.lng);

      let color = '#38bdf8';
      if (wp.type === 'shelter' || wp.type === 'camp') color = '#ef4444';
      else if (wp.type === 'food') color = '#f59e0b';
      else if (wp.type === 'workshop') color = '#eab308';
      else if (wp.type === 'power') color = '#10b981';
      else if (wp.type === 'tech' || wp.type === 'cache') color = '#06b6d4';
      else if (wp.type === 'signal' || wp.type === 'flag') color = '#818cf8';
      else if (wp.type === 'water') color = '#38bdf8';
      else if (wp.type === 'hazard') color = '#f43f5e';

      // Pin tactical geometric shape
      ctx.fillStyle = color;
      ctx.beginPath();
      if (wp.type === 'shelter' || wp.type === 'camp') {
        // Shelter shield chevron
        ctx.moveTo(sc.x, sc.y - 8);
        ctx.lineTo(sc.x + 8, sc.y + 4);
        ctx.lineTo(sc.x, sc.y + 8);
        ctx.lineTo(sc.x - 8, sc.y + 4);
        ctx.closePath();
      } else if (wp.type === 'hazard') {
        // Hazard triangle
        ctx.moveTo(sc.x, sc.y - 8);
        ctx.lineTo(sc.x + 8, sc.y + 6);
        ctx.lineTo(sc.x - 8, sc.y + 6);
        ctx.closePath();
      } else if (wp.type === 'tech' || wp.type === 'cache') {
        // Microchip square
        ctx.rect(sc.x - 6, sc.y - 6, 12, 12);
      } else if (wp.type === 'signal') {
        // Beacon circle
        ctx.arc(sc.x, sc.y, 6, 0, Math.PI * 2);
      } else {
        // Precision diamond for water / food / workshop / power
        ctx.moveTo(sc.x, sc.y - 8);
        ctx.lineTo(sc.x + 8, sc.y);
        ctx.lineTo(sc.x, sc.y + 8);
        ctx.lineTo(sc.x - 8, sc.y);
        ctx.closePath();
      }
      ctx.fill();

      // Outer tactical pulse ring
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Tactical Callout Label Badge
      const labelText = wp.title.toUpperCase();
      ctx.font = 'bold 9px monospace';
      const textWidth = ctx.measureText(labelText).width;

      ctx.fillStyle = 'rgba(7, 10, 15, 0.90)';
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.rect(sc.x + 12, sc.y - 9, textWidth + 8, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.fillText(labelText, sc.x + 16, sc.y + 3);
    });

    // ----------------------------------------
    // Draw Current Position (Blue/Amber GPS Node)
    // ----------------------------------------
    if (currentPosition) {
      const sc = toScreen(currentPosition.lat, currentPosition.lng);

      // Heading Direction Cone
      ctx.save();
      ctx.translate(sc.x, sc.y);
      const headingRad = ((compassMode === 'heading' ? 0 : deviceHeading) * Math.PI) / 180;
      ctx.rotate(headingRad);

      ctx.fillStyle = 'rgba(56, 189, 248, 0.18)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 32, -Math.PI / 4 - Math.PI / 2, Math.PI / 4 - Math.PI / 2);
      ctx.closePath();
      ctx.fill();

      // Pulse ring
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // ----------------------------------------
    // Backtrack Navigation Line & Compass Arrow
    // ----------------------------------------
    if (isBacktrackMode && backtrackMetrics && currentPosition) {
      const curSc = toScreen(currentPosition.lat, currentPosition.lng);
      const targetSc = toScreen(backtrackMetrics.targetPoint.lat, backtrackMetrics.targetPoint.lng);

      // Dash guide line to next point
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(curSc.x, curSc.y);
      ctx.lineTo(targetSc.x, targetSc.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, [
    autoCenter,
    backtrackMetrics,
    compassMode,
    currentPosition,
    deviceHeading,
    isBacktrackMode,
    nightVision,
    panOffset,
    points,
    waypoints,
    zoomLevel,
  ]);

  // Touch Drag Canvas Panning
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setAutoCenter(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (isDraggingRef.current && e.touches.length === 1) {
      const dx = e.touches[0].clientX - dragStartRef.current.x;
      const dy = e.touches[0].clientY - dragStartRef.current.y;
      dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setPanOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto select-none pb-16">
      {/* Top Banner */}
      <div
        className={`p-4 rounded-2xl border transition-colors shadow-xl ${
          nightVision
            ? 'bg-[#150303] border-red-950 text-red-100'
            : 'bg-gradient-to-br from-[#0c1322] to-[#121c30] border-zinc-800 text-zinc-100'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <Route className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-mono tracking-tight flex items-center gap-2">
                <span>TRAIL &amp; BACKTRACK MAPPER</span>
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  OFFLINE GPS
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Self-Generating Vector Breadcrumb Trail &amp; Waypoint Navigator
              </p>
            </div>
          </div>

          {/* Saved Trails Modal Button */}
          <button
            onClick={() => setShowSavedList(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-xs font-mono text-zinc-300 hover:text-white"
          >
            <Save className="w-3.5 h-3.5 text-amber-400" />
            <span>Logs ({savedTrails.length})</span>
          </button>
        </div>

        {/* Real-time Metrics Ribbon */}
        <div className="grid grid-cols-4 gap-2 mt-3 pt-3 border-t border-zinc-800/80 text-center font-mono">
          <div className="p-1.5 rounded-lg bg-black/30 border border-zinc-800">
            <span className="text-[10px] text-zinc-500 block">TOTAL DISTANCE</span>
            <span className="text-xs font-bold text-amber-400">
              {totalDistanceMeters >= 1000
                ? `${(totalDistanceMeters / 1000).toFixed(2)} km`
                : `${Math.round(totalDistanceMeters)} m`}
            </span>
          </div>

          <div className="p-1.5 rounded-lg bg-black/30 border border-zinc-800">
            <span className="text-[10px] text-zinc-500 block">WAYPOINTS</span>
            <span className="text-xs font-bold text-sky-400">{waypoints.length}</span>
          </div>

          <div className="p-1.5 rounded-lg bg-black/30 border border-zinc-800">
            <span className="text-[10px] text-zinc-500 block">POINTS</span>
            <span className="text-xs font-bold text-emerald-400">{points.length}</span>
          </div>

          <div className="p-1.5 rounded-lg bg-black/30 border border-zinc-800">
            <span className="text-[10px] text-zinc-500 block">HEADING</span>
            <span className="text-xs font-bold text-zinc-200">{Math.round(deviceHeading)}°</span>
          </div>
        </div>
      </div>

      {/* BACKTRACK HUD ALERT PANEL (When Return Mode is Active) */}
      {isBacktrackMode && backtrackMetrics && (
        <div
          className={`p-4 rounded-2xl border-2 transition-all animate-pulse shadow-2xl flex items-center justify-between ${
            backtrackMetrics.isDrifting
              ? 'bg-red-950/80 border-red-500 text-white'
              : 'bg-amber-950/60 border-amber-500 text-amber-100'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Direction Arrow */}
            <div
              className="w-12 h-12 rounded-full bg-black/50 border-2 border-amber-400 flex items-center justify-center flex-shrink-0"
              style={{ transform: `rotate(${backtrackMetrics.relativeAngle}deg)` }}
            >
              <ArrowUp className="w-6 h-6 text-amber-400" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-amber-300 flex items-center">
                  {backtrackMetrics.isDrifting ? (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400 mr-1 flex-shrink-0" />
                      <span>OFF-ROUTE DRIFT ALERT</span>
                    </>
                  ) : (
                    <span>RETURN BACKTRACK ACTIVE</span>
                  )}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 border border-amber-500/40">
                  {backtrackMetrics.bearingToNext}° AZIMUTH
                </span>
              </div>
              <p className="text-xs font-mono mt-0.5 text-zinc-200">
                {backtrackMetrics.isDrifting
                  ? `You are ${backtrackMetrics.minDistanceToTrack}m off original trail! Steer towards arrow.`
                  : `Steer along arrow • ${backtrackMetrics.distanceToBase}m remaining to Base Camp`}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsBacktrackMode(false);
              triggerHaptic(15);
            }}
            className="px-3 py-1.5 rounded-lg bg-black/60 border border-zinc-700 text-xs font-mono font-bold hover:bg-black"
          >
            Exit
          </button>
        </div>
      )}

      {/* Main Interactive Vector Canvas Screen */}
      <div
        className={`relative rounded-3xl overflow-hidden border-2 shadow-2xl flex flex-col items-center ${
          nightVision ? 'border-red-950 bg-[#100202]' : 'border-zinc-800 bg-[#070a0f]'
        }`}
      >
        {/* Canvas HUD Overlay Controls */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            {/* Compass Mode Toggle */}
            <button
              onClick={() => {
                setCompassMode(compassMode === 'north' ? 'heading' : 'north');
                triggerHaptic(10);
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-700/80 text-[10px] font-mono text-zinc-200 flex items-center gap-1 shadow"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>{compassMode === 'north' ? 'NORTH UP' : 'HEAD UP'}</span>
            </button>

            {/* Recenter / Auto-Center */}
            <button
              onClick={() => {
                setAutoCenter(true);
                setPanOffset({ x: 0, y: 0 });
                triggerHaptic(10);
              }}
              className={`p-1.5 rounded-lg border shadow ${
                autoCenter
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                  : 'bg-zinc-900/90 border-zinc-700/80 text-zinc-400'
              }`}
              title="Auto-Center on Current Location"
            >
              <LocateFixed className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Zoom In / Out */}
          <div className="flex items-center gap-1 pointer-events-auto">
            <button
              onClick={() => {
                setZoomLevel((z) => Math.min(4.0, z * 1.3));
                triggerHaptic(5);
              }}
              className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-white shadow"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setZoomLevel((z) => Math.max(0.2, z / 1.3));
                triggerHaptic(5);
              }}
              className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-white shadow"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* HTML5 Vector Canvas */}
        <canvas
          ref={canvasRef}
          width={400}
          height={380}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="w-full max-w-[440px] h-[360px] sm:h-[400px] cursor-grab active:cursor-grabbing block"
        />

        {/* Bottom Trail Status Strip */}
        <div className="w-full py-2 px-4 bg-zinc-950/80 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <div
              className={`w-2 h-2 rounded-full ${
                isRecording ? 'bg-red-500 animate-ping' : 'bg-emerald-400'
              }`}
            />
            <span>{isRecording ? 'RECORDING BREADCRUMBS' : 'STANDBY'}</span>
          </div>

          {currentPosition && (
            <span>
              {currentPosition.lat.toFixed(5)}, {currentPosition.lng.toFixed(5)}
            </span>
          )}
        </div>
      </div>

      {/* Primary Action Button Deck */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {/* Record / Pause Trail */}
        <button
          onClick={() => {
            const next = !isRecording;
            setIsRecording(next);
            triggerHaptic(next ? [20, 40, 60] : 20);
          }}
          className={`py-3 px-3 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 border shadow-lg transition-all ${
            isRecording
              ? 'bg-red-950 border-red-500 text-red-200 animate-pulse'
              : 'bg-emerald-600 hover:bg-emerald-500 border-emerald-400 text-black'
          }`}
        >
          {isRecording ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-black" />}
          <span>{isRecording ? 'PAUSE RECORD' : 'START RECORD'}</span>
        </button>

        {/* Drop Waypoint */}
        <button
          onClick={() => {
            setShowWaypointModal(true);
            triggerHaptic(15);
          }}
          className="py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 border border-amber-300 text-black font-mono text-xs font-black flex items-center justify-center gap-2 shadow-lg"
        >
          <MapPin className="w-4 h-4 text-black" />
          <span>DROP WAYPOINT</span>
        </button>

        {/* Backtrack Return */}
        <button
          onClick={() => {
            if (points.length < 2) {
              alert('Record a trail first before activating Backtrack Return!');
              return;
            }
            setIsBacktrackMode(!isBacktrackMode);
            triggerHaptic(30);
          }}
          className={`py-3 px-3 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 border shadow-lg transition-all ${
            isBacktrackMode
              ? 'bg-amber-500 border-amber-300 text-black font-black'
              : 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:border-amber-500'
          }`}
        >
          <RotateCcw className="w-4 h-4 text-amber-400" />
          <span>BACKTRACK</span>
        </button>

        {/* Save Trail */}
        <button
          onClick={handleSaveTrail}
          disabled={points.length < 2}
          className="py-3 px-3 rounded-xl bg-zinc-900 disabled:opacity-40 border border-zinc-700 text-zinc-200 font-mono text-xs font-bold flex items-center justify-center gap-2 hover:border-zinc-500 shadow-lg"
        >
          <Save className="w-4 h-4 text-sky-400" />
          <span>SAVE TRAIL</span>
        </button>
      </div>

      {/* Simulator Control Dock (Available for testing / indoor scouting) */}
      <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs font-mono space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-zinc-300 font-bold flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-amber-400" />
            FIELD SIMULATOR (INDOOR / TESTING WALK)
          </span>
          <button
            onClick={() => setSimulationMode(!simulationMode)}
            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
              simulationMode
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-500'
            }`}
          >
            {simulationMode ? 'SIMULATOR ACTIVE' : 'REAL GPS'}
          </button>
        </div>

        {simulationMode && (
          <div className="flex items-center justify-center gap-2 pt-1">
            <button
              onClick={() => simulateMove(-15, 0)}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 active:bg-amber-500 active:text-black font-bold"
            >
              ← 15m West
            </button>
            <button
              onClick={() => simulateMove(0, 15)}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 active:bg-amber-500 active:text-black font-bold"
            >
              ↑ 15m North
            </button>
            <button
              onClick={() => simulateMove(0, -15)}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 active:bg-amber-500 active:text-black font-bold"
            >
              ↓ 15m South
            </button>
            <button
              onClick={() => simulateMove(15, 0)}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 active:bg-amber-500 active:text-black font-bold"
            >
              → 15m East
            </button>
          </div>
        )}
      </div>

      {/* Waypoint List Drawer */}
      {waypoints.length > 0 && (
        <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 space-y-2 font-mono text-xs">
          <span className="text-zinc-300 font-bold block">SAVED FIELD WAYPOINTS ({waypoints.length})</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {waypoints.map((wp) => (
              <div
                key={wp.id}
                className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-black/40 border border-zinc-800 flex-shrink-0">
                    {renderWaypointIcon(wp.type, 'w-4 h-4')}
                  </div>
                  <div>
                    <span className="font-bold text-zinc-100 block">{wp.title}</span>
                    <span className="text-[10px] text-zinc-500">
                      {wp.lat.toFixed(4)}, {wp.lng.toFixed(4)}
                    </span>
                  </div>
                </div>

                {currentPosition && (
                  <span className="text-[10px] font-bold text-amber-400">
                    {Math.round(getDistanceMeters(currentPosition.lat, currentPosition.lng, wp.lat, wp.lng))}m away
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DROP WAYPOINT MODAL */}
      {showWaypointModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-2xl bg-zinc-950 border border-zinc-800 p-5 space-y-4 font-mono shadow-2xl">
            <h4 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>MARK FIELD WAYPOINT</span>
            </h4>

            {/* Waypoint Type Selector */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { type: 'shelter' as WaypointType, label: 'Shelter', icon: Shield, color: 'text-red-400' },
                { type: 'food' as WaypointType, label: 'Food/Crops', icon: Wheat, color: 'text-amber-400' },
                { type: 'workshop' as WaypointType, label: 'Workshop', icon: Hammer, color: 'text-yellow-400' },
                { type: 'power' as WaypointType, label: 'Power/Fuel', icon: Zap, color: 'text-emerald-400' },
                { type: 'tech' as WaypointType, label: 'Tech Depot', icon: Cpu, color: 'text-cyan-400' },
                { type: 'signal' as WaypointType, label: 'Comms/Tower', icon: Radio, color: 'text-indigo-400' },
                { type: 'water' as WaypointType, label: 'Water', icon: Droplet, color: 'text-sky-400' },
                { type: 'hazard' as WaypointType, label: 'Hazard', icon: AlertTriangle, color: 'text-rose-500' },
              ].map((opt) => {
                const IconComp = opt.icon;
                const isSelected = selectedWaypointType === opt.type;
                return (
                  <button
                    key={opt.type}
                    onClick={() => setSelectedWaypointType(opt.type)}
                    className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold shadow'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <IconComp className={`w-5 h-5 ${isSelected ? 'text-amber-300' : opt.color}`} />
                    <span className="text-[9px] tracking-tight text-center leading-tight">{opt.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Label Input */}
            <div>
              <label className="text-[10px] text-zinc-500 uppercase block mb-1">Waypoint Label / Notes</label>
              <input
                type="text"
                value={waypointTitleInput}
                onChange={(e) => setWaypointTitleInput(e.target.value)}
                placeholder="e.g., Clean Spring 10L/min, Dry Firewood Cache..."
                className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setShowWaypointModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleAddWaypoint}
                className="flex-1 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 shadow"
              >
                Drop Pin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SAVED TRAILS DRAWER */}
      {showSavedList && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-zinc-950 border border-zinc-800 p-5 space-y-4 font-mono shadow-2xl max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <h4 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                <Save className="w-4 h-4 text-amber-400" />
                <span>SAVED OFF-GRID EXPEDITION TRAILS</span>
              </h4>
              <button
                onClick={() => setShowSavedList(false)}
                className="text-xs text-zinc-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {savedTrails.length === 0 ? (
                <div className="p-6 text-center text-xs text-zinc-500">
                  No saved trails yet. Start recording a route and tap &quot;Save Trail&quot;.
                </div>
              ) : (
                savedTrails.map((tr) => (
                  <div
                    key={tr.id}
                    className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-zinc-100 text-xs">{tr.name}</span>
                      <span className="text-[10px] text-zinc-500">
                        {new Date(tr.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] text-zinc-400">
                      <span>• {Math.round(tr.totalDistanceMeters)}m total</span>
                      <span>• {tr.points.length} coordinates</span>
                      <span>• {tr.waypoints.length} waypoints</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => handleLoadTrail(tr)}
                        className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold"
                      >
                        Load to Screen
                      </button>
                      <button
                        onClick={handleExportGPX}
                        className="px-2.5 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        <span>Export GPX</span>
                      </button>
                      <button
                        onClick={() => handleDeleteTrail(tr.id)}
                        className="p-1 rounded-lg text-red-400 hover:bg-red-950/40 ml-auto"
                        title="Delete trail"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
