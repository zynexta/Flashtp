import fs from 'node:fs';

const blogFiles = fs.readdirSync('./audit_data').filter(f => f.startsWith('flashtp_com_') && !f.includes('sitemap') && !f.includes('summary') && !f.includes('extracted') && !f.includes('robots'));

const blogPosts = [];

for (const file of blogFiles) {
  // check if it's one of the blog posts
  if (['flashtp_com_.html', 'flashtp_com_about_us_.html', 'flashtp_com_about_.html', 'flashtp_com_services_.html',
       'flashtp_com_long_short_term_lease_bus_rental_abu_dhabi_.html',
       'flashtp_com_school_college_transportation_abu_dabi_.html',
       'flashtp_com_staff_transportation_services_abudhabi_.html',
       'flashtp_com_rent_a_car_.html',
       'flashtp_com_inter_city_tour_.html',
       'flashtp_com_group_pick_drop_services_.html',
       'flashtp_com_daily_bus_service_in_abu_dhabi_.html',
       'flashtp_com_our_fleet_.html', 'flashtp_com_fleet_.html', 'flashtp_com_abudhabi_bus_and_cars_.html',
       'flashtp_com_contact_us_.html', 'flashtp_com_contact_.html',
       'flashtp_com_blog_.html', 'flashtp_com_projects_.html',
       'flashtp_com_best_bus_rental_companies_in_abu_dhabi_and_dubai_.html'
  ].includes(file)) {
    continue;
  }

  const content = fs.readFileSync(`./audit_data/${file}`, 'utf8');
  const title = content.match(/<title>([^<]*)<\/title>/i)?.[1] || '';
  
  // Date
  const dateMatch = content.match(/class=["'][^"']*published[^"']*["'][^>]*>([^<]+)<\/time>/i) ||
                    content.match(/([A-Z][a-z]+ \d{1,2}, \d{4})/);
  const date = dateMatch ? dateMatch[1] : '';

  // Featured image
  const featImgMatch = content.match(/<img[^>]+src=["'](https?:\/\/flashtp\.com\/wp-content\/uploads\/[^"']+)["'][^>]*>/i);
  const featImg = featImgMatch ? featImgMatch[1] : '';

  // Clean body text
  const clean = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Slug from filename
  const slug = file.replace('flashtp_com_', '').replace('_.html', '').replace(/_/g, '-');

  blogPosts.push({
    file,
    slug,
    title,
    date,
    featImg,
    snippet: clean.slice(clean.indexOf(title) !== -1 ? clean.indexOf(title) : 200, (clean.indexOf(title) !== -1 ? clean.indexOf(title) : 200) + 600)
  });
}

console.log(`Found ${blogPosts.length} blog posts:`);
console.log(JSON.stringify(blogPosts.map(b => ({ slug: b.slug, title: b.title, featImg: b.featImg })), null, 2));

fs.writeFileSync('./audit_data/blog_posts_summary.json', JSON.stringify(blogPosts, null, 2));

