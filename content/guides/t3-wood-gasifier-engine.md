---
id: t3-wood-gasifier-engine
tier: 4
tier_name: Tier 3 - Early Industrial
title: Imbert Downdraft Wood Gasifier
category: "Thermal Gasification"
read_time: 7 min
difficulty: High
tags: energy, gasifier, wood gas, internal combustion, fuel, syngas, carbon monoxide
summary: Construct a downdraft Imbert pyrolysis gasifier to generate clean synthesis wood gas ($CO + H_2$) from dry hardwood chunks to run standard gasoline generators and tractor engines without petroleum.
---

## Pyrolysis & Thermochemical Conversion
During petroleum embargoes in World War II, over 500,000 vehicles ran on wood gasifiers. Wood heated in an oxygen-deprived environment ($>1000^\circ\text{C}$) does not combust into ash; it undergoes **thermal pyrolysis**, cracking long-chain tars into a flammable gaseous fuel mixture known as **Producer Gas / Syngas**:

$$\begin{aligned}
\text{Oxidation zone:} \quad & C + O_2 \longrightarrow CO_2 + \text{Heat} \\
\text{Reduction zone:} \quad & CO_2 + C \longrightarrow 2\,CO \quad (\Delta H = +172\text{ kJ/mol}) \\
\text{Water-Gas reaction:} \quad & C + H_2O \longrightarrow CO + H_2
\end{aligned}$$

The resulting gas ($20\%\text{ }CO,\; 18\%\text{ }H_2,\; 2\%\text{ }CH_4,\; 60\%\text{ }N_2$) has an octane rating of approximately **105**, delivering roughly **70% of the horsepower** of gasoline.

```svg
<svg viewBox="0 0 700 370" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gasCore" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="700" height="370" fill="#090d16" rx="8"/>

  <!-- Left: The Gasifier Reactor Tower -->
  <g transform="translate(30, 20)">
    <rect x="0" y="0" width="190" height="300" rx="8" fill="#18181b" stroke="#64748b" stroke-width="2"/>
    <text x="95" y="24" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1. IMBERT GASIFIER</text>

    <!-- Fuel Hopper (Wood chips) -->
    <rect x="25" y="35" width="140" height="70" fill="#3f3f46"/>
    <text x="95" y="65" fill="#fde68a" font-size="10" font-family="monospace" text-anchor="middle">Wood Blocks (3x3cm)</text>
    <text x="95" y="78" fill="#a1a1aa" font-size="8" font-family="monospace" text-anchor="middle">(Moisture &lt;15%)</text>

    <!-- Air Injection Nozzles (Tuyeres) -->
    <line x1="5" y1="130" x2="45" y2="130" stroke="#38bdf8" stroke-width="4"/>
    <line x1="185" y1="130" x2="145" y2="130" stroke="#38bdf8" stroke-width="4"/>
    <text x="95" y="125" fill="#38bdf8" font-size="8" font-family="monospace" text-anchor="middle">Air Inflow Nozzles</text>

    <!-- Restriction Throat / Hearth (1100°C) -->
    <path d="M45 120 L75 155 L115 155 L145 120" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <ellipse cx="95" cy="148" rx="20" ry="8" fill="url(#gasCore)"/>
    <text x="95" y="172" fill="#ef4444" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">1100°C Tar Cracking</text>

    <!-- Glowing Charcoal Reduction Bed -->
    <rect x="45" y="180" width="100" height="45" fill="#450a0a" stroke="#ef4444"/>
    <text x="95" y="200" fill="#fca5a5" font-size="9" font-family="monospace" text-anchor="middle">Charcoal Bed</text>
    <text x="95" y="212" fill="#fef08a" font-size="8" font-family="monospace" text-anchor="middle">Reduction (C + CO2 = 2CO)</text>

    <!-- Gas Outflow Pipe -->
    <rect x="150" y="250" width="50" height="20" fill="#334155"/>
    <path d="M170 260 L210 260" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow)"/>
  </g>

  <!-- Middle: Cyclone Pre-Cleaner & Radiator Cooler -->
  <g transform="translate(245, 20)">
    <rect x="0" y="0" width="170" height="300" rx="8" fill="#18181b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="85" y="24" fill="#f59e0b" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2. CYCLONE &amp; COOLER</text>

    <!-- Cyclone body -->
    <path d="M50 45 L120 45 L105 130 L65 130 Z" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Vortex lines -->
    <ellipse cx="85" cy="65" rx="25" ry="8" fill="none" stroke="#fde047" stroke-width="1.5" stroke-dasharray="3,2"/>
    <ellipse cx="85" cy="95" rx="15" ry="5" fill="none" stroke="#fde047" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="85" y="150" fill="#cbd5e1" font-size="9" font-family="monospace" text-anchor="middle">Centrifugal Ash Spin</text>

    <!-- Cooling Radiator Loops -->
    <path d="M45 170 L125 170 M45 190 L125 190 M45 210 L125 210 M45 230 L125 230" stroke="#06b6d4" stroke-width="3"/>
    <text x="85" y="255" fill="#22d3ee" font-size="9" font-family="monospace" text-anchor="middle">Cool Gas &lt;40°C</text>
    <text x="85" y="270" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">(Dense cool charge)</text>
  </g>

  <!-- Right: Hay/Sawdust Final Filter & Carburetor T-Junction -->
  <g transform="translate(440, 20)">
    <rect x="0" y="0" width="230" height="300" rx="8" fill="#18181b" stroke="#10b981" stroke-width="2"/>
    <text x="115" y="24" fill="#10b981" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3. FILTER &amp; ENGINE</text>

    <!-- Sawdust / Hay Packed Filter Drum -->
    <rect x="30" y="45" width="170" height="110" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
    <rect x="40" y="65" width="150" height="75" fill="#854d0e" opacity="0.6"/>
    <text x="115" y="95" fill="#fef08a" font-size="10" font-family="monospace" text-anchor="middle">Dry Sawdust / Sisal</text>
    <text x="115" y="110" fill="#cbd5e1" font-size="8" font-family="monospace" text-anchor="middle">Traps 100% fine particulates</text>

    <!-- Carburetor T-Mixing Valve -->
    <circle cx="115" cy="205" r="24" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
    <text x="115" y="202" fill="#f8fafc" font-size="9" font-family="monospace" text-anchor="middle">Air / Gas</text>
    <text x="115" y="215" fill="#38bdf8" font-size="8" font-family="monospace" text-anchor="middle">T-Valve (1:1)</text>

    <!-- Engine Intake Arrow -->
    <path d="M140 205 L195 205" stroke="#10b981" stroke-width="4" marker-end="url(#arrow)"/>
    <text x="115" y="255" fill="#86efac" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">TO ENGINE MANIFOLD</text>
    <text x="115" y="272" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">Disconnect gasoline carburetor</text>
  </g>

  <!-- Bottom Lethal Danger Warning -->
  <rect x="30" y="330" width="640" height="30" rx="4" fill="#290707" stroke="#ef4444" stroke-width="1.5"/>
  <text x="350" y="349" fill="#fca5a5" font-size="9.5" font-family="monospace" text-anchor="middle">LETHAL CO HAZARD: Producer gas contains 20% odorless Carbon Monoxide. NEVER operate indoors!</text>
</svg>
```

