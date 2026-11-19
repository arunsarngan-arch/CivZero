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
<svg viewBox="0 0 700 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="metalG" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="perliteG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ca8a04"/>
      <stop offset="100%" stop-color="#854d0e"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="700" height="360" fill="#090d16"/>

  <!-- Outer Barrel / Container -->
  <rect x="300" y="80" width="220" height="240" rx="10" fill="url(#metalG)" stroke="#94a3b8" stroke-width="2"/>
  <text x="410" y="70" fill="#cbd5e1" font-size="12" font-family="monospace" text-anchor="middle">Outer Steel Drum / Clay Casing</text>

  <!-- Vermiculite / Ash / Sand Insulation Core -->
  <rect x="310" y="90" width="200" height="220" fill="url(#perliteG)" opacity="0.6"/>
  <text x="410" y="240" fill="#fef08a" font-size="11" font-family="monospace" text-anchor="middle">Insulation Jacket (Wood Ash or Pumice)</text>

  <!-- L-Tube Core: Internal Chimney / Heat Riser -->
  <path d="M370 90 L450 90 L450 250 L200 250 L200 310 L450 310 L460 310 L460 250 L460 90" fill="#0f172a" stroke="#f97316" stroke-width="3"/>
  <rect x="375" y="95" width="70" height="155" fill="#111827"/>
  <rect x="180" y="250" width="195" height="60" fill="#111827"/>

  <!-- Feed Shelf Divider (Separating Sticks from Air Intake) -->
  <line x1="160" y1="280" x2="350" y2="280" stroke="#cbd5e1" stroke-width="3"/>
  <text x="140" y="270" fill="#fdba74" font-size="11" font-family="monospace">Fuel Sticks</text>
  <text x="140" y="300" fill="#38bdf8" font-size="11" font-family="monospace">Air Inflow</text>

  <!-- Sticks in Feed Tube -->
  <rect x="180" y="260" width="150" height="15" rx="3" fill="#a16207" stroke="#ca8a04"/>
  <rect x="190" y="263" width="130" height="10" rx="2" fill="#78350f"/>

  <!-- Combustion Vortex / Fire at Elbow -->
  <path d="M330 295 Q380 280 400 220 Q410 140 410 95" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
  <circle cx="360" cy="275" r="16" fill="#ef4444" opacity="0.8"/>
  <circle cx="390" cy="240" r="12" fill="#f59e0b" opacity="0.9"/>
  <circle cx="410" cy="180" r="10" fill="#fef08a"/>

  <!-- Pot Supports & Cooking Surface -->
  <rect x="360" y="80" width="10" height="10" fill="#e2e8f0"/>
  <rect x="440" y="80" width="10" height="10" fill="#e2e8f0"/>
  <rect x="350" y="45" width="110" height="35" rx="4" fill="#334155" stroke="#38bdf8" stroke-width="2"/>
  <text x="405" y="67" fill="#f8fafc" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Cook Pot</text>

  <!-- Heat Flow Arrows -->
  <path d="M410 90 L400 30 M410 90 L420 30" stroke="#f97316" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="560" y="160" fill="#fca5a5" font-size="12" font-family="monospace">Heat Riser >900°C</text>
  <text x="560" y="180" fill="#94a3b8" font-size="11" font-family="monospace">Zero Smoke Output</text>
</svg>
```

## Construction Specs & Ratios
1. **The Critical Ratio:** The height of the vertical heat riser must be **at least 2.5 times** the diameter of the tube. For a 10 cm (4-inch) pipe, the vertical chimney must be at least 25–35 cm tall.
2. **Fuel Shelf:** Insert a horizontal metal divider into the horizontal intake. Small twigs rest on top of the shelf; combustion air is sucked in below, entering directly at the base of the glowing coals.
3. **Insulation is Mandatory:** The vertical heat riser MUST be surrounded by a minimum of 5 cm of high-temperature insulation (wood ash, dry pumice, or clay/perlite mix). Without insulation, the combustion chamber cools down, stalling the wood gas burn and causing smoke.
4. **Pot Gap:** Keep a 2.5 cm gap between the top rim of the chimney and the bottom of your pot to allow exhaust gases to escape without suffocating the draft.

