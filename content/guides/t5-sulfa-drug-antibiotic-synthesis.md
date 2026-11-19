---
id: "t5-sulfa-drug-antibiotic-synthesis"
title: "Sulfanilamide Antibiotic Synthesis: The 25-Step Primitive Antibacterial Chemical Pathway"
tier: 5
category: "Chemical Synthesis"
read_time: "28 min"
difficulty: "Advanced"
summary: "The definitive laboratory manual for the historic first broad-spectrum synthetic antibacterial medicine (Sulfanilamide): complete organic synthesis from raw coal tar, aniline, acetic anhydride, chlorosulfonic acid, and ammonia, replicating the iconic Dr. Stone pharmaceutical roadmap to cure lethal bacterial infections."
tags: "antibiotics, sulfa drug, sulfanilamide, chemistry, medicine, organic synthesis, dr stone, senku, pharmacology"
---

Before the discovery of synthetic antibiotics, a scratched hand from a rusted nail or an airborne bout of *Streptococcus pneumoniae* carried a mortality rate exceeding $50\%$. Natural herbal remedies, honey, and willow bark can relieve pain or mild surface infections, but they cannot halt systemic bloodstream bacteremia or acute lobar pneumonia.

In 1935, Gerhard Domagk discovered that the sulfonamide group actively halts bacterial cell division. This manual details the complete organic synthesis of **Sulfanilamide ($C_6H_8N_2O_2S$)** from primitive base feedstocks: destructive coal tar distillation, acetic acid from fermented vinegar, ammonia from animal urea, and inorganic acids ($H_2SO_4$, $HNO_3$, $HCl$).

```
                    THE SULFANILAMIDE SYNTHETIC PATHWAY
                    
               [ Bituminous Coal / Hardwood Tar ]
                                │
                      (Fractional Distillation)
                                ▼
                         Benzene (C6H6)
                                │
               (+ HNO3 / H2SO4 Nitrating Mixture @ 50°C)
                                ▼
                     Nitrobenzene (C6H5NO2)
                                │
                   (+ Iron Scrap / HCl Reduction)
                                ▼
                         Aniline (C6H5NH2)
                                │
                    (+ Acetic Anhydride / CH3COOH)
                                ▼
                      Acetanilide (C8H9NO)
                                │
                   (+ Chlorosulfonic Acid / HSO3Cl)
                                ▼
             p-Acetamidobenzenesulfonyl Chloride
                                │
                   (+ Concentrated Aqueous NH3)
                                ▼
               p-Acetamidobenzenesulfonamide
                                │
                   (Dilute HCl Acid Hydrolysis)
                                ▼
               SULFANILAMIDE (C6H8N2O2S)
         (Broad-Spectrum Synthetic Antibacterial Crystals)
```