## Construction & Retrofit Protocol
1. **The Fuel Mandate:** Use dense hardwood (Oak, Beech, Ash) cut into uniform 2–3 cm cubes. Wood moisture content **MUST be below 15%** (sun-cured under cover for 6 months). Wet wood produces water steam that quenches the charcoal bed and floods the engine with tar.
2. **The Constriction Throat (Hearth):** Fabricate an hour-glass shaped restriction cone from heavy steel pipe (or cast refractory fireclay). The narrow restriction forces all gas and pyrolytic wood vapors to pass through an incandescent **1100°C** zone where volatile tars are thermally cracked into permanent gases ($CO$ and $H_2$). If tars bypass this zone, they will coat engine intake valves and weld the engine solid within 2 hours.
3. **Tuyere Air Injection:** Direct 4 to 6 evenly spaced 12 mm air nozzles downward toward the throat. Air sucked in through these nozzles drives local combustion to maintain the 1100°C core.
4. **Cyclone Dust Separator:** Exhaust hot gas into a cylindrical cyclone body tangential to the outer wall. Heavy ash and soot spin to the outer perimeter and drop into an airtight bottom clean-out trap.
5. **Cooling Rails:** Route the gas through 3 meters of exposed steel tubing to drop gas temperature from 400°C to below 40°C. Cool gas is dense, dramatically improving engine volumetric efficiency.
6. **Packed Media Filter:** Pass cooled gas through a secondary drum packed with dry wood shavings or sisal fiber to capture sub-micron ash.
7. **Engine Plumbing (Carburetor Bypass):** Tap the gas pipe directly into the engine intake manifold past the existing carburetor. Install a simple ball valve on the air side: adjust the air-to-wood-gas ratio (roughly 1:1 by volume) while cranking until the engine fires smoothly.
