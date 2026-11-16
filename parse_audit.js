import fs from 'node:fs';
import path from 'node:path';

const files = fs.readdirSync('./audit_data').filter(f => f.endsWith('.html'));

const imageManifest = {};
const pagesData = {};

for (const file of files) {
  const content = fs.readFileSync(path.join('./audit_data', file), 'utf8');

  // Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Meta description
  const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                        content.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i);
  const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : '';

  // Images
  const imgMatches = content.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi);
  for (const m of imgMatches) {
    const src = m[1];
    const altMatch = m[0].match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : '';

    if (!imageManifest[src]) {
      imageManifest[src] = {
        src,
        pages: [],
        alts: new Set()
      };
    }
    imageManifest[src].pages.push(file);
    if (alt) imageManifest[src].alts.add(alt);
  }

  // Also check background images or srcset
  const bgMatches = content.matchAll(/url\(["']?([^"')]+\.(?:jpg|jpeg|png|webp|svg))["']?\)/gi);
  for (const m of bgMatches) {
    const src = m[1];
    if (!imageManifest[src]) {
      imageManifest[src] = {
        src,
        pages: [],
        alts: new Set(['background-image'])
      };
    }
    imageManifest[src].pages.push(file);
  }

  pagesData[file] = {
    file,
    title,
    metaDesc
  };
}

// Convert Set to Array for JSON serialization
for (const k in imageManifest) {
  imageManifest[k].alts = Array.from(imageManifest[k].alts);
  imageManifest[k].pages = Array.from(new Set(imageManifest[k].pages));
}

fs.writeFileSync('./audit_data/extracted_images.json', JSON.stringify(imageManifest, null, 2));
fs.writeFileSync('./audit_data/extracted_pages_meta.json', JSON.stringify(pagesData, null, 2));

console.log(`Parsed ${files.length} pages.`);
console.log(`Discovered ${Object.keys(imageManifest).length} unique images.`);

