import fs from 'node:fs';

async function fetchSubSitemaps() {
  const sitemaps = [
    'https://flashtp.com/post-sitemap.xml',
    'https://flashtp.com/page-sitemap.xml'
  ];

  for (const sm of sitemaps) {
    const res = await fetch(sm, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const text = await res.text();
    const safeName = sm.replace(/https?:\/\//, '').replace(/[^a-zA-Z0-9]/g, '_');
    fs.writeFileSync(`./audit_data/${safeName}.xml`, text);
    console.log(`Saved ${sm} (${text.length} bytes)`);
  }
}

fetchSubSitemaps();

