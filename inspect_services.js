import fs from 'node:fs';

const serviceFiles = [
  'flashtp_com_long_short_term_lease_bus_rental_abu_dhabi_.html',
  'flashtp_com_school_college_transportation_abu_dabi_.html',
  'flashtp_com_staff_transportation_services_abudhabi_.html',
  'flashtp_com_rent_a_car_.html',
  'flashtp_com_inter_city_tour_.html',
  'flashtp_com_group_pick_drop_services_.html',
  'flashtp_com_daily_bus_service_in_abu_dhabi_.html'
];

for (const file of serviceFiles) {
  const content = fs.readFileSync(`./audit_data/${file}`, 'utf8');
  console.log(`\n================== ${file} ==================`);
  const title = content.match(/<title>([^<]*)<\/title>/i)?.[1] || '';
  console.log('TITLE:', title);

  const headings = content.match(/<h[1-4][^>]*>(.*?)<\/h[1-4]>/gi) || [];
  console.log('HEADINGS:', headings.map(h => h.replace(/<[^>]+>/g, '').trim()).filter(h => h && !['Address', 'Email', 'Phone'].includes(h)));

  const clean = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  // Find where main body starts
  const mainStart = clean.indexOf('Need to Make an Equiry') !== -1 ? clean.indexOf('Need to Make an Equiry') : 0;
  console.log('BODY SNIPPET:', clean.slice(300, 1000));
}

