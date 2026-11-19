---
id: t3-pelton-water-turbine
tier: 4
tier_name: Tier 3 - Early Industrial
title: Pelton Wheel Micro-Hydro Turbine
category: "Kinetic Power"
read_time: 6 min
difficulty: High
tags: hydro, energy, turbine, pelton wheel, electricity, mechanical power, alternator
summary: Convert gravitational potential energy of high-head stream water into high-RPM rotational torque utilizing double-cup impulse buckets and a tapered constriction jet nozzle.
---

## Fluid Dynamic Principles
Unlike low-head immersion waterwheels that operate on simple hydrostatic drag ($<30\%\text{ efficiency}$), a **Pelton impulse turbine** converts 100% of water pressure head into kinetic velocity. A tapered nozzle accelerates water into a supersonic jet. The double-cup bucket splits the jet down a razor-sharp center splitter and reverses its flow vector by nearly **165°**, transferring **85% to 92% of the water's kinetic momentum** directly to the drive shaft.

```svg
<svg viewBox="0 0 700 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="waterJet" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="50%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="700" height="360" fill="#090d16"/>

  <!-- Pelton Wheel Hub & Runner -->
  <circle cx="430" cy="180" r="110" fill="url(#wheelGrad)" stroke="#94a3b8" stroke-width="3"/>
  <circle cx="430" cy="180" r="30" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="430" cy="180" r="10" fill="#f8fafc"/>
  <text x="430" y="160" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">Central Axle</text>
  <text x="430" y="230" fill="#38bdf8" font-size="11" font-family="monospace" text-anchor="middle">Rotation: 800 - 1500 RPM</text>

  <!-- Pelton Buckets around perimeter -->
  <!-- Bottom Bucket (Target of Jet) -->
  <path d="M410 290 Q430 310 450 290 Q440 280 430 285 Q420 280 410 290 Z" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>
  <!-- Top Bucket -->
  <path d="M410 70 Q430 50 450 70 Q440 80 430 75 Q420 80 410 70 Z" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
  <!-- Left Bucket -->
  <path d="M320 160 Q300 180 320 200 Q330 190 325 180 Q330 170 320 160 Z" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
  <!-- Right Bucket -->
  <path d="M540 160 Q560 180 540 200 Q530 190 535 180 Q530 170 540 160 Z" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
  
  <!-- Penstock High Pressure Supply Pipe -->
  <rect x="50" y="275" width="160" height="30" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
  <text x="130" y="265" fill="#94a3b8" font-size="11" font-family="monospace" text-anchor="middle">Penstock (High Head >15m)</text>

  <!-- Constriction Jet Nozzle -->
  <path d="M210 275 L300 286 L300 294 L210 305 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
  <text x="255" y="268" fill="#fde047" font-size="11" font-family="monospace">Constriction Nozzle</text>

  <!-- High Velocity Kinetic Water Jet -->
  <rect x="300" y="287" width="115" height="6" fill="url(#waterJet)"/>
  <path d="M390 285 L420 270 M390 295 L420 310" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="350" y="325" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">165° Momentum Reversal</text>

  <!-- Power Equation Reference Box -->
  <rect x="30" y="50" width="260" height="80" rx="6" fill="#111827" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="40" y="75" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace">THEORETICAL POWER (WATTS):</text>
  <text x="40" y="95" fill="#f8fafc" font-size="12" font-family="monospace">P = Q (liters/s) × H (meters) × 6.5</text>
  <text x="40" y="115" fill="#94a3b8" font-size="10" font-family="monospace">Ex: 5 L/s @ 20m head = 650 Watts continuous!</text>
</svg>
```

## Engineering & Fabrication Specifications
1. **Hydraulic Head (H):** A Pelton turbine requires *pressure*, not volume. A vertical drop of at least **15 meters (50 feet)** through a 5–7 cm sealed PVC/steel pipe generates the requisite pressure velocity ($\approx 17\text{ m/s}$).
2. **Bucket Geometry:** Cast bronze, aluminum, or carved hardwood spoons paired back-to-back. The center divider ridge (splitter) must be sharp as a butter knife to bifurcate the high-speed jet cleanly with zero turbulent bounce-back.
3. **Nozzle Sizing:** Taper the penstock exit down to a nozzle orifice of 8 mm to 14 mm depending on stream flow rate. The jet must strike the buckets exactly tangential to the pitch circle diameter.
4. **Mechanical Coupling:** Connect the Pelton wheel directly or via a V-belt drive ($1:3$ ratio) to a permanent magnet DC alternator, car alternator (with excited field coil), or rewound washing machine stator.
5. **Continuous Base Load:** Unlike solar or wind, a micro-hydro Pelton produces continuous $24/7$ electricity for lead-acid charging, medical clinics, or electric fences.

