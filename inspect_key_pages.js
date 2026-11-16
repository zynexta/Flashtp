import fs from 'node:fs';

function extractFleet() {
  const content = fs.readFileSync('./audit_data/flashtp_com_abudhabi_bus_and_cars_.html', 'utf8');
  console.log('=== FLEET PAGE TITLE & HEADINGS ===');
  const headings = content.match(/<h[1-4][^>]*>(.*?)<\/h[1-4]>/gi) || [];
  console.log(headings.map(h => h.replace(/<[^>]+>/g, '').trim()).filter(Boolean));

  console.log('=== FLEET IMAGES & CAPTIONS ===');
  const imgMatches = content.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi);
  for (const m of imgMatches) {
    console.log(m[0]);
  }
}

function extractAbout() {
  const content = fs.readFileSync('./audit_data/flashtp_com_best_bus_rental_companies_in_abu_dhabi_and_dubai_.html', 'utf8');
  console.log('\n=== ABOUT PAGE HEADINGS ===');
  const headings = content.match(/<h[1-4][^>]*>(.*?)<\/h[1-4]>/gi) || [];
  console.log(headings.map(h => h.replace(/<[^>]+>/g, '').trim()).filter(Boolean));
}

function extractContact() {
  const content = fs.readFileSync('./audit_data/flashtp_com_contact_us_.html', 'utf8');
  console.log('\n=== CONTACT PAGE DETAILS ===');
  const paragraphs = content.match(/<p[^>]*>(.*?)<\/p>/gi) || [];
  console.log(paragraphs.map(p => p.replace(/<[^>]+>/g, '').trim()).filter(p => p.length > 5 && (p.includes('+971') || p.includes('flashtp') || p.includes('Abu Dhabi') || p.includes('Musaffah') || p.includes('M-'))));
}

extractFleet();
extractAbout();
extractContact();

