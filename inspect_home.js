import fs from 'node:fs';

const homeContent = fs.readFileSync('./audit_data/flashtp_com_.html', 'utf8');

console.log('=== HOMEPAGE IMAGES ===');
const imgMatches = homeContent.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi);
for (const m of imgMatches) {
  console.log(m[1]);
}

console.log('\n=== HOMEPAGE BACKGROUNDS ===');
const bgMatches = homeContent.matchAll(/url\(["']?([^"')]+\.(?:jpg|jpeg|png|webp|svg))["']?\)/gi);
for (const m of bgMatches) {
  console.log(m[1]);
}

