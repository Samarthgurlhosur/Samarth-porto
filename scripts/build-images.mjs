import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// Source image: prefer public/assets/me.png, fallback to pic.png
const srcPath = existsSync('public/assets/me.png')
  ? 'public/assets/me.png'
  : existsSync('pic.png')
  ? 'pic.png'
  : null;

if (!srcPath) {
  console.error('No portrait source image found');
  process.exit(1);
}

const cutout = sharp(srcPath);

for (const w of [1100, 720, 420]) {
  await sharp(srcPath)
    .resize({ width: w, fit: 'inside' })
    .webp({ quality: 90, alphaQuality: 95 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a cinematic dark backdrop
const portrait = await sharp(srcPath).resize({ height: 580, fit: 'inside' }).png().toBuffer();

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="75%" cy="45%" r="48%">
            <stop offset="0%" stop-color="#e5132b" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#e5132b" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="270" font-family="Impact, 'Arial Narrow', sans-serif" font-size="120" fill="#f4f1ec" letter-spacing="4">SAMARTH</text>
        <text x="78" y="325" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#ff3d5a" letter-spacing="14">THE SERIES</text>
        <text x="78" y="390" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="16" fill="#a7a6ad" letter-spacing="4">COMPUTER SCIENCE • GENERATIVE AI • AGENTIC AI</text>
        <text x="78" y="425" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="14" fill="#71717a" letter-spacing="2">RICE · TRUSTCHARGE · NYAYA AI · IGNITRON</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Images built successfully');
