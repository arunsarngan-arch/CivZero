---
id: "t2-sand-casting-bronze-iron"
title: "Greensand & Lost-Wax Metal Foundry: Casting Tools, Gears & Anvils"
tier: 3
category: "Metallurgy & Foundry"
read_time: "17 min"
difficulty: "High"
summary: "Comprehensive foundry guide for casting complex replacement machine parts, structural bronze bushings, pump impellers, and iron tools using two-part greensand molds, lost-wax investment methods, and refractory crucibles."
tags: "metallurgy, foundry, greensand, casting, bronze, iron, crucible, molding"
---

Forging with hammer and anvil is ideal for flat blades and simple chisels, but it cannot manufacture complex geometric components—such as grooved pulleys, water turbine nozzles, pipe manifolds, gears, engine blocks, or flanged bearings.

Casting liquid metal into refractory molds allows exact replication of intricate three-dimensional shapes. Below are two proven foundry methodologies: **Greensand Molding** (for reusable, rapid production of tools and structural components) and **Lost-Wax Investment Casting** (for ultra-high-precision gears and impellers).

---

### Foundry Metallurgy: Temperature & Alloy Thresholds

| Metal / Alloy | Melting Point | Pouring Range | Primary Uses |
| :--- | :--- | :--- | :--- |
| **Aluminum** | $660^\circ\text{C}$ ($1,220^\circ\text{F}$) | $720^\circ\text{C} - 750^\circ\text{C}$ | Lightweight housings, brackets, pulleys |
| **Silicon Bronze** (95% Cu, 4% Si, 1% Mn) | $950^\circ\text{C} - 1,020^\circ\text{C}$ | $1,080^\circ\text{C} - 1,120^\circ\text{C}$ | High-tensile gears, turbine splitters, valves |
| **Brass** (70% Cu, 30% Zn) | $900^\circ\text{C} - 940^\circ\text{C}$ | $1,000^\circ\text{C} - 1,040^\circ\text{C}$ | Plumbing fittings, low-friction sleeve bearings |
| **Gray Cast Iron** (96% Fe, 3% C, 1% Si) | $1,150^\circ\text{C} - 1,200^\circ\text{C}$ | $1,280^\circ\text{C} - 1,350^\circ\text{C}$ | Heavy machine beds, anvils, engine heads |

---

### Method 1: The Two-Part Greensand Molding Process

"Greensand" does not refer to color; it refers to the "green" (unfired, moist) state of the sand binder.

#### 1. Greensand Recipe
* **Fine Silica / Quartz Sand:** 85% to 88% by weight (grain size 70 to 100 AFS mesh). Sift through fine screen.
* **Bentonite Clay (Binder):** 8% to 10% by weight (powdered sodium or calcium bentonite). Provides green compressive strength.
* **Moisture (Water):** 3.5% to 5.0% by weight. Add slowly while mulling.
* **The "Hand Squeeze" Test:** Squeeze a handful of mixed sand into a clump. It must form a firm lump that breaks with a crisp, sharp fracture line without sticking to your palm or crumbling into dust.

