---
id: t2-quicklime-mortar-masonry
tier: 3
tier_name: Tier 2 - Agrarian & Pre-Industrial
title: Quicklime & Slaked Lime Mortar
category: "Masonry & Materials"
read_time: 6 min
difficulty: High
tags: masonry, lime, mortar, cement, chemistry, quicklime, limestone, shelter
summary: Calcining limestone or marine shells at 900°C to generate calcium oxide (quicklime), slaking into calcium hydroxide putty, and formulating eternal structural masonry mortar.
---

## The Chemical Lime Cycle
Before modern fossil-fuel-intensive Portland cement (invented in 1824), human civilization built the Roman Colosseum, Aqueducts, and European Cathedrals using the **Calcium Carbonate Cycle**. Calcium carbonate ($CaCO_3$) is calcined to drive off carbon dioxide, yielding highly reactive Quicklime ($CaO$). When hydrated ("slaked"), it becomes Calcium Hydroxide ($Ca(OH)_2$), which slowly absorbs atmospheric $CO_2$ over decades, converting back into solid limestone stone:

$$\begin{aligned}
\text{Calcination (900°C):} \quad & CaCO_3 \longrightarrow CaO + CO_2 \uparrow \\
\text{Slaking (Exothermic):} \quad & CaO + H_2O \longrightarrow Ca(OH)_2 + \text{Heat (150°C)} \\
\text{Carbonation (Curing):} \quad & Ca(OH)_2 + CO_2 \longrightarrow CaCO_3 + H_2O
\end{aligned}$$

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="limeGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="limeKilnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="60%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>

    <linearGradient id="limeFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="45%" stop-color="#f97316"/>
      <stop offset="80%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <linearGradient id="limeSlakeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <!-- Marker Arrow -->
    <marker id="limeArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#limeGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#f59e0b"/>
  <text x="60" y="30" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">ANCIENT LIME CYCLE &amp; HYDRAULIC STRUCTURAL MORTAR</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">CALCINATION (900°C) ➔ EXOTHERMIC SLAKING (150°C) ➔ POZZOLANIC RE-CARBONATION MATRIX</text>

  <!-- Flow Connector Arrows between Panels -->
  <line x1="265" y1="210" x2="285" y2="210" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#limeArrow)"/>
  <line x1="535" y1="210" x2="555" y2="210" stroke="#10b981" stroke-width="2.5" marker-end="url(#limeArrow)"/>

  <!-- ================= PANEL 1: THE FLARE KILN (900°C) ================= -->
  <g transform="translate(25, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#f59e0b" stroke-width="1.5"/>
    
    <!-- Step Badge ❶ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#b45309"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <text x="44" y="26" fill="#fde68a" font-size="10" font-weight="bold" font-family="sans-serif">Calcination Kiln</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">900°C Continuous Firing</text>

    <!-- Kiln Cutaway Body -->
    <rect x="25" y="55" width="190" height="195" rx="6" fill="url(#limeKilnGrad)" stroke="#475569" stroke-width="1.5"/>

    <!-- Upper Limestone Cobble Charge -->
    <g transform="translate(35, 65)">
      <circle cx="25" cy="30" r="13" fill="#cbd5e1" stroke="#94a3b8"/>
      <circle cx="55" cy="22" r="15" fill="#e2e8f0" stroke="#94a3b8"/>
      <circle cx="85" cy="30" r="14" fill="#cbd5e1" stroke="#94a3b8"/>
      <circle cx="115" cy="22" r="15" fill="#e2e8f0" stroke="#94a3b8"/>
      <circle cx="145" cy="30" r="13" fill="#cbd5e1" stroke="#94a3b8"/>

      <circle cx="40" cy="52" r="14" fill="#94a3b8" stroke="#64748b"/>
      <circle cx="70" cy="48" r="15" fill="#cbd5e1" stroke="#64748b"/>
      <circle cx="100" cy="48" r="15" fill="#cbd5e1" stroke="#64748b"/>
      <circle cx="130" cy="52" r="14" fill="#94a3b8" stroke="#64748b"/>

      <text x="85" y="5" fill="#f8fafc" font-size="8.5" font-family="monospace" text-anchor="middle">Limestone / Shells (CaCO3)</text>
    </g>

    <!-- Self-Supporting Interlocking Flare Arch -->
    <path d="M 45 195 Q 120 120 195 195" fill="none" stroke="#f59e0b" stroke-width="5"/>
    <text x="120" y="160" fill="#fde68a" font-size="8.5" font-family="monospace" text-anchor="middle">Self-Supporting Arch</text>

    <!-- Firebox Inferno Base -->
    <path d="M 55 240 Q 120 165 185 240 Z" fill="url(#limeFlameGrad)"/>
    <text x="120" y="215" fill="#450a0a" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">Hardwood Firebox</text>
    <text x="120" y="232" fill="#7f1d1d" font-size="8" font-family="monospace" text-anchor="middle">24-48h Stoke (900°C)</text>

    <!-- Reaction Equation Card -->
    <rect x="12" y="260" width="216" height="44" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="276" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace">CaCO3 ➔ CaO + CO2 ↑</text>
    <text x="20" y="292" fill="#94a3b8" font-size="8" font-family="monospace">Loses 44% mass ➔ porous Quicklime</text>
  </g>

  <!-- ================= PANEL 2: THE EXOTHERMIC SLAKING TROUGH ================= -->
  <g transform="translate(290, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#38bdf8" stroke-width="1.5"/>
    
    <!-- Step Badge ❷ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#0284c7"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <text x="44" y="26" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="sans-serif">Exothermic Slaking Pit</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">Hydration to Calcium Hydroxide</text>

    <!-- Heavy Timber Slaking Box -->
    <rect x="25" y="100" width="190" height="130" rx="4" fill="#292524" stroke="#a8a29e" stroke-width="2"/>
    
    <!-- Boiling White Lime Putty Fluid -->
    <rect x="32" y="135" width="176" height="90" rx="3" fill="url(#limeSlakeGrad)" stroke="#cbd5e1" stroke-width="1"/>
    <text x="120" y="165" fill="#0f172a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">BOILING LIME PUTTY</text>
    <text x="120" y="180" fill="#334155" font-size="9" font-family="monospace" text-anchor="middle">Ca(OH)2 Slurry @ 150°C</text>
    <text x="120" y="200" fill="#b91c1c" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">Violent Exothermic Boil</text>

    <!-- Steam Plumes Rising -->
    <path d="M 60 130 Q 75 100 65 75" fill="none" stroke="#e2e8f0" stroke-width="2.5" stroke-dasharray="4,2"/>
    <path d="M 120 130 Q 135 95 125 70" fill="none" stroke="#e2e8f0" stroke-width="3" stroke-dasharray="4,2"/>
    <path d="M 180 130 Q 195 100 185 75" fill="none" stroke="#e2e8f0" stroke-width="2.5" stroke-dasharray="4,2"/>
    <text x="120" y="65" fill="#f8fafc" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">150°C STEAM VENTS</text>

    <!-- Water to Quicklime Ratio Caliper -->
    <rect x="25" y="238" width="190" height="26" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="120" y="255" fill="#38bdf8" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">WATER : QUICKLIME = 3 : 1</text>

    <!-- Reaction Equation Card -->
    <rect x="12" y="272" width="216" height="32" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="286" fill="#7dd3fc" font-size="8.5" font-weight="bold" font-family="monospace">CaO + H2O ➔ Ca(OH)2 + Heat</text>
    <text x="20" y="298" fill="#fca5a5" font-size="7.5" font-family="monospace">Hydrated putty ages indefinitely under water</text>
  </g>

  <!-- ================= PANEL 3: MORTAR FORMULATION & WALL ================= -->
  <g transform="translate(555, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#10b981" stroke-width="1.5"/>
    
    <!-- Step Badge ❸ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#047857"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <text x="44" y="26" fill="#a7f3d0" font-size="10" font-weight="bold" font-family="sans-serif">Hydraulic Roman Mortar</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">Ashlar Stone Masonry Bond</text>

    <!-- Ashlar Stone Wall Graphic with Bed Joints -->
    <g transform="translate(25, 55)">
      <!-- Course 1 -->
      <rect x="0" y="0" width="85" height="26" rx="2" fill="#475569" stroke="#334155"/>
      <rect x="90" y="0" width="100" height="26" rx="2" fill="#475569" stroke="#334155"/>
      <!-- Course 2 -->
      <rect x="0" y="30" width="55" height="26" rx="2" fill="#475569" stroke="#334155"/>
      <rect x="60" y="30" width="80" height="26" rx="2" fill="#475569" stroke="#334155"/>
      <rect x="145" y="30" width="45" height="26" rx="2" fill="#475569" stroke="#334155"/>
      <!-- Course 3 -->
      <rect x="0" y="60" width="110" height="26" rx="2" fill="#475569" stroke="#334155"/>
      <rect x="115" y="60" width="75" height="26" rx="2" fill="#475569" stroke="#334155"/>

      <!-- Glowing Mortar Bed Joints -->
      <line x1="0" y1="28" x2="190" y2="28" stroke="#fde047" stroke-width="2.5"/>
      <line x1="0" y1="58" x2="190" y2="58" stroke="#fde047" stroke-width="2.5"/>
      <line x1="87" y1="0" x2="87" y2="26" stroke="#fde047" stroke-width="2.5"/>
      <line x1="57" y1="30" x2="57" y2="56" stroke="#fde047" stroke-width="2.5"/>
      <line x1="142" y1="30" x2="142" y2="56" stroke="#fde047" stroke-width="2.5"/>
      <line x1="112" y1="60" x2="112" y2="86" stroke="#fde047" stroke-width="2.5"/>
    </g>

    <!-- Formula Box -->
    <rect x="15" y="150" width="210" height="110" rx="5" fill="#090d16" stroke="#10b981" stroke-width="1.2"/>
    <text x="25" y="170" fill="#a7f3d0" font-size="9.5" font-weight="bold" font-family="monospace">ETERNAL MORTAR RATIO:</text>
    <text x="25" y="188" fill="#f8fafc" font-size="9" font-family="monospace">• 1 Vol: Mature Lime Putty</text>
    <text x="25" y="204" fill="#f8fafc" font-size="9" font-family="monospace">• 3 Vol: Washed Sharp Sand</text>
    <text x="25" y="220" fill="#f59e0b" font-size="9" font-family="monospace">• 0.2 Vol: Pozzolan Additive</text>
    <text x="25" y="235" fill="#6ee7b7" font-size="7.5" font-family="monospace">(Pumice / Brick dust: sets submerged!)</text>

    <!-- Reaction Equation Card -->
    <rect x="12" y="270" width="216" height="34" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="284" fill="#6ee7b7" font-size="8.5" font-weight="bold" font-family="monospace">Ca(OH)2 + CO2 ➔ CaCO3</text>
    <text x="20" y="296" fill="#94a3b8" font-size="7.5" font-family="monospace">Self-healing: crystallizes back into stone</text>
  </g>

  <!-- ================= BOTTOM SAFETY & TOXICITY WARNING ================= -->
  <g transform="translate(25, 388)">
    <rect width="770" height="58" rx="6" fill="#1b0707" stroke="#dc2626" stroke-width="1.5"/>
    <circle cx="45" cy="29" r="14" fill="#7f1d1d"/>
    <text x="45" y="34" fill="#ffffff" font-size="14" font-weight="bold" font-family="monospace" text-anchor="middle">⚠</text>
    
    <text x="70" y="25" fill="#f87171" font-size="10" font-weight="bold" font-family="monospace">EXTREME CAUSTIC &amp; THERMAL BLINDNESS HAZARD:</text>
    <text x="70" y="42" fill="#cbd5e1" font-size="8.5" font-family="monospace">Slaking generates instantaneous 150°C caustic spatter. Alkaline burns saponify corneal tissue within seconds.</text>
    <text x="70" y="52" fill="#fca5a5" font-size="8" font-family="monospace">Mandatory full-face shield or eyewear, leather gauntlets, and vinegar neutralizing wash nearby.</text>
  </g>
