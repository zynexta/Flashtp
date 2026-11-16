import fs from 'node:fs';
import path from 'node:path';

// List of all essential images discovered across the audit
const imageInventory = [
  // Logos
  {
    id: 'logo-main',
    name: 'Flash Transport Logo Main',
    originalUrl: 'https://flashtp.com/wp-content/themes/annvision-temp/images/logo.png',
    fileName: 'logo.png',
    category: 'logo',
    alt: 'Flash Transport Passengers By Bus LLC Logo',
    page: 'Header & Brand'
  },
  {
    id: 'logo-footer',
    name: 'Flash Transport Footer Logo',
    originalUrl: 'https://flashtp.com/wp-content/themes/annvision-temp/images/ft-logo.png',
    fileName: 'ft-logo.png',
    category: 'logo',
    alt: 'Flash Transport Bus LLC Footer Logo',
    page: 'Footer'
  },
  {
    id: 'logo-mobile',
    name: 'Flash Transport Mobile Logo',
    originalUrl: 'https://flashtp.com/wp-content/themes/annvision-temp/images/mob-logo.png',
    fileName: 'mob-logo.png',
    category: 'logo',
    alt: 'Flash Transport Mobile Logo',
    page: 'Mobile Header'
  },
  {
    id: 'logo-ohms-cert',
    name: 'OHSMS EIAC Certificate Badge',
    originalUrl: 'https://flashtp.com/wp-content/themes/annvision-temp/images/ohms.png',
    fileName: 'ohms.png',
    category: 'cert',
    alt: 'EIAC Accredited OHSMS CB-QMS/EMS/OHSMS-084 Certification',
    page: 'Homepage / About'
  },
  {
    id: 'iso-cert',
    name: 'ISO Certification Badge',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2025/05/iso1.jpg',
    fileName: 'iso1.jpg',
    category: 'cert',
    alt: 'ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Certification',
    page: 'About Us'
  },
  // Homepage / Hero Assets
  {
    id: 'hero-banner-bus',
    name: 'Hero Luxury Bus Banner',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/07/banner1-1.webp',
    fileName: 'banner1-1.webp',
    category: 'hero',
    alt: 'Flash Transport Luxury Bus Banner in Abu Dhabi',
    page: 'Homepage Hero'
  },
  {
    id: 'hero-cadillac',
    name: 'Hero Cadillac Escalade',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/07/cadillac.jpg',
    fileName: 'cadillac.jpg',
    category: 'hero',
    alt: 'Cadillac Escalade Luxury Chauffeur Transport',
    page: 'Homepage Hero'
  },
  {
    id: 'hero-om',
    name: 'Hero Fleet Operations',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/07/om.webp',
    fileName: 'om.webp',
    category: 'hero',
    alt: 'Flash Transport Bus Fleet Operations',
    page: 'Homepage Hero'
  },
  // Homepage Features
  {
    id: 'feature-quality',
    name: 'Quality Services Badge',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/second.png',
    fileName: 'second.png',
    category: 'feature',
    alt: 'Quality Transport Services Abu Dhabi',
    page: 'Homepage Feature'
  },
  {
    id: 'feature-safety',
    name: 'Safety First Shield',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/safey.png',
    fileName: 'safey.png',
    category: 'feature',
    alt: 'Passenger Safety Standards and Protocols',
    page: 'Homepage Feature'
  },
  {
    id: 'feature-driver',
    name: 'Professional Trained Drivers',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/driver2.png',
    fileName: 'driver2.png',
    category: 'feature',
    alt: 'Certified Professional Drivers Flash Transport',
    page: 'Homepage Feature'
  },
  {
    id: 'feature-quality-round',
    name: 'Quality Assurance Stamp',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/quality-but.png',
    fileName: 'quality-but.png',
    category: 'feature',
    alt: 'ISO Quality Guaranteed',
    page: 'Homepage Feature'
  },
  // Services Main Images
  {
    id: 'service-lease-bus',
    name: 'Long and Short Term Lease Bus Rental',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/11/bus1.jpg',
    fileName: 'bus1.jpg',
    category: 'service',
    alt: 'Long and Short Term Lease Bus Rental in Abu Dhabi',
    page: 'Service: Lease Bus Rental'
  },
  {
    id: 'service-school-bus',
    name: 'School and College Transportation',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/sc11.jpg',
    fileName: 'sc11.jpg',
    category: 'service',
    alt: 'School and College Bus Transportation in Abu Dhabi',
    page: 'Service: School Bus'
  },
  {
    id: 'service-staff-transport',
    name: 'Corporate Staff Transportation',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/11/staff_abudhabi.jpg',
    fileName: 'staff_abudhabi.jpg',
    category: 'service',
    alt: 'Corporate Staff Transportation Services Abu Dhabi',
    page: 'Service: Staff Transportation'
  },
  {
    id: 'service-rent-a-car',
    name: 'Rent A Car Abu Dhabi',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/11/car1.jpg',
    fileName: 'car1.jpg',
    category: 'service',
    alt: 'Rent A Car and Executive Vehicles Abu Dhabi',
    page: 'Service: Rent A Car'
  },
  {
    id: 'service-intercity-tour',
    name: 'Inter City Tour Dubai Abu Dhabi',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/11/inter.jpg',
    fileName: 'inter.jpg',
    category: 'service',
    alt: 'Inter City Tour and UAE Sightseeing Transport',
    page: 'Service: Inter City Tour'
  },
  {
    id: 'service-group-pick-drop',
    name: 'Group Pick & Drop Services',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/xx1.jpg',
    fileName: 'xx1.jpg',
    category: 'service',
    alt: 'Group Pick and Drop Bus Services UAE',
    page: 'Service: Group Pick & Drop'
  },
  {
    id: 'service-daily-bus',
    name: 'Daily Bus Service Abu Dhabi',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/rd22.jpg',
    fileName: 'rd22.jpg',
    category: 'service',
    alt: 'Daily Bus Service Operations in Abu Dhabi',
    page: 'Service: Daily Bus Service'
  },
  // Additional Service & Banner Images
  {
    id: 'banner-general',
    name: 'Fleet Overview Banner',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/03/banner-1.jpg',
    fileName: 'banner-1.jpg',
    category: 'hero',
    alt: 'Flash Transport Fleet Banner',
    page: 'Blog / Projects Banner'
  },
  {
    id: 'banner-service-rs2',
    name: 'Services Hero Banner',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/rs2.jpg',
    fileName: 'rs2.jpg',
    category: 'hero',
    alt: 'Transport Services in UAE',
    page: 'Services / About'
  },
  {
    id: 'banner-contact',
    name: 'Contact Page Banner',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/contact.jpg',
    fileName: 'contact.jpg',
    category: 'hero',
    alt: 'Contact Flash Transport Abu Dhabi',
    page: 'Contact Us'
  },
  {
    id: 'about-vision-mission',
    name: 'Vision and Mission Graphic',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/07/visionmission.jpg',
    fileName: 'visionmission.jpg',
    category: 'feature',
    alt: 'Flash Transport Vision and Mission',
    page: 'About Us'
  },
  {
    id: 'banner-magic-1',
    name: 'Service Header Accent',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/11/magic-1.jpg',
    fileName: 'magic-1.jpg',
    category: 'feature',
    alt: 'Modern Bus Fleet Service Highlight',
    page: 'Service Header'
  },
  // Complete Original Fleet Vehicles (20 verified vehicles with authentic photographs!)
  {
    id: 'fleet-gmc-denali',
    name: 'GMC Denali',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/gmc-denali1.jpg',
    fileName: 'gmc-denali1.jpg',
    category: 'fleet',
    vehicleCategory: 'Luxury Cars',
    capacity: '7 Passengers',
    alt: 'GMC Denali Luxury SUV Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-toyota-land-cruiser',
    name: 'Toyota Land Cruiser',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/lc93.jpg',
    fileName: 'lc93.jpg',
    category: 'fleet',
    vehicleCategory: 'SUVs',
    capacity: '7 Passengers',
    alt: 'Toyota Land Cruiser Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-cadillac-escalade',
    name: 'Cadillac Escalade',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/dd1.jpg',
    fileName: 'dd1.jpg',
    category: 'fleet',
    vehicleCategory: 'Luxury Cars',
    capacity: '7 Passengers',
    alt: 'Cadillac Escalade VIP Chauffeur Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-hyundai-h1',
    name: '9 Seater Hyundai H1',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/9-SEATER-HYUNDAI-H1.jpg',
    fileName: '9-SEATER-HYUNDAI-H1.jpg',
    category: 'fleet',
    vehicleCategory: 'Passenger Vans',
    capacity: '9 Passengers',
    alt: '9 Seater Hyundai H1 Van Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-toyota-fortuner',
    name: 'Toyota Fortuner',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/toyoto-fortuner.jpg',
    fileName: 'toyoto-fortuner.jpg',
    category: 'fleet',
    vehicleCategory: 'SUVs',
    capacity: '7 Passengers',
    alt: 'Toyota Fortuner SUV Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-kia-carnival',
    name: '8 Seater Kia Carnival',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kiacarnival.jpg',
    fileName: 'kiacarnival.jpg',
    category: 'fleet',
    vehicleCategory: 'Passenger Vans',
    capacity: '8 Passengers',
    alt: '8 Seater Kia Carnival Family Van Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-toyota-previa',
    name: '7 Seater Toyota Previa',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/7-SEATER-TOYOTA-PREVIA.jpg',
    fileName: '7-SEATER-TOYOTA-PREVIA.jpg',
    category: 'fleet',
    vehicleCategory: 'Passenger Vans',
    capacity: '7 Passengers',
    alt: '7 Seater Toyota Previa MPV Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-toyota-prado',
    name: 'Toyota Prado',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/toyoto-prado.jpg',
    fileName: 'toyoto-prado.jpg',
    category: 'fleet',
    vehicleCategory: 'SUVs',
    capacity: '7 Passengers',
    alt: 'Toyota Prado 4x4 Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-toyota-corolla',
    name: 'Toyota Corolla',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/toyota-korolla.jpg',
    fileName: 'toyota-korolla.jpg',
    category: 'fleet',
    vehicleCategory: 'Luxury Cars',
    capacity: '5 Passengers',
    alt: 'Toyota Corolla Sedan Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-kia-optima',
    name: 'Kia Optima',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kia-optima.jpg',
    fileName: 'kia-optima.jpg',
    category: 'fleet',
    vehicleCategory: 'Luxury Cars',
    capacity: '5 Passengers',
    alt: 'Kia Optima Executive Sedan Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-hyundai-accent',
    name: 'Hyundai Accent',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/accent.jpg',
    fileName: 'accent.jpg',
    category: 'fleet',
    vehicleCategory: 'Luxury Cars',
    capacity: '5 Passengers',
    alt: 'Hyundai Accent Sedan Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-kia-sportage',
    name: 'Kia Sportage',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kia-sportage-2.jpg',
    fileName: 'kia-sportage-2.jpg',
    category: 'fleet',
    vehicleCategory: 'SUVs',
    capacity: '5 Passengers',
    alt: 'Kia Sportage Crossover SUV Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-hyundai-creta',
    name: 'Hyundai Creta',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/creta-hynday.jpg',
    fileName: 'creta-hynday.jpg',
    category: 'fleet',
    vehicleCategory: 'SUVs',
    capacity: '5 Passengers',
    alt: 'Hyundai Creta Compact SUV Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-hyundai-santafe',
    name: 'Hyundai Santa Fe',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/huyndaisantafe.jpg',
    fileName: 'huyndaisantafe.jpg',
    category: 'fleet',
    vehicleCategory: 'SUVs',
    capacity: '7 Passengers',
    alt: 'Hyundai Santa Fe Premium SUV Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-ashok-leyland-66',
    name: '66 Seater Ashok Leyland Bus',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/falcon1.jpg',
    fileName: 'falcon1.jpg',
    category: 'fleet',
    vehicleCategory: 'Large Coaches',
    capacity: '66 Passengers',
    alt: '66 Seater Ashok Leyland Falcon Bus Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-luxury-bus-50',
    name: '50 Seater Luxury Bus',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kl1.jpg',
    fileName: 'kl1.jpg',
    category: 'fleet',
    vehicleCategory: 'Large Coaches',
    capacity: '50 Passengers',
    alt: '50 Seater Luxury Coach Bus Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-luxury-bus-37',
    name: '37 Seater Luxury Bus',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kyo1.jpg',
    fileName: 'kyo1.jpg',
    category: 'fleet',
    vehicleCategory: 'Large Coaches',
    capacity: '37 Passengers',
    alt: '37 Seater Luxury Coach Rental Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-fuso-bus-34',
    name: '34 Seater Mitsubishi Fuso Bus',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/x1.jpg',
    fileName: 'x1.jpg',
    category: 'fleet',
    vehicleCategory: 'Mini Buses',
    capacity: '34 Passengers',
    alt: '34 Seater Mitsubishi Rosa / Fuso Bus Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-toyota-coaster-22',
    name: '22 Seater Toyota Coaster',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/ml1.jpg',
    fileName: 'ml1.jpg',
    category: 'fleet',
    vehicleCategory: 'Mini Buses',
    capacity: '22-30 Passengers',
    alt: '22-30 Seater Toyota Coaster Bus Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-toyota-hiace-13',
    name: '13 Seater Toyota Hiace',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/h1.jpg',
    fileName: 'h1.jpg',
    category: 'fleet',
    vehicleCategory: 'Passenger Vans',
    capacity: '13-14 Passengers',
    alt: '13 Seater Toyota Hiace Commuter Van Abu Dhabi',
    page: 'Our Fleet'
  },
  {
    id: 'fleet-toyota-hilux',
    name: 'Toyota Hilux Pickup',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/th1.jpg',
    fileName: 'th1.jpg',
    category: 'fleet',
    vehicleCategory: 'SUVs',
    capacity: '5 Passengers + Cargo Bed',
    alt: 'Toyota Hilux Double Cabin Pickup Abu Dhabi',
    page: 'Our Fleet'
  },
  // Blog Featured Images
  {
    id: 'blog-ser1-1',
    name: 'Cost of Renting Bus Image',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/ser1-1.jpg',
    fileName: 'ser1-1.jpg',
    category: 'blog',
    alt: 'Cost of renting a bus in Abu Dhabi',
    page: 'Blog'
  },
  {
    id: 'blog-staff',
    name: 'Top Rental Bus Companies Image',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2024/05/staff.jpg',
    fileName: 'staff.jpg',
    category: 'blog',
    alt: 'Top rental bus companies in Abu Dhabi',
    page: 'Blog'
  },
  {
    id: 'blog-rent-a-car-abu-dhabi',
    name: 'Rent a car in Abu Dhabi featured',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2025/06/rent-a-car-abu-dhabi.jpg',
    fileName: 'rent-a-car-abu-dhabi.jpg',
    category: 'blog',
    alt: 'Rent a car in Abu Dhabi luxury vehicles',
    page: 'Blog'
  },
  {
    id: 'blog-abudhabi',
    name: 'Abu Dhabi City Skyline',
    originalUrl: 'https://flashtp.com/wp-content/uploads/2025/06/abudhabi.jpg',
    fileName: 'abudhabi.jpg',
    category: 'blog',
    alt: 'Abu Dhabi city travel and tourism',
    page: 'Blog'
  }
];