#### 2. The Molding Flask Architecture

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="castGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="castSandCope" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#332a24"/>
      <stop offset="100%" stop-color="#241e1a"/>
    </linearGradient>

    <linearGradient id="castSandDrag" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#241e1a"/>
      <stop offset="100%" stop-color="#181412"/>
    </linearGradient>

    <linearGradient id="castMoltenMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="40%" stop-color="#f97316"/>
      <stop offset="80%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>

    <!-- Marker -->
    <marker id="castArrowMolten" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#f97316"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#castGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#f59e0b"/>
  <text x="60" y="30" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">TWO-PART GREENSAND FOUNDRY MOLD ARCHITECTURE</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">COPE &amp; DRAG FLASK CUTAWAY • 88% SILICA / 9% BENTONITE / 3% H2O • SHRINKAGE &amp; DRAFT GEOMETRY</text>

  <!-- ================= FOUNDRY FLASK CUTAWAY ================= -->
  <!-- Bottom Foundation Board -->
  <rect x="180" y="340" width="460" height="18" rx="3" fill="#292524" stroke="#78716c" stroke-width="1.5"/>
  <text x="410" y="353" fill="#a8a29e" font-size="9" font-family="monospace" text-anchor="middle">BOTTOM RIGID MOLDING BOARD</text>

  <!-- Alignment Dowel Guide Lugs Left & Right -->
  <rect x="160" y="150" width="20" height="110" rx="3" fill="#475569" stroke="#94a3b8" stroke-width="1.2"/>
  <circle cx="170" cy="205" r="5" fill="#f59e0b"/>
  <rect x="640" y="150" width="20" height="110" rx="3" fill="#475569" stroke="#94a3b8" stroke-width="1.2"/>
  <circle cx="650" cy="205" r="5" fill="#f59e0b"/>

  <!-- DRAG: Lower Flask (y: 205 to 340, height: 135) -->
  <rect x="180" y="205" width="460" height="135" fill="url(#castSandDrag)" stroke="#57534e" stroke-width="1.5"/>
  <text x="200" y="230" fill="#a8a29e" font-size="11" font-weight="bold" font-family="monospace">DRAG (Lower Flask Half)</text>

  <!-- COPE: Upper Flask (y: 70 to 205, height: 135) -->
  <rect x="180" y="70" width="460" height="135" fill="url(#castSandCope)" stroke="#78716c" stroke-width="1.5"/>
  <text x="200" y="95" fill="#d6d3d1" font-size="11" font-weight="bold" font-family="monospace">COPE (Upper Flask Half)</text>

  <!-- Parting Line (Talc / Ash Dust) -->
  <line x1="180" y1="205" x2="640" y2="205" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3"/>
  <rect x="520" y="195" width="115" height="20" rx="3" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
  <text x="577" y="209" fill="#fde68a" font-size="8.5" font-family="monospace" text-anchor="middle">Parting Talc Line</text>

  <!-- Pouring Cup / Basin -->
  <polygon points="260,70 320,70 305,95 275,95" fill="url(#castMoltenMetal)" stroke="#f59e0b" stroke-width="1.2"/>
  <text x="290" y="62" fill="#ef4444" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">POURING CUP</text>

  <!-- Downsprue Channel -->
  <polygon points="275,95 305,95 298,215 282,215" fill="url(#castMoltenMetal)" stroke="#f59e0b" stroke-width="1"/>
  <line x1="290" y1="100" x2="290" y2="185" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#castArrowMolten)"/>

  <!-- Horizontal Runner & Choke Gate -->
  <rect x="282" y="210" width="75" height="14" rx="2" fill="url(#castMoltenMetal)" stroke="#f59e0b" stroke-width="1"/>
  <text x="315" y="238" fill="#f97316" font-size="8" font-family="monospace" text-anchor="middle">Runner Gate</text>

  <!-- Central Mold Cavity: Gear / Wheel Casting Geometry -->
  <g transform="translate(355, 160)">
    <!-- Cavity Outline filled with Molten Metal -->
    <rect x="0" y="0" width="130" height="90" rx="6" fill="url(#castMoltenMetal)" stroke="#f59e0b" stroke-width="1.5"/>
    <!-- Internal Core (Sand Core Forming Hub Hole) -->
    <circle cx="65" cy="45" r="18" fill="#241e1a" stroke="#78716c" stroke-width="2"/>
    <text x="65" y="42" fill="#a8a29e" font-size="8" font-family="monospace" text-anchor="middle">BAKED SAND</text>
    <text x="65" y="52" fill="#d6d3d1" font-size="7.5" font-family="monospace" text-anchor="middle">CORE (HUB)</text>

    <!-- Molten Metal Label -->
    <text x="65" y="24" fill="#0f172a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">MOLD CAVITY</text>
    <text x="65" y="76" fill="#7f1d1d" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">Molten Bronze @ 1100°C</text>

    <!-- Draft Angle Caliper Indicators (2° to 3°) -->
    <line x1="-5" y1="0" x2="-5" y2="90" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="-12" y="48" fill="#38bdf8" font-size="7.5" font-family="monospace" text-anchor="end">2°-3° Draft</text>
  </g>

  <!-- Riser (Feeder Head Reservoir) -->
  <polygon points="505,70 545,70 535,95 515,95" fill="url(#castMoltenMetal)" stroke="#f59e0b" stroke-width="1"/>
  <rect x="515" y="95" width="20" height="110" fill="url(#castMoltenMetal)" stroke="#f59e0b" stroke-width="1"/>
  <text x="525" y="62" fill="#38bdf8" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">FEED RISER</text>
  <line x1="525" y1="180" x2="525" y2="105" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#castArrowMolten)"/>

  <!-- Steam Vent Needle Holes through Cope -->
  <line x1="380" y1="70" x2="380" y2="155" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="410" y1="70" x2="410" y2="155" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="440" y1="70" x2="440" y2="155" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="465" y1="70" x2="465" y2="155" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,2"/>
  <rect x="390" y="110" width="85" height="18" rx="3" fill="#0f172a" stroke="#94a3b8" stroke-width="0.8"/>
  <text x="432" y="122" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">1.5mm Steam Vents</text>

  <!-- ================= TACTICAL NUMBERED BADGES ================= -->
  <!-- ❶ Cope & Weighting -->
  <g transform="translate(25, 75)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#0284c7"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <text x="32" y="16" fill="#7dd3fc" font-size="9" font-weight="bold" font-family="sans-serif">Cope Flask (Top)</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Rammed greensand</text>
    <text x="32" y="39" fill="#f59e0b" font-size="7.5" font-family="monospace">Must clamp/weight down</text>
  </g>

  <!-- ❷ Drag & Bottom Board -->
  <g transform="translate(25, 235)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#78716c" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#44403c"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <text x="32" y="16" fill="#d6d3d1" font-size="9" font-weight="bold" font-family="sans-serif">Drag Flask (Bottom)</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Base molding half</text>
    <text x="32" y="39" fill="#a8a29e" font-size="7.5" font-family="monospace">Precision registration pins</text>
  </g>

  <!-- ❸ Parting Dust Line -->
  <g transform="translate(25, 155)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b45309"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <text x="32" y="16" fill="#fde68a" font-size="9" font-weight="bold" font-family="sans-serif">Parting Line Barrier</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Dry wood ash / talc</text>
    <text x="32" y="39" fill="#cbd5e1" font-size="7.5" font-family="monospace">Prevents sand fusion</text>
  </g>

  <!-- ❹ Pouring Sprue & Basin -->
  <g transform="translate(650, 75)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b91c1c"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❹</text>
    <text x="32" y="16" fill="#fca5a5" font-size="9" font-weight="bold" font-family="sans-serif">Pouring Sprue</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Uninterrupted stream</text>
    <text x="32" y="39" fill="#ef4444" font-size="7.5" font-family="monospace">Choke gate catches slag</text>
  </g>

  <!-- ❺ Cavity & Shrinkage -->
  <g transform="translate(650, 155)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#c2410c"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❺</text>
    <text x="32" y="16" fill="#fdba74" font-size="9" font-weight="bold" font-family="sans-serif">Pattern Cavity</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">+1.5% scale (shrinkage)</text>
    <text x="32" y="39" fill="#f97316" font-size="7.5" font-family="monospace">2°–3° wall draft angle</text>
  </g>

  <!-- ❻ Feeder Riser Head -->
  <g transform="translate(650, 235)">
    <rect width="145" height="46" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#0284c7"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❻</text>
    <text x="32" y="16" fill="#7dd3fc" font-size="9" font-weight="bold" font-family="sans-serif">Feeder Riser</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Supplies molten reserve</text>
    <text x="32" y="39" fill="#38bdf8" font-size="7.5" font-family="monospace">Vents trapped gas safely</text>
  </g>

  <!-- ================= BOTTOM TECHNICAL ALLOY BAR ================= -->
  <g transform="translate(25, 385)">
    <rect width="770" height="60" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
    <text x="20" y="20" fill="#f59e0b" font-size="9.5" font-weight="bold" font-family="monospace">MELTING &amp; POUR THRESHOLDS:</text>
    <text x="20" y="36" fill="#f8fafc" font-size="9" font-family="monospace">• Aluminum: 660°C melt | 740°C pour</text>
    <text x="20" y="49" fill="#f8fafc" font-size="9" font-family="monospace">• Silicon Bronze: 1000°C melt | 1100°C pour</text>

    <line x1="280" y1="8" x2="280" y2="52" stroke="#1e293b" stroke-width="1"/>
    <text x="300" y="20" fill="#ef4444" font-size="9.5" font-weight="bold" font-family="monospace">HYDROSTATIC BUOYANCY WARNING:</text>
    <text x="300" y="36" fill="#cbd5e1" font-size="8.5" font-family="monospace">Liquid metal density (8.5 g/cm³) exerts massive upward force.</text>
    <text x="300" y="49" fill="#fca5a5" font-size="8.5" font-family="monospace">Unweighted Cope will float, ejecting molten metal laterally.</text>

    <line x1="620" y1="8" x2="620" y2="52" stroke="#1e293b" stroke-width="1"/>
    <text x="635" y="20" fill="#10b981" font-size="9.5" font-weight="bold" font-family="monospace">GREENSAND FORMULA:</text>
    <text x="635" y="36" fill="#cbd5e1" font-size="8.5" font-family="monospace">88% Sharp Silica Sand</text>
    <text x="635" y="49" fill="#86efac" font-size="8.5" font-family="monospace">9% Bentonite + 3% H2O</text>
  </g>
