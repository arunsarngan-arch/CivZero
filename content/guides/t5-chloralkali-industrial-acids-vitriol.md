---
id: "t5-chloralkali-industrial-acids-vitriol"
title: "Industrial Acids & The Chloralkali Matrix: Sulfuric, Nitric, Hydrochloric & Caustic Soda from Scratch"
tier: 5
category: "Chemical Synthesis"
read_time: "24 min"
difficulty: "Advanced"
summary: "Comprehensive laboratory manual for the primary chemical tree of civilization: roasting iron sulfate vitriol for concentrated Sulfuric Acid (H2SO4), synthesizing Nitric Acid (HNO3), generating Hydrochloric Acid (HCl), and brine electrolysis for Caustic Soda (NaOH) and Chlorine gas."
tags: "chemistry, sulfuric acid, nitric acid, hydrochloric acid, chloralkali, sodium hydroxide, chlorine, vitriol, electrolysis, dr stone"
---

The transition from a medieval agrarian society to an industrial civilization is defined by a single metric: the per-capita production of sulfuric acid ($H_2SO_4$). Known historically as "oil of vitriol," sulfuric acid is the master reagent of all chemical synthesis. Without it, you cannot mass-produce synthetic fertilizers, refine petroleum, manufacture lead-acid storage batteries, dissolve phosphate rocks, synthesize antibiotics, or manufacture high-grade nitroglycerin and black powder.

This manual documents the primitive and semi-industrial synthesis of the four fundamental chemical cornerstones from natural mineral deposits, iron pyrites, and common sea salt.

```
                  THE FOUNDATIONAL CHEMICAL REACTION MATRIX
                       
                   [ Iron Pyrites / FeSO4 ] 
                              │
                    (Thermal Roasting)
                              ▼
                   Sulfuric Acid (H2SO4)
                   ┌──────────┴──────────┐
      (+ NaCl Salt)│                     │(+ KNO3 Saltpeter)
                   ▼                     ▼
         Hydrochloric Acid (HCl)    Nitric Acid (HNO3)
                   │                     │
                   └──────────┬──────────┘
                              │ (1:3 Molar Ratio)
                              ▼
                         Aqua Regia 
                   (Dissolves Gold & Platinum)

           [ Sea Salt Brine (NaCl + H2O) ]
                              │
                    (Direct DC Current)
                              ▼
                 THE CHLORALKALI ELECTROLYSIS
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
     Chlorine Gas       Hydrogen Gas       Sodium Hydroxide
        (Cl2)               (H2)                (NaOH)
          │                   │                   │
   Water Sanitation      High-Heat Fuel      Saponification,
   & Bleach Powder     & Reduction Agent    Paper & Chemistry
```

