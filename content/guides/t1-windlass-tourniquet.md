---
id: t1-windlass-tourniquet
tier: 1
tier_name: Tier 1 - Immediate Survival
title: Improvised Windlass Tourniquet
category: "Emergency Medicine"
read_time: 3 min
difficulty: Medium
tags: first aid, trauma, tourniquet, bleeding, hemorrhage, life-saving
summary: Halt catastrophic arterial extremity hemorrhage using a rigid torsion windlass, triangular bandage, and locking anchor mechanism.
---

## Critical Indications
Exsanguination from severed femoral or brachial arteries causes irreversible shock and cardiac arrest in **60 to 180 seconds**. When direct pressure fails on extremity arterial spurts (bright pulsing red blood), an improvised windlass tourniquet must be applied immediately proximal to the wound.

```svg
<svg viewBox="0 0 820 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Tactical Coordinate Grid -->
    <pattern id="traumaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.4"/>
    </pattern>

    <!-- Limb Flesh Cross-Section Gradient -->
    <linearGradient id="limbFleshGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>

    <!-- Bone Shaft Gradient -->
    <linearGradient id="boneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>

    <!-- Tourniquet Webbing Band -->
    <linearGradient id="tqStrapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="50%" stop-color="#b91c1c"/>
      <stop offset="100%" stop-color="#7f1d1d"/>
    </linearGradient>

    <!-- High-Torsion Hardwood Windlass Rod -->
    <linearGradient id="windlassRodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="50%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
  </defs>

  <!-- Deep Obsidian Canvas & Grid -->
  <rect x="0" y="0" width="820" height="450" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="450" fill="url(#traumaGrid)"/>
  <rect x="10" y="10" width="800" height="430" rx="10" fill="none" stroke="#1e293b" stroke-width="1.5"/>

  <!-- ================= 1. LIMB ANATOMY CYLINDER ================= -->
  <!-- Muscle/Tissue Mass of Upper Arm / Thigh -->
  <rect x="70" y="150" width="680" height="170" rx="85" fill="url(#limbFleshGrad)" stroke="#475569" stroke-width="2"/>

  <!-- Femur / Humerus Bone Core (Solid Resistance Base) -->
  <rect x="70" y="215" width="680" height="40" rx="12" fill="url(#boneGrad)" stroke="#64748b" stroke-width="1.5" opacity="0.85"/>
  <text x="130" y="240" fill="#0f172a" font-size="11" font-weight="bold" font-family="monospace">BONE SHAFT (COMPRESSION ANVIL)</text>

  <!-- High-Pressure Arterial Channel (Proximal to Distal) -->
  <!-- Proximal Flow (Pulsing High Pressure) -->
  <path d="M 70 195 L 340 195" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>
  <path d="M 70 195 L 340 195" stroke="#fca5a5" stroke-width="3" stroke-dasharray="8,6"/>
  <!-- Occluded Compression Pinch Point Under Tourniquet -->
  <path d="M 340 195 Q 365 215 390 195" stroke="#7f1d1d" stroke-width="2.5" stroke-dasharray="2,3"/>
  <!-- Distal Arterial Bed (Zero Blood Pressure Past TQ) -->
  <path d="M 390 195 L 740 195" stroke="#334155" stroke-width="4" stroke-dasharray="4,4"/>

  <!-- Proximal Blood Flow Label Badge -->
  <rect x="80" y="95" width="220" height="38" rx="6" fill="#1c1917" stroke="#ef4444" stroke-width="1.2"/>
  <circle cx="95" cy="114" r="7" fill="#ef4444"/>
  <text x="95" y="118" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">4</text>
  <text x="165" y="108" fill="#fecaca" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">ARTERIAL INFLOW (HIGH P)</text>
  <text x="165" y="122" fill="#f87171" font-size="9" font-family="monospace" text-anchor="middle">Artery crushed against bone</text>

  <!-- ================= 2. ARTERIAL WOUND SITE ================= -->
  <!-- Punctured / Lacerated Arterial Spurt Zone -->
  <circle cx="670" cy="195" r="20" fill="#7f1d1d" stroke="#ef4444" stroke-width="2.5"/>
  <ellipse cx="670" cy="195" rx="8" ry="12" fill="#ef4444"/>
  <!-- Occluded Zero Flow Note -->
  <rect x="580" y="95" width="210" height="38" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1.2"/>
  <circle cx="595" cy="114" r="7" fill="#64748b"/>
  <text x="595" y="118" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">X</text>
  <text x="700" y="108" fill="#e2e8f0" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">HEMORRHAGE ARRESTED</text>
  <text x="700" y="122" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Zero distal pulse confirmed</text>

  <!-- ================= 3. WIDE FABRIC STRAP ================= -->
  <!-- Circumferential 5cm (2-inch) Band Wrap -->
  <rect x="335" y="125" width="60" height="220" rx="10" fill="url(#tqStrapGrad)" stroke="#f87171" stroke-width="2.5"/>

  <!-- Strap Width Dimension Callout -->
  <line x1="335" y1="365" x2="395" y2="365" stroke="#f87171" stroke-width="1.5"/>
  <line x1="335" y1="360" x2="335" y2="370" stroke="#f87171" stroke-width="1.5"/>
  <line x1="395" y1="360" x2="395" y2="370" stroke="#f87171" stroke-width="1.5"/>
  <text x="365" y="385" fill="#f87171" font-size="10" font-family="monospace" text-anchor="middle">MIN 5cm (2 INCHES)</text>

  <!-- Strap Callout Badge -->
  <rect x="250" y="50" width="230" height="38" rx="6" fill="#1c1917" stroke="#dc2626" stroke-width="1.2"/>
  <circle cx="265" cy="69" r="7" fill="#dc2626"/>
  <text x="265" y="73" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
  <text x="375" y="63" fill="#fecaca" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">WIDE NON-ELASTIC BAND</text>
  <text x="375" y="77" fill="#f87171" font-size="9" font-family="monospace" text-anchor="middle">Cravat, bandana, or cloth belt</text>

  <!-- ================= 4. RIGID TORSION WINDLASS ROD ================= -->
  <!-- Angled Hardwood Rod being twisted -->
  <g transform="rotate(-28 365 210)">
    <!-- Timber Shadow & Body -->
    <rect x="350" y="50" width="30" height="320" rx="8" fill="url(#windlassRodGrad)" stroke="#fde68a" stroke-width="2.5"/>
    <line x1="358" y1="65" x2="358" y2="355" stroke="#fbbf24" stroke-width="1.5" opacity="0.6"/>

    <!-- 360° Rotational Torsion Vectors -->
    <path d="M 330 90 A 45 45 0 0 1 400 90" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
    <polygon points="402,87 400,97 392,90" fill="#fbbf24"/>
  </g>

  <!-- Windlass Callout Badge -->
  <rect x="440" y="50" width="220" height="38" rx="6" fill="#1c1917" stroke="#f59e0b" stroke-width="1.2"/>
  <circle cx="455" cy="69" r="7" fill="#f59e0b"/>
  <text x="455" y="73" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
  <text x="545" y="63" fill="#fef3c7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">RIGID WINDLASS ROD</text>
  <text x="545" y="77" fill="#fde68a" font-size="9" font-family="monospace" text-anchor="middle">Twist 360° until bleed halts</text>

  <!-- ================= 5. LOCKING ANCHOR MECHANISM ================= -->
  <!-- Half-Hitch Knot Loop under windlass -->
  <circle cx="365" cy="235" r="14" fill="#991b1b" stroke="#fde68a" stroke-width="2"/>

  <!-- Securing Paracord / Bandage Tails tying rod to limb -->
  <path d="M 380 235 L 480 180 Q 510 180 520 220" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4"/>
  <rect x="470" y="165" width="45" height="24" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="492" y="181" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">LOCK</text>

  <!-- Lock Callout Badge -->
  <rect x="460" y="270" width="230" height="38" rx="6" fill="#1c1917" stroke="#ea580c" stroke-width="1.2"/>
  <circle cx="475" cy="289" r="7" fill="#ea580c"/>
  <text x="475" y="293" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">5</text>
  <text x="580" y="283" fill="#fed7aa" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">SECURE ANCHOR LOCK</text>
  <text x="580" y="297" fill="#fdba74" font-size="9" font-family="monospace" text-anchor="middle">Tie ends to prevent unwinding</text>

  <!-- ================= 6. PROXIMAL MARGIN CALIPER (5-7 CM) ================= -->
  <line x1="365" y1="335" x2="670" y2="335" stroke="#06b6d4" stroke-width="2"/>
  <line x1="365" y1="328" x2="365" y2="342" stroke="#06b6d4" stroke-width="2"/>
  <line x1="670" y1="328" x2="670" y2="342" stroke="#06b6d4" stroke-width="2"/>

  <rect x="420" y="350" width="220" height="26" rx="6" fill="#0c1929" stroke="#06b6d4" stroke-width="1.2"/>
  <circle cx="435" cy="363" r="7" fill="#0284c7"/>
  <text x="435" y="367" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">6</text>
  <text x="540" y="367" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">5-7 cm (2-3 INCHES) ABOVE WOUND</text>

  <!-- Time Stamp Marking Notice -->
  <rect x="80" y="380" width="250" height="26" rx="6" fill="#0b1120" stroke="#334155" stroke-width="1"/>
  <circle cx="95" cy="393" r="6" fill="#475569"/>
  <text x="95" y="397" fill="#fff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">7</text>
  <text x="220" y="397" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">MARK TIME (e.g. 'T=14:35' ON HEAD)</text>
</svg>
```

