---
id: "t3-tatara-bloomery-iron-sand-smelting"
title: "Tatara Bloomery Iron Smelting: From Black River Iron Sand to Steel & Tamahagane"
tier: 3
category: "Metallurgy & Foundry"
read_time: "24 min"
difficulty: "Advanced"
summary: "Complete blueprint for ancient and post-collapse steel smelting: harvesting magnetite iron sand (Fe3O4) from riverbeds, constructing a clay Tatara bloomery furnace, box bellows tuyere operation, extracting the raw sponge iron bloom (kera), and forge-welding high-carbon tamahagane blade steel."
tags: "metallurgy, iron smelting, tatara, bloomery, iron sand, steel, tamahagane, blacksmithing, dr stone, senku"
---

Bronze and copper provide sharp edged tools and non-corroding vessels, but civilization cannot construct heavy plows, steam boilers, structural beams, or precision machining tools out of copper alone. Iron is the true structural skeleton of industry.

In a rebuild scenario where commercial iron ore mines and 1,000-ton blast furnaces are inaccessible, you do not need underground mining shafts. Rivers, beaches, and weathered granite riverbanks constantly deposit heavy black **magnetite iron sand ($Fe_3O_4$, Satetsu)**. Using an ancient Japanese **Tatara** or traditional Celtic clay bloomery furnace, raw iron sand is reduced directly into high-purity wrought iron and legendary high-carbon **Tamahagane** steel without ever requiring industrial coke or liquid melting temperatures.

```
                   THE TATARA IRON SAND SMELTING PIPELINE
                   
     [ River Magnetite Iron Sand (Fe3O4) ]        [ Dense Hardwood Lump Charcoal (C) ]
                       │                                           │
         (Gravity Sluicing / Magnetic Sweep)             (Graded to 25mm Chunks)
                       └─────────────────────┬─────────────────────┘
                                             │
                        (Loaded in Alternating Layers)
                                             ▼
                      The Clay Tatara Bloomery Furnace
                        (Tuyere Forced Air @ 1250°C)
                                             │
                     CO Gas Solid-State Reduction Reaction:
                          Fe3O4 + 4 CO  ->  3 Fe + 4 CO2↑
                                             │
                       (Liquid Slag Tapped via Base Hole)
                                             ▼
                           The Sponge Iron Bloom (Kera)
                                             │
                      (Dismantling Furnace & Water Quench)
                                             ▼
                     ┌───────────────────────┴───────────────────────┐
                     ▼                                               ▼
          High-Carbon Tamahagane                           Low-Carbon Wrought Iron
             (1.0% - 1.5% Carbon)                             (0.05% - 0.1% Carbon)
           Tooling, Knives & Edges                         Nails, Chains & Machine Beds
```

