import fs from 'node:fs';

const pagesToCrawl = [
  'https://flashtp.com/',
  'https://flashtp.com/about-us/',
  'https://flashtp.com/about/',
  'https://flashtp.com/services/',
  'https://flashtp.com/long-short-term-lease-bus-rental-abu-dhabi/',
  'https://flashtp.com/school-college-transportation-abu-dabi/',
  'https://flashtp.com/staff-transportation-services-abudhabi/',
  'https://flashtp.com/rent-a-car/',
  'https://flashtp.com/inter-city-tour/',
  'https://flashtp.com/group-pick-drop-services/',
  'https://flashtp.com/daily-bus-service-in-abu-dhabi/',
  'https://flashtp.com/our-fleet/',
  'https://flashtp.com/fleet/',
  'https://flashtp.com/contact-us/',
  'https://flashtp.com/contact/',
  'https://flashtp.com/blog/',
  'https://flashtp.com/wp-sitemap.xml',
  'https://flashtp.com/sitemap_index.xml',
  'https://flashtp.com/robots.txt'
];

async function runAudit() {
  if (!fs.existsSync('./audit_data')) {
    fs.mkdirSync('./audit_data');
  }

  const results = {};

  for (const url of pagesToCrawl) {
    try {
      console.log(`Fetching: ${url}`);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        redirect: 'follow'
      });
      const status = res.status;
      const finalUrl = res.url;
      const text = await res.text();
      console.log(`-> ${status} (${finalUrl}) - Length: ${text.length}`);
      
      const safeName = url.replace(/https?:\/\//, '').replace(/[^a-zA-Z0-9]/g, '_');
      fs.writeFileSync(`./audit_data/${safeName}.html`, text);

      results[url] = {
        status,
        finalUrl,
        length: text.length
      };
    } catch (err) {
      console.error(`Failed ${url}:`, err.message);
      results[url] = { error: err.message };
    }
  }

  fs.writeFileSync('./audit_data/audit_summary.json', JSON.stringify(results, null, 2));
  console.log('Audit completed!');
}

runAudit();