---

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="sulfaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>
    <linearGradient id="crystalShine" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#86efac"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <marker id="arrowGold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
    </marker>
  </defs>

  <!-- Obsidian Background & Tactical Grid -->
  <rect x="0" y="0" width="820" height="460" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="460" fill="url(#sulfaGrid)"/>

  <!-- Blueprint Header Title -->
  <rect x="25" y="15" width="770" height="32" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="40" y="36" fill="#10b981" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">SULFANILAMIDE BROAD-SPECTRUM ANTIBIOTIC SYNTHESIS FLOWSHEET</text>
  <text x="770" y="36" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">TOTAL ORGANIC CHEMICAL SYNTHESIS</text>

  <!-- PHASE 1: COAL TAR TO ANILINE (LEFT) -->
  <g id="phase1" transform="translate(25, 60)">
    <rect x="0" y="0" width="245" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Benzene Ring Molecular Icon -->
    <polygon points="122,48 147,62 147,90 122,104 97,90 97,62" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="122" cy="76" r="14" fill="none" stroke="#38bdf8" stroke-width="1.8"/>
    <text x="122" y="122" fill="#38bdf8" font-size="8" font-family="monospace" text-anchor="middle">Benzene C₆H₆ (BP 80°C)</text>

    <!-- Fractionation & Nitration Specs Pill -->
    <rect x="18" y="140" width="210" height="75" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1"/>
    <text x="28" y="158" fill="#38bdf8" font-size="8.5" font-weight="bold" font-family="monospace">1. FRACTIONATION &amp; NITRATION:</text>
    <text x="28" y="173" fill="#bae6fd" font-size="8.5" font-weight="bold" font-family="monospace">Coal Tar ──&gt; Benzene Fraction</text>
    <text x="28" y="187" fill="#cbd5e1" font-size="8" font-family="monospace">+ Mixed Acid (HNO₃ + H₂SO₄ @ 50°C)</text>
    <text x="28" y="200" fill="#fca5a5" font-size="8" font-family="monospace">Yields Nitrobenzene (Almond oil liquid)</text>

    <!-- Bechamp Reduction Pill -->
    <rect x="18" y="225" width="210" height="85" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="244" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">2. BÉCHAMP IRON REDUCTION:</text>
    <text x="28" y="259" fill="#86efac" font-size="9" font-weight="bold" font-family="monospace">C₆H₅NO₂ + Fe + HCl ──&gt; Aniline</text>
    <text x="28" y="274" fill="#cbd5e1" font-size="8" font-family="monospace">Reflux with iron filings, steam distill</text>
    <text x="28" y="288" fill="#fde68a" font-size="8" font-family="monospace">Yields Aniline (BP 184°C toxic amine base)</text>
    <text x="28" y="302" fill="#94a3b8" font-size="7.5" font-family="monospace">Precursor foundation for sulfa core</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="145" height="20" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#0284c7"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
    <text x="83" y="24" fill="#bae6fd" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">TAR TO ANILINE</text>
  </g>

  <!-- PHASE 2: AMINE PROTECTION & CHLOROSULFONATION (CENTER) -->
  <g id="phase2" transform="translate(285, 60)">
    <rect x="0" y="0" width="250" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Reaction Flask & Ice Bath Graphic (0°C) -->
    <rect x="70" y="50" width="110" height="75" rx="5" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="125" cy="85" r="22" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <ellipse cx="125" cy="92" rx="16" ry="8" fill="#f59e0b" opacity="0.4"/>
    <text x="125" y="88" fill="#fde68a" font-size="8" font-family="monospace" text-anchor="middle">HSO₃Cl @ 0°C</text>
    <text x="125" y="138" fill="#38bdf8" font-size="7.5" font-family="monospace" text-anchor="middle">Ice-Salt Cooling Bath</text>

    <!-- Amine Protection Pill -->
    <rect x="18" y="150" width="214" height="75" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1"/>
    <text x="28" y="168" fill="#f59e0b" font-size="8.5" font-weight="bold" font-family="monospace">3. AMINE ACETYLATION:</text>
    <text x="28" y="183" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace">Aniline + Glacial Acetic Acid</text>
    <text x="28" y="197" fill="#cbd5e1" font-size="8" font-family="monospace">Reflux 4 hours ──&gt; Acetanilide</text>
    <text x="28" y="210" fill="#94a3b8" font-size="8" font-family="monospace">Protects -NH₂ group from destruction</text>

    <!-- Chlorosulfonation Pill -->
    <rect x="18" y="235" width="214" height="75" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="254" fill="#f59e0b" font-size="8.5" font-weight="bold" font-family="monospace">4. CHLOROSULFONATION:</text>
    <text x="28" y="269" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace">+ Chlorosulfonic Acid (HSO₃Cl)</text>
    <text x="28" y="283" fill="#cbd5e1" font-size="8" font-family="monospace">Add dropwise at 0°C, heat to 60°C</text>
    <text x="28" y="299" fill="#fca5a5" font-size="8" font-family="monospace">Quench over crushed ice ──&gt; p-ASC</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="150" height="20" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#d97706"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
    <text x="86" y="24" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">CHLOROSULFONATION</text>
  </g>

  <!-- PHASE 3: AMMONIATION & ACID HYDROLYSIS (RIGHT) -->
  <g id="phase3" transform="translate(550, 60)">
    <rect x="0" y="0" width="245" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Pure Sulfanilamide Crystal Dish -->
    <ellipse cx="122" cy="80" rx="42" ry="16" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <!-- Sparkling needle crystals -->
    <line x1="100" y1="80" x2="120" y2="74" stroke="#ffffff" stroke-width="2"/>
    <line x1="115" y1="82" x2="140" y2="78" stroke="#ffffff" stroke-width="2"/>
    <line x1="105" y1="76" x2="130" y2="84" stroke="#86efac" stroke-width="2"/>
    <text x="122" y="112" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">Pure Sulfanilamide Needle Crystals</text>
    <text x="122" y="125" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">Melting Point: Exactly 165°C</text>

    <!-- Ammoniation Reaction Pill -->
    <rect x="18" y="150" width="210" height="75" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
    <text x="28" y="168" fill="#10b981" font-size="8.5" font-weight="bold" font-family="monospace">5. AMMONIATION (SULFONAMIDE):</text>
    <text x="28" y="183" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">+ Concentrated Aqueous NH₃</text>
    <text x="28" y="197" fill="#cbd5e1" font-size="8" font-family="monospace">Heat slurry to 70°C for 30 mins</text>
    <text x="28" y="210" fill="#94a3b8" font-size="8" font-family="monospace">Forms robust -SO₂NH₂ covalent bond</text>

    <!-- Acid Hydrolysis Pill -->
    <rect x="18" y="235" width="210" height="75" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="254" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">6. ACID HYDROLYSIS &amp; PRECIPITATION:</text>
    <text x="28" y="269" fill="#cbd5e1" font-size="8" font-family="monospace">Boil with dilute HCl to strip acetyl group</text>
    <text x="28" y="283" fill="#cbd5e1" font-size="8" font-family="monospace">Neutralize with Na₂CO₃ to pH 7.0</text>
    <text x="28" y="299" fill="#38bdf8" font-size="8" font-family="monospace">Recrystallize from boiling water</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="155" height="20" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#10b981"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
    <text x="88" y="24" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">PURE SULFANILAMIDE</text>
  </g>

  <!-- PHARMACOLOGY BACTERIOSTATIC MANDATE FOOTER -->
  <rect x="25" y="402" width="770" height="42" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
  <circle cx="45" cy="423" r="10" fill="#10b981"/>
  <text x="45" y="427" fill="#0f172a" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">℞</text>
  <text x="65" y="420" fill="#86efac" font-size="10.5" font-weight="bold" font-family="monospace">BACTERIOSTATIC MECHANISM: COMPETITIVELY INHIBITS DIHYDROPTEROATE SYNTHASE</text>
  <text x="65" y="434" fill="#cbd5e1" font-size="8.5" font-family="monospace">Mimics PABA to starve bacteria of folic acid and thymine. Halts sepsis, streptococcal gangrene, dysentery, pneumonia, and battlefield wound mortality.</text>
