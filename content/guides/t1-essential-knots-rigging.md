---
id: t1-essential-knots-rigging
tier: 1
tier_name: Tier 1 - Immediate Survival
title: Critical Survival Knots & Lashings
category: "Shelter & Rigging"
read_time: 5 min
difficulty: Medium
tags: knots, rigging, cordage, shelter, lashing, rescue, bowline
summary: Master the four non-negotiable mechanical friction knots and timber lashings required for structural shelters, litter evacuations, tarp tensioning, and ascending ropes.
---

## Mechanical Friction & Jam-Proofing Principles
In high-stress rescue and construction scenarios, poor knots either slip under dynamic shock loads or weld permanently tight under tension. A true survival knot retains **60% to 80% of native rope strength**, resists unintentional release, yet can be untied effortlessly after bearing human body weight.

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Coordinate Grid -->
    <pattern id="knotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.4"/>
    </pattern>

    <!-- Braided Rope Texture Gradient -->
    <linearGradient id="ropeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="50%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>

    <!-- Host Heavy Rope (Prusik) -->
    <linearGradient id="hostRopeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="50%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>

    <!-- Timber Log Gradient -->
    <linearGradient id="timberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="50%" stop-color="#92400e"/>
      <stop offset="100%" stop-color="#451a03"/>
    </linearGradient>
  </defs>

  <!-- Deep Obsidian Canvas & Grid -->
  <rect x="0" y="0" width="820" height="460" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="460" fill="url(#knotGrid)"/>
  <rect x="10" y="10" width="800" height="440" rx="10" fill="none" stroke="#1e293b" stroke-width="1.5"/>

  <!-- ================= 1. THE BOWLINE (PANEL 1) ================= -->
  <g transform="translate(25, 30)">
    <!-- Panel Backdrop -->
    <rect x="0" y="0" width="180" height="360" rx="8" fill="#0b1120" stroke="#38bdf8" stroke-width="1.2"/>
    
    <!-- Title Badge -->
    <rect x="15" y="12" width="150" height="24" rx="4" fill="#0c1929" stroke="#38bdf8" stroke-width="1"/>
    <text x="90" y="28" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1. THE BOWLINE</text>
    <text x="90" y="50" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Non-Jamming Rescue Eye</text>

    <!-- Standing Part Line -->
    <line x1="90" y1="65" x2="90" y2="120" stroke="url(#ropeGrad)" stroke-width="6" stroke-linecap="round"/>
    <text x="98" y="90" fill="#f59e0b" font-size="9" font-family="monospace">Standing</text>

    <!-- The Nipple / Eyelet Loop ("Rabbit Hole") -->
    <path d="M 90 120 Q 90 145 70 145 Q 50 145 50 125 Q 50 105 75 105 Q 90 105 90 120" fill="none" stroke="url(#ropeGrad)" stroke-width="5.5"/>

    <!-- Working End Thread Path ("Up hole, round tree, back down") -->
    <path d="M 70 200 L 70 135 L 75 115 Q 85 90 105 90 Q 120 90 120 110 Q 120 130 90 135 L 70 145" fill="none" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>

    <!-- Fixed Rescue Loop (Never Constricts or Slips) -->
    <ellipse cx="90" cy="240" rx="42" ry="48" fill="none" stroke="url(#ropeGrad)" stroke-width="6"/>

    <!-- Dimension / Feature Callout -->
    <rect x="15" y="305" width="150" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="90" y="322" fill="#e0f2fe" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">NEVER JAMS UNDER LOAD</text>
    <text x="90" y="338" fill="#7dd3fc" font-size="8.5" font-family="monospace" text-anchor="middle">Holds 100kg+ body weight</text>
  </g>

  <!-- ================= 2. TAUT-LINE HITCH (PANEL 2) ================= -->
  <g transform="translate(220, 30)">
    <!-- Panel Backdrop -->
    <rect x="0" y="0" width="180" height="360" rx="8" fill="#0b1120" stroke="#f59e0b" stroke-width="1.2"/>
    
    <!-- Title Badge -->
    <rect x="15" y="12" width="150" height="24" rx="4" fill="#1c1917" stroke="#f59e0b" stroke-width="1"/>
    <text x="90" y="28" fill="#f59e0b" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2. TAUT-LINE HITCH</text>
    <text x="90" y="50" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Friction Guyline Slider</text>

    <!-- Main Tarp Line / Host Line -->
    <line x1="90" y1="65" x2="90" y2="280" stroke="#64748b" stroke-width="5"/>

    <!-- Two Inside Turns (Friction Coils) -->
    <ellipse cx="90" cy="140" rx="20" ry="8" fill="none" stroke="url(#ropeGrad)" stroke-width="5"/>
    <ellipse cx="90" cy="160" rx="20" ry="8" fill="none" stroke="url(#ropeGrad)" stroke-width="5"/>

    <!-- One Outside Turn (Half Hitch Lock) -->
    <ellipse cx="90" cy="195" rx="20" ry="8" fill="none" stroke="url(#ropeGrad)" stroke-width="5"/>

    <!-- Working End Tail -->
    <path d="M 110 195 Q 125 210 115 230" fill="none" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>

    <!-- Slide Adjustment Vector Arrow -->
    <g stroke="#38bdf8" stroke-width="2" fill="none">
      <line x1="145" y1="130" x2="145" y2="210"/>
      <polygon points="145,125 141,135 149,135" fill="#38bdf8"/>
      <polygon points="145,215 141,205 149,205" fill="#38bdf8"/>
    </g>
    <text x="145" y="175" fill="#38bdf8" font-size="8" font-family="monospace" transform="rotate(-90 145 175)" text-anchor="middle">SLIDE TO TENSION</text>

    <!-- Feature Callout -->
    <rect x="15" y="305" width="150" height="42" rx="6" fill="#1c1917" stroke="#f59e0b" stroke-width="1"/>
    <text x="90" y="322" fill="#fef3c7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">2 INSIDE + 1 OUT TURN</text>
    <text x="90" y="338" fill="#fde68a" font-size="8.5" font-family="monospace" text-anchor="middle">Locks firm in high wind</text>
  </g>

  <!-- ================= 3. PRUSIK HITCH (PANEL 3) ================= -->
  <g transform="translate(415, 30)">
    <!-- Panel Backdrop -->
    <rect x="0" y="0" width="180" height="360" rx="8" fill="#0b1120" stroke="#10b981" stroke-width="1.2"/>
    
    <!-- Title Badge -->
    <rect x="15" y="12" width="150" height="24" rx="4" fill="#052e16" stroke="#10b981" stroke-width="1"/>
    <text x="90" y="28" fill="#10b981" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3. PRUSIK HITCH</text>
    <text x="90" y="50" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Ascender / Brake Hitch</text>

    <!-- Thick Main Host Rope (11mm climbing rope) -->
    <rect x="78" y="65" width="24" height="230" rx="6" fill="url(#hostRopeGrad)" stroke="#334155" stroke-width="1.5"/>

    <!-- 6mm Prusik Cord Wrapped 3 Times Through Center -->
    <g fill="none" stroke="url(#ropeGrad)" stroke-width="4.5">
      <ellipse cx="90" cy="140" rx="24" ry="7"/>
      <ellipse cx="90" cy="155" rx="24" ry="7"/>
      <ellipse cx="90" cy="170" rx="24" ry="7"/>
      <!-- Loop Bridle extending downward -->
      <path d="M 68 175 L 68 250 Q 90 270 112 250 L 112 175"/>
    </g>

    <!-- Friction Constriction Vector -->
    <g stroke="#34d399" stroke-width="2" fill="none">
      <line x1="55" y1="155" x2="72" y2="155"/>
      <polygon points="75,155 67,151 67,159" fill="#34d399"/>
      <line x1="125" y1="155" x2="108" y2="155"/>
      <polygon points="105,155 113,151 113,159" fill="#34d399"/>
    </g>

    <!-- Feature Callout -->
    <rect x="15" y="305" width="150" height="42" rx="6" fill="#052e16" stroke="#10b981" stroke-width="1"/>
    <text x="90" y="322" fill="#86efac" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">SLIDES FREE / BITES TIGHT</text>
    <text x="90" y="338" fill="#4ade80" font-size="8.5" font-family="monospace" text-anchor="middle">Mechanical rope ascender</text>
  </g>

  <!-- ================= 4. SQUARE TIMBER LASHING (PANEL 4) ================= -->
  <g transform="translate(610, 30)">
    <!-- Panel Backdrop -->
    <rect x="0" y="0" width="180" height="360" rx="8" fill="#0b1120" stroke="#f43f5e" stroke-width="1.2"/>
    
    <!-- Title Badge -->
    <rect x="15" y="12" width="150" height="24" rx="4" fill="#1f1215" stroke="#f43f5e" stroke-width="1"/>
    <text x="90" y="28" fill="#f43f5e" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">4. SQUARE LASHING</text>
    <text x="90" y="50" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Rigid 90° Timber Joint</text>

    <!-- Vertical Post Timber -->
    <rect x="75" y="65" width="30" height="225" rx="5" fill="url(#timberGrad)" stroke="#451a03" stroke-width="1.5"/>
    
    <!-- Horizontal Crossbeam Timber -->
    <rect x="20" y="145" width="140" height="28" rx="5" fill="url(#timberGrad)" stroke="#451a03" stroke-width="1.5"/>

    <!-- Square Lashing Wraps (Around Timbers) -->
    <rect x="62" y="135" width="56" height="48" rx="4" fill="none" stroke="url(#ropeGrad)" stroke-width="5"/>
    <!-- Frapping Turns (Between Timbers - Cinches Wire-Tight) -->
    <line x1="74" y1="135" x2="106" y2="183" stroke="#fde68a" stroke-width="3"/>
    <line x1="74" y1="183" x2="106" y2="135" stroke="#fde68a" stroke-width="3"/>

    <!-- Frapping Arrow Callout -->
    <text x="145" y="130" fill="#f43f5e" font-size="8.5" font-family="monospace">FRAP</text>
    <path d="M 140 135 Q 120 145 110 155" fill="none" stroke="#f43f5e" stroke-width="1.5"/>

    <!-- Feature Callout -->
    <rect x="15" y="305" width="150" height="42" rx="6" fill="#1f1215" stroke="#f43f5e" stroke-width="1"/>
    <text x="90" y="322" fill="#fecdd3" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">REPLACES NAILS &amp; BOLTS</text>
    <text x="90" y="338" fill="#fda4af" font-size="8.5" font-family="monospace" text-anchor="middle">Frapping cinches joint rigid</text>
  </g>

  <!-- ================= FOOTER TACTICAL STRENGTH RULE ================= -->
  <rect x="25" y="405" width="765" height="26" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="410" y="422" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">CORDAGE INTEGRITY: High-friction hitches retain 70-80% rope strength. Natural fiber ropes (jute, nettle, hemp) lose 40% strength when wet.</text>