</svg>
```

#### 3. Step-by-Step Molding Protocol
1. **The Pattern:** Carve a positive wooden model of the desired tool. Apply a 2° to 3° "draft angle" on all vertical surfaces so the pattern slides out of the sand without tearing the cavity walls. Scale up by 1.5% to account for volumetric shrinkage during cooling.
2. **Packing the Drag (Lower Half):** Place pattern upside down on a flat board. Place Drag flask over it. Sift fine facing sand directly onto the pattern. Shovel in greensand and ram down firmly using a wooden mallet. Strike off excess sand flush with top rim.
3. **Flipping & Parting:** Roll the Drag over 180°. The pattern is now visible facing up. Dust the surface thoroughly with fine dry wood ash, talc, or powdered limestone (parting dust). This prevents the top sand from fusing to the bottom sand.
4. **Packing the Cope (Upper Half):** Place Cope flask onto Drag, locked via alignment dowel pins. Insert tapered wooden dowels for the **Sprue** (where metal enters) and the **Riser** (where metal exits and vents steam). Ram greensand around them until dense.
5. **Venting:** Remove sprue and riser dowels. Poke a fine 1.5 mm wire through the cope sand down to within 1 cm of the pattern every 3 cm. These vent holes allow explosive steam and gas to vent safely during the pour.
6. **Separation & Cavity Extraction:** Carefully lift off the Cope vertically. Tap the wooden pattern gently with a small hammer to break vacuum, then lift out vertically. Cut a horizontal "runner" and "gate" connecting the sprue base to the mold cavity.
7. **Reassembly & Clamping:** Clean out loose sand grains with a gentle puff of air. Reassemble Cope onto Drag. Clamp tightly with C-clamps or place heavy stone weights on top. *Molten metal has high hydrostatic buoyancy and will float the Cope box if unweighted.*

---

### Method 2: Lost-Wax (Investment) Casting

For precision parts with complex internal undercuts (such as turbine buckets or helical worm gears):
1. **Wax Positive:** Sculpt or pour the master part using beeswax mixed with 20% pine rosin. Attach a wax sprue stick to the top.
2. **Refractory Ceramic Shell:** Dip the wax model into a liquid slurry of fine fireclay, plaster, and ground refractory grog (crushed fired brick). Sprinkle with coarse silica sand. Let dry for 12 hours. Repeat 6–8 times until a 6 mm ceramic shell coats the wax.
3. **Dewaxing (Burnout):** Place the coated shell into a kiln mouth-down. Heat to $200^\circ\text{C}$—the melted wax flows out cleanly and is collected for reuse.
4. **Vitrification:** Heat the empty ceramic shell to $900^\circ\text{C}$ for 2 hours to sinter the refractory clay into glass-hard ceramic.
5. **Pouring:** Pour molten bronze directly into the red-hot ceramic shell while still in the furnace bed. Cooling slowly inside the preheated shell prevents cold shuts and brittle micro-fractures.

---

### Crucible Construction & Melting Protocol

#### 1. Home-Brew Refractory Crucible Formula
* **Fine Ground Graphite (from batteries or dry lubricant):** 40% by volume.
* **Refractory Fireclay (Kaolin):** 40% by volume.
* **Grog (Calcined clay crushed to 0.5 mm):** 20% by volume.
* Mix with minimal water, pack into a cylindrical mold with 25 mm thick walls, air dry for 3 weeks, and fire in charcoal kiln to $1,200^\circ\text{C}$. This crucible will endure multiple bronze and iron melts without thermal shock rupture.

#### 2. The Pouring Protocol
* **Fluxing:** Before pouring, add a pinch of borax or crushed glass to the melt. The flux forms a glassy slag layer that floats to the surface, absorbing metallic oxides and preventing gas porosity.
* **Skimming:** Use an iron rod to scrape the glowing slag aside just prior to tipping.
* **Continuous Pour:** Pour in a single, continuous, uninterrupted laminar stream into the sprue until molten metal rises into the riser. Hesitating mid-pour causes an oxide boundary that splits the casting into two disconnected pieces.
