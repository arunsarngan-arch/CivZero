---
id: t1-universal-edibility-test
tier: 1
tier_name: Tier 1 - Immediate Survival
title: Universal Edibility Test (UET)
category: "Botany & Foraging"
read_time: 6 min
difficulty: High
tags: foraging, plants, edibility, botany, toxicity, poison, starvation
summary: Determine whether an unknown non-woody wild plant is non-toxic and caloric using the standardized 8-stage contact, mucosal, and ingestion protocol over a mandatory 24-hour observation cycle.
---

## Critical Rules of Australian/US Army Botanical Triage
In a post-collapse scenario, **plant poisoning causes lethal hepatic failure, respiratory paralysis, or debilitating dysentery**. Never eat unknown plants when known foods are available. **Rules of Exclusion:** Avoid plants with milky/cloudy sap, umbrella-shaped flower clusters (hemlock family), fine hair barbs, almond-like scent (cyanogenic glycosides), beans/bulbs inside pods, or three-leaf patterns.

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Grid -->
    <pattern id="uetGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="uetCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="0.98"/>
    </linearGradient>

    <linearGradient id="uetDangerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a0d0d" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#150505" stop-opacity="0.95"/>
    </linearGradient>

    <!-- Marker Arrow -->
    <marker id="uetArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="uetArrowWarn" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Canvas Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#uetGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="42" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="35" r="5" fill="#38bdf8"/>
  <text x="60" y="32" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">TACTICAL BOTANICAL TRIAGE: 8-STAGE UNIVERSAL EDIBILITY PROTOCOL</text>
  <text x="60" y="47" fill="#64748b" font-size="9" font-family="monospace">PRE-FLIGHT: MANDATORY 8-HR FAST (WATER ONLY) • TEST EXACTLY ONE MORPHOLOGICAL ORGAN AT A TIME</text>

  <!-- ================= ROW 1: STAGES 1 - 4 ================= -->
  <!-- Connector Row 1 -->
  <line x1="205" y1="120" x2="225" y2="120" stroke="#38bdf8" stroke-width="2" marker-end="url(#uetArrow)"/>
  <line x1="395" y1="120" x2="415" y2="120" stroke="#38bdf8" stroke-width="2" marker-end="url(#uetArrow)"/>
  <line x1="585" y1="120" x2="605" y2="120" stroke="#38bdf8" stroke-width="2" marker-end="url(#uetArrow)"/>

  <!-- Stage 1: Organ Dissection -->
  <g transform="translate(25, 68)">
    <rect width="180" height="106" rx="8" fill="url(#uetCardBg)" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="22" cy="22" r="12" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="22" y="27" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <rect x="42" y="12" width="76" height="18" rx="4" fill="#0369a1" fill-opacity="0.3"/>
    <text x="80" y="24" fill="#38bdf8" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">DISSECTION</text>
    <text x="14" y="52" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">Isolate Single Organ</text>
    <text x="14" y="68" fill="#94a3b8" font-size="9" font-family="monospace">• Divide: Leaf/Root/Stem</text>
    <text x="14" y="82" fill="#94a3b8" font-size="9" font-family="monospace">• Never test mixed lot</text>
    <text x="14" y="96" fill="#38bdf8" font-size="8.5" font-family="monospace">Organ triage: 1 sample</text>
  </g>

  <!-- Stage 2: Dermal Assay -->
  <g transform="translate(215, 68)">
    <rect width="180" height="106" rx="8" fill="url(#uetCardBg)" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="22" cy="22" r="12" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="22" y="27" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <rect x="42" y="12" width="76" height="18" rx="4" fill="#0284c7" fill-opacity="0.3"/>
    <text x="80" y="24" fill="#38bdf8" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">DERMAL: 15M</text>
    <text x="14" y="52" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">Inner Elbow Fossa</text>
    <text x="14" y="68" fill="#94a3b8" font-size="9" font-family="monospace">• Crush sample to exude sap</text>
    <text x="14" y="82" fill="#94a3b8" font-size="9" font-family="monospace">• Rub 5cm soft skin area</text>
    <text x="14" y="96" fill="#fca5a5" font-size="8.5" font-family="monospace">Hives / itching = REJECT</text>
  </g>

  <!-- Stage 3: Vermilion Lip Assay -->
  <g transform="translate(405, 68)">
    <rect width="180" height="106" rx="8" fill="url(#uetCardBg)" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="22" cy="22" r="12" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="22" y="27" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <rect x="42" y="12" width="76" height="18" rx="4" fill="#0284c7" fill-opacity="0.3"/>
    <text x="80" y="24" fill="#38bdf8" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">MUCOSA: 3M</text>
    <text x="14" y="52" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">Outer Lip Touch</text>
    <text x="14" y="68" fill="#94a3b8" font-size="9" font-family="monospace">• Light touch to outer lip</text>
    <text x="14" y="82" fill="#94a3b8" font-size="9" font-family="monospace">• 3-minute contact hold</text>
    <text x="14" y="96" fill="#fca5a5" font-size="8.5" font-family="monospace">Tingling / burn = REJECT</text>
  </g>

  <!-- Stage 4: Tongue Dorsum Assay -->
  <g transform="translate(595, 68)">
    <rect width="200" height="106" rx="8" fill="url(#uetCardBg)" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="22" cy="22" r="12" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="22" y="27" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">❹</text>
    <rect x="42" y="12" width="76" height="18" rx="4" fill="#0284c7" fill-opacity="0.3"/>
    <text x="80" y="24" fill="#38bdf8" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">TONGUE: 15M</text>
    <text x="14" y="52" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">Dorsal Tongue Tip</text>
    <text x="14" y="68" fill="#94a3b8" font-size="9" font-family="monospace">• Postage-stamp piece</text>
    <text x="14" y="82" fill="#94a3b8" font-size="9" font-family="monospace">• Zero chewing / swallowing</text>
    <text x="14" y="96" fill="#fca5a5" font-size="8.5" font-family="monospace">Bitter / numb = REJECT</text>
  </g>

  <!-- Inter-Row Flow Routing Line -->
  <path d="M 695 174 L 695 194 L 115 194 L 115 208" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#uetArrowWarn)"/>

  <!-- ================= ROW 2: STAGES 5 - 8 ================= -->
  <!-- Connector Row 2 -->
  <line x1="205" y1="262" x2="225" y2="262" stroke="#f59e0b" stroke-width="2" marker-end="url(#uetArrowWarn)"/>
  <line x1="395" y1="262" x2="415" y2="262" stroke="#f59e0b" stroke-width="2" marker-end="url(#uetArrowWarn)"/>
  <line x1="585" y1="262" x2="605" y2="262" stroke="#10b981" stroke-width="2"/>

  <!-- Stage 5: Mastication Hold -->
  <g transform="translate(25, 210)">
    <rect width="180" height="106" rx="8" fill="url(#uetCardBg)" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="22" cy="22" r="12" fill="#b45309" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="22" y="27" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">❺</text>
    <rect x="42" y="12" width="86" height="18" rx="4" fill="#b45309" fill-opacity="0.3"/>
    <text x="85" y="24" fill="#f59e0b" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">MASTICATE: 15M</text>
    <text x="14" y="52" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">Chew &amp; Salivate</text>
    <text x="14" y="68" fill="#94a3b8" font-size="9" font-family="monospace">• Chew sample thoroughly</text>
    <text x="14" y="82" fill="#ef4444" font-size="9" font-weight="bold" font-family="monospace">• DO NOT SWALLOW SALIVA</text>
    <text x="14" y="96" fill="#cbd5e1" font-size="8.5" font-family="monospace">Expel &amp; rinse mouth clean</text>
  </g>

  <!-- Stage 6: The Thumbnail Ingestion -->
  <g transform="translate(215, 210)">
    <rect width="180" height="106" rx="8" fill="url(#uetCardBg)" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="22" cy="22" r="12" fill="#b45309" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="22" y="27" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">❻</text>
    <rect x="42" y="12" width="86" height="18" rx="4" fill="#b45309" fill-opacity="0.3"/>
    <text x="85" y="24" fill="#f59e0b" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">SWALLOW: 1 PORTION</text>
    <text x="14" y="52" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">Micro Ingestion</text>
    <text x="14" y="68" fill="#94a3b8" font-size="9" font-family="monospace">• Swallow 5mm (pea-size)</text>
    <text x="14" y="82" fill="#94a3b8" font-size="9" font-family="monospace">• Ingest with purified H2O</text>
    <text x="14" y="96" fill="#f59e0b" font-size="8.5" font-family="monospace">Prepare identically</text>
  </g>

  <!-- Stage 7: 8-Hour Systemic Fast -->
  <g transform="translate(405, 210)">
    <rect width="180" height="106" rx="8" fill="url(#uetCardBg)" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="22" cy="22" r="12" fill="#b91c1c" stroke="#ef4444" stroke-width="1.5"/>
    <text x="22" y="27" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">❼</text>
    <rect x="42" y="12" width="76" height="18" rx="4" fill="#b91c1c" fill-opacity="0.3"/>
    <text x="80" y="24" fill="#ef4444" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">FAST: 8 HOURS</text>
    <text x="14" y="52" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">Systemic Window</text>
    <text x="14" y="68" fill="#94a3b8" font-size="9" font-family="monospace">• Absolute food fasting</text>
    <text x="14" y="82" fill="#fca5a5" font-size="9" font-family="monospace">• Watch: Nausea, ataxia,</text>
    <text x="14" y="96" fill="#fca5a5" font-size="8.5" font-family="monospace">cramps, blurred vision</text>
  </g>

  <!-- Stage 8: Safe Lot Clearance -->
  <g transform="translate(595, 210)">
    <rect width="200" height="106" rx="8" fill="url(#uetCardBg)" stroke="#10b981" stroke-width="2"/>
    <circle cx="22" cy="22" r="12" fill="#047857" stroke="#10b981" stroke-width="1.5"/>
    <text x="22" y="27" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">❽</text>
    <rect x="42" y="12" width="90" height="18" rx="4" fill="#047857" fill-opacity="0.3"/>
    <text x="87" y="24" fill="#10b981" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">PASS / CONFIRMED</text>
    <text x="14" y="52" fill="#a7f3d0" font-size="11" font-weight="bold" font-family="sans-serif">Caloric Clearance</text>
    <text x="14" y="68" fill="#cbd5e1" font-size="9" font-family="monospace">• Consume 1/4 cup sample</text>
    <text x="14" y="82" fill="#cbd5e1" font-size="9" font-family="monospace">• Same organ &amp; preparation</text>
    <text x="14" y="96" fill="#10b981" font-size="8.5" font-family="monospace">Declared safe edible biomass</text>
  </g>

  <!-- ================= TACTICAL BOTANICAL EXCLUSION BANNER ================= -->
  <g transform="translate(25, 332)">
    <rect width="770" height="108" rx="8" fill="url(#uetDangerBg)" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="14" y="12" width="220" height="20" rx="4" fill="#7f1d1d"/>
    <text x="124" y="26" fill="#fca5a5" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">🛑 CRITICAL BOTANICAL EXCLUSION RULES</text>
    <text x="14" y="46" fill="#ef4444" font-size="10" font-weight="bold" font-family="monospace">NEVER INGEST PLANTS DISPLAYING ANY OF THESE 6 FATAL SIGNALS (INSTANT ABORT):</text>
    
    <!-- 6 Exclusion Badges -->
    <rect x="14" y="56" width="118" height="42" rx="4" fill="#170606" stroke="#991b1b" stroke-width="1"/>
    <text x="73" y="72" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">MILKY / WHITE SAP</text>
    <text x="73" y="88" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Toxic latex alkaloids</text>

    <rect x="140" y="56" width="118" height="42" rx="4" fill="#170606" stroke="#991b1b" stroke-width="1"/>
    <text x="199" y="72" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">UMBEL FLOWERS</text>
    <text x="199" y="88" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Conium hemlock fatal</text>

    <rect x="266" y="56" width="118" height="42" rx="4" fill="#170606" stroke="#991b1b" stroke-width="1"/>
    <text x="325" y="72" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">ALMOND / PEACH SCENT</text>
    <text x="325" y="88" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Cyanogenic glycosides</text>

    <rect x="392" y="56" width="118" height="42" rx="4" fill="#170606" stroke="#991b1b" stroke-width="1"/>
    <text x="451" y="72" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">FINE SPINES / BARBS</text>
    <text x="451" y="88" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Internal throat ulcer</text>

    <rect x="518" y="56" width="118" height="42" rx="4" fill="#170606" stroke="#991b1b" stroke-width="1"/>
    <text x="577" y="72" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">WHITE / YELLOW BERRIES</text>
    <text x="577" y="88" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">99% statistical lethality</text>

    <rect x="644" y="56" width="128" height="42" rx="4" fill="#170606" stroke="#991b1b" stroke-width="1"/>
    <text x="708" y="72" fill="#fca5a5" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">3-LEAF CLUSTERS</text>
    <text x="708" y="88" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Urushiol severe dermatitis</text>
  </g>
