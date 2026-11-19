---
id: t3-lead-acid-battery
tier: 5
tier_name: Tier 3 - Early Industrial
title: Planté Reversible Lead-Acid Storage Cell
category: "Electrical Storage"
read_time: 5 min
difficulty: High
tags: electricity, battery, energy storage, lead-acid, chemistry, sulfuric acid
summary: Fabricate a rechargeable chemical electrical battery from sheet lead, dilute sulfuric acid electrolyte, and cyclic electrolytic forming to store solar/hydro power for lighting and communications.
---

## Electro-Chemical Dynamics
Invented by Gaston Planté in 1859, this primary rechargeable battery requires zero manufactured paste chemicals. It consists of pure metallic lead ($Pb$) plates immersed in dilute sulfuric acid ($H_2SO_4$). When charged with direct current, electrolytic oxidation forms lead dioxide ($PbO_2$) on the positive electrode while spongy lead forms on the negative plate.

$$\text{Discharge: } Pb + PbO_2 + 2H_2SO_4 \rightleftharpoons 2PbSO_4 + 2H_2O \quad (E^\circ \approx 2.05\text{ V})$$

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="batGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="batAcidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#0369a1" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#075985" stop-opacity="0.7"/>
    </linearGradient>

    <linearGradient id="batPbO2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="50%" stop-color="#92400e"/>
      <stop offset="100%" stop-color="#451a03"/>
    </linearGradient>

    <linearGradient id="batLeadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>

    <!-- Marker -->
    <marker id="batArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#batGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#38bdf8"/>
  <text x="60" y="30" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">PLANTÉ REVERSIBLE LEAD-ACID SECONDARY CELL (2.1V)</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">PURE LEAD PLATES • 30% H2SO4 ELECTROLYTE (SG 1.25) • 6-CELL 12.6V RECHARGEABLE STORAGE BANK</text>

  <!-- Ground Plane -->
  <line x1="25" y1="365" x2="795" y2="365" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- ================= CENTRAL BATTERY CELL CUTAWAY ================= -->
  <!-- Acid-Resistant Glass / Stoneware Battery Jar -->
  <rect x="200" y="85" width="420" height="260" rx="10" fill="#0b1322" stroke="#475569" stroke-width="2.5"/>
  
  <!-- Dilute Sulfuric Acid Electrolyte Fluid -->
  <rect x="210" y="130" width="400" height="205" rx="5" fill="url(#batAcidGrad)"/>
  <line x1="210" y1="130" x2="610" y2="130" stroke="#38bdf8" stroke-width="2"/>
  <text x="410" y="325" fill="#7dd3fc" font-size="9" font-family="monospace" text-anchor="middle">Dilute H2SO4 Electrolyte (Specific Gravity 1.25)</text>

  <!-- Bubbles of Hydrogen / Oxygen Outgassing -->
  <g fill="#ffffff" fill-opacity="0.6">
    <circle cx="280" cy="160" r="3"/>
    <circle cx="285" cy="142" r="2.5"/>
    <circle cx="278" cy="190" r="2"/>
    <circle cx="535" cy="170" r="3"/>
    <circle cx="540" cy="148" r="2.5"/>
    <circle cx="532" cy="205" r="2"/>
  </g>

  <!-- ❶ POSITIVE ELECTRODE (+): Lead Dioxide (PbO2) -->
  <g id="cathodeGroup">
    <!-- Plate Body -->
    <rect x="260" y="60" width="38" height="240" rx="4" fill="url(#batPbO2Grad)" stroke="#b45309" stroke-width="2"/>
    <!-- Terminal Post (+) -->
    <rect x="272" y="40" width="14" height="22" rx="2" fill="#dc2626"/>
    <circle cx="279" cy="30" r="14" fill="#dc2626" stroke="#ef4444" stroke-width="1.5"/>
    <text x="279" y="36" fill="#ffffff" font-size="16" font-weight="bold" font-family="monospace" text-anchor="middle">+</text>
    
    <!-- Chemical Annotation inside plate -->
    <text x="279" y="180" fill="#fde68a" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="middle" transform="rotate(-90, 279, 180)">PbO2 (Chocolate Brown)</text>
    <text x="279" y="55" fill="#f87171" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">POSITIVE</text>
  </g>

  <!-- ❹ NON-CONDUCTIVE CEDAR / GLASS SPACERS -->
  <g stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4">
    <line x1="330" y1="110" x2="330" y2="295"/>
    <line x1="380" y1="110" x2="380" y2="295"/>
    <line x1="440" y1="110" x2="440" y2="295"/>
    <line x1="490" y1="110" x2="490" y2="295"/>
  </g>
  <rect x="365" y="200" width="90" height="22" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
  <text x="410" y="214" fill="#fde68a" font-size="7.5" font-family="monospace" text-anchor="middle">Inert Wood Separator</text>

  <!-- ❷ NEGATIVE ELECTRODE (-): Spongy Metallic Lead (Pb) -->
  <g id="anodeGroup">
    <!-- Plate Body -->
    <rect x="520" y="60" width="38" height="240" rx="4" fill="url(#batLeadGrad)" stroke="#94a3b8" stroke-width="2"/>
    <!-- Terminal Post (-) -->
    <rect x="532" y="40" width="14" height="22" rx="2" fill="#2563eb"/>
    <circle cx="539" cy="30" r="14" fill="#2563eb" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="539" y="36" fill="#ffffff" font-size="16" font-weight="bold" font-family="monospace" text-anchor="middle">-</text>
    
    <!-- Chemical Annotation inside plate -->
    <text x="539" y="180" fill="#f8fafc" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="middle" transform="rotate(-90, 539, 180)">Spongy Lead (Pb Grey)</text>
    <text x="539" y="55" fill="#60a5fa" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">NEGATIVE</text>
  </g>

  <!-- ❺ CELL VOLTAGE METER DISPLAY -->
  <g transform="translate(345, 95)">
    <rect width="130" height="52" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="65" y="20" fill="#a7f3d0" font-size="8" font-family="monospace" text-anchor="middle">OPEN CIRCUIT POTENTIAL</text>
    <text x="65" y="40" fill="#34d399" font-size="17" font-weight="bold" font-family="monospace" text-anchor="middle">2.10 V DC</text>
  </g>

  <!-- ================= TACTICAL NUMBERED BADGES ================= -->
  <!-- ❶ Cathode Badge -->
  <g transform="translate(25, 75)">
    <rect width="155" height="46" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b91c1c"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <text x="32" y="16" fill="#fca5a5" font-size="9" font-weight="bold" font-family="sans-serif">Lead Dioxide (+)</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Electrolytic oxidation</text>
    <text x="32" y="39" fill="#ef4444" font-size="7.5" font-family="monospace">Chocolate brown coat</text>
  </g>

  <!-- ❷ Anode Badge -->
  <g transform="translate(640, 75)">
    <rect width="155" height="46" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#1d4ed8"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <text x="32" y="16" fill="#93c5fd" font-size="9" font-weight="bold" font-family="sans-serif">Spongy Lead (-)</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Porous high surface area</text>
    <text x="32" y="39" fill="#3b82f6" font-size="7.5" font-family="monospace">Reduced pure metallic Pb</text>
  </g>

  <!-- ❸ Electrolyte Synthesis -->
  <g transform="translate(25, 140)">
    <rect width="155" height="46" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#0284c7"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <text x="32" y="16" fill="#7dd3fc" font-size="9" font-weight="bold" font-family="sans-serif">H2SO4 Electrolyte</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Specific gravity 1.25</text>
    <text x="32" y="39" fill="#38bdf8" font-size="7.5" font-family="monospace">30% acid / 70% pure water</text>
  </g>

  <!-- ❹ Forming Cycles -->
  <g transform="translate(25, 205)">
    <rect width="155" height="46" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b45309"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❹</text>
    <text x="32" y="16" fill="#fde68a" font-size="9" font-weight="bold" font-family="sans-serif">Forming Cycles</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">5–10 charge/discharge</text>
    <text x="32" y="39" fill="#f59e0b" font-size="7.5" font-family="monospace">Reverse polarity once</text>
  </g>

  <!-- ❺ 12V Battery Bank -->
  <g transform="translate(640, 140)">
    <rect width="155" height="46" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#047857"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❺</text>
    <text x="32" y="16" fill="#a7f3d0" font-size="9" font-weight="bold" font-family="sans-serif">12.6V Power Bank</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">6 cells wired in series</text>
    <text x="32" y="39" fill="#10b981" font-size="7.5" font-family="monospace">Powers radio &amp; lighting</text>
  </g>

  <!-- ❻ H2 Gas Blast Hazard -->
  <g transform="translate(640, 205)">
    <rect width="155" height="46" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="10" fill="#b91c1c"/>
    <text x="16" y="20" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❻</text>
    <text x="32" y="16" fill="#fca5a5" font-size="9" font-weight="bold" font-family="sans-serif">Ventilation Mandate</text>
    <text x="32" y="28" fill="#94a3b8" font-size="7.5" font-family="monospace">Releases 2H2 + O2 gas</text>
    <text x="32" y="39" fill="#ef4444" font-size="7.5" font-family="monospace">Spark = lethal blast</text>
  </g>

  <!-- ================= BOTTOM CHEMICAL REACTION & ACID RULE ================= -->
  <g transform="translate(25, 385)">
    <rect width="770" height="60" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
    <text x="20" y="20" fill="#38bdf8" font-size="9.5" font-weight="bold" font-family="monospace">DOUBLE SULFATE REACTION:</text>
    <text x="20" y="36" fill="#f8fafc" font-size="10" font-weight="bold" font-family="monospace">Pb + PbO2 + 2H2SO4 ⇌ 2PbSO4 + 2H2O (E° = 2.05V)</text>
    <text x="20" y="49" fill="#cbd5e1" font-size="8" font-family="monospace">Acid density drops during discharge (SG falls from 1.25 to 1.10)</text>

    <line x1="430" y1="8" x2="430" y2="52" stroke="#1e293b" stroke-width="1"/>
    <text x="450" y="20" fill="#ef4444" font-size="9.5" font-weight="bold" font-family="monospace">ACID DILUTION SURVIVAL RULE (AAA):</text>
    <text x="450" y="36" fill="#fca5a5" font-size="8.5" font-family="monospace">Always Add Acid to Water slowly with continuous stirring.</text>
    <text x="450" y="49" fill="#fca5a5" font-size="8.5" font-family="monospace">NEVER pour Water into Acid — causes explosive boiling &amp; acid blindness.</text>
  </g>
</svg>
```

## Cell Construction & Electrolyte Preparation
1. **Electrode Material:** Roll two thick sheets of scrap soft lead pipe, lead flashing, or melted wheel weights. The plates must never touch each other directly (use non-conductive slotted wooden dowels or perforated PVC sheets as separators).
2. **Electrolyte Synthesis:** Dilute commercial battery acid or distilled sulfurous condensate with pure rainwater or distilled water until specific gravity reads **1.20 to 1.25** (roughly 30% acid, 70% pure water). **Rule of Survival Chemistry:** *Always pour Acid into Water, NEVER Water into Acid (prevents explosive boiling).*
3. **Electrochemical "Forming" Cycles:** Fresh lead sheets store near-zero charge. You must connect a DC dynamo or solar array and charge until the positive plate oxidizes to deep chocolate brown. Discharge completely across a resistor or light bulb, reverse the polarity once to etch the surface grain, and recharge. After 5–10 cycles, high-capacity spongy lead develops.
4. **Bank Voltage:** Connect 6 cells in series ($6 \times 2.1\text{ V} = 12.6\text{ V}$) to create a standard 12V DC power bank capable of powering radio stations and 12V LED floodlights.