</svg>
```

---

## 1. Step-by-Step Organic Synthesis Protocol

### Step 1: Fractional Coal Tar Distillation (Benzene Isolation)
1. Pack an iron retort with bituminous coal or pitch and heat to 800°C. Collect the condensing oily black tar.
2. Transfer coal tar to a glass distillation apparatus fitted with a thermometer.
3. Collect the "light oil" fraction boiling between **75°C and 85°C**.
4. Wash the distillate with concentrated sulfuric acid to polymerize impurities, followed by a wash with dilute sodium hydroxide.
5. Re-distill through a fractionating column. Collect pure, water-clear **Benzene ($C_6H_6$)** at **80.1°C**.

### Step 2: Nitration of Benzene (Nitrobenzene)
```
     C6H6 (Benzene) + HNO3  ──(H2SO4 catalyst / 50°C)──>  C6H5NO2 (Nitrobenzene) + H2O
```
1. Prepare a "nitrating mixture" by carefully adding **60 ml of concentrated sulfuric acid ($H_2SO_4$, 98%)** to **50 ml of concentrated nitric acid ($HNO_3$, 68%)** in an ice bath.
2. In a round-bottom flask, add **40 ml of pure benzene**.
3. Slowly add the cold nitrating mixture dropwise through a separating funnel over 45 minutes, swirling constantly. **Keep the temperature strictly below 55°C** using an ice bath (temperatures above 60°C produce explosive dinitrobenzene).
4. After addition, warm the mixture to 60°C in a water bath for 40 minutes to complete the reaction.
5. Pour into cold water. **Nitrobenzene ($C_6H_5NO2$)** drops out as a dense, heavy yellow oil smelling distinctly of bitter almonds. Separate using a separatory funnel.

### Step 3: The Béchamp Reduction (Nitrobenzene to Aniline)
```
     4 C6H5NO2 + 9 Fe + 4 H2O  ──(HCl catalyst / 100°C)──>  4 C6H5NH2 (Aniline) + 3 Fe3O4
```
1. In a large flask fitted with an upright reflux condenser, place **50 grams of fine cast iron filings or degreased steel wool**, **25 ml of nitrobenzene**, and **50 ml of water**.
2. Heat to boiling, then slowly add **15 ml of concentrated hydrochloric acid ($HCl$)** through the condenser in 2 ml increments. A violent exothermic reaction begins, generating steam and hydrogen.
3. Keep the reflux vigorous for 2 hours until the yellow oily layer of nitrobenzene completely disappears.
4. Add sodium hydroxide ($NaOH$) until the mixture is strongly alkaline ($pH > 11$) to liberate free aniline from its hydrochloride salt.
5. Steam-distill the mixture. **Aniline ($C_6H_5NH_2$)** carries over with the steam as a milky suspension that settles into an amber oily liquid ($BP: 184^\circ\text{C}$).

### Step 4: Amine Protection (Acetanilide Formation)
If you add chlorosulfonic acid directly to raw aniline, the acid will attack the basic amino group ($-\text{NH}_2$) violently, destroying the molecule. The amino group must be temporarily "protected" by converting it into an amide:
```
     C6H5NH2 (Aniline) + (CH3CO)2O (Acetic Anhydride)  ──>  C6H5NHCOCH3 (Acetanilide) + CH3COOH