---

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="tataraGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="tataraFlame" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="40%" stop-color="#ea580c"/>
      <stop offset="75%" stop-color="#f59e0b"/>
      <stop offset="95%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <!-- Markers -->
    <marker id="tataraArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#tataraGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#f59e0b"/>
  <text x="60" y="30" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">TATARA BLOOMERY IRON SAND SMELTING &amp; TAMAHAGANE</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">PLACER MAGNETITE (Fe3O4) ➔ SOLID-STATE CO REDUCTION (1200°C) ➔ SINTERED KERA SPONGE BLOOM</text>

  <!-- Inter-Panel Connectors -->
  <line x1="265" y1="210" x2="285" y2="210" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#tataraArrow)"/>
  <line x1="535" y1="210" x2="555" y2="210" stroke="#10b981" stroke-width="2.5" marker-end="url(#tataraArrow)"/>

  <!-- ================= PANEL 1: PLACER ORE HARVEST & SLUICE ================= -->
  <g transform="translate(25, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#38bdf8" stroke-width="1.5"/>
    
    <!-- Step Badge ❶ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#0284c7"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <text x="44" y="26" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="sans-serif">Magnetite Ore Harvest</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">Satetsu River Sand Sluicing</text>

    <!-- Sloped Wooden Sluice Flume Graphic -->
    <g transform="translate(25, 55)">
      <!-- Slanted Sluice Box (5° Angle) -->
      <polygon points="10,15 175,45 170,75 5,45" fill="#292524" stroke="#78716c" stroke-width="1.5"/>
      <!-- Water Stream in Sluice -->
      <polygon points="12,20 172,48 168,60 8,32" fill="#0284c7" fill-opacity="0.5"/>
      
      <!-- Burlap / Hemp Riffle Traps with Dense Black Iron Sand -->
      <line x1="45" y1="26" x2="40" y2="38" stroke="#ca8a04" stroke-width="2"/>
      <ellipse cx="43" cy="35" rx="5" ry="3" fill="#000000"/>

      <line x1="85" y1="33" x2="80" y2="45" stroke="#ca8a04" stroke-width="2"/>
      <ellipse cx="83" cy="42" rx="6" ry="3" fill="#000000"/>

      <line x1="125" y1="40" x2="120" y2="52" stroke="#ca8a04" stroke-width="2"/>
      <ellipse cx="123" cy="49" rx="7" ry="4" fill="#000000"/>

      <!-- Permanent Magnet Sweep Icon -->
      <rect x="135" y="5" width="20" height="14" rx="2" fill="#ef4444"/>
      <rect x="135" y="19" width="8" height="6" fill="#cbd5e1"/>
      <rect x="147" y="19" width="8" height="6" fill="#cbd5e1"/>
      <text x="145" y="0" fill="#fca5a5" font-size="7" font-family="monospace" text-anchor="middle">Lodestone</text>
    </g>

    <!-- Ore Specs Box -->
    <rect x="12" y="145" width="216" height="74" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="163" fill="#7dd3fc" font-size="9" font-weight="bold" font-family="monospace">SPECIFIC GRAVITY TRIAGE:</text>
    <text x="20" y="179" fill="#f8fafc" font-size="8.5" font-family="monospace">• Magnetite (Fe3O4): SG = 5.2 (Heavy)</text>
    <text x="20" y="193" fill="#94a3b8" font-size="8.5" font-family="monospace">• Quartz Sand: SG = 2.6 (Swept away)</text>
    <text x="20" y="207" fill="#86efac" font-size="8.5" font-family="monospace">Concentrates from 25% to 90%+ purity</text>

    <!-- Yield Box -->
    <rect x="12" y="225" width="216" height="79" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="20" y="243" fill="#38bdf8" font-size="9" font-weight="bold" font-family="monospace">PLACER HARVEST EFFICIENCY:</text>
    <text x="20" y="259" fill="#f8fafc" font-size="8.5" font-family="monospace">100 kg river placer sand yields</text>
    <text x="20" y="273" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace">15 kg to 30 kg black magnetite</text>
    <text x="20" y="289" fill="#cbd5e1" font-size="8" font-family="monospace">Wash in tubs &amp; sun-dry on straw mats</text>
  </g>

  <!-- ================= PANEL 2: CLAY TATARA FURNACE SHAFT ================= -->
  <g transform="translate(290, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#f59e0b" stroke-width="1.5"/>
    
    <!-- Step Badge ❷ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#b45309"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <text x="44" y="26" fill="#fde68a" font-size="10" font-weight="bold" font-family="sans-serif">The Tatara Shaft</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">1200°C Solid-State CO Reduction</text>

    <!-- Tatara Furnace Cutaway Graphic -->
    <g transform="translate(45, 52)">
      <!-- Refractory Clay Furnace Walls -->
      <polygon points="10,0 25,95 45,95 30,0" fill="#78350f" stroke="#b45309" stroke-width="1"/>
      <polygon points="140,0 125,95 105,95 120,0" fill="#78350f" stroke="#b45309" stroke-width="1"/>

      <!-- Interior Charge: Alternating Charcoal & Iron Sand -->
      <rect x="30" y="10" width="90" height="8" fill="#18181b"/>
      <rect x="30" y="20" width="90" height="6" fill="#ca8a04"/>
      <rect x="30" y="28" width="90" height="8" fill="#18181b"/>
      <rect x="30" y="38" width="90" height="6" fill="#ca8a04"/>
      <rect x="30" y="46" width="90" height="8" fill="#18181b"/>
      <rect x="30" y="56" width="90" height="6" fill="#ca8a04"/>

      <!-- Incandescent Reaction Bed (1200°C) -->
      <ellipse cx="75" cy="78" rx="35" ry="16" fill="url(#tataraFlame)"/>
      <text x="75" y="82" fill="#450a0a" font-size="7.5" font-weight="bold" font-family="monospace" text-anchor="middle">1200°C BLOOM</text>

      <!-- Tuyere Forced Air Blast Pipe -->
      <line x1="-15" y1="78" x2="28" y2="78" stroke="#cbd5e1" stroke-width="4"/>
      <text x="-5" y="72" fill="#38bdf8" font-size="7" font-family="monospace">Tuyere O2</text>

      <!-- Slag Tap Hole at base -->
      <rect x="120" y="90" width="15" height="6" fill="#451a03"/>
      <path d="M 135 93 Q 145 95 150 105" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <text x="145" y="115" fill="#f59e0b" font-size="6.5" font-family="monospace">Slag Tap</text>
    </g>

    <!-- Reduction Chemical Box -->
    <rect x="12" y="175" width="216" height="129" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="193" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace">CO REDUCTION REACTION:</text>
    <text x="20" y="209" fill="#f8fafc" font-size="9" font-weight="bold" font-family="monospace">Fe3O4 + 4 CO ➔ 3 Fe + 4 CO2 ↑</text>
    <text x="20" y="225" fill="#cbd5e1" font-size="8" font-family="monospace">• Hardwood charcoal generates CO gas</text>
    <text x="20" y="239" fill="#cbd5e1" font-size="8" font-family="monospace">• Oxygen stripped from iron in solid phase</text>
    <text x="20" y="253" fill="#fca5a5" font-size="8" font-family="monospace">• Liquid silicate slag tapped via base hole</text>
    <text x="20" y="267" fill="#86efac" font-size="8.5" font-family="monospace">• Iron sinters into solid sponge bloom (Kera)</text>
    <text x="20" y="283" fill="#38bdf8" font-size="8" font-family="monospace">Never liquefy into high-carbon pig iron!</text>
  </g>

  <!-- ================= PANEL 3: KERA & TAMAHAGANE STEEL ================= -->
  <g transform="translate(555, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#10b981" stroke-width="1.5"/>
    
    <!-- Step Badge ❸ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#047857"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <text x="44" y="26" fill="#a7f3d0" font-size="10" font-weight="bold" font-family="sans-serif">Tamahagane Steel</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">Forge-Welding &amp; Folding</text>

    <!-- Tamahagane Ingot & Cross-Section Fracture Graphic -->
    <g transform="translate(45, 55)">
      <!-- Sponge Bloom / Sintered Steel Ingot -->
      <polygon points="10,25 70,10 140,25 80,45" fill="#475569" stroke="#94a3b8" stroke-width="1.2"/>
      <polygon points="10,25 80,45 80,75 10,55" fill="#334155" stroke="#94a3b8" stroke-width="1.2"/>
      <polygon points="80,45 140,25 140,55 80,75" fill="#1e293b" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- Silvery high-carbon crystalline fracture texture -->
      <circle cx="50" cy="35" r="2" fill="#ffffff"/>
      <circle cx="75" cy="30" r="2.5" fill="#ffffff"/>
      <circle cx="105" cy="35" r="2" fill="#ffffff"/>
      <text x="75" y="62" fill="#f8fafc" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">TAMAHAGANE</text>
      <text x="75" y="71" fill="#fde68a" font-size="7" font-family="monospace" text-anchor="middle">1.2% - 1.5% Carbon</text>
    </g>

    <!-- Steel Sorting Breakdown Box -->
    <rect x="12" y="145" width="216" height="74" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="163" fill="#a7f3d0" font-size="9" font-weight="bold" font-family="monospace">SORTING THE KERA BLOOM:</text>
    <text x="20" y="179" fill="#fde68a" font-size="8.5" font-family="monospace">• Tamahagane (1.2% C): Silvery fracture</text>
    <text x="20" y="193" fill="#94a3b8" font-size="8.5" font-family="monospace">• Wrought Iron (0.05% C): Malleable, fibrous</text>
    <text x="20" y="207" fill="#86efac" font-size="8.5" font-family="monospace">Break with heavy sledge to sort crystals</text>

    <!-- Folding Blacksmithing Box -->
    <rect x="12" y="225" width="216" height="79" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
    <text x="20" y="243" fill="#10b981" font-size="9" font-weight="bold" font-family="monospace">10–15 FOLD FORGE-WELDING:</text>
    <text x="20" y="259" fill="#f8fafc" font-size="8.5" font-family="monospace">Repeated heating, folding, &amp; hammering</text>
    <text x="20" y="273" fill="#a7f3d0" font-size="8.5" font-family="monospace">expels glass slag silicates completely.</text>
    <text x="20" y="287" fill="#cbd5e1" font-size="8" font-family="monospace">Produces ultra-dense surgical edge steel</text>
  </g>

  <!-- ================= BOTTOM BLOOMERY SMELTING MANDATE ================= -->
  <g transform="translate(25, 388)">
    <rect width="770" height="58" rx="6" fill="#0b1322" stroke="#f59e0b" stroke-width="1.2"/>
    <text x="20" y="22" fill="#f59e0b" font-size="9.5" font-weight="bold" font-family="monospace">THE CRITICAL SOLID-STATE BLOOMERY LAW:</text>
    <text x="20" y="38" fill="#cbd5e1" font-size="8.5" font-family="monospace">Iron must NEVER melt into liquid during smelting. Maintain temperature strictly between 1150°C and 1250°C.</text>
    <text x="20" y="50" fill="#fca5a5" font-size="8.5" font-family="monospace">Exceeding 1350°C causes liquid pig iron (4% carbon), which is glassy, unmalleable, and shatters under the hammer.</text>
  </g>
