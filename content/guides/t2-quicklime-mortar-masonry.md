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
<svg viewBox="0 0 700 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="kilnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#374151"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="limeFire" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="700" height="360" fill="#090d16" rx="8"/>

  <!-- Left: The Flare Kiln Cross Section -->
  <g transform="translate(30, 30)">
    <rect x="0" y="0" width="220" height="270" rx="8" fill="url(#kilnGrad)" stroke="#4b5563" stroke-width="2"/>
    <text x="110" y="24" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1. LIMESTONE KILN (900°C)</text>

    <!-- Kiln Arch -->
    <path d="M40 230 Q110 140 180 230" stroke="#f59e0b" stroke-width="4" fill="none"/>
    <text x="110" y="195" fill="#fde68a" font-size="9" font-family="monospace" text-anchor="middle">Self-Supporting Arch</text>

    <!-- Limestone Cobbles Layer -->
    <circle cx="70" cy="110" r="14" fill="#cbd5e1" stroke="#94a3b8"/>
    <circle cx="105" cy="100" r="15" fill="#cbd5e1" stroke="#94a3b8"/>
    <circle cx="140" cy="110" r="14" fill="#cbd5e1" stroke="#94a3b8"/>
    <circle cx="90" cy="75" r="13" fill="#cbd5e1" stroke="#94a3b8"/>
    <circle cx="125" cy="75" r="13" fill="#cbd5e1" stroke="#94a3b8"/>
    <text x="110" y="55" fill="#e2e8f0" font-size="9" font-family="monospace" text-anchor="middle">Limestone / Oyster Shells</text>

    <!-- Intense Firebox Base -->
    <path d="M60 230 Q110 170 160 230 Z" fill="url(#limeFire)"/>
    <text x="110" y="225" fill="#000000" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">Hardwood Firebox</text>
    <text x="110" y="255" fill="#fca5a5" font-size="9" font-family="monospace" text-anchor="middle">Burn 24-48 Hours</text>
  </g>

  <!-- Middle: Slaking Pit -->
  <g transform="translate(270, 30)">
    <rect x="0" y="0" width="200" height="270" rx="8" fill="#18181b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="100" y="24" fill="#f59e0b" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2. THE SLAKING PIT</text>
    
    <!-- Wooden Box -->
    <rect x="25" y="70" width="150" height="120" rx="4" fill="#292524" stroke="#a8a29e" stroke-width="2"/>
    <rect x="30" y="110" width="140" height="75" fill="#f8fafc" opacity="0.9"/>
    <text x="100" y="145" fill="#0f172a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">Boiling Lime Putty</text>
    <text x="100" y="160" fill="#475569" font-size="8" font-family="monospace" text-anchor="middle">Ca(OH)2 @ 150°C</text>

    <!-- Steam plumes -->
    <path d="M70 100 Q80 80 75 60 M100 100 Q110 80 105 60 M130 100 Q140 80 135 60" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="3,2"/>
    <text x="100" y="55" fill="#cbd5e1" font-size="8" font-family="monospace" text-anchor="middle">Volcano Reaction</text>

    <!-- Ratio Alert Box -->
    <rect x="15" y="205" width="170" height="48" rx="4" fill="#090d16"/>
    <text x="100" y="223" fill="#fbbf24" font-size="9" font-family="monospace" text-anchor="middle">Water : Quicklime</text>
    <text x="100" y="238" fill="#38bdf8" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">3 : 1 Weight Ratio</text>
  </g>

  <!-- Right: Mortar Mixing & Masonry -->
  <g transform="translate(490, 30)">
    <rect x="0" y="0" width="180" height="270" rx="8" fill="#18181b" stroke="#10b981" stroke-width="2"/>
    <text x="90" y="24" fill="#10b981" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3. MORTAR FORMULA</text>

    <!-- Stone Masonry Wall Graphic -->
    <rect x="30" y="60" width="55" height="25" fill="#64748b" stroke="#334155"/>
    <rect x="90" y="60" width="60" height="25" fill="#64748b" stroke="#334155"/>
    <rect x="20" y="90" width="70" height="25" fill="#64748b" stroke="#334155"/>
    <rect x="95" y="90" width="65" height="25" fill="#64748b" stroke="#334155"/>
    <!-- Mortar lines -->
    <line x1="15" y1="87" x2="165" y2="87" stroke="#fef08a" stroke-width="3"/>
    <line x1="15" y1="117" x2="165" y2="117" stroke="#fef08a" stroke-width="3"/>

    <!-- Mix formula -->
    <rect x="15" y="135" width="150" height="115" rx="4" fill="#090d16" stroke="#10b981" stroke-width="1"/>
    <text x="90" y="155" fill="#86efac" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">ETERNAL MORTAR:</text>
    <text x="25" y="175" fill="#f8fafc" font-size="9" font-family="monospace">• 1 Part Lime Putty</text>
    <text x="25" y="192" fill="#f8fafc" font-size="9" font-family="monospace">• 3 Parts Sharp Sand</text>
    <text x="25" y="209" fill="#f8fafc" font-size="9" font-family="monospace">• 0.2 Parts Wood Ash</text>
    <text x="25" y="226" fill="#a7f3d0" font-size="8" font-family="monospace">(Ash adds pozzolan set!)</text>
  </g>

  <rect x="30" y="315" width="640" height="30" rx="4" fill="#2d0606" stroke="#ef4444" stroke-width="1.5"/>
  <text x="350" y="334" fill="#fca5a5" font-size="9.5" font-family="monospace" text-anchor="middle">EYE HAZARD: Slaking quicklime boils violently (150°C). Splashes cause permanent blindness. Protect eyes!</text>
</svg>
```

## Construction & Production Specs
1. **Raw Material Discovery:** Identify limestone ($CaCO_3$) by scratching with a knife (limestone is soft, hardness 3) and applying vinegar (fizzes slightly). Alternatively, collect ocean mollusk or oyster shells.
2. **Kiln Loading (The Flare Arch):** Construct an earthenware conical furnace. Interlock large limestone blocks at the base into a self-supporting dome arch. Fill the upper shaft with fist-sized limestone chunks.
3. **The 24-Hour Firing:** Stoke a continuous hardwood fire underneath the arch until temperatures exceed **900°C** for 24 hours. The limestone will change from grey to glowing white, losing 44% of its mass as $CO_2$ vents away.
4. **Slaking (Hydration):** Once cooled, the stones are now **Quicklime ($CaO$)**. In a wooden slaking trough, add 3 liters of water per 1 kg of quicklime. **Warning:** The reaction boils violently within 60 seconds, reaching 150°C. Stir with long wooden paddles until it settles into a smooth, buttery white paste (Lime Putty).
5. **Mortar Formulation:** Mix **1 volume part lime putty with 3 volume parts clean, washed sharp river sand** (never smooth beach sand or salty sea sand).
6. **Pozzolanic Hydraulic Additive:** To allow lime mortar to set underwater or in damp underground foundations, add **15% crushed wood ash, crushed burnt red brick powder, or volcanic pumice** (pozzolan). This creates a hydraulic crystalline bond that hardens without air.
