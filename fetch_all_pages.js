import fs from 'node:fs';

const pages = [
  'https://flashtp.com/best-bus-rental-companies-in-abu-dhabi-and-dubai/',
  'https://flashtp.com/abudhabi-bus-and-cars/',
  'https://flashtp.com/projects/',
  // All 12 blog posts
  'https://flashtp.com/safety-measures-and-regulations-for-rental-bus-services-in-abu-dhabi/',
  'https://flashtp.com/cost-of-renting-a-bus-in-abu-dhabi/',
  'https://flashtp.com/tips-for-a-hassle-free-experience-with-rental-bus-services/',
  'https://flashtp.com/top-rental-bus-companies-in-abu-dhabi/',
  'https://flashtp.com/what-to-consider-when-choosing-a-rental-bus-service/',
  'https://flashtp.com/types-of-rental-bus-services-available-in-abu-dhabi/',
  'https://flashtp.com/benefits-of-renting-a-bus-in-abu-dhabi/',
  'https://flashtp.com/discover-the-best-rental-bus-services-in-abu-dhabi-your-ultimate-guide-to-hassle-free-transportation/',
  'https://flashtp.com/why-renting-a-bus-is-the-best-transportation-option-in-abu-dhabi/',
  'https://flashtp.com/additional-services-offered-by-rental-bus-companies-in-abu-dhabi/',
  'https://flashtp.com/rent-a-car-in-abu-dhabi/',
  'https://flashtp.com/abu-dhabi-vibrant-city/'
];

async function fetchRest() {
  for (const url of pages) {
    try {
      console.log(`Fetching: ${url}`);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0'
        }
      });
      const text = await res.text();
      const safeName = url.replace(/https?:\/\//, '').replace(/[^a-zA-Z0-9]/g, '_');
      fs.writeFileSync(`./audit_data/${safeName}.html`, text);
      console.log(`Saved ${url} (${text.length} bytes)`);
    } catch (err) {
      console.error(`Error fetching ${url}:`, err.message);
    }
  }
}

fetchRest();

