---
id: t1-chemical-water-disinfection
tier: 1
tier_name: Tier 1 - Immediate Survival
title: Chemical Water Disinfection & Titration
category: "Water & Life Support"
read_time: 5 min
difficulty: Low
tags: water, disinfection, chlorine, bleach, iodine, sodis, pathogens, giardia
summary: Neutralize waterborne enteric viruses, bacteria, and amoebic cysts using calculated titrations of sodium hypochlorite (household bleach), tincture of iodine, and solar ultraviolet PET radiation.
---

## Chemical Disinfection Mechanisms
Pathogens such as *Vibrio cholerae*, *Salmonella typhi*, and hepatitis viruses possess lipid bilayers and enzymes that are destroyed by strong oxidizers. Chlorine (as hypochlorous acid $HOCl$) penetrates bacterial walls and oxidizes sulfhydryl bonds within 30 minutes. **Protozoan cysts (Cryptosporidium and Giardia)** have hard proteinaceous shells that resist low-dose chlorine, requiring extended contact times or mechanical micro-filtration.

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="chemGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="chemWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.4"/>
    </linearGradient>

    <!-- Markers -->
    <marker id="chemArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#chemGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#38bdf8"/>
  <text x="60" y="30" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">EMERGENCY CHEMICAL WATER DISINFECTION &amp; TITRATION</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">OXIDATIVE PATHOGEN LYSIS • 30-MIN MINIMUM CONTACT TIME • TITRATION DOSING MATRIX</text>

  <!-- Flow Connector Arrows -->
  <line x1="265" y1="210" x2="285" y2="210" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#chemArrow)"/>
  <line x1="535" y1="210" x2="555" y2="210" stroke="#10b981" stroke-width="2.5" marker-end="url(#chemArrow)"/>

  <!-- ================= PANEL 1: HOUSEHOLD BLEACH (NaOCl 5-8.25%) ================= -->
  <g transform="translate(25, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#38bdf8" stroke-width="1.5"/>
    
    <!-- Step Badge ❶ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#0284c7"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <text x="44" y="26" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="sans-serif">Bleach (NaOCl)</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">Unscented 5%–8.25% Solution</text>

    <!-- Dropper Pipette Graphic -->
    <g transform="translate(100, 52)">
      <rect x="0" y="0" width="16" height="8" rx="2" fill="#ef4444"/>
      <path d="M 4 8 L 12 8 L 10 32 L 6 32 Z" fill="#94a3b8"/>
      <line x1="8" y1="32" x2="8" y2="38" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="8" cy="44" r="3.5" fill="#38bdf8"/>
      <circle cx="8" cy="54" r="2.5" fill="#38bdf8"/>
    </g>

    <!-- Clear Water Dosing Card -->
    <rect x="15" y="118" width="210" height="58" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="136" fill="#94a3b8" font-size="9" font-family="monospace">CLEAR WATER DOSAGE:</text>
    <text x="25" y="156" fill="#38bdf8" font-size="15" font-weight="bold" font-family="monospace">2 Drops / Liter</text>
    <text x="25" y="170" fill="#64748b" font-size="8.5" font-family="monospace">• 8 Drops per Gallon (3.8L)</text>

    <!-- Turbid Water Dosing Card -->
    <rect x="15" y="182" width="210" height="58" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="200" fill="#f59e0b" font-size="9" font-family="monospace">TURBID / FLOOD WATER:</text>
    <text x="25" y="220" fill="#fde68a" font-size="15" font-weight="bold" font-family="monospace">4 Drops / Liter</text>
    <text x="25" y="234" fill="#64748b" font-size="8.5" font-family="monospace">• 16 Drops per Gallon</text>

    <!-- Contact Time Bar -->
    <rect x="15" y="248" width="210" height="56" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="120" y="268" fill="#38bdf8" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">MANDATORY 30-MIN WAIT</text>
    <text x="120" y="284" fill="#cbd5e1" font-size="8" font-family="monospace" text-anchor="middle">Agitate vigorously after dosing</text>
    <text x="120" y="296" fill="#fca5a5" font-size="8" font-family="monospace" text-anchor="middle">Never use scented/detergent bleach</text>
  </g>

  <!-- ================= PANEL 2: TINCTURE OF IODINE (2% USP) ================= -->
  <g transform="translate(290, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#f59e0b" stroke-width="1.5"/>
    
    <!-- Step Badge ❷ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#b45309"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <text x="44" y="26" fill="#fde68a" font-size="10" font-weight="bold" font-family="sans-serif">Iodine Tincture (2%)</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">USP Elemental Iodine Drops</text>

    <!-- Amber Iodine Bottle Graphic -->
    <g transform="translate(105, 52)">
      <rect x="0" y="8" width="30" height="42" rx="4" fill="#78350f" stroke="#b45309" stroke-width="1.5"/>
      <rect x="7" y="0" width="16" height="8" rx="1" fill="#d97706"/>
      <text x="15" y="34" fill="#fde68a" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">I2</text>
    </g>

    <!-- Clear Water Spec -->
    <rect x="15" y="118" width="210" height="58" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="136" fill="#94a3b8" font-size="9" font-family="monospace">CLEAR WATER DOSAGE:</text>
    <text x="25" y="156" fill="#fde68a" font-size="15" font-weight="bold" font-family="monospace">5 Drops / Liter</text>
    <text x="25" y="170" fill="#64748b" font-size="8.5" font-family="monospace">• 20 Drops per Gallon</text>

    <!-- Cold Water Spec -->
    <rect x="15" y="182" width="210" height="58" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="200" fill="#f59e0b" font-size="9" font-family="monospace">COLD STREAM (&lt;10°C):</text>
    <text x="25" y="220" fill="#ef4444" font-size="15" font-weight="bold" font-family="monospace">10 Drops / Liter</text>
    <text x="25" y="234" fill="#64748b" font-size="8.5" font-family="monospace">• Wait 60 minutes minimum!</text>

    <!-- Health Warning Card -->
    <rect x="15" y="248" width="210" height="56" rx="4" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>
    <text x="120" y="268" fill="#fca5a5" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">CONTRAINDICATION WARNING</text>
    <text x="120" y="284" fill="#cbd5e1" font-size="8" font-family="monospace" text-anchor="middle">Unsafe for pregnant individuals</text>
    <text x="120" y="296" fill="#cbd5e1" font-size="8" font-family="monospace" text-anchor="middle">Max 3 weeks continuous usage</text>
  </g>

  <!-- ================= PANEL 3: SODIS (SOLAR UV-A DISINFECTION) ================= -->
  <g transform="translate(555, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#10b981" stroke-width="1.5"/>
    
    <!-- Step Badge ❸ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#047857"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <text x="44" y="26" fill="#a7f3d0" font-size="10" font-weight="bold" font-family="sans-serif">SODIS (Solar UV-A)</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">Zero-Chemical Radiation Lysis</text>

    <!-- Sun & PET Bottle Graphic -->
    <g transform="translate(50, 52)">
      <circle cx="25" cy="20" r="14" fill="#fde047" fill-opacity="0.8"/>
      <!-- PET Bottle Horizontal on Reflector Sheet -->
      <rect x="55" y="14" width="75" height="24" rx="6" fill="url(#chemWaterGrad)" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="130" y="20" width="8" height="12" fill="#0284c7"/>
      <!-- Reflector corrugated sheet -->
      <line x1="45" y1="42" x2="145" y2="42" stroke="#94a3b8" stroke-width="3"/>
      <text x="95" y="52" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Tin Roof Reflector</text>
    </g>

    <!-- Full Sun Dosing Card -->
    <rect x="15" y="118" width="210" height="58" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="136" fill="#94a3b8" font-size="9" font-family="monospace">FULL INTENSE SUNSHINE:</text>
    <text x="25" y="156" fill="#86efac" font-size="15" font-weight="bold" font-family="monospace">6 Hours Direct UV</text>
    <text x="25" y="170" fill="#64748b" font-size="8.5" font-family="monospace">• UV-A (320–400nm) + 50°C heat</text>

    <!-- Overcast Sky Dosing Card -->
    <rect x="15" y="182" width="210" height="58" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="200" fill="#f59e0b" font-size="9" font-family="monospace">OVERCAST / CLOUDY SKY:</text>
    <text x="25" y="220" fill="#fde68a" font-size="15" font-weight="bold" font-family="monospace">48 Hours (2 Days)</text>
    <text x="25" y="234" fill="#64748b" font-size="8.5" font-family="monospace">• Continuous outdoor exposure</text>

    <!-- Bottle Spec Card -->
    <rect x="15" y="248" width="210" height="56" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
    <text x="120" y="268" fill="#a7f3d0" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">PET PLASTIC BOTTLES ONLY</text>
    <text x="120" y="284" fill="#cbd5e1" font-size="8" font-family="monospace" text-anchor="middle">Max bottle volume: &lt;2 Liters</text>
    <text x="120" y="296" fill="#cbd5e1" font-size="8" font-family="monospace" text-anchor="middle">Shake 20s to oxygenate before sun</text>
  </g>

  <!-- ================= BOTTOM RESIDUAL SNIFF TEST MANDATE ================= -->
  <g transform="translate(25, 388)">
    <rect width="770" height="58" rx="6" fill="#0b1322" stroke="#38bdf8" stroke-width="1.2"/>
    <circle cx="45" cy="29" r="14" fill="#0369a1"/>
    <text x="45" y="34" fill="#ffffff" font-size="14" font-weight="bold" font-family="monospace" text-anchor="middle">✓</text>
    
    <text x="70" y="25" fill="#38bdf8" font-size="10" font-weight="bold" font-family="monospace">THE RESIDUAL ODOR SNIFF TEST MANDATE:</text>
    <text x="70" y="42" fill="#cbd5e1" font-size="8.5" font-family="monospace">Treated water MUST have a distinct, faint chlorine or iodine scent after the 30-minute reaction period.</text>
    <text x="70" y="52" fill="#fde68a" font-size="8" font-family="monospace">If no faint oxidant scent is detected, all chemical has been consumed by organics: DOUBLE DOSE &amp; wait 15 more minutes.</text>
  </g>
