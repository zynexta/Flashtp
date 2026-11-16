import fs from 'node:fs';

const testUrls = [
  'https://flashtp.com/wp-content/themes/annvision-temp/images/ft-logo.png',
  'https://flashtp.com/wp-content/uploads/2024/07/banner1-1.webp',
  'https://flashtp.com/wp-content/uploads/2024/05/falcon1.jpg',
  'https://flashtp.com/wp-content/uploads/2024/05/safey.png'
];

async function testFetch() {
  for (const u of testUrls) {
    try {
      const res = await fetch(u);
      console.log(`${u} -> ${res.status} (${res.headers.get('content-type')})`);
    } catch (e) {
      console.error(`Failed ${u}:`, e.message);
    }
  }
}

testFetch();