</svg>
```

## Step-by-Step Execution Protocol
1. **The Botanical Exclusion Screen:** Inspect plant morphology. Immediately discard if it has: umbrella-shaped umbel flower crowns (Conium maculatum / water hemlock), shiny waxy berries (white/yellow berries are 99% toxic; red are 50% toxic), or milky latex sap.
2. **The Fast:** Do not eat any food for 8 hours prior to starting. Drink only purified water.
3. **Dissection & Preparation:** Separate leaves, stems, roots, flowers, and fruit. You can only test ONE component at a time. Many plants (such as potatoes or rhubarb) produce edible tubers/stalks but lethal cyanide/oxalate leaves.
4. **Skin Reaction Assay:** Crush a leaf until moist. Rub into the soft inner crook of your elbow. Wait 15 minutes. If redness, hives, or itching occurs, reject the plant.
5. **Mucosal Membrane Assay:** Touch the crushed specimen to the outer vermilion border of your lips for 3 minutes. If burning, numbness, or swelling appears, rinse mouth and reject.
6. **Tongue Assay:** Place a postage-stamp size piece onto the surface of your tongue for 15 minutes without chewing or swallowing. Watch for metallic tastes, stinging, or numbness.
7. **The Mastication Hold:** Chew the piece thoroughly and hold it in your mouth for 15 full minutes. Do not swallow saliva. Spit it out completely.
8. **The Swallow & Fasting Window:** Swallow a single thumbnail-sized cooked or raw portion. Do not consume anything else for **8 hours**. If no cramps, diarrhea, visual disturbance, or nausea occurs, the plant part is confirmed safe.
