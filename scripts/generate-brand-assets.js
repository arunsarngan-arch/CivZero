// Script to generate CivZero Concept A Vector Assets and Android Drawables
import fs from 'fs';
import path from 'path';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="60%" stop-color="#070b12"/>
      <stop offset="100%" stop-color="#030712"/>
    </radialGradient>

    <!-- Golden Gear / Ring Gradient -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde68a"/>
      <stop offset="40%" stop-color="#f59e0b"/>
      <stop offset="80%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>

    <!-- Flame Outer Gradient (Red to Orange) -->
    <linearGradient id="flameOuterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#b91c1c"/>
      <stop offset="40%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>

    <!-- Flame Core Gradient (Gold to White) -->
    <linearGradient id="flameCoreGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="60%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <!-- Cyan Atomic Ring Gradient -->
    <linearGradient id="atomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>

    <!-- Subtle Glow Filter -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Base App Tile (Squircle with 110px radius) -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <rect x="12" y="12" width="488" height="488" rx="100" fill="none" stroke="url(#goldGrad)" stroke-width="4" stroke-opacity="0.35"/>

  <!-- Outer Cog / Gear Wheel Teeth (Representing Mechanical Engineering & Reconstruction) -->
  <g transform="translate(256, 240)" opacity="0.35">
    <circle r="160" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="14 18"/>
    <circle r="180" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 8"/>
  </g>

  <!-- Atomic Orbital Ellipses (Representing Dr. Stone Science & Physics) -->
  <g transform="translate(256, 240) rotate(-30)" filter="url(#glow)">
    <ellipse cx="0" cy="0" rx="170" ry="58" fill="none" stroke="url(#atomGrad)" stroke-width="3.5" opacity="0.75"/>
    <!-- Electron Node -->
    <circle cx="168" cy="0" r="6" fill="#38bdf8"/>
    <circle cx="-168" cy="0" r="4.5" fill="#38bdf8"/>
  </g>

  <g transform="translate(256, 240) rotate(30)" filter="url(#glow)">
    <ellipse cx="0" cy="0" rx="170" ry="58" fill="none" stroke="url(#goldGrad)" stroke-width="3.5" opacity="0.75"/>
    <!-- Electron Node -->
    <circle cx="0" cy="58" r="6" fill="#fde68a"/>
    <circle cx="0" cy="-58" r="4.5" fill="#fde68a"/>
  </g>

  <!-- The Spark of Science / Eternal Flame (Rising from Zero) -->
  <!-- Outer Flame Body -->
  <path d="M256 100 
           C285 145, 325 180, 325 240 
           C325 290, 290 325, 256 335 
           C222 325, 187 290, 187 240 
           C187 180, 227 145, 256 100 Z" 
        fill="url(#flameOuterGrad)" 
        filter="url(#glow)"/>

  <!-- Secondary Flame Tongue (Asymmetric dynamic lick) -->
  <path d="M256 130 
           C275 165, 305 195, 300 245 
           C295 285, 275 310, 256 320 
           C237 310, 217 285, 212 245 
           C207 195, 237 165, 256 130 Z" 
        fill="#f97316"/>

  <!-- Core Radiant Flame (Gold/White intense heat) -->
  <path d="M256 165 
           C268 190, 285 215, 285 250 
           C285 280, 270 300, 256 308 
           C242 300, 227 280, 227 250 
           C227 215, 244 190, 256 165 Z" 
        fill="url(#flameCoreGrad)"/>

  <!-- Inner Spark Eye (Pure white) -->
  <ellipse cx="256" cy="256" rx="12" ry="24" fill="#ffffff" opacity="0.95"/>

  <!-- Laboratory Crucible / Anvil Pedestal at the Base -->
  <g transform="translate(196, 330)">
    <!-- Crucible Bowl -->
    <path d="M10 0 L110 0 L98 42 L22 42 Z" fill="#1e293b" stroke="url(#goldGrad)" stroke-width="2.5"/>
    <!-- Rim Accent -->
    <rect x="6" y="-3" width="108" height="6" rx="3" fill="url(#goldGrad)"/>
    <!-- Base Plate -->
    <rect x="26" y="42" width="68" height="8" rx="2" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    
    <!-- Monogram CZ Stencil inside Crucible -->
    <text x="60" y="28" fill="#fde68a" font-size="19" font-weight="900" font-family="monospace" letter-spacing="3" text-anchor="middle">CZ</text>
  </g>

  <!-- Subtitle Tag: CIVZERO (Optional small badge at bottom) -->
  <text x="256" y="445" fill="#f59e0b" font-size="22" font-weight="800" font-family="monospace" letter-spacing="8" text-anchor="middle" opacity="0.95">CIVZERO</text>
  <text x="256" y="470" fill="#64748b" font-size="11" font-weight="600" font-family="monospace" letter-spacing="3" text-anchor="middle">REBUILD FROM ZERO</text>
</svg>
`;

// Write to public/logo.svg
fs.writeFileSync(path.resolve('public/logo.svg'), svgContent, 'utf-8');
console.log('✅ Generated public/logo.svg (Concept A: Spark of Science)');