```
1. Mix **20 ml of aniline** with **25 ml of glacial acetic acid** and **25 ml of acetic anhydride** (synthesized by distilling dry sodium acetate with sulfur chloride or acetyl chloride).
2. Reflux gently for 30 minutes.
3. Pour the hot solution into 300 ml of ice-cold water. Pure **Acetanilide ($C_8H_9NO$)** instantly precipitates out as shimmering, pearl-white crystalline plates.
4. Filter and dry thoroughly. Melting point must be **113°C–115°C**.

### Step 5: Chlorosulfonation (Adding the Sulfonyl Chloride Group)
```
     C6H5NHCOCH3 + 2 ClSO3H  ──(0°C - 20°C)──>  CH3CONH-C6H4-SO2Cl (p-Acetamidobenzenesulfonyl Chloride) + H2SO4 + HCl↑
```
1. Dry acetanilide powder completely in an oven (any residual water will explosively decompose chlorosulfonic acid).
2. In a bone-dry flask in an ice-water bath, place **50 ml of chlorosulfonic acid ($HSO_3Cl$)** (synthesized by bubbling dry $HCl$ gas into sulfur trioxide $SO_3$).
3. Add **20 grams of dry acetanilide** in small spatulas over 30 minutes, keeping the temperature below 15°C.
4. Warm the flask to 60°C on a water bath for 1 hour to drive the reaction to completion ($HCl$ gas will vent off).
5. Very slowly and cautiously, pour the oily reaction mixture onto crushed ice while stirring vigorously. The product precipitates as a granular, chalky-white solid: **p-acetamidobenzenesulfonyl chloride**. Filter immediately and wash with ice water.

### Step 6: Amination (Creating the Sulfonamide Linkage)
```
     CH3CONH-C6H4-SO2Cl + 2 NH3  ──(70°C)──>  CH3CONH-C6H4-SO2NH2 (p-Acetamidobenzenesulfonamide) + NH4Cl
```
1. Transfer the damp sulfonyl chloride cake immediately into a flask containing **100 ml of concentrated aqueous ammonia ($NH_3, 28\%$)** (derived from distilling fermented urine or ammonium sulfate with lime).
2. Heat to 70°C for 20 minutes while stirring. The chloride is replaced by the amino group, forming a thick paste of **p-acetamidobenzenesulfonamide**.

### Step 7: Deacetylation & Final Acid Hydrolysis (Sulfanilamide)
```
     CH3CONH-C6H4-SO2NH2 + H2O + HCl  ──(Boiling)──>  H2N-C6H4-SO2NH2 (Sulfanilamide) + CH3COOH
```
1. Add **30 ml of concentrated $HCl$ and 30 ml of water** directly to the reaction flask.
2. Boil gently under reflux for 45 minutes. The protective acetyl group is cleaved off, releasing acetic acid and leaving sulfanilamide hydrochloride dissolved in the hot water.
3. Allow the liquid to cool to room temperature. Add a small pinch of activated charcoal powder, boil for 2 minutes, and filter hot to remove colored tarry residues.
4. Slowly neutralize the clear filtrate by adding solid **sodium carbonate ($Na_2CO_3$, washing soda)** or baking soda ($NaHCO_3$) until effervescence ceases ($pH \approx 7$).
5. As neutrality is reached, **pure Sulfanilamide** crashes out of solution as glittering, snow-white needle-like crystals.
6. Chill in an ice bath, filter through clean linen, and dry in warm air. **Melting point: 165°C–166°C**.

---

## 2. Clinical Dosage & Austere Medical Administration

Sulfanilamide is a **bacteriostatic antibiotic**. It does not instantly burst cell walls like penicillin; instead, it is an exact structural analog of *para-aminobenzoic acid* (PABA). Bacteria absorb sulfanilamide by mistake, which permanently jams their *dihydropteroate synthase* enzyme, stopping folic acid synthesis and preventing bacterial DNA replication. The body's immune white blood cells then devour the immobilized bacteria.

- **Indications:** Acute lobar pneumonia (*Streptococcus pneumoniae*), streptococcal wound septicemia, postpartum childbed fever, bacterial meningitis, and dysentery.
- **Topical Wound Dressing:** Crush pure white sulfanilamide crystals into a fine flour. Dust directly into open surgical cuts, compound fractures, and deep puncture wounds (2–5 grams) before bandaging to completely prevent gangrene and wound sepsis.
- **Oral Dosing Protocol for Severe Pneumonia:**
  - *Loading Dose:* **2.0 grams** orally with a large cup of water containing a half-teaspoon of baking soda (alkalizing the urine prevents sulfanilamide crystals from precipitating in the renal tubules).
  - *Maintenance Dose:* **1.0 gram every 4 hours** day and night for 5 full days.
  - *Clinical Rule:* Do not stop treatment when the fever drops; maintain the full 5-day cycle to prevent resistant bacterial relapse.
