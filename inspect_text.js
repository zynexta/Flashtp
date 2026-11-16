import fs from 'node:fs';

function dumpText(file) {
  const content = fs.readFileSync(`./audit_data/${file}`, 'utf8');
  // strip scripts, styles, tags
  const clean = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return clean;
}

console.log('--- CONTACT PAGE ---');
console.log(dumpText('flashtp_com_contact_us_.html').slice(0, 1500));

console.log('\n--- ABOUT PAGE ---');
console.log(dumpText('flashtp_com_best_bus_rental_companies_in_abu_dhabi_and_dubai_.html').slice(0, 1500));

console.log('\n--- HOMEPAGE ---');
console.log(dumpText('flashtp_com_.html').slice(0, 1500));

