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
<svg viewBox="0 0 700 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="waterClr" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0369a1" stop-opacity="0.6"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="700" height="380" fill="#090d16" rx="8"/>

  <!-- Method 1: Household Bleach (NaOCl 5-8%) -->
  <g transform="translate(30, 25)">
    <rect x="0" y="0" width="200" height="275" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="100" y="26" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">BLEACH (5-8.25%)</text>
    
    <!-- Dropper icon -->
    <path d="M95 42 L105 42 L103 72 L97 72 Z" fill="#94a3b8"/>
    <circle cx="100" cy="82" r="3.5" fill="#38bdf8"/>
    <circle cx="100" cy="94" r="2.5" fill="#38bdf8"/>

    <!-- Clear Water Spec -->
    <rect x="15" y="108" width="170" height="60" rx="5" fill="#1e293b"/>
    <text x="25" y="125" fill="#94a3b8" font-size="10" font-family="monospace">CLEAR WATER:</text>
    <text x="25" y="145" fill="#7dd3fc" font-size="14" font-weight="bold" font-family="monospace">2 Drops / Liter</text>
    <text x="25" y="160" fill="#64748b" font-size="9.5" font-family="monospace">• 8 drops / gallon</text>

    <!-- Murky Water Spec -->
    <rect x="15" y="176" width="170" height="60" rx="5" fill="#1e293b"/>
    <text x="25" y="193" fill="#94a3b8" font-size="10" font-family="monospace">CLOUDY / FLOOD:</text>
    <text x="25" y="213" fill="#f59e0b" font-size="14" font-weight="bold" font-family="monospace">4 Drops / Liter</text>
    <text x="25" y="228" fill="#64748b" font-size="9.5" font-family="monospace">• 16 drops / gallon</text>

    <text x="100" y="258" fill="#fca5a5" font-size="10" font-family="monospace" text-anchor="middle">Wait: 30 Mins Min</text>
  </g>

  <!-- Method 2: Tincture of Iodine (2%) -->
  <g transform="translate(250, 25)">
    <rect x="0" y="0" width="200" height="275" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="100" y="26" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">IODINE (2% TINCTURE)</text>
    
    <!-- Iodine bottle icon -->
    <rect x="85" y="44" width="30" height="42" rx="3" fill="#78350f" stroke="#b45309" stroke-width="1.5"/>
    <rect x="92" y="38" width="16" height="7" fill="#d97706"/>

    <!-- Clear Water Spec -->
    <rect x="15" y="108" width="170" height="60" rx="5" fill="#1e293b"/>
    <text x="25" y="125" fill="#94a3b8" font-size="10" font-family="monospace">CLEAR WATER:</text>
    <text x="25" y="145" fill="#fde68a" font-size="14" font-weight="bold" font-family="monospace">5 Drops / Liter</text>
    <text x="25" y="160" fill="#64748b" font-size="9.5" font-family="monospace">• 20 drops / gallon</text>

    <!-- Cold / Murky Spec -->
    <rect x="15" y="176" width="170" height="60" rx="5" fill="#1e293b"/>
    <text x="25" y="193" fill="#94a3b8" font-size="10" font-family="monospace">COLD / CLOUDY:</text>
    <text x="25" y="213" fill="#f59e0b" font-size="14" font-weight="bold" font-family="monospace">10 Drops / Liter</text>
    <text x="25" y="228" fill="#64748b" font-size="9.5" font-family="monospace">• 40 drops / gallon</text>

    <text x="100" y="258" fill="#fca5a5" font-size="10" font-family="monospace" text-anchor="middle">Unsafe for Pregnant Women</text>
  </g>

  <!-- Method 3: SODIS (Solar UV Disinfection) -->
  <g transform="translate(470, 25)">
    <rect x="0" y="0" width="200" height="275" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <text x="100" y="26" fill="#10b981" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">SODIS (SOLAR UV)</text>
    
    <!-- Bottle on metal sheet -->
    <ellipse cx="100" cy="56" rx="14" ry="14" fill="#f59e0b" opacity="0.6"/>
    <rect x="75" y="70" width="50" height="22" rx="5" fill="#0284c7" opacity="0.5" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="60" y1="96" x2="140" y2="96" stroke="#94a3b8" stroke-width="3"/>
    <text x="100" y="104" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">Tin Roof Reflector</text>

    <!-- Full Sunshine Spec -->
    <rect x="15" y="108" width="170" height="60" rx="5" fill="#1e293b"/>
    <text x="25" y="125" fill="#94a3b8" font-size="10" font-family="monospace">FULL SUNSHINE:</text>
    <text x="25" y="145" fill="#86efac" font-size="14" font-weight="bold" font-family="monospace">6 Hours Minimum</text>
    <text x="25" y="160" fill="#64748b" font-size="9.5" font-family="monospace">• Direct sunlight only</text>

    <!-- Overcast Spec -->
    <rect x="15" y="176" width="170" height="60" rx="5" fill="#1e293b"/>
    <text x="25" y="193" fill="#94a3b8" font-size="10" font-family="monospace">OVERCAST / CLOUDY:</text>
    <text x="25" y="213" fill="#f59e0b" font-size="14" font-weight="bold" font-family="monospace">48 Hours (2 Days)</text>
    <text x="25" y="228" fill="#64748b" font-size="9.5" font-family="monospace">• Extended UV contact</text>

    <text x="100" y="258" fill="#a7f3d0" font-size="10" font-family="monospace" text-anchor="middle">PET Bottle (&lt; 2L) Only</text>
  </g>

  <!-- Bottom Verification Rule (Clean 2-Line Box) -->
  <rect x="25" y="318" width="650" height="46" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
  <text x="350" y="336" fill="#f8fafc" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">THE SNIFF TEST: Treated water MUST smell faintly of chlorine after 30 mins.</text>
  <text x="350" y="352" fill="#fca5a5" font-size="10" font-family="monospace" text-anchor="middle">If no faint chlorine odor is detected, repeat dose &amp; wait an additional 15 mins.</text>
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