</svg>
```
```

---

## 1. Prospecting & Concentrating Magnetite Iron Sand

Magnetite ($Fe_3O_4$) is a heavy, black, naturally magnetic oxide of iron. As granitic mountain ridges erode under wind and rain, light quartz and feldspar sand are washed downstream, while dense iron sand grains ($density \approx 5.2\text{ g/cm}^3$) drop into riverbed bends, sandbars, and ocean surf lines.

1. **Visual Identification:** Look for distinct dark grey to blue-black streaks across river sandbars after heavy flood runoff.
2. **Magnetic Assay:** Wrap a strong permanent magnet (or lodestone) in a thin cloth or dry leaf. Sweep it across the sand. Pure black magnetite grains will instantly clump to the magnet. Unwrapping the cloth drops clean, concentrated iron ore.
3. **The Sluicing Trough (The "Kana-nagashi" Method):**
   - Construct a gentle wooden flume or trough (3 to 4 meters long, 30 cm wide, inclined at a 5° angle).
   - Line the bottom with rough burlap cloth, coarse hemp sacking, or transverse wooden riffles.
   - Shovel raw sand into the top while running a steady stream of water.
   - Light yellow quartz and feldspar sand are light ($2.6\text{ g/cm}^3$) and sweep away with the current; dense magnetite ($5.2\text{ g/cm}^3$) drops into the fabric riffles.
   - Wash the cloth in tubs to yield **90%+ pure black iron sand ore**. 100 kg of raw river sand typically yields 15 to 30 kg of concentrated ore.

