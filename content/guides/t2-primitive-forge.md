---
id: t2-primitive-forge
tier: 3
tier_name: Tier 2 - Agrarian & Pre-Industrial
title: Clay Adobe Forge & Tuyere Blower
category: "Metallurgy & Foundry"
read_time: 5 min
difficulty: High
tags: blacksmithing, forge, iron, metallurgy, tools, charcoal, tuyere
summary: Construct an earthen blacksmithing hearth and air blast tuyere capable of heating salvaged carbon steel to 1100°C for forging knives, axes, and agricultural chisels.
---

## Pyrometallurgical Dynamics
Wrought iron and carbon steel become malleable (plastic deformation state) between **850°C (cherry red)** and **1150°C (bright yellow/straw)**. Atmospheric fires barely reach 600°C. To unlock metallurgical temperatures, a forced-air blast (the **Tuyere**) must inject a concentrated stream of oxygen directly into the lower incandescent bed of lump hardwood charcoal.

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="forgeGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="forgeClayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#451a03"/>
      <stop offset="50%" stop-color="#291205"/>
      <stop offset="100%" stop-color="#140802"/>
    </linearGradient>

    <linearGradient id="forgeHeatCore" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="30%" stop-color="#ea580c"/>
      <stop offset="65%" stop-color="#f59e0b"/>
      <stop offset="85%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <linearGradient id="forgeSteelHot" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#f59e0b"/>
      <stop offset="70%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>

    <!-- Marker -->
    <marker id="forgeArrowAir" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#forgeGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#f59e0b"/>
  <text x="60" y="30" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">CLAY ADOBE FORGE, TUYERE NOZZLE &amp; ANVIL HEARTH</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">FORCED O2 CHARCOAL INCANDESCENCE (1150°C) • 15° TUYERE INCLINATION • PLASTIC DEFORMATION FORGING</text>

  <!-- Ground Bed -->
  <line x1="25" y1="365" x2="795" y2="365" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- ================= ❶ ADOBE HEARTH CUTAWAY ================= -->
  <g id="hearthGroup">
    <!-- Adobe Hearth Masonry Body -->
    <path d="M 180 180 L 220 340 L 520 340 L 560 180 L 610 180 L 610 365 L 140 365 L 140 180 Z" fill="url(#forgeClayGrad)" stroke="#78350f" stroke-width="1.5"/>
    <text x="370" y="356" fill="#a16207" font-size="9" font-family="monospace" text-anchor="middle">Refractory Clay / Sand / Straw Adobe Bed</text>

    <!-- Firebowl Depression -->
    <path d="M 220 180 Q 370 295 520 180 Z" fill="#090d16" stroke="#451a03" stroke-width="2"/>

    <!-- Hardwood Charcoal Lump Bed (Walnut-sized chunks) -->
    <ellipse cx="370" cy="225" rx="120" ry="48" fill="#18181b" stroke="#27272a" stroke-width="1.5"/>
    <!-- Small individual charcoal nuggets -->
    <g fill="#27272a" stroke="#3f3f46" stroke-width="0.8">
      <rect x="270" y="200" width="16" height="12" rx="3"/>
      <rect x="300" y="210" width="18" height="14" rx="4"/>
      <rect x="420" y="205" width="20" height="12" rx="3"/>
      <rect x="450" y="215" width="16" height="14" rx="4"/>
      <rect x="330" y="190" width="18" height="14" rx="3"/>
      <rect x="390" y="195" width="20" height="12" rx="3"/>
    </g>

    <!-- Incandescent 1150°C Forging Fire Core -->
    <ellipse cx="370" cy="235" rx="75" ry="34" fill="url(#forgeHeatCore)"/>
    <ellipse cx="370" cy="235" rx="45" ry="20" fill="#ffffff" fill-opacity="0.9"/>
    <text x="370" y="240" fill="#000000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1150°C CORE</text>

    <!-- Steel Workpiece Heated in Fire -->
    <rect x="300" y="218" width="250" height="14" rx="2" fill="url(#forgeSteelHot)" stroke="#f59e0b" stroke-width="1"/>
    <text x="560" y="228" fill="#f8fafc" font-size="8.5" font-family="monospace">Workpiece Tongs</text>
  </g>

  <!-- ================= ❸ TUYERE INCLINED BLAST PIPE ================= -->
  <g id="tuyereGroup">
    <!-- Steel Tuyere Pipe 15° Incline -->
    <path d="M 50 250 L 305 250 L 305 264 L 50 264 Z" fill="#475569" stroke="#94a3b8" stroke-width="1.2" transform="rotate(12, 50, 250)"/>
    
    <!-- Air Blast Jet Stream Entering Charcoal Core -->
    <line x1="120" y1="265" x2="330" y2="245" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,3" marker-end="url(#forgeArrowAir)"/>
    <line x1="120" y1="272" x2="310" y2="252" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,3"/>

    <!-- Air Supply Blower / Bellows Housing -->
    <rect x="30" y="240" width="70" height="70" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="65" y="270" fill="#f8fafc" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">AIR</text>
    <text x="65" y="284" fill="#38bdf8" font-size="8.5" font-family="monospace" text-anchor="middle">BELLOWS</text>
    <text x="65" y="296" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Continuous O2</text>

    <!-- Caliper: Tuyere Height 5cm above floor -->
    <text x="180" y="240" fill="#38bdf8" font-size="8.5" font-family="monospace">15° Slope (5cm from floor)</text>
  </g>

  <!-- ================= ❻ IMPROVISED RAILROAD ANVIL ================= -->
  <g transform="translate(640, 150)">
    <!-- Heavy End-Grain Hardwood Log Stump -->
    <rect x="25" y="90" width="100" height="125" rx="6" fill="#292524" stroke="#78716c" stroke-width="1.5"/>
    <text x="75" y="155" fill="#a8a29e" font-size="8" font-family="monospace" text-anchor="middle">End-Grain</text>
    <text x="75" y="167" fill="#a8a29e" font-size="8" font-family="monospace" text-anchor="middle">Oak Stump</text>

    <!-- Railroad Track / Forged Steel Anvil Face -->
    <path d="M 15 50 L 135 50 L 135 60 L 95 68 L 95 82 L 125 90 L 25 90 L 55 82 L 55 68 L 15 60 Z" fill="#475569" stroke="#cbd5e1" stroke-width="1.5"/>
    <!-- Hardened Face Highlight -->
    <line x1="20" y1="50" x2="130" y2="50" stroke="#ffffff" stroke-width="2"/>
    <text x="75" y="42" fill="#f8fafc" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">HARDENED FACE</text>
    <text x="75" y="74" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Railroad Anvil</text>
  </g>

  <!-- ================= TACTICAL NUMBERED BADGES ================= -->
  <!-- ❶ Adobe Hearth -->
  <g transform="translate(25, 75)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b45309"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <text x="32" y="16" fill="#fde68a" font-size="9" font-weight="bold" font-family="sans-serif">Adobe Hearth</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">1 Clay : 2 Sand : 0.5 Straw</text>
    <text x="32" y="39" fill="#f59e0b" font-size="7.5" font-family="monospace">Thermal crack resistant</text>
  </g>

  <!-- ❷ Hardwood Charcoal -->
  <g transform="translate(180, 75)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#71717a" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#3f3f46"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <text x="32" y="16" fill="#e4e4e7" font-size="9" font-weight="bold" font-family="sans-serif">Lump Charcoal</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">2–3cm walnut chunks</text>
    <text x="32" y="39" fill="#cbd5e1" font-size="7.5" font-family="monospace">Zero sulfur / smokeless</text>
  </g>

  <!-- ❸ Tuyere Pipe -->
  <g transform="translate(335, 75)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#0284c7"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <text x="32" y="16" fill="#7dd3fc" font-size="9" font-weight="bold" font-family="sans-serif">Tuyere Pipe</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">3cm ungalvanized steel</text>
    <text x="32" y="39" fill="#38bdf8" font-size="7.5" font-family="monospace">No zinc (toxic metal fume)</text>
  </g>

  <!-- ❹ Anvil Mounting -->
  <g transform="translate(490, 75)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#047857"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❹</text>
    <text x="32" y="16" fill="#a7f3d0" font-size="9" font-weight="bold" font-family="sans-serif">Anvil Rebound</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Buried hardwood stump</text>
    <text x="32" y="39" fill="#10b981" font-size="7.5" font-family="monospace">Absorbs 100% kinetic blow</text>
  </g>

  <!-- ================= BOTTOM OPTICAL PYROMETER COLOR SCALE ================= -->
  <g transform="translate(25, 385)">
    <rect width="770" height="60" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
    <text x="20" y="18" fill="#f59e0b" font-size="9.5" font-weight="bold" font-family="monospace">VISUAL OPTICAL PYROMETER COLOR SCALE:</text>
    
    <!-- 4 Color Swatches -->
    <rect x="20" y="28" width="170" height="24" rx="3" fill="#450a0a" stroke="#b91c1c" stroke-width="1"/>
    <text x="30" y="44" fill="#fca5a5" font-size="8" font-weight="bold" font-family="monospace">750°C: Cherry Red (Anneal)</text>

    <rect x="200" y="28" width="180" height="24" rx="3" fill="#7c2d12" stroke="#ea580c" stroke-width="1"/>
    <text x="210" y="44" fill="#fdba74" font-size="8" font-weight="bold" font-family="monospace">900°C: Red-Orange (Shape)</text>

    <rect x="390" y="28" width="180" height="24" rx="3" fill="#713f12" stroke="#eab308" stroke-width="1"/>
    <text x="400" y="44" fill="#fef08a" font-size="8" font-weight="bold" font-family="monospace">1100°C: Lemon Yellow (Forge)</text>

    <rect x="580" y="28" width="200" height="24" rx="3" fill="#18181b" stroke="#ffffff" stroke-width="1"/>
    <text x="590" y="44" fill="#f87171" font-size="8" font-weight="bold" font-family="monospace">1250°C: White Sparks (BURNING!)</text>
  </g>
</svg>
```

## Construction & Forge Operation
1. **Fireclay Mortar Mix:** Combine 1 part clay, 2 parts clean sand, and 0.5 parts finely chopped dry straw or animal hair. This refractory adobe resists cracking at forging temperatures.
2. **Tuyere Tube Placement:** Lay a 3 cm (1.25 in) galvanized-free steel pipe sloping down at a 15-degree angle, ending 5 cm above the bottom of the firebowl.
3. **Hardwood Charcoal Only:** Never use green wood or uncarbonized timber, which produces excessive smoke and sulfur. Crush hardwood lump charcoal into walnut-sized pieces (2–3 cm) to maximize surface area.
4. **Air Supply:** Connect a continuous-action double-chamber box bellows, leather bag bellows, or hand-cranked squirrel-cage fan to the tuyere.
5. **Color Temperature Reading:**
   - *Dull Cherry Red (750°C):* Annealing / Stress Relieving.
   - *Bright Red-Orange (900°C):* Primary Hammer Shaping.
   - *Bright Lemon Yellow (1100°C):* Heavy Drawing and Bending.
   - *White Sparks (1250°C):* BURNING / Melting. Remove immediately!
6. **Quenching & Tempering:** Heat finished carbon blades to non-magnetic cherry red, quench in warmed animal fat or vegetable oil, and temper at 220°C (light bronze color) to relieve brittle internal stresses.

