---
id: t1-dakota-fire-hole
tier: 1
tier_name: Tier 1 - Immediate Survival
title: Dakota Fire Hole & Friction Fire
category: "Thermal & Firecraft"
read_time: 4 min
difficulty: Medium
tags: fire, combustion, stealth, convection, windproof, thermal efficiency
summary: Excavate a two-chamber subterranean convective hearth that burns hot, produces virtually zero visible smoke, shields against high winds, and supports cooking pots directly over ground level.
---

## Aerodynamic Principle
The Dakota Fire Hole utilizes **thermal draft convection**. Burning wood in the primary chamber heats air, creating an aggressive low-pressure updraft. As rising hot air exhausts through the vertical combustion chimney, it forces fresh cold oxygen-rich air to rush down the angled feeder tunnel, creating an automated bellows effect that sustains temperatures exceeding **700°C** with minimal fuel.

```svg
<svg viewBox="0 0 820 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Coordinate Grid -->
    <pattern id="dakotaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.4"/>
    </pattern>

    <!-- Subterranean Earth Hatching -->
    <pattern id="soilHatch" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="16" stroke="#334155" stroke-width="1.2" stroke-opacity="0.4"/>
    </pattern>

    <!-- Intense Fire Plasma Gradient -->
    <linearGradient id="dakotaFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="35%" stop-color="#ea580c"/>
      <stop offset="70%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>

    <!-- Glowing Embers Gradient -->
    <radialGradient id="emberGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#ea580c"/>
      <stop offset="85%" stop-color="#991b1b"/>
      <stop offset="100%" stop-color="#450a0a"/>
    </radialGradient>

    <!-- Heat Convection Cone -->
    <linearGradient id="heatUpdraftGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.5"/>
      <stop offset="70%" stop-color="#fbbf24" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Deep Obsidian Canvas & Grid -->
  <rect x="0" y="0" width="820" height="450" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="450" fill="url(#dakotaGrid)"/>
  <rect x="10" y="10" width="800" height="430" rx="10" fill="none" stroke="#1e293b" stroke-width="1.5"/>

  <!-- ================= SUBTERRANEAN EARTH PROFILE ================= -->
  <!-- Cutaway ground mass with excavated chambers -->
  <path d="M 12 170 
           L 180 170 
           L 180 340 
           L 350 340 
           L 350 290 
           L 460 290 
           L 570 170 
           L 808 170 
           L 808 438 
           L 12 438 Z" fill="#0f172a"/>
  <path d="M 12 170 
           L 180 170 
           L 180 340 
           L 350 340 
           L 350 290 
           L 460 290 
           L 570 170 
           L 808 170 
           L 808 438 
           L 12 438 Z" fill="url(#soilHatch)"/>

  <!-- Earth Surface Ground Lines -->
  <line x1="12" y1="170" x2="180" y2="170" stroke="#64748b" stroke-width="3"/>
  <line x1="350" y1="170" x2="490" y2="170" stroke="#64748b" stroke-width="3"/>
  <line x1="570" y1="170" x2="808" y2="170" stroke="#64748b" stroke-width="3"/>

  <!-- Center Earth Bridge between Pits -->
  <polygon points="350,170 490,170 430,260 350,260" fill="#0f172a"/>
  <polygon points="350,170 490,170 430,260 350,260" fill="url(#soilHatch)"/>
  <line x1="350" y1="170" x2="350" y2="260" stroke="#334155" stroke-width="1.5"/>
  <line x1="490" y1="170" x2="430" y2="260" stroke="#334155" stroke-width="1.5"/>

  <!-- Air Tunnel Roof Arch connecting Chunnel to Pit -->
  <path d="M 350 260 Q 380 250 430 260 L 460 290 L 350 290 Z" fill="#090d16" stroke="#475569" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- ================= 1. PRIMARY COMBUSTION PIT ================= -->
  <!-- Pit Chamber Walls -->
  <rect x="180" y="170" width="170" height="170" fill="#080c14" stroke="#475569" stroke-width="2"/>

  <!-- Thermal Convection Updraft Plume -->
  <polygon points="190,320 230,80 300,80 340,320" fill="url(#heatUpdraftGrad)"/>

  <!-- Deep Glowing Ember Bed (Superheated Charcoal Layer) -->
  <rect x="185" y="315" width="160" height="22" rx="4" fill="url(#emberGlow)"/>
  <circle cx="210" cy="326" r="4" fill="#fef08a"/>
  <circle cx="240" cy="328" r="5" fill="#fef08a"/>
  <circle cx="280" cy="325" r="4.5" fill="#fef08a"/>
  <circle cx="320" cy="327" r="4" fill="#fef08a"/>

  <!-- Dynamic Wood Fire Flames -->
  <path d="M 205 315 Q 225 240 255 180 Q 285 240 325 315 Z" fill="url(#dakotaFlameGrad)"/>
  <path d="M 230 315 Q 255 230 260 195 Q 275 245 295 315 Z" fill="#fef08a" opacity="0.9"/>
  <path d="M 245 315 Q 260 260 265 220 Q 275 270 280 315 Z" fill="#ffffff" opacity="0.8"/>

  <!-- Combustion Pit Callout Badge -->
  <rect x="25" y="325" width="220" height="26" rx="6" fill="#1c1917" stroke="#ea580c" stroke-width="1.2"/>
  <circle cx="40" cy="338" r="7" fill="#ea580c"/>
  <text x="40" y="342" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
  <text x="130" y="342" fill="#fed7aa" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">COMBUSTION PIT (30×30cm)</text>

  <!-- ================= 2. ANGLED OXYGEN FEEDER SHAFT ================= -->
  <!-- Feeder Pit Cavity -->
  <polygon points="490,170 570,170 460,290 410,290" fill="#080c14" stroke="#475569" stroke-width="1.5"/>

  <!-- Cold Oxygen Airflow Flowlines (Accelerating down 45-degree ramp) -->
  <g stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" fill="none">
    <path d="M 660 130 Q 560 130 520 180 L 440 275 Q 400 295 350 305" stroke-dasharray="6,4"/>
    <path d="M 680 145 Q 580 145 540 195 L 460 285 Q 420 305 350 315" stroke-dasharray="6,4"/>
  </g>

  <!-- Flow Vector Arrows -->
  <polygon points="352,305 362,300 362,310" fill="#38bdf8"/>
  <polygon points="352,315 362,310 362,320" fill="#38bdf8"/>

  <!-- Feeder Tunnel Callout Badge -->
  <rect x="490" y="240" width="240" height="26" rx="6" fill="#0c1929" stroke="#38bdf8" stroke-width="1.2"/>
  <circle cx="505" cy="253" r="7" fill="#0284c7"/>
  <text x="505" y="257" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
  <text x="625" y="257" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">45° OXYGEN INFLOW SHAFT</text>

  <!-- Tunnel Diameter Callout -->
  <line x1="430" y1="260" x2="460" y2="290" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="400" y="325" fill="#38bdf8" font-size="10" font-family="monospace">15-20cm Chunnel</text>

  <!-- ================= 3. WINDWARD INTAKE ================= -->
  <g transform="translate(620, 95)">
    <rect x="-10" y="0" width="180" height="38" rx="6" fill="#0c1929" stroke="#38bdf8" stroke-width="1.2"/>
    <circle cx="5" cy="19" r="7" fill="#38bdf8"/>
    <text x="5" y="23" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
    <text x="95" y="16" fill="#e0f2fe" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">WINDWARD INTAKE</text>
    <text x="95" y="30" fill="#7dd3fc" font-size="9" font-family="monospace" text-anchor="middle">(Faces into breeze)</text>
  </g>

  <!-- ================= 4. CONVECTIVE SMOKELESS EXHAUST ================= -->
  <!-- Exhaust Plume Callout Badge -->
  <rect x="150" y="35" width="230" height="38" rx="6" fill="#1c1917" stroke="#f59e0b" stroke-width="1.2"/>
  <circle cx="165" cy="54" r="7" fill="#f59e0b"/>
  <text x="165" y="58" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">4</text>
  <text x="265" y="50" fill="#fef3c7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">SMOKELESS HEAT DRAFT</text>
  <text x="265" y="65" fill="#fde68a" font-size="9" font-family="monospace" text-anchor="middle">700°C Secondary Burn Vortex</text>

  <!-- ================= 5. COOKING APPARATUS OVER HEARTH ================= -->
  <!-- Support Skewers across Pit Mouth -->
  <line x1="165" y1="166" x2="365" y2="166" stroke="#a16207" stroke-width="6" stroke-linecap="round"/>
  <line x1="165" y1="163" x2="365" y2="163" stroke="#ca8a04" stroke-width="2"/>

  <!-- Metal Billycan / Pot -->
  <rect x="230" y="105" width="70" height="58" rx="4" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
  <!-- Pot Handle and Rim -->
  <rect x="225" y="102" width="80" height="6" rx="2" fill="#475569"/>
  <path d="M 235 102 Q 265 75 295 102" fill="none" stroke="#94a3b8" stroke-width="2"/>

  <!-- Cookware Callout Badge -->
  <rect x="25" y="115" width="185" height="24" rx="6" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
  <circle cx="38" cy="127" r="6" fill="#64748b"/>
  <text x="38" y="131" fill="#fff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">5</text>
  <text x="115" y="131" fill="#f1f5f9" font-size="10" font-family="monospace" text-anchor="middle">COOKPOT SITS LEVEL</text>
  <line x1="210" y1="127" x2="228" y2="127" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>

  <!-- ================= 6. DIMENSION CALIPERS & GROUND STEALTH ================= -->
  <!-- Pit Depth Caliper (30cm) -->
  <line x1="160" y1="170" x2="160" y2="340" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="154" y1="170" x2="166" y2="170" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="154" y1="340" x2="166" y2="340" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="150" y="260" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="end">30 cm</text>

  <!-- Chamber Separation Caliper (30cm Earth Bridge) -->
  <line x1="350" y1="190" x2="490" y2="190" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="350" y1="184" x2="350" y2="196" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="490" y1="184" x2="490" y2="196" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="420" y="210" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="middle">30 cm Wall</text>

  <!-- Stealth Horizon Callout -->
  <rect x="520" y="380" width="270" height="26" rx="6" fill="#0b1120" stroke="#334155" stroke-width="1"/>
  <circle cx="535" cy="393" r="6" fill="#475569"/>
  <text x="535" y="397" fill="#fff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">6</text>
  <text x="660" y="397" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">SUB-SURFACE STEALTH (ZERO VISIBLE GLOW)</text>
</svg>
```

## Construction Rules
1. **Chamber Excavation:** Dig a primary vertical combustion pit 30 cm (1 foot) wide and 30 cm deep. Ensure walls are plumb to support cooking vessels across the opening.
2. **Feeder Shaft Alignment:** Measure 30 cm upwind from the primary pit edge. Dig an angled airway at approximately 45 degrees downward until it punctures cleanly through into the bottom of the fire chamber.
3. **Draft Testing:** Drop dry grass or a smoldering leaf into the air shaft. Strong draft suction into the combustion chamber verifies clean convective airflow before lighting.
4. **Fuel Loading:** Build a small tinder bundle at the base of the fire pit directly opposite the incoming air tunnel orifice. Feed finger-thick hardwood sticks vertically down into the coals.
5. **Cooking Grid:** Lay greenwood sticks or metal rods horizontally across the top hole. Cookpots sit flush over the opening, capturing maximum convective heat without smothering the fire.
6. **Instant Extinction:** Shovel the excavated dirt mound back into both holes to instantly extinguish coals, eliminate thermal signature, and leave zero trace.