async function downloadAll() {
  const targetDir = './public/images';
  if (!fs.existsSync('./public')) fs.mkdirSync('./public');
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const manifestResults = [];

  for (const item of imageInventory) {
    const destPath = path.join(targetDir, item.fileName);
    const localRelPath = `/images/${item.fileName}`;
    let status = 'verified';

    try {
      if (!fs.existsSync(destPath)) {
        console.log(`Downloading: ${item.originalUrl} -> ${item.fileName}`);
        const res = await fetch(item.originalUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        if (res.ok) {
          const buffer = Buffer.from(await res.arrayBuffer());
          fs.writeFileSync(destPath, buffer);
          console.log(`  Saved ${item.fileName} (${buffer.length} bytes)`);
        } else {
          console.warn(`  Failed ${item.originalUrl}: HTTP ${res.status}`);
          status = `http_${res.status}`;
        }
      } else {
        console.log(`Already exists: ${item.fileName}`);
      }
    } catch (e) {
      console.error(`  Error downloading ${item.fileName}:`, e.message);
      status = 'error';
    }

    manifestResults.push({
      ...item,
      localPath: localRelPath,
      status: fs.existsSync(destPath) ? 'available_locally' : status
    });
  }

  // Create src/data directory if needed and write assets.ts
  if (!fs.existsSync('./src')) fs.mkdirSync('./src');
  if (!fs.existsSync('./src/data')) fs.mkdirSync('./src/data', { recursive: true });

  const tsContent = `// Central Source Asset Manifest
// Maps original website URLs from flashtp.com to local optimized cached paths
// preserving complete traceability and 100% genuine vehicle / service photography.

export interface AssetRecord {
  id: string;
  name: string;
  originalUrl: string;
  localPath: string;
  category: 'logo' | 'hero' | 'service' | 'fleet' | 'feature' | 'blog' | 'cert';
  vehicleCategory?: 'Luxury Cars' | 'SUVs' | 'Passenger Vans' | 'Mini Buses' | 'Large Coaches';
  capacity?: string;
  alt: string;
  page: string;
  status: string;
}

export const ASSETS: Record<string, AssetRecord> = ${JSON.stringify(
    manifestResults.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {}),
    null,
    2
  )};

export const ASSET_LIST: AssetRecord[] = Object.values(ASSETS);

/**
 * Returns the local path or fallback to original URL
 */
export function getAssetUrl(idOrOriginalUrl: string): string {
  // Check by id
  if (ASSETS[idOrOriginalUrl]) {
    return ASSETS[idOrOriginalUrl].localPath;
  }
  // Check by originalUrl
  const found = ASSET_LIST.find(a => a.originalUrl === idOrOriginalUrl || a.fileName === idOrOriginalUrl);
  if (found) {
    return found.localPath;
  }
  return idOrOriginalUrl;
}
`;

  fs.writeFileSync('./src/data/assets.ts', tsContent);
  console.log(`Asset manifest written to src/data/assets.ts with ${manifestResults.length} assets.`);
}

downloadAll();