---

## 2. Constructing the Tatara Bloomery Shaft

A modern blast furnace requires water-cooled copper tuyeres and hundreds of tons of blast coke. A Tatara furnace is built entirely from earthen clay and straw, operated for a single continuous run, and broken open at the conclusion.

1. **The Drainage Bed (Hondoko):** Moisture from the ground is fatal to a smelting run; steam will quench the fire and cause steam explosions. Dig a trench 1 meter deep, fill with 50 cm of crushed stone and dry charcoal, and top with a layer of dry clay to form a waterproof hearth base.
2. **Wall Construction:** Form the furnace shaft using **refractory clay** mixed with $30\%$ clean silica sand and $10\%$ chopped rice straw or horse dung (organic fibers prevent thermal cracking).
   - *Dimensions:* Internal width: 40 cm; length: 100 cm; height: 120 cm.
   - *Wall Thickness:* 15 cm at the base, tapering to 8 cm at the rim.
3. **Tuyere Placement:** Drill a row of 3 to 5 clay tubes (tuyeres, 25 mm internal diameter) through each long side wall, 20 cm above the hearth floor. Angle them downward at **15° toward the center floor**. Connect these tuyeres to a dual-chamber box bellows (Fuigo) driven by two operators.
4. **Slag Tap Notch:** Cut a small, temporary clay-plugged hole at floor level at one end of the furnace to periodically tap liquid iron silicate slag ($fayalite, 2FeO \cdot SiO_2$).

---

## 3. The 18-Hour Smelting Run

```
                         [ Top Charging Mouth ]
                                   │
              (Alternating Layers of Charcoal & Iron Sand)
                                   ▼
             Pre-Heating & Drying Zone (400°C - 700°C)
                                   │
             Indirect Reduction Zone (700°C - 1000°C):
                      3 Fe2O3 + CO  ->  2 Fe3O4 + CO2
                      Fe3O4 + CO    ->  3 FeO + CO2
                                   │
             Direct Solid Reduction Zone (1100°C - 1250°C):
                      FeO + CO      ->  Fe (Solid Sponge) + CO2
                                   │
             Hearth Slag Pool & Steel Bloom Consolidation (1200°C)
```

