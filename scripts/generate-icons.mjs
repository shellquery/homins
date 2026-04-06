// Generate PWA icons as SVG (universally supported)
import { writeFileSync } from "fs";

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

const svgIcon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6"/>
      <stop offset="100%" style="stop-color:#06b6d4"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <text x="256" y="210" font-family="Arial,Helvetica,sans-serif" font-size="160" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">HI</text>
  <text x="256" y="370" font-family="Arial,Helvetica,sans-serif" font-size="72" font-weight="600" fill="rgba(255,255,255,0.85)" text-anchor="middle" dominant-baseline="middle">EXAM</text>
</svg>`;

for (const size of sizes) {
  writeFileSync(`public/icons/icon-${size}x${size}.svg`, svgIcon(size));
}

// Apple touch icon (must be PNG-like, but SVG works in modern iOS)
writeFileSync("public/icons/apple-touch-icon.svg", svgIcon(180));

// Favicon SVG
writeFileSync("public/favicon.svg", svgIcon(32));

console.log("Icons generated:", sizes.map(s => `${s}x${s}`).join(", "));