</svg>
```

## Step-by-Step Tying Procedures
1. **The Bowline ("The King of Knots"):**
   - Form a small eyelet loop in the standing part (the "rabbit hole").
   - Pass the working end up through the hole (the "rabbit comes out of the hole").
   - Pass around behind the main standing line (the "rabbit runs around the tree").
   - Pass back down into the initial loop (the "rabbit goes back down the hole").
   - Pull working end and standing line firmly. The loop will never slip or tighten down around a victim.
2. **Taut-Line Hitch (Adjustable Tensioner):**
   - Wrap working end around anchor post and bring back parallel to the standing line.
   - Make two complete wraps around the standing line *inside* the loop.
   - Cross over and make one final half-hitch *outside* the loop.
   - Slide hitch along standing line to tighten tarp guyline; friction locks automatically under wind load.
3. **Prusik Hitch (Friction Ascender & Tension Brake):**
   - Take a closed loop of cordage (diameter 1/2 to 2/3 of host rope).
   - Wrap loop around host line 3 times, passing the tails back through the center of the wraps each turn.
   - Dress wraps neatly parallel. Unweighted, the hitch slides freely up or down. When weighted, friction bites down instantly.
4. **Square Lashing (90° Timber Joinery):**
   - Tie a clove hitch to the vertical pole directly below the horizontal crossbeam.
   - Wrap cord over crossbeam, around vertical post, and under crossbeam in a square pattern (3–4 tight wraps).
   - Apply 3 **frapping turns** (wrapping *between* the timbers over the rope turns) to cinch the joint bone-tight.
   - Finish with a clove hitch to the horizontal timber.