---

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="chemGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>
    <linearGradient id="acidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <marker id="arrowGas" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
    <marker id="arrowChlorine" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
    </marker>
  </defs>

  <!-- Obsidian Background & Tactical Grid -->
  <rect x="0" y="0" width="820" height="460" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="460" fill="url(#chemGrid)"/>

  <!-- Blueprint Header Title -->
  <rect x="25" y="15" width="770" height="32" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="40" y="36" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">INDUSTRIAL CHEMICAL REAGENTS: VITRIOL DISTILLATION &amp; CHLORALKALI CELL</text>
  <text x="770" y="36" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">FIRST-PRINCIPLES ACID-BASE SYNTHESIS</text>

  <!-- MODULE 1: SULFURIC ACID FROM GREEN VITRIOL (LEFT) -->
  <g id="sulfuric" transform="translate(25, 60)">
    <rect x="0" y="0" width="245" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Clay Retort with Long Condenser Neck -->
    <path d="M 45 105 C 45 65, 95 60, 115 80 L 195 125 L 188 135 L 115 95 C 95 85, 65 85, 65 115 Z" fill="#78350f" stroke="#d97706" stroke-width="1.8"/>
    <ellipse cx="60" cy="115" rx="24" ry="18" fill="#451a03"/>
    
    <!-- Heating Furnace Flames (650°C) -->
    <path d="M 45 145 Q 55 125 60 145 Q 68 120 75 145 Z" fill="#ef4444"/>
    <path d="M 52 145 Q 60 130 65 145 Z" fill="#f59e0b"/>
    <text x="60" y="160" fill="#fca5a5" font-size="8" font-family="monospace" text-anchor="middle">650°C Fire</text>

    <!-- Glass Condenser Receiver Flask -->
    <circle cx="205" cy="140" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <ellipse cx="205" cy="145" rx="14" ry="8" fill="#ef4444" opacity="0.4"/>
    <text x="205" y="148" fill="#fca5a5" font-size="7" font-family="monospace" text-anchor="middle">H₂SO₄</text>

    <!-- Reaction Feedstock Pill -->
    <rect x="18" y="175" width="210" height="60" rx="4" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>
    <text x="28" y="193" fill="#ef4444" font-size="8.5" font-weight="bold" font-family="monospace">FEEDSTOCK: GREEN VITRIOL</text>
    <text x="28" y="208" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace">FeSO₄ • 7H₂O (Iron Sulfate)</text>
    <text x="28" y="222" fill="#cbd5e1" font-size="8" font-family="monospace">Dry to monohydrate, heat in retort</text>

    <!-- Output Product Pill -->
    <rect x="18" y="245" width="210" height="65" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="264" fill="#f59e0b" font-size="8.5" font-weight="bold" font-family="monospace">OUTPUT: 98% OIL OF VITRIOL</text>
    <text x="28" y="279" fill="#cbd5e1" font-size="8" font-family="monospace">SO₃ gas absorbs in condensate</text>
    <text x="28" y="293" fill="#86efac" font-size="8" font-family="monospace">Boiling Pt: 337°C | Specific Grav: 1.84</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="145" height="20" rx="4" fill="#0f172a" stroke="#ef4444" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#ef4444"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
    <text x="83" y="24" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">SULFURIC ACID (H₂SO₄)</text>
  </g>

  <!-- MODULE 2: NITRIC ACID FROM SALTPETER DISTILLATION (CENTER) -->
  <g id="nitric" transform="translate(285, 60)">
    <rect x="0" y="0" width="250" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Boiling Flask & Retort Neck -->
    <circle cx="65" cy="115" r="28" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
    <ellipse cx="65" cy="125" rx="22" ry="12" fill="#f59e0b" opacity="0.3"/>
    <path d="M 78 95 L 175 130" stroke="#38bdf8" stroke-width="4"/>
    <path d="M 85 92 L 180 126" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2"/>
    <text x="65" y="128" fill="#fde68a" font-size="8" font-family="monospace" text-anchor="middle">KNO₃ + H₂SO₄</text>

    <!-- Receiver Flask in Cold Water Bath -->
    <circle cx="195" cy="140" r="22" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
    <ellipse cx="195" cy="148" rx="18" ry="10" fill="#f59e0b" opacity="0.6"/>
    <rect x="165" y="150" width="60" height="20" rx="3" fill="#0369a1" opacity="0.3"/>
    <text x="195" y="152" fill="#fde68a" font-size="8" font-family="monospace" text-anchor="middle">HNO₃</text>
    <text x="195" y="165" fill="#38bdf8" font-size="7" font-family="monospace" text-anchor="middle">Ice Bath</text>

    <!-- Reaction Mixture Pill -->
    <rect x="18" y="175" width="214" height="60" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
    <text x="28" y="193" fill="#f59e0b" font-size="8.5" font-weight="bold" font-family="monospace">RETORT REACTION (83°C):</text>
    <text x="28" y="208" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace">KNO₃ + H₂SO₄ ──&gt; KHSO₄ + HNO₃↑</text>
    <text x="28" y="222" fill="#cbd5e1" font-size="8" font-family="monospace">Gentle water-bath heat below 90°C</text>

    <!-- Distillate Specs Pill -->
    <rect x="18" y="245" width="214" height="65" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="264" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">OUTPUT: 68% FUMING NITRIC ACID</text>
    <text x="28" y="279" fill="#cbd5e1" font-size="8" font-family="monospace">Deep amber/yellow fuming liquid</text>
    <text x="28" y="293" fill="#fca5a5" font-size="8" font-family="monospace">NO₂ fumes destroy pulmonary tissue</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="145" height="20" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#d97706"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
    <text x="83" y="24" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">NITRIC ACID (HNO₃)</text>
  </g>

  <!-- MODULE 3: CHLORALKALI DIAPHRAGM CELL (RIGHT) -->
  <g id="chloralkali" transform="translate(550, 60)">
    <rect x="0" y="0" width="245" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Electrolytic Cell Vessel -->
    <rect x="30" y="55" width="185" height="85" rx="5" fill="#082f49" stroke="#0284c7" stroke-width="1.8"/>

    <!-- Porous Diaphragm Divider -->
    <line x1="122" y1="55" x2="122" y2="140" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3,2"/>
    <text x="122" y="50" fill="#fde68a" font-size="7" font-family="monospace" text-anchor="middle">Diaphragm</text>

    <!-- Graphite Anode (+) -->
    <rect x="65" y="65" width="16" height="55" fill="#334155" stroke="#ef4444" stroke-width="1.5"/>
    <line x1="73" y1="65" x2="73" y2="40" stroke="#ef4444" stroke-width="2.5"/>
    <text x="73" y="35" fill="#ef4444" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">(+) Anode</text>
    <!-- Cl2 gas bubbles -->
    <circle cx="73" cy="80" r="3" fill="#10b981" opacity="0.8"/><circle cx="85" cy="72" r="2.5" fill="#10b981" opacity="0.8"/>
    <text x="73" y="132" fill="#86efac" font-size="8" font-family="monospace" text-anchor="middle">Cl₂ ↑</text>

    <!-- Iron Mesh Cathode (-) -->
    <rect x="160" y="65" width="16" height="55" fill="#64748b" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="168" y1="65" x2="168" y2="40" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="168" y="35" fill="#38bdf8" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">(-) Cathode</text>
    <!-- H2 gas bubbles -->
    <circle cx="168" cy="80" r="2.5" fill="#ffffff" opacity="0.8"/><circle cx="155" cy="72" r="2" fill="#ffffff" opacity="0.8"/>
    <text x="168" y="132" fill="#38bdf8" font-size="8" font-family="monospace" text-anchor="middle">H₂ ↑ + NaOH</text>

    <!-- Chemical Equation Pill -->
    <rect x="18" y="175" width="210" height="60" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
    <text x="28" y="193" fill="#10b981" font-size="8.5" font-weight="bold" font-family="monospace">CELL STOICHIOMETRY (DC):</text>
    <text x="28" y="208" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">2NaCl + 2H₂O ──&gt; 2NaOH + Cl₂↑ + H₂↑</text>
    <text x="28" y="222" fill="#cbd5e1" font-size="8" font-family="monospace">DC Current: 4.5V @ 10–50 Amps</text>

    <!-- Products Pill -->
    <rect x="18" y="245" width="210" height="65" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="264" fill="#38bdf8" font-size="8.5" font-weight="bold" font-family="monospace">OUTPUTS &amp; PRODUCTS:</text>
    <text x="28" y="279" fill="#cbd5e1" font-size="8" font-family="monospace">• NaOH (Caustic soda pH 14)</text>
    <text x="28" y="293" fill="#86efac" font-size="8" font-family="monospace">• Cl₂ disinfectant &amp; H₂ fuel gas</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="150" height="20" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#10b981"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
    <text x="86" y="24" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">CHLORALKALI CELL</text>
  </g>

  <!-- LETHAL GAS CAUTION FOOTER -->
  <rect x="25" y="402" width="770" height="42" rx="5" fill="#1a0606" stroke="#ef4444" stroke-width="1.5"/>
  <circle cx="45" cy="423" r="10" fill="#ef4444"/>
  <text x="45" y="427" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">!</text>
  <text x="65" y="420" fill="#fca5a5" font-size="10.5" font-weight="bold" font-family="monospace">LETHAL GAS TOXICITY HAZARD: CHLORINE (Cl₂) &amp; NITROGEN DIOXIDE (NO₂)</text>
  <text x="65" y="434" fill="#f87171" font-size="8.5" font-family="monospace">A single inhalation of Cl₂ or NO₂ causes acute chemical pneumonitis and asphyxiation. NEVER distill or electrolyze indoors or without full ventilation.</text>
