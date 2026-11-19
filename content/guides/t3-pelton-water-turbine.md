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
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="peltonGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="peltonWheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="40%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>

    <linearGradient id="peltonJetGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="50%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <!-- Markers -->
    <marker id="peltonArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#peltonGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#38bdf8"/>
  <text x="60" y="30" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">PELTON WHEEL HIGH-HEAD IMPULSE HYDRO-TURBINE</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">165° DOUBLE-CUP MOMENTUM REVERSAL • HEAD &gt;15m (50 FT) • 85%–92% WATER-TO-SHAFT KINETIC TRANSFER</text>

  <!-- Ground / Housing Base -->
  <line x1="25" y1="365" x2="795" y2="365" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- ================= TURBINE RUNNER WHEEL ================= -->
  <g transform="translate(480, 205)">
    <!-- Main Cast Steel Rotor Hub -->
    <circle cx="0" cy="0" r="115" fill="url(#peltonWheelGrad)" stroke="#64748b" stroke-width="3"/>
    
    <!-- Pitch Circle Tangent Line (Radius Reference) -->
    <circle cx="0" cy="0" r="105" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3"/>
    
    <!-- Central Keyed Drive Shaft -->
    <circle cx="0" cy="0" r="32" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="0" cy="0" r="12" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
    <rect x="-4" y="-32" width="8" height="12" fill="#38bdf8"/>
    <text x="0" y="-38" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">Keyway</text>
    <text x="0" y="4" fill="#0f172a" font-size="7" font-weight="bold" font-family="monospace" text-anchor="middle">SHAFT</text>

    <!-- Rotation Speed Indicator -->
    <path d="M 45 -45 A 65 65 0 0 1 65 15" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#peltonArrow)"/>
    <text x="75" y="-20" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace">800–1500 RPM</text>

    <!-- Pelton Buckets around perimeter (Double-Cup Spoons) -->
    <!-- Bottom Impact Bucket (Target of Jet) -->
    <g transform="translate(0, 115)">
      <path d="M -24 0 Q 0 25 24 0 Q 12 -12 0 -6 Q -12 -12 -24 0 Z" fill="#d97706" stroke="#fbbf24" stroke-width="1.5"/>
      <line x1="0" y1="-6" x2="0" y2="24" stroke="#ffffff" stroke-width="1.5"/>
    </g>

    <!-- Top Bucket -->
    <g transform="translate(0, -115)">
      <path d="M -24 0 Q 0 -25 24 0 Q 12 12 0 6 Q -12 12 -24 0 Z" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
    </g>

    <!-- Left Bucket -->
    <g transform="translate(-115, 0) rotate(90)">
      <path d="M -24 0 Q 0 25 24 0 Q 12 -12 0 -6 Q -12 -12 -24 0 Z" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
    </g>

    <!-- Right Bucket -->
    <g transform="translate(115, 0) rotate(-90)">
      <path d="M -24 0 Q 0 25 24 0 Q 12 -12 0 -6 Q -12 -12 -24 0 Z" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
    </g>

    <!-- 4 Diagonal Buckets -->
    <g transform="translate(-81, -81) rotate(45)">
      <path d="M -20 0 Q 0 -20 20 0 Q 10 10 0 5 Q -10 10 -20 0 Z" fill="#334155" stroke="#64748b" stroke-width="1"/>
    </g>
    <g transform="translate(81, -81) rotate(-45)">
      <path d="M -20 0 Q 0 -20 20 0 Q 10 10 0 5 Q -10 10 -20 0 Z" fill="#334155" stroke="#64748b" stroke-width="1"/>
    </g>
    <g transform="translate(-81, 81) rotate(135)">
      <path d="M -20 0 Q 0 -20 20 0 Q 10 10 0 5 Q -10 10 -20 0 Z" fill="#334155" stroke="#64748b" stroke-width="1"/>
    </g>
    <g transform="translate(81, 81) rotate(-135)">
      <path d="M -20 0 Q 0 -20 20 0 Q 10 10 0 5 Q -10 10 -20 0 Z" fill="#334155" stroke="#64748b" stroke-width="1"/>
    </g>
  </g>

  <!-- ================= ❶ PENSTOCK & ❷ CONSTRICTION NOZZLE ================= -->
  <g id="penstockNozzleGroup">
    <!-- Penstock High Pressure Supply Pipe -->
    <rect x="35" y="305" width="220" height="34" rx="3" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
    <text x="145" y="326" fill="#7dd3fc" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">HIGH-PRESSURE PENSTOCK (Head &gt;15m)</text>

    <!-- Tapered Constriction Nozzle Horn -->
    <polygon points="255,305 375,317 375,327 255,339" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="315" y="300" fill="#fde047" font-size="8.5" font-family="monospace">10mm Orifice</text>

    <!-- High Velocity Supersonic Jet Stream -->
    <rect x="375" y="318" width="105" height="8" rx="2" fill="url(#peltonJetGrad)"/>
    <line x1="375" y1="322" x2="475" y2="322" stroke="#ffffff" stroke-width="2"/>

    <!-- 165° Momentum Reversal Deflection Vectors -->
    <path d="M 470 317 Q 490 295 460 280" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,2"/>
    <path d="M 470 327 Q 490 350 460 360" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,2"/>
    <text x="515" y="338" fill="#38bdf8" font-size="8" font-family="monospace">165° Reversal</text>
  </g>

  <!-- ================= TACTICAL NUMBERED BADGES ================= -->
  <!-- ❶ Penstock Pressure -->
  <g transform="translate(25, 75)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#0284c7"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <text x="32" y="16" fill="#7dd3fc" font-size="9" font-weight="bold" font-family="sans-serif">Penstock Line</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Head drop &gt;15m (50 ft)</text>
    <text x="32" y="39" fill="#38bdf8" font-size="7.5" font-family="monospace">Velocity &gt;17 m/s at exit</text>
  </g>

  <!-- ❷ Jet Constriction Nozzle -->
  <g transform="translate(25, 135)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b45309"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <text x="32" y="16" fill="#fde68a" font-size="9" font-weight="bold" font-family="sans-serif">Constriction Jet</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">8mm–14mm smooth taper</text>
    <text x="32" y="39" fill="#f59e0b" font-size="7.5" font-family="monospace">100% head ➔ kinetic speed</text>
  </g>

  <!-- ❸ Double-Cup Bucket Geometry -->
  <g transform="translate(25, 195)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#047857"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <text x="32" y="16" fill="#a7f3d0" font-size="9" font-weight="bold" font-family="sans-serif">Double-Cup Spoon</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Sharp center knife ridge</text>
    <text x="32" y="39" fill="#10b981" font-size="7.5" font-family="monospace">Zero turbulent bounce-back</text>
  </g>

  <!-- ❹ Electrical Generator Coupling -->
  <g transform="translate(650, 75)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b45309"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❹</text>
    <text x="32" y="16" fill="#fde68a" font-size="9" font-weight="bold" font-family="sans-serif">Alternator Shaft</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Direct / 1:3 V-belt drive</text>
    <text x="32" y="39" fill="#f59e0b" font-size="7.5" font-family="monospace">PMA / Car alternator</text>
  </g>

  <!-- ❺ 24/7 Base Load -->
  <g transform="translate(650, 135)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#047857"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❺</text>
    <text x="32" y="16" fill="#a7f3d0" font-size="9" font-weight="bold" font-family="sans-serif">24/7 Grid Power</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Continuous base wattage</text>
    <text x="32" y="39" fill="#10b981" font-size="7.5" font-family="monospace">Zero weather interruption</text>
  </g>

  <!-- ================= BOTTOM THEORETICAL POWER EQUATION ================= -->
  <g transform="translate(25, 385)">
    <rect width="770" height="60" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
    <text x="20" y="20" fill="#38bdf8" font-size="9.5" font-weight="bold" font-family="monospace">HYDRO POWER OUTPUT FORMULA:</text>
    <text x="20" y="36" fill="#f8fafc" font-size="11" font-weight="bold" font-family="monospace">P (Watts) = Q (Liters/sec) × H (meters) × 6.5</text>
    <text x="20" y="49" fill="#cbd5e1" font-size="8" font-family="monospace">Derived from P = ρ · g · Q · H · η (where overall field conversion efficiency η ≈ 0.65)</text>

    <line x1="430" y1="8" x2="430" y2="52" stroke="#1e293b" stroke-width="1"/>
    <text x="450" y="20" fill="#10b981" font-size="9.5" font-weight="bold" font-family="monospace">TYPICAL HOMESTEAD PRODUCTION:</text>
    <text x="450" y="36" fill="#a7f3d0" font-size="8.5" font-family="monospace">Small stream @ 5 Liters/sec with 20m drop = 650 Watts continuous 24/7.</text>
    <text x="450" y="49" fill="#86efac" font-size="8.5" font-family="monospace">Generates 15.6 kilowatt-hours daily — enough to power lights, freezer, &amp; radios.</text>
  </g>
</svg>
```

## Engineering & Fabrication Specifications
1. **Hydraulic Head (H):** A Pelton turbine requires *pressure*, not volume. A vertical drop of at least **15 meters (50 feet)** through a 5–7 cm sealed PVC/steel pipe generates the requisite pressure velocity ($\approx 17\text{ m/s}$).
2. **Bucket Geometry:** Cast bronze, aluminum, or carved hardwood spoons paired back-to-back. The center divider ridge (splitter) must be sharp as a butter knife to bifurcate the high-speed jet cleanly with zero turbulent bounce-back.
3. **Nozzle Sizing:** Taper the penstock exit down to a nozzle orifice of 8 mm to 14 mm depending on stream flow rate. The jet must strike the buckets exactly tangential to the pitch circle diameter.
4. **Mechanical Coupling:** Connect the Pelton wheel directly or via a V-belt drive ($1:3$ ratio) to a permanent magnet DC alternator, car alternator (with excited field coil), or rewound washing machine stator.
5. **Continuous Base Load:** Unlike solar or wind, a micro-hydro Pelton produces continuous $24/7$ electricity for lead-acid charging, medical clinics, or electric fences.

