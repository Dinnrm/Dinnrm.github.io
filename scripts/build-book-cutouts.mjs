import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

// Code-native contours hide the studio backdrop without changing any artwork pixels.
// Coordinates were traced against the supplied PSD-derived 960px presentation images.
const readingOutline = 'M187 134 L195 133 C290 130 440 129 486 134 C560 129 660 130 768 134 L774 134 L774 548 L768 550 C670 553 555 553 486 549 C430 553 290 552 194 549 L187 548 Z'
const cutouts = [
  { key: 'sleeve', height: 332, path: 'M88 0 H312 L313 4 L311 315 L88 316 Z M340 0 H568 V319 H339 Z M608 7 L673 11 L679 0 H959 V309 L904 319 L605 318 Z' },
  { key: 'cover-mockup-1', height: 640, path: 'M240 83 L522 61 L527 133 L718 168 L649 573 L351 519 L358 479 L271 486 Z' },
  { key: 'cover-mockup-2', height: 641, path: 'M267 91 L282 85 L356 90 L360 86 L375 87 L382 82 L663 109 L660 563 Q659 569 638 572 L567 557 L565 569 L546 579 L274 528 Z' },
  { key: 'cover-mockup-3', height: 641, path: 'M267 110 H594 V566 H267 Q265 566 265 564 V113 Q265 110 267 110 Z M659 110 H700 V566 H657 V113 Z' },
  ...Array.from({ length: 9 }, (_, i) => ({ key: `reading-${i + 1}`, height: i === 4 ? 719 : i === 6 || i === 8 ? 721 : 720, path: readingOutline })),
]
const assets = new URL('../src/assets/projects/', import.meta.url)
for (const { key, height, path } of cutouts) {
  for (const width of [320, 960]) {
    const source = await readFile(new URL(`flowers-book-${key}-${width}.webp`, assets))
    const target = new URL(`flowers-book-${key}-cutout-${width}.svg`, assets)
    const scale = key.startsWith('reading-') ? height / 720 : 1
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${Math.round(height * width / 960)}" viewBox="0 0 960 ${height}"><defs><clipPath id="book"><path transform="scale(1 ${scale})" d="${path}"/></clipPath></defs><image width="960" height="${height}" preserveAspectRatio="none" clip-path="url(#book)" href="data:image/webp;base64,${source.toString('base64')}"/></svg>\n`
    await writeFile(target, svg)
  }
}
console.log(`Created ${cutouts.length * 2} transparent SVG presentation assets in ${fileURLToPath(assets)}`)
