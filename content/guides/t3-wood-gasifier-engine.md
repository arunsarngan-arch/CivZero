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
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="gasGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>
    <linearGradient id="hearthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="45%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>
    <linearGradient id="gasCoolGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="arrowAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
    </marker>
  </defs>

  <!-- Obsidian Background & Tactical Grid -->
  <rect x="0" y="0" width="820" height="460" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="460" fill="url(#gasGrid)"/>

  <!-- Blueprint Header Title -->
  <rect x="25" y="15" width="770" height="32" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="40" y="36" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">IMBERT DOWNDRAFT WOOD GASIFIER SYSTEM — PROCESS SCHEMATIC</text>
  <text x="770" y="36" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">CLOSED PYROLYSIS REACTOR</text>

  <!-- STAGE 1: GASIFIER REACTOR TOWER -->
  <g id="reactor" transform="translate(30, 60)">
    <rect x="0" y="0" width="220" height="330" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>
    
    <!-- Fuel Hopper (Top Section) -->
    <path d="M 20 40 L 200 40 L 190 120 L 30 120 Z" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
    <!-- Wood blocks texture -->
    <g fill="#92400e" stroke="#78350f" opacity="0.8">
      <rect x="35" y="50" width="16" height="14" rx="2"/><rect x="60" y="48" width="18" height="15" rx="2"/><rect x="88" y="52" width="15" height="13" rx="2"/><rect x="115" y="47" width="16" height="16" rx="2"/><rect x="142" y="51" width="18" height="14" rx="2"/>
      <rect x="42" y="70" width="18" height="15" rx="2"/><rect x="70" y="68" width="15" height="15" rx="2"/><rect x="95" y="71" width="17" height="14" rx="2"/><rect x="122" y="69" width="16" height="15" rx="2"/><rect x="148" y="72" width="17" height="14" rx="2"/>
      <rect x="52" y="90" width="16" height="14" rx="2"/><rect x="80" y="88" width="18" height="15" rx="2"/><rect x="108" y="91" width="15" height="14" rx="2"/><rect x="132" y="89" width="16" height="15" rx="2"/>
    </g>

    <!-- Tuyere Air Injection Nozzles -->
    <line x1="-10" y1="140" x2="45" y2="155" stroke="#38bdf8" stroke-width="4"/>
    <line x1="230" y1="140" x2="175" y2="155" stroke="#38bdf8" stroke-width="4"/>
    <path d="M 45 155 L 60 160" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)"/>
    <path d="M 175 155 L 160 160" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)"/>

    <!-- Hourglass Restriction Throat (Hearth) -->
    <path d="M 30 120 L 75 160 L 75 185 L 30 230" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <path d="M 190 120 L 145 160 L 145 185 L 190 230" fill="none" stroke="#f59e0b" stroke-width="3"/>
    
    <!-- Incandescent Hearth Core (1100°C) -->
    <ellipse cx="110" cy="172" rx="32" ry="14" fill="url(#hearthGrad)"/>
    <ellipse cx="110" cy="172" rx="20" ry="7" fill="#ffffff" opacity="0.8"/>

    <!-- Glowing Charcoal Reduction Bed -->
    <path d="M 35 230 L 75 185 L 145 185 L 185 230 L 185 265 L 35 265 Z" fill="#450a0a" stroke="#b91c1c" stroke-width="1.5" opacity="0.9"/>
    <!-- Charcoal ember speckles -->
    <circle cx="65" cy="225" r="2.5" fill="#f59e0b"/><circle cx="100" cy="210" r="3" fill="#ef4444"/><circle cx="140" cy="220" r="2.5" fill="#f59e0b"/><circle cx="110" cy="240" r="2.5" fill="#fef08a"/><circle cx="80" cy="245" r="3" fill="#ef4444"/><circle cx="155" cy="242" r="2" fill="#f59e0b"/>

    <!-- Ash Grate & Cleanout Pit -->
    <line x1="30" y1="265" x2="190" y2="265" stroke="#64748b" stroke-dasharray="4,3" stroke-width="2.5"/>
    <rect x="40" y="275" width="140" height="35" rx="3" fill="#0f172a" stroke="#334155"/>
    <text x="110" y="296" fill="#64748b" font-size="9" font-family="monospace" text-anchor="middle">Airtight Ash Clean-out</text>

    <!-- Gas Exit Plenum -->
    <path d="M 190 245 L 235 245" stroke="#f59e0b" stroke-width="6"/>

    <!-- Badges & Callout Labels -->
    <rect x="15" y="10" width="140" height="20" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1.2"/>
    <circle cx="25" cy="20" r="7" fill="#d97706"/>
    <text x="25" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
    <text x="85" y="24" fill="#fde68a" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="middle">HARDWOOD HOPPER</text>

    <rect x="25" y="132" width="55" height="16" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <circle cx="34" cy="140" r="5" fill="#0284c7"/>
    <text x="34" y="143" fill="#ffffff" font-size="7.5" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
    <text x="56" y="143" fill="#38bdf8" font-size="8" font-family="monospace">AIR TUYERE</text>

    <rect x="135" y="132" width="55" height="16" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <circle cx="144" cy="140" r="5" fill="#0284c7"/>
    <text x="144" y="143" fill="#ffffff" font-size="7.5" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
    <text x="166" y="143" fill="#38bdf8" font-size="8" font-family="monospace">AIR TUYERE</text>

    <rect x="42" y="162" width="136" height="18" rx="4" fill="#0f172a" stroke="#ef4444" stroke-width="1.2"/>
    <circle cx="52" cy="171" r="6" fill="#ef4444"/>
    <text x="52" y="174" fill="#ffffff" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
    <text x="115" y="174" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">HEARTH THROAT 1100°C</text>
  </g>

  <!-- TRANSFER PIPE TO CYCLONE -->
  <path d="M 265 305 L 295 305 L 295 125 L 320 125" fill="none" stroke="#f59e0b" stroke-width="4" marker-end="url(#arrowAmber)"/>
  <rect x="250" y="270" width="60" height="16" rx="3" fill="#0f172a" stroke="#64748b"/>
  <text x="280" y="281" fill="#fcd34d" font-size="7.5" font-family="monospace" text-anchor="middle">HOT CRACKED GAS</text>

  <!-- STAGE 2: CYCLONE PRE-CLEANER -->
  <g id="cyclone" transform="translate(320, 60)">
    <rect x="0" y="0" width="135" height="330" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Cyclone conical vessel -->
    <path d="M 25 70 L 110 70 L 85 210 L 50 210 Z" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="45" y="210" width="45" height="30" rx="2" fill="#0f172a" stroke="#64748b"/>
    <text x="67" y="228" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">Fly Ash Trap</text>

    <!-- Vortex flow spirals -->
    <path d="M 35 90 C 85 80, 95 110, 50 120 C 80 130, 85 150, 55 160 C 75 170, 75 190, 67 205" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="3,2"/>
    <path d="M 68 70 L 68 45 L 135 45" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowAmber)"/>

    <rect x="10" y="10" width="115" height="20" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1.2"/>
    <circle cx="20" cy="20" r="7" fill="#d97706"/>
    <text x="20" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">4</text>
    <text x="68" y="24" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">CYCLONE SEPARATOR</text>
    <text x="67" y="270" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">Centrifugal Vortex</text>
    <text x="67" y="283" fill="#64748b" font-size="7.5" font-family="monospace" text-anchor="middle">Removes &gt;90% Soot</text>
  </g>

  <!-- STAGE 3: COOLING RADIATOR MANIFOLD -->
  <g id="radiator" transform="translate(470, 60)">
    <rect x="0" y="0" width="110" height="330" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Cooling serpentine pipe rails -->
    <path d="M -15 45 L 25 45 C 40 45, 40 75, 25 75 L 85 75 C 98 75, 98 105, 85 105 L 25 105 C 12 105, 12 135, 25 135 L 85 135 C 98 135, 98 165, 85 165 L 25 165 C 12 165, 12 195, 25 195 L 85 195 C 98 195, 98 225, 85 225 L 125 225" fill="none" stroke="#38bdf8" stroke-width="3.5"/>

    <rect x="8" y="10" width="94" height="20" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1.2"/>
    <circle cx="18" cy="20" r="7" fill="#0284c7"/>
    <text x="18" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">5</text>
    <text x="58" y="24" fill="#bae6fd" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">COOLING RAILS</text>

    <!-- Caliper / Thermal Drop note -->
    <rect x="12" y="250" width="86" height="42" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-dasharray="2,2"/>
    <text x="55" y="266" fill="#38bdf8" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">ΔT: 400°C → &lt;40°C</text>
    <text x="55" y="280" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Maximizes Density</text>
  </g>

  <!-- STAGE 4: PACKED FINAL FILTER & CARBURETOR T-MIXER -->
  <g id="engine" transform="translate(595, 60)">
    <rect x="0" y="0" width="195" height="330" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Packed Sisal Filter Drum -->
    <rect x="25" y="50" width="145" height="120" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
    <rect x="35" y="65" width="125" height="90" rx="3" fill="#78350f" opacity="0.35"/>
    <!-- Sisal fibers texture -->
    <path d="M 40 75 Q 60 85 80 75 T 120 75 M 45 95 Q 75 105 105 95 T 145 95 M 50 115 Q 80 125 110 115 T 150 115 M 42 135 Q 70 145 100 135 T 140 135" stroke="#fef08a" stroke-width="1" stroke-dasharray="2,3" opacity="0.6"/>

    <rect x="18" y="10" width="130" height="20" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="28" cy="20" r="7" fill="#10b981"/>
    <text x="28" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">6</text>
    <text x="80" y="24" fill="#86efac" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">PACKED SISAL FILTER</text>
    <text x="97" y="162" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">Dry Sawdust / Sisal Fiber</text>

    <!-- Carburetor T-Mixing Valve -->
    <path d="M 97 170 L 97 220" stroke="#38bdf8" stroke-width="4"/>
    <circle cx="97" cy="245" r="24" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <!-- Air Inlet to T-valve -->
    <path d="M 25 245 L 73 245" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)"/>
    <text x="45" y="238" fill="#38bdf8" font-size="8" font-family="monospace">Fresh Air</text>
    <!-- Output to Engine -->
    <path d="M 121 245 L 175 245" stroke="#10b981" stroke-width="4" marker-end="url(#arrowGreen)"/>

    <rect x="25" y="195" width="145" height="20" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
    <circle cx="35" cy="205" r="7" fill="#f59e0b"/>
    <text x="35" y="208" fill="#0f172a" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">7</text>
    <text x="94" y="209" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">1:1 T-MIXER VALVE</text>

    <text x="97" y="285" fill="#10b981" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">TO ENGINE INTAKE</text>
    <text x="97" y="300" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">Bypass Carburetor (105 Octane)</text>
  </g>

  <!-- LETHAL HAZARD CAUTION CALLOUT FOOTER -->
  <rect x="25" y="405" width="770" height="40" rx="5" fill="#1a0606" stroke="#ef4444" stroke-width="1.5"/>
  <circle cx="45" cy="425" r="10" fill="#ef4444"/>
  <text x="45" y="429" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">!</text>
  <text x="65" y="423" fill="#fca5a5" font-size="10.5" font-weight="bold" font-family="monospace">LETHAL CARBON MONOXIDE HAZARD (20% CO IN SYNGAS)</text>
  <text x="65" y="437" fill="#f87171" font-size="8.5" font-family="monospace">Producer gas is completely odorless and lethal in seconds. NEVER ignite, tune, or operate reactor indoors or in trenches.</text>
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