</svg>
```

---

## 1. Primary Reagent: Sulfuric Acid ($H_2SO_4$)

### Method A: Thermal Dissociation of Green Vitriol (The Primitive Retort Method)
Green vitriol is ferrous sulfate heptahydrate ($FeSO_4 \cdot 7H_2O$). It occurs naturally as the mineral *melanterite* near weathered iron sulfide pyrite beds and coal seams, or it can be manufactured in quantity by dissolving scrap iron in dilute acid and evaporating the liquor into sea-green monoclinic crystals.

```
       FeSO4 • 7H2O  ──(300°C)──>  FeSO4 (Anhydrous White Powder) + 7 H2O↑
       6 FeSO4       ──(650°C)──>  Fe2(SO4)3 + 2 Fe2O3 + 3 SO2↑
       Fe2(SO4)3     ──(750°C)──>  Fe2O3 (Iron Oxide Red) + 3 SO3↑ (Sulfur Trioxide)
       SO3 + H2O     ───────────>  H2SO4 (Concentrated Sulfuric Acid)
```

1. **Dehydration:** Place green vitriol crystals into an open clay pot over low heat ($150–250^\circ\text{C}$). The crystal water boils off, transforming the emerald crystals into an anhydrous, chalky white powder. If you skip this step, excess water will dilute the final acid into a weak, useless wash.
2. **Retort Loading:** Pack the anhydrous ferrous sulfate powder into a heavy stoneware clay retort. The neck of the retort must lead into a glass or glazed stoneware receiver flask submerged in a cold ice/water bath.
3. **High-Heat Calcination:** Stoke the charcoal furnace surrounding the retort bulb to cherry-red heat ($650–800^\circ\text{C}$). 
4. **Vapor Collection:** Dense white fumes of sulfur trioxide ($SO_3$) will emerge from the retort neck and condense into the cooled receiver flask as a heavy, viscous liquid. The residue in the retort is pure red ferric oxide ($Fe_2O_3$, "Venetian Red" polishing rouge and ceramic pigment).
5. **Concentration:** The distillate in the receiver is concentrated oleum/sulfuric acid ($95–98\%$). It has a specific gravity of $1.84\text{ g/cm}^3$ and a boiling point of $337^\circ\text{C}$.

---

## 2. Nitric Acid ($HNO_3$)

Nitric acid is the indispensable oxidizer of industrial chemistry. In the Senku / *Dr. Stone* timeline, nitric acid mixed with high-proof ethanol forms **Nital**, the industrial metal-etching solution used to trigger the petrification reversal. It is also required for nitrocellulose, sulfa drug antibiotics, and fertilizers.

```
     KNO3 (Saltpeter) + H2SO4 (Sulfuric Acid)  ──(83°C)──>  KHSO4 + HNO3↑ (Nitric Acid Vapor)