1. **Pre-Heating (4 Hours):** Fill the furnace with dry firewood and low-grade charcoal. Blow gentle air for 4 hours to dry the clay walls completely until they bake into hard, terracotta ceramic.
2. **The Charcoal Bed:** Fill the furnace to the brim with fist-sized lump hardwood charcoal (Oak, Hornbeam, or Hickory). Engage the bellows to bring the tuyere zone to dazzling yellow heat (**1200°C–1250°C**).
3. **Feeding Cycle:**
   - Every 15 minutes, spread **10 kg of dry iron sand** evenly across the glowing top charcoal bed.
   - Immediately cover with a fresh layer of **15 kg of lump charcoal**.
4. **Chemical Transformation:**
   - As air blasts through the tuyeres, carbon burns to carbon dioxide, which is instantly reduced by surrounding glowing charcoal into **Carbon Monoxide ($CO$)**:
     $$C + O_2 \to CO_2 \quad\text{then}\quad CO_2 + C \to 2 CO$$
   - The rising $CO$ gas penetrates the falling iron sand particles, stripping oxygen atoms from the iron in solid-state:
     $$Fe_3O_4 + 4 CO \to 3 Fe + 4 CO_2\uparrow$$
   - Unlike blast furnaces which liquefy iron into high-carbon cast pig ($1400^\circ\text{C}$, $4\%\text{ C}$), the Tatara operates at **1150°C–1250°C**. At this temperature, metallic iron never melts; it forms a sticky, glowing solid sponge that sinks to the floor, welding particle-to-particle.
5. **Slag Tapping:** Every 3 hours, unblock the slag hole. Liquid molten black slag (molten impurities) pours out like volcanic lava. Re-seal the hole with damp clay.

---

## 4. Extracting the Kera & Sorting Tamahagane

1. **Breaking the Furnace:** After feeding 150 kg of iron sand and 200 kg of charcoal, cease loading. Blow bellows for another 1 hour to consume remaining fuel. Knock down the thin clay walls using iron pry-bars.
2. **The Kera (The Bloom):** On the furnace floor sits a glowing, incandescent mass of metallic iron and slag weighing 40 to 60 kg: the **Kera**.
3. **Water Quench & Fracturing:** Roll the glowing bloom into a cold water flume. Thermal shock cracks the bloom along internal crystal grain boundaries. Sledgehammer the fractured bloom into fist-sized chunks.
4. **Visual Sorting:**
   - **Tamahagane (High-Carbon Steel, $1.0\%\text{ to }1.5\%\text{ C}$):** Displays a shimmering, fine-grained, silvery-grey fracture face. Hard and brittle when cold. This is premium steel for chisels, drill bits, axe bits, and sword edges.
   - **Hocho-Tetsu (Wrought Iron, $<0.1\%\text{ C}$):** Displays a fibrous, dark grey, woody fracture. Malleable and ductile; bends under a hammer rather than snapping. Used for chains, nails, rivets, and anvil bodies.
   - **Cast Pig Iron ($>3.5\%\text{ C}$):** Dark, coarse-grained, crumbly metal produced if temperatures spiked too high near tuyeres. Must be roasted in an open forge to decarburize before use.

---

## 5. Forge-Welding & Refining (Consolidation)

Raw Tamahagane contains trapped pockets of vitreous slag. To turn it into usable tool steel, it must be forge-welded and folded:

1. **Stacking:** Select 2 kg of flat tamahagane shards. Stack them onto a wrought-iron spade handle. Wrap in wet Japanese paper and slather with a thick wash of liquid river clay and straw ash (the clay acts as a chemical flux, preventing oxidation and absorbing silica).
2. **Forge-Welding Heat:** Heat the stack in the forge until it reaches brilliant lemon-white heat (**1150°C**). The flux bubbles like boiling water.
3. **Hammering & Folding:** Strike the glowing stack with heavy hammer blows. Trapped liquid slag squirts violently out of the seams as the steel plates fuse into a single solid bar.
4. **Drawing and Folding:** Chisel a notch halfway through the bar, fold it back over onto itself 180°, re-coat with clay flux, re-heat to welding temperature, and forge-weld together again.
5. **Repeat 10 to 12 Times:** Folding 10 times creates **$2^{10} = 1,024\text{ micro-layers}$**; folding 15 times creates **32,768 layers**. This completely eliminates slag inclusions, evenly distributes carbon atoms throughout the steel matrix, and produces fracture-proof tool steel capable of taking a surgical razor edge.
