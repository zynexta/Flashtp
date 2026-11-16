# Flash Transport Passengers By Bus LLC – Modern Website Rebuild

Modern, premium, enterprise-grade redesign and rebuild of the [Flash Transport](https://flashtp.com/) web platform.

Flash Transport is an established passenger transportation company based in **Abu Dhabi, UAE**, with over **20 years of operational excellence**, serving corporate enterprises, schools, government bodies, and private charters across all seven Emirates.

---

## 1. Brand & Visual Design System

Built strictly following the **Red + White** corporate transportation identity:

- **Primary Red**: `#D92332`
- **Deep Red**: `#B91F2D`
- **White**: `#FFFFFF`
- **Soft Background**: `#F6F7F9`
- **Dark Charcoal**: `#191C22`
- **Secondary Text**: `#686D75`
- **Light Border**: `#E7E9ED`

### Typography:
- **Headings**: `Outfit`, bold, sharp geometric character suitable for an international transport leader.
- **Body / Interface**: `Plus Jakarta Sans`, clean readability across all device densities.

---

## 2. Technology Decision & Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict TSX)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/) (Full SPA routing preserving all legacy slugs & 301 redirects)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: `clsx` + `tailwind-merge`

---

## 3. Original Asset Traceability & Preservation

All original photography and media assets from the live WordPress website (`flashtp.com`) were audited, verified, and mapped in `src/data/assets.ts`:

- **Official Logos**: Main header logo (`logo.png`), footer logo (`ft-logo.png`), and mobile drawer logo (`mob-logo.png`).
- **Certifications**: EIAC accredited OHSMS certificate (`ohms.png`), ISO 9001/14001/45001 badge (`iso1.jpg`).
- **Feature Stamps**: Passenger safety (`safey.png`), trained drivers (`driver2.png`), quality service (`second.png`), ISO assurance (`quality-but.png`).
- **Hero & Operations**: Main bus banner (`banner1-1.webp`), luxury VIP Cadillac (`cadillac.jpg`), fleet depot operations (`om.webp`).
- **All 20 Genuine Fleet Vehicles**:
  - 66 Seater Ashok Leyland Bus (`falcon1.jpg`)
  - 50 Seater Luxury Coach (`kl1.jpg`)
  - 37 Seater Luxury Bus (`kyo1.jpg`)
  - 34 Seater Mitsubishi Fuso Bus (`x1.jpg`)
  - 22 Seater Toyota Coaster (`ml1.jpg`)
  - 13 Seater Toyota Hiace (`h1.jpg`)
  - Cadillac Escalade Platinum (`dd1.jpg`)
  - GMC Yukon Denali (`gmc-denali1.jpg`)
  - Toyota Land Cruiser V8 (`lc93.jpg`)
  - Toyota Prado (`toyoto-prado.jpg`)
  - Toyota Fortuner (`toyoto-fortuner.jpg`)
  - 8 Seater Kia Carnival (`kiacarnival.jpg`)
  - 9 Seater Hyundai H1 (`9-SEATER-HYUNDAI-H1.jpg`)
  - 7 Seater Toyota Previa (`7-SEATER-TOYOTA-PREVIA.jpg`)
  - Toyota Corolla (`toyota-korolla.jpg`)
  - Kia Optima (`kia-optima.jpg`)
  - Hyundai Accent (`accent.jpg`)
  - Kia Sportage (`kia-sportage-2.jpg`)
  - Hyundai Creta (`creta-hynday.jpg`)
  - Hyundai Santa Fe (`huyndaisantafe.jpg`)
  - Toyota Hilux Double Cabin (`th1.jpg`)

---

## 4. Preserved Routes & SEO Architecture

| Original Route Slug | Page Title | Category |
|---------------------|------------|----------|
| `/` | Homepage | Core |
| `/about-us/` | About Us & History | Core |
| `/services/` | Services Directory | Core |
| `/abudhabi-bus-and-cars/` | Fleet Catalogue | Core |
| `/blog/` | Blog & Industry Guides | Core |
| `/contact-us/` | Contact Us & Location | Core |
| `/request-a-quote/` | Comprehensive Quote Request | Core |
| `/long-short-term-lease-bus-rental-abu-dhabi/` | Long / Short Term Lease Buses | Service |
| `/school-college-transportation-abu-dabi/` | School & College Transportation | Service |
| `/staff-transportation-services-abudhabi/` | Staff Transportation Services | Service |
| `/rent-a-car/` | Rent A Car Abu Dhabi | Service |
| `/inter-city-tour/` | Inter City Tour & Sightseeing | Service |
| `/group-pick-drop-services/` | Group Pick & Drop Services | Service |
| `/daily-bus-service-in-abu-dhabi/` | Daily Bus Services | Service |
| `/safety-measures-and-regulations-for-rental-bus-services-in-abu-dhabi/` | Safety Regulations Guide | Blog |
| `/cost-of-renting-a-bus-in-abu-dhabi/` | Bus Rental Pricing Guide | Blog |
| `/tips-for-a-hassle-free-experience-with-rental-bus-services/` | 7 Tips for Smooth Rentals | Blog |
| `/top-rental-bus-companies-in-abu-dhabi/` | Top Bus Companies Criteria | Blog |
| `/what-to-consider-when-choosing-a-rental-bus-service/` | Procurement Checklist | Blog |
| `/types-of-rental-bus-services-available-in-abu-dhabi/` | Fleet Types Overview | Blog |
| `/benefits-of-renting-a-bus-in-abu-dhabi/` | Economic Benefits of Leasing | Blog |
| `/discover-the-best-rental-bus-services-in-abu-dhabi-your-ultimate-guide-to-hassle-free-transportation/` | Ultimate Transport Guide | Blog |
| `/why-renting-a-bus-is-the-best-transportation-option-in-abu-dhabi/` | Group Charter Advantages | Blog |
| `/additional-services-offered-by-rental-bus-companies-in-abu-dhabi/` | Value-Added Services | Blog |
| `/rent-a-car-in-abu-dhabi/` | Complete Rent A Car Guide | Blog |
| `/abu-dhabi-vibrant-city/` | Abu Dhabi Sightseeing Guide | Blog |

---

## 5. Development & Production Commands

```bash
# Install dependencies
npm install

# Start local development server (Vite on port 3000)
npm run dev

# Run TypeScript checking & production build
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Official Contact Coordinates Preserved

- **Company Name**: Flash Transport Passengers By Bus LLC
- **Office Location**: 704, Al Junaibi Building, opposite Al Zahiyah Bus Station, Al Meena Street, TCA (Tourist Club Area), Abu Dhabi - UAE
- **Phone**: `+971 2 554 8788`
- **Email**: `info@flashtp.com`
- **Operating Hours**: Saturday – Thursday, 8:00 AM – 6:00 PM (Office) | 24/7 Operations & Emergency Fleet Dispatch