</svg>
```

## Protocol Dosing & Titration Tables
1. **Sodium Hypochlorite (Household Bleach):**
   - Check label: Ensure it is **unscented regular bleach with NO detergents or corrosion inhibitors** ($5.25\%\text{ to }8.25\%\text{ NaOCl}$).
   - *Clear Water:* Add **2 drops per liter** (or 8 drops per gallon).
   - *Turbid / Floodwater:* Pre-filter through cloth, then add **4 drops per liter** (16 drops per gallon).
   - *Reaction Wait:* Agitate vigorously. Let stand for **30 minutes**. Water must have a slight residual chlorine odor. If no odor is present, repeat the dose and wait an additional 15 minutes.
2. **Tincture of Iodine (2% USP):**
   - Add **5 drops per liter** for clear water ($20\text{ drops per gallon}$).
   - For icy cold river water ($<10^\circ\text{C}$), double dose to **10 drops per liter** and wait **60 minutes**.
   - *Contraindication:* Do not use continuously for more than 3 weeks; avoid in pregnant individuals and those with thyroid disorders.
3. **SODIS (Solar Disinfection):**
   - Fill clear PET plastic beverage bottles ($<2\text{ liters}$; bottle must be clear and scratch-free).
   - Shake vigorously for 20 seconds to oxygenate water (oxygen radicals enhance UV cell lysis).
   - Lay flat on a corrugated galvanized iron roof. UV-A rays ($320–400\text{ nm}$) plus solar heating ($>50^\circ\text{C}$) sanitize bacteria within **6 hours of direct sunlight**.