## Construction Rules
1. **Band Selection:** Use a strong, non-elastic fabric (triangular bandage, folded scarf, cotton canvas) folded to **at least 5 cm (2 inches) wide**. Never use wire, shoelaces, or cordage, as narrow material cuts through skin and severs peripheral nerves.
2. **Placement:** Wrap the band circumferentially around the limb **5 to 7 cm (2 to 3 inches) proximal to the wound** (between the wound and the heart). Never apply directly over a joint (knee or elbow); if the wound is just below a joint, apply immediately above it.
3. **Half-Knot:** Tie an initial half-knot (overhand knot) over the anterior surface of the limb.
4. **Windlass Insertion:** Place a rigid, unbreakable rod (sturdy hardwood dowel, metal wrench, heavy tent stake, or flashlight) on top of the half-knot.
5. **Secure Full Knot:** Tie a complete square knot over the rod to secure it firmly against the fabric band.
6. **Torsion Rotation:** Twist the windlass rod 360 degrees repeatedly. The band will tighten circumferentially, crushing tissue and mechanically occluding the underlying artery against the bone shaft. **Continue twisting until all bright red pulsing arterial bleeding halts completely and the distal pulse disappears.**
7. **Anchor Lock:** Wrap the loose ends of the band around the windlass ends and tie them off, or hook the windlass behind a secondary locking loop to prevent it from spinning loose.
8. **Time Stamping:** Write the exact time of application (e.g., **"T = 14:30"**) clearly on the victim's forehead or on the band using permanent ink or blood. Never loosen or remove a tourniquet in the field; removal releases accumulated toxins (hyperkalemia, myoglobin) causing fatal reperfusion cardiac arrest.
