---
id: t2-rocket-stove
tier: 2
tier_name: Tier 2 - Agrarian & Pre-Industrial
title: Rocket Stove & Mass Heater
category: "Thermal & Combustion"
read_time: 5 min
difficulty: Medium
tags: heat, combustion, stove, efficiency, thermal mass, rocket stove
summary: Build a high-efficiency insulated L-tube rocket stove capable of complete wood gas combustion, utilizing small twigs to generate smokeless high heat with 90% fuel efficiency.
---

## Combustion Dynamics
Standard open fires waste up to **80% of thermal energy** through unburnt wood gas (visible smoke) and unconstrained radiant loss. A Rocket Stove isolates the combustion chamber in an insulated vertical heat riser. As wood gas reaches **800°C–1000°C** inside the insulated chimney, thermal draft accelerates rapidly, creating a roaring vacuum sound ("rocket"), complete secondary gas combustion, and clean exhaust.

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="stoveGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="stoveInsulation" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b45309" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#78350f" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#451a03" stop-opacity="0.4"/>
    </linearGradient>

    <linearGradient id="stoveOuterDrum" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="50%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>

    <linearGradient id="stoveFlameCore" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#dc2626" stop-opacity="0.9"/>
      <stop offset="35%" stop-color="#f97316" stop-opacity="0.95"/>
      <stop offset="70%" stop-color="#eab308" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#fef08a" stop-opacity="0.9"/>
    </linearGradient>

    <!-- Markers -->
    <marker id="stoveArrowAir" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="stoveArrowFlame" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#f97316"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#stoveGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#f97316"/>
  <text x="60" y="30" fill="#f97316" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">INSULATED L-TUBE ROCKET STOVE &amp; MASS HEATER</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">SECONDARY WOOD-GAS COMBUSTION VORTEX • RISER TEMP: 800°C–1000°C • 90% THERMAL FUEL EFFICIENCY</text>

  <!-- Ground Bed -->
  <line x1="25" y1="390" x2="795" y2="390" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- Outer Steel Drum / Container Cutaway -->
  <rect x="340" y="100" width="230" height="280" rx="8" fill="url(#stoveOuterDrum)" stroke="#475569" stroke-width="1.5"/>

  <!-- Insulation Annulus (Ash / Perlite) -->
  <rect x="350" y="110" width="210" height="260" rx="6" fill="url(#stoveInsulation)" stroke="#d97706" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="455" y="335" fill="#fde68a" font-size="8.5" font-family="monospace" text-anchor="middle">PERLITE / DRY WOOD ASH</text>
  <text x="455" y="347" fill="#f59e0b" font-size="8" font-family="monospace" text-anchor="middle">INSULATION JACKET (Min 5cm)</text>

  <!-- L-Tube Core Internal Conduit (Dark Combustion Void) -->
  <!-- Horizontal Feed Channel -->
  <path d="M 170 300 L 405 300 L 405 110 L 485 110 L 485 365 L 170 365 Z" fill="#0b0f17" stroke="#1e293b" stroke-width="2"/>

  <!-- Heat Riser Vertical Fire Tube Walls -->
  <rect x="405" y="110" width="8" height="255" fill="#94a3b8"/>
  <rect x="477" y="110" width="8" height="255" fill="#94a3b8"/>

  <!-- Fuel Shelf Divider (Separates Twigs above from Primary Air below) -->
  <rect x="160" y="330" width="180" height="6" rx="2" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
  
  <!-- Wood Twigs Resting on Fuel Shelf -->
  <rect x="180" y="312" width="140" height="8" rx="2" fill="#78350f" stroke="#a16207" stroke-width="1"/>
  <rect x="195" y="322" width="130" height="6" rx="2" fill="#92400e"/>
  <!-- Glowing Char at tip of twigs -->
  <ellipse cx="328" cy="320" rx="6" ry="8" fill="#ef4444"/>
  <ellipse cx="328" cy="320" rx="3" ry="5" fill="#fef08a"/>

  <!-- Air Inflow Draft Below Shelf -->
  <line x1="130" y1="350" x2="310" y2="350" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#stoveArrowAir)"/>
  <text x="140" y="344" fill="#38bdf8" font-size="8.5" font-weight="bold" font-family="monospace">Primary Air Inflow</text>

  <!-- Internal Combustion Vortex Flame inside Riser -->
  <path d="M 325 345 C 385 350, 420 330, 435 280 C 450 230, 430 180, 445 115" fill="none" stroke="url(#stoveFlameCore)" stroke-width="34" stroke-linecap="round"/>
  <path d="M 330 345 C 385 345, 425 320, 440 270 C 455 220, 435 170, 445 112" fill="none" stroke="#fef08a" stroke-width="14" stroke-linecap="round"/>
  
  <!-- Exhaust Plume Rising from Chimney -->
  <line x1="425" y1="105" x2="410" y2="70" stroke="#f97316" stroke-width="2.5" stroke-dasharray="4,2" marker-end="url(#stoveArrowFlame)"/>
  <line x1="445" y1="100" x2="445" y2="60" stroke="#fef08a" stroke-width="3" stroke-dasharray="4,2" marker-end="url(#stoveArrowFlame)"/>
  <line x1="465" y1="105" x2="480" y2="70" stroke="#f97316" stroke-width="2.5" stroke-dasharray="4,2" marker-end="url(#stoveArrowFlame)"/>

  <!-- Pot Stand Standoff Lugs (2.5cm Air Gap) -->
  <rect x="395" y="96" width="14" height="14" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="1.2"/>
  <rect x="480" y="96" width="14" height="14" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="1.2"/>

  <!-- Cast Iron Cooking Pot On Top -->
  <rect x="375" y="48" width="140" height="48" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <path d="M 365" y1="58" d="M 360 62 L 375 62 M 515 62 L 530 62" stroke="#64748b" stroke-width="3"/>
  <text x="445" y="76" fill="#f8fafc" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">COOK POT</text>
  <text x="445" y="88" fill="#38bdf8" font-size="8" font-family="monospace" text-anchor="middle">Max Heat Transfer</text>

  <!-- Caliper: Pot Standoff Gap (2.5cm) -->
  <line x1="535" y1="96" x2="535" y2="110" stroke="#38bdf8" stroke-width="1.2"/>
  <line x1="530" y1="96" x2="540" y2="96" stroke="#38bdf8" stroke-width="1.2"/>
  <line x1="530" y1="110" x2="540" y2="110" stroke="#38bdf8" stroke-width="1.2"/>
  <text x="548" y="105" fill="#38bdf8" font-size="8" font-family="monospace">2.5cm Gap</text>

  <!-- Caliper: Heat Riser Height H >= 2.5D -->
  <line x1="505" y1="110" x2="505" y2="300" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="498" y1="110" x2="512" y2="110" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="498" y1="300" x2="512" y2="300" stroke="#f59e0b" stroke-width="1.5"/>
  <rect x="495" y="195" width="60" height="20" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
  <text x="525" y="209" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">H ≥ 2.5×D</text>

  <!-- ================= TACTICAL BADGES ================= -->
  <!-- ❶ Fuel Feed & Air Shelf -->
  <g transform="translate(25, 235)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b45309"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <text x="32" y="16" fill="#fde68a" font-size="9" font-weight="bold" font-family="sans-serif">Fuel Feed Shelf</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Sticks rest on divider</text>
    <text x="32" y="39" fill="#38bdf8" font-size="7.5" font-family="monospace">Air inducted under bed</text>
  </g>

  <!-- ❷ Combustion Vortex Throat -->
  <g transform="translate(180, 185)">
    <rect width="140" height="46" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b91c1c"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <text x="32" y="16" fill="#fca5a5" font-size="9" font-weight="bold" font-family="sans-serif">Combustion Throat</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">90° elbow vortex</text>
    <text x="32" y="39" fill="#f59e0b" font-size="7.5" font-family="monospace">Char bed gasifies wood</text>
  </g>

  <!-- ❸ Insulated Heat Riser -->
  <g transform="translate(595, 135)">
    <rect width="190" height="48" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#c2410c"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <text x="32" y="16" fill="#fdba74" font-size="9" font-weight="bold" font-family="sans-serif">Insulated Heat Riser</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Internal chimney >900°C</text>
    <text x="32" y="39" fill="#f97316" font-size="7.5" font-family="monospace">Secondary wood-gas burn</text>
  </g>

  <!-- ❹ Refractory Insulation Jacket -->
  <g transform="translate(595, 200)">
    <rect width="190" height="48" rx="6" fill="#0f172a" stroke="#eab308" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#a16207"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❹</text>
    <text x="32" y="16" fill="#fde68a" font-size="9" font-weight="bold" font-family="sans-serif">Insulation Jacket</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Pumice / dry wood-ash</text>
    <text x="32" y="39" fill="#cbd5e1" font-size="7.5" font-family="monospace">Prevents radiant heat loss</text>
  </g>

  <!-- ❺ Exhaust Stand Lugs -->
  <g transform="translate(595, 65)">
    <rect width="190" height="48" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#0284c7"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❺</text>
    <text x="32" y="16" fill="#7dd3fc" font-size="9" font-weight="bold" font-family="sans-serif">2.5cm Exhaust Lugs</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Prevents draft choke</text>
    <text x="32" y="39" fill="#38bdf8" font-size="7.5" font-family="monospace">Zero backpressure stall</text>
  </g>

  <!-- Bottom Technical Metric Bar -->
  <g transform="translate(25, 400)">
    <rect width="770" height="48" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
    <text x="20" y="20" fill="#f97316" font-size="9.5" font-weight="bold" font-family="monospace">ACOUSTIC SIGNATURE:</text>
    <text x="20" y="36" fill="#cbd5e1" font-size="8.5" font-family="monospace">Distinct roaring draft sound confirms complete smoke burn</text>

    <line x1="330" y1="8" x2="330" y2="40" stroke="#1e293b" stroke-width="1"/>
    <text x="350" y="20" fill="#f59e0b" font-size="9.5" font-weight="bold" font-family="monospace">FUEL CONSUMPTION:</text>
    <text x="350" y="36" fill="#cbd5e1" font-size="8.5" font-family="monospace">Operates entirely on pencil-thick dry twigs &amp; pruned branch wood</text>

    <line x1="610" y1="8" x2="610" y2="40" stroke="#1e293b" stroke-width="1"/>
    <text x="625" y="20" fill="#10b981" font-size="9.5" font-weight="bold" font-family="monospace">EMISSIONS:</text>
    <text x="625" y="36" fill="#86efac" font-size="8.5" font-family="monospace">Near-zero visible particulate</text>
  </g>
</svg>
```

## Construction Specs & Ratios
1. **The Critical Ratio:** The height of the vertical heat riser must be **at least 2.5 times** the diameter of the tube. For a 10 cm (4-inch) pipe, the vertical chimney must be at least 25–35 cm tall.
2. **Fuel Shelf:** Insert a horizontal metal divider into the horizontal intake. Small twigs rest on top of the shelf; combustion air is sucked in below, entering directly at the base of the glowing coals.
3. **Insulation is Mandatory:** The vertical heat riser MUST be surrounded by a minimum of 5 cm of high-temperature insulation (wood ash, dry pumice, or clay/perlite mix). Without insulation, the combustion chamber cools down, stalling the wood gas burn and causing smoke.
4. **Pot Gap:** Keep a 2.5 cm gap between the top rim of the chimney and the bottom of your pot to allow exhaust gases to escape without suffocating the draft.