```

1. **Stoichiometric Ratio:** In a glass retort, combine **101 grams of dry potassium nitrate ($KNO_3$)** with **98 grams of concentrated sulfuric acid ($H_2SO_4$)**. 
2. **Gentle Heat:** Apply gentle heat ($83–90^\circ\text{C}$). Do **NOT** exceed $100^\circ\text{C}$, or nitric acid will thermally decompose into toxic brown nitrogen dioxide gas ($NO_2$) and oxygen ($4HNO_3 \to 4NO_2 + 2H_2O + O_2$).
3. **Condensation:** Pure nitric acid boils at $83^\circ\text{C}$ (far lower than sulfuric acid at $337^\circ\text{C}$). Its colorless, fuming vapors distill through the glass neck and condense into the chilled receiver flask as a pale-yellow to reddish liquid ($68\%\text{ azeotrope}$ or $>90\%\text{ red fuming nitric acid}$).
4. **Storage:** Nitric acid decomposes when exposed to visible light. Store exclusively in dark amber glass bottles sealed with ground-glass stoppers. Never use cork, rubber, or metal lids (nitric acid will instantly oxidize and dissolve them).

---

## 3. Hydrochloric Acid ($HCl$) & Saltcake

```
     NaCl (Rock Salt) + H2SO4 (Sulfuric Acid)  ──(120°C)──>  NaHSO4 + HCl↑ (Hydrogen Chloride Gas)
     NaCl + NaHSO4                            ──(500°C)──>  Na2SO4 (Glauber's Salt) + HCl↑
```

1. **Apparatus:** Place rock salt or evaporated sea salt ($NaCl$) into a round-bottom flask fitted with a delivery tube leading into an upright absorption wash-bottle filled with cold water.
2. **Gas Evolution:** Slowly drip concentrated sulfuric acid onto the dry salt. Effervescence begins immediately at room temperature, releasing dense, choking hydrogen chloride gas ($HCl$).
3. **Water Absorption:** Hydrogen chloride gas is intensely soluble in water ($1\text{ liter of water absorbs 450 liters of }HCl\text{ gas}$). As the bubbles dissolve in the receiver water, the solution turns into fuming **Hydrochloric Acid** (muriatic acid) reaching $37\%$ concentration ($1.19\text{ g/cm}^3$).
4. **Aqua Regia:** Mixing **3 volumes of $37\%$ Hydrochloric Acid with 1 volume of $68\%$ Nitric Acid** produces *Aqua Regia* ("royal water"). The reaction forms nitrosyl chloride ($NOCl$) and nascent chlorine, giving the liquid the unique chemical power to dissolve noble gold, platinum, and tantalum.

---

## 4. The Chloralkali Electrolysis Cell

If direct current (DC) electricity from a water turbine or Savonius wind alternator (Tier 4) is passed through saturated saltwater brine, the chemical bonds of water and salt are severed simultaneously:

```
     2 NaCl + 2 H2O  ──(Electrical Energy / 4.5V DC)──>  Cl2↑ (Anode) + H2↑ (Cathode) + 2 NaOH (Electrolyte)
```

### Cell Fabrication:
1. **The Brine Bath:** Dissolve common salt in warm water until no more dissolves ($350\text{ g/L NaCl}$, specific gravity $1.20$).
2. **Anode (+) Material:** Must be inert carbon/graphite (scavenged from zinc-carbon batteries or carved from arc-lamp carbon rods). Metal anodes (iron, copper, lead) will rapidly dissolve and contaminate the solution.
3. **Cathode (-) Material:** Heavy iron mesh or stainless steel plate.
4. **Diaphragm Separator:** You must prevent the chlorine gas generated at the anode from mixing with the sodium hydroxide formed at the cathode; otherwise, they react to form household sodium hypochlorite ($NaOCl$, bleach) instead of pure caustic soda. Place a porous ceramic plate, asbestos slip, or tightly woven canvas membrane between the anode and cathode chambers.
5. **Electrical Parameters:** Apply **4.5 to 6 Volts DC** across the electrodes at a current density of $0.1–0.3\text{ A/cm}^2$.
6. **Gas Harvest:**
   - **Anode (+):** Greenish-yellow **Chlorine gas ($Cl_2$)** bubbles vigorously. Pipe into slaked lime ($Ca(OH)_2$) to create dry bleaching powder (calcium hypochlorite) for water purification.
   - **Cathode (-):** Colorless **Hydrogen gas ($H_2$)** bubbles off. Collect in inverted glass carboys as clean, ultra-high-temperature welding gas.
7. **Caustic Soda Harvest:** The liquid remaining in the cathode chamber is concentrated **Sodium Hydroxide ($NaOH$)**. Boil down in an iron kettle to evaporate water, yielding solid white flakes of pure caustic soda (melting point $318^\circ\text{C}$). Caustic soda is the industrial base required for papermaking, biodiesel production, lye saponification, and synthetic pharmaceuticals.
