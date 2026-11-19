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
<svg viewBox="0 0 700 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="acidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0369a1" stop-opacity="0.5"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="700" height="360" fill="#090d16"/>

  <!-- Acid-Resistant Glass / Ceramic Container -->
  <rect x="180" y="70" width="340" height="250" rx="12" fill="#0f172a" stroke="#475569" stroke-width="3"/>
  <rect x="190" y="110" width="320" height="200" rx="6" fill="url(#acidGrad)"/>
  <text x="350" y="300" fill="#7dd3fc" font-size="11" font-family="monospace" text-anchor="middle">Dilute H2SO4 Electrolyte (Specific Gravity 1.25)</text>

  <!-- Cathode (+) Positive Terminal (PbO2 Chocolate Brown) -->
  <rect x="230" y="40" width="30" height="240" rx="4" fill="#78350f" stroke="#b45309" stroke-width="2"/>
  <circle cx="245" cy="30" r="12" fill="#dc2626"/>
  <text x="245" y="35" fill="#ffffff" font-size="14" font-weight="bold" font-family="monospace" text-anchor="middle">+</text>
  <text x="245" y="15" fill="#f87171" font-size="11" font-family="monospace" text-anchor="middle">Positive (+)</text>
  <text x="245" y="170" fill="#fde68a" font-size="10" font-family="monospace" text-anchor="middle" transform="rotate(-90 245 170)">Lead Dioxide (PbO2)</text>

  <!-- Porous Separators (Wood Veneer / Glass Ribs) -->
  <line x1="300" y1="90" x2="300" y2="280" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4"/>
  <line x1="395" y1="90" x2="395" y2="280" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4"/>
  <text x="350" y="190" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">Inert Cedar / Glass Spacer</text>

  <!-- Anode (-) Negative Terminal (Spongy Lead Grey) -->
  <rect x="435" y="40" width="30" height="240" rx="4" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="450" cy="30" r="12" fill="#2563eb"/>
  <text x="450" y="35" fill="#ffffff" font-size="14" font-weight="bold" font-family="monospace" text-anchor="middle">-</text>
  <text x="450" y="15" fill="#60a5fa" font-size="11" font-family="monospace" text-anchor="middle">Negative (-)</text>
  <text x="450" y="170" fill="#f8fafc" font-size="10" font-family="monospace" text-anchor="middle" transform="rotate(-90 450 170)">Spongy Pure Lead (Pb)</text>

  <!-- Voltage Output Badge -->
  <rect x="290" y="100" width="120" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="350" y="125" fill="#34d399" font-size="14" font-weight="bold" font-family="monospace" text-anchor="middle">2.10 Volts</text>

  <!-- Hydrogen Outgassing Warning -->
  <circle cx="240" cy="115" r="4" fill="#ffffff" opacity="0.8"/>
  <circle cx="245" cy="95" r="3" fill="#ffffff" opacity="0.6"/>
  <circle cx="440" cy="115" r="4" fill="#ffffff" opacity="0.8"/>
  <text x="590" y="80" fill="#f87171" font-size="11" font-family="monospace">H2 + O2 Gas!</text>
  <text x="590" y="98" fill="#cbd5e1" font-size="10" font-family="monospace">Ventilate area</text>
  <text x="590" y="112" fill="#cbd5e1" font-size="10" font-family="monospace">to prevent blast</text>
</svg>
```

## Cell Construction & Electrolyte Preparation
1. **Electrode Material:** Roll two thick sheets of scrap soft lead pipe, lead flashing, or melted wheel weights. The plates must never touch each other directly (use non-conductive slotted wooden dowels or perforated PVC sheets as separators).
2. **Electrolyte Synthesis:** Dilute commercial battery acid or distilled sulfurous condensate with pure rainwater or distilled water until specific gravity reads **1.20 to 1.25** (roughly 30% acid, 70% pure water). **Rule of Survival Chemistry:** *Always pour Acid into Water, NEVER Water into Acid (prevents explosive boiling).*
3. **Electrochemical "Forming" Cycles:** Fresh lead sheets store near-zero charge. You must connect a DC dynamo or solar array and charge until the positive plate oxidizes to deep chocolate brown. Discharge completely across a resistor or light bulb, reverse the polarity once to etch the surface grain, and recharge. After 5–10 cycles, high-capacity spongy lead develops.
4. **Bank Voltage:** Connect 6 cells in series ($6 \times 2.1\text{ V} = 12.6\text{ V}$) to create a standard 12V DC power bank capable of powering radio stations and 12V LED floodlights.