</svg>
```

## Construction & Production Specs
1. **Raw Material Discovery:** Identify limestone ($CaCO_3$) by scratching with a knife (limestone is soft, hardness 3) and applying vinegar (fizzes slightly). Alternatively, collect ocean mollusk or oyster shells.
2. **Kiln Loading (The Flare Arch):** Construct an earthenware conical furnace. Interlock large limestone blocks at the base into a self-supporting dome arch. Fill the upper shaft with fist-sized limestone chunks.
3. **The 24-Hour Firing:** Stoke a continuous hardwood fire underneath the arch until temperatures exceed **900°C** for 24 hours. The limestone will change from grey to glowing white, losing 44% of its mass as $CO_2$ vents away.
4. **Slaking (Hydration):** Once cooled, the stones are now **Quicklime ($CaO$)**. In a wooden slaking trough, add 3 liters of water per 1 kg of quicklime. **Warning:** The reaction boils violently within 60 seconds, reaching 150°C. Stir with long wooden paddles until it settles into a smooth, buttery white paste (Lime Putty).
5. **Mortar Formulation:** Mix **1 volume part lime putty with 3 volume parts clean, washed sharp river sand** (never smooth beach sand or salty sea sand).
6. **Pozzolanic Hydraulic Additive:** To allow lime mortar to set underwater or in damp underground foundations, add **15% crushed wood ash, crushed burnt red brick powder, or volcanic pumice** (pozzolan). This creates a hydraulic crystalline bond that hardens without air.
