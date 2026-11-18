// Central Source Asset Manifest
// Maps original website URLs from flashtp.com to local optimized cached paths
// preserving complete traceability and 100% genuine vehicle / service photography.

export interface AssetRecord {
  id: string;
  name: string;
  originalUrl: string;
  fileName?: string;
  localPath: string;
  category: 'logo' | 'hero' | 'service' | 'fleet' | 'feature' | 'blog' | 'cert';
  vehicleCategory?: 'Luxury Cars' | 'SUVs' | 'Passenger Vans' | 'Mini Buses' | 'Large Coaches';
  capacity?: string;
  alt: string;
  page: string;
  status: string;
}

export const ASSETS: Record<string, AssetRecord> = {
  "logo-main": {
    "id": "logo-main",
    "name": "Flash Transport Logo Main",
    "originalUrl": "https://flashtp.com/wp-content/themes/annvision-temp/images/logo.png",
    "fileName": "flash-transport-logo.png",
    "category": "logo",
    "alt": "Flash Transport Passengers By Bus LLC Logo",
    "page": "Header & Brand",
    "localPath": "/images/flash-transport-logo.png",
    "status": "available_locally"
  },
  "logo-footer": {
    "id": "logo-footer",
    "name": "Flash Transport Footer Logo",
    "originalUrl": "https://flashtp.com/wp-content/themes/annvision-temp/images/ft-logo.png",
    "fileName": "flash-transport-logo-white.png",
    "category": "logo",
    "alt": "Flash Transport Bus LLC Footer Logo",
    "page": "Footer",
    "localPath": "/images/flash-transport-logo-white.png",
    "status": "available_locally"
  },
  "logo-mobile": {
    "id": "logo-mobile",
    "name": "Flash Transport Mobile Logo",
    "originalUrl": "https://flashtp.com/wp-content/themes/annvision-temp/images/mob-logo.png",
    "fileName": "flash-transport-logo.png",
    "category": "logo",
    "alt": "Flash Transport Mobile Logo",
    "page": "Mobile Header",
    "localPath": "/images/flash-transport-logo.png",
    "status": "available_locally"
  },
  "logo-ohms-cert": {
    "id": "logo-ohms-cert",
    "name": "OHSMS EIAC Certificate Badge",
    "originalUrl": "https://flashtp.com/wp-content/themes/annvision-temp/images/ohms.png",
    "fileName": "ohms.png",
    "category": "cert",
    "alt": "EIAC Accredited OHSMS CB-QMS/EMS/OHSMS-084 Certification",
    "page": "Homepage / About",
    "localPath": "/images/ohms.png",
    "status": "available_locally"
  },
  "iso-cert": {
    "id": "iso-cert",
    "name": "ISO Certification Badge",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2025/05/iso1.jpg",
    "fileName": "iso1.jpg",
    "category": "cert",
    "alt": "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Certification",
    "page": "About Us",
    "localPath": "/images/iso1.jpg",
    "status": "available_locally"
  },
  "hero-banner-bus": {
    "id": "hero-banner-bus",
    "name": "Hero Luxury Bus Banner",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/07/banner1-1.webp",
    "fileName": "banner1-1.webp",
    "category": "hero",
    "alt": "Flash Transport Luxury Bus Banner in Abu Dhabi",
    "page": "Homepage Hero",
    "localPath": "/images/banner1-1.webp",
    "status": "available_locally"
  },
  "hero-cadillac": {
    "id": "hero-cadillac",
    "name": "Hero Cadillac Escalade",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/07/cadillac.jpg",
    "fileName": "cadillac.jpg",
    "category": "hero",
    "alt": "Cadillac Escalade Luxury Chauffeur Transport",
    "page": "Homepage Hero",
    "localPath": "/images/cadillac.jpg",
    "status": "available_locally"
  },
  "hero-om": {
    "id": "hero-om",
    "name": "Hero Fleet Operations",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/07/om.webp",
    "fileName": "om.webp",
    "category": "hero",
    "alt": "Flash Transport Bus Fleet Operations",
    "page": "Homepage Hero",
    "localPath": "/images/om.webp",
    "status": "available_locally"
  },
  "feature-quality": {
    "id": "feature-quality",
    "name": "Quality Services Badge",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/second.png",
    "fileName": "second.png",
    "category": "feature",
    "alt": "Quality Transport Services Abu Dhabi",
    "page": "Homepage Feature",
    "localPath": "/images/second.png",
    "status": "available_locally"
  },
  "feature-safety": {
    "id": "feature-safety",
    "name": "Safety First Shield",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/safey.png",
    "fileName": "safey.png",
    "category": "feature",
    "alt": "Passenger Safety Standards and Protocols",
    "page": "Homepage Feature",
    "localPath": "/images/safey.png",
    "status": "available_locally"
  },
  "feature-driver": {
    "id": "feature-driver",
    "name": "Professional Trained Drivers",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/driver2.png",
    "fileName": "driver2.png",
    "category": "feature",
    "alt": "Certified Professional Drivers Flash Transport",
    "page": "Homepage Feature",
    "localPath": "/images/driver2.png",
    "status": "available_locally"
  },
  "feature-quality-round": {
    "id": "feature-quality-round",
    "name": "Quality Assurance Stamp",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/quality-but.png",
    "fileName": "quality-but.png",
    "category": "feature",
    "alt": "ISO Quality Guaranteed",
    "page": "Homepage Feature",
    "localPath": "/images/quality-but.png",
    "status": "available_locally"
  },
  "service-lease-bus": {
    "id": "service-lease-bus",
    "name": "Long and Short Term Lease Bus Rental",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/bus1.jpg",
    "fileName": "dubai-hero-luxury-coach.jpg",
    "category": "service",
    "alt": "Long and Short Term Lease Bus Rental in Abu Dhabi",
    "page": "Service: Lease Bus Rental",
    "localPath": "/images/dubai-hero-luxury-coach.jpg",
    "status": "available_locally"
  },
  "service-school-bus": {
    "id": "service-school-bus",
    "name": "School and College Transportation",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/sc11.jpg",
    "fileName": "hero-school-bus-fleet.jpg",
    "category": "service",
    "alt": "School and College Bus Transportation in Abu Dhabi",
    "page": "Service: School Bus",
    "localPath": "/images/hero-school-bus-fleet.jpg",
    "status": "available_locally"
  },
  "service-staff-transport": {
    "id": "service-staff-transport",
    "name": "Corporate Staff Transportation",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/staff_abudhabi.jpg",
    "fileName": "service-staff-transport.jpg",
    "category": "service",
    "alt": "Corporate Staff Transportation Services Abu Dhabi",
    "page": "Service: Staff Transportation",
    "localPath": "/images/service-staff-transport.jpg",
    "status": "available_locally"
  },
  "service-rent-a-car": {
    "id": "service-rent-a-car",
    "name": "Rent A Car & Executive Limousine Abu Dhabi",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/car1.jpg",
    "fileName": "cadillac.jpg",
    "category": "service",
    "alt": "Rent A Car and Executive Limousine Services Abu Dhabi",
    "page": "Service: Rent A Car",
    "localPath": "/images/cadillac.jpg",
    "status": "available_locally"
  },
  "service-intercity-tour": {
    "id": "service-intercity-tour",
    "name": "Tour and Excursion Transport UAE",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/inter.jpg",
    "fileName": "service-tour-excursion.jpg",
    "category": "service",
    "alt": "Tour & Excursion Transport and UAE Sightseeing",
    "page": "Service: Inter City Tour",
    "localPath": "/images/service-tour-excursion.jpg",
    "status": "available_locally"
  },
  "service-group-pick-drop": {
    "id": "service-group-pick-drop",
    "name": "Airport Transfer & Group Pick Drop Services",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/xx1.jpg",
    "fileName": "service-airport-transfer.jpg",
    "category": "service",
    "alt": "Airport Transfer Services and Group Transit Abu Dhabi Dubai",
    "page": "Service: Group Pick & Drop",
    "localPath": "/images/service-airport-transfer.jpg",
    "status": "available_locally"
  },
  "service-daily-bus": {
    "id": "service-daily-bus",
    "name": "Daily Bus Service Abu Dhabi",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/rd22.jpg",
    "fileName": "hero-abu-dhabi-bus.jpg",
    "category": "service",
    "alt": "Daily Bus Service Operations in Abu Dhabi",
    "page": "Service: Daily Bus Service",
    "localPath": "/images/hero-abu-dhabi-bus.jpg",
    "status": "available_locally"
  },
  "banner-general": {
    "id": "banner-general",
    "name": "Fleet Overview Banner",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/03/banner-1.jpg",
    "fileName": "banner-1.jpg",
    "category": "hero",
    "alt": "Flash Transport Fleet Banner",
    "page": "Blog / Projects Banner",
    "localPath": "/images/banner-1.jpg",
    "status": "available_locally"
  },
  "banner-service-rs2": {
    "id": "banner-service-rs2",
    "name": "Services Hero Banner",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/rs2.jpg",
    "fileName": "rs2.jpg",
    "category": "hero",
    "alt": "Transport Services in UAE",
    "page": "Services / About",
    "localPath": "/images/rs2.jpg",
    "status": "available_locally"
  },
  "banner-contact": {
    "id": "banner-contact",
    "name": "Contact Page Banner",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/contact.jpg",
    "fileName": "contact.jpg",
    "category": "hero",
    "alt": "Contact Flash Transport Abu Dhabi",
    "page": "Contact Us",
    "localPath": "/images/contact.jpg",
    "status": "available_locally"
  },
  "about-vision-mission": {
    "id": "about-vision-mission",
    "name": "Vision and Mission Graphic",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/07/visionmission.jpg",
    "fileName": "visionmission.jpg",
    "category": "feature",
    "alt": "Flash Transport Vision and Mission",
    "page": "About Us",
    "localPath": "/images/visionmission.jpg",
    "status": "available_locally"
  },
  "banner-magic-1": {
    "id": "banner-magic-1",
    "name": "Service Header Accent",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/magic-1.jpg",
    "fileName": "magic-1.jpg",
    "category": "feature",
    "alt": "Modern Bus Fleet Service Highlight",
    "page": "Service Header",
    "localPath": "/images/magic-1.jpg",
    "status": "available_locally"
  },
  "fleet-gmc-denali": {
    "id": "fleet-gmc-denali",
    "name": "GMC Denali",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/gmc-denali1.jpg",
    "fileName": "gmc-denali1.jpg",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "7 Passengers",
    "alt": "GMC Denali Luxury SUV Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-gmc-denali-car.png",
    "status": "available_locally"
  },
  "fleet-toyota-land-cruiser": {
    "id": "fleet-toyota-land-cruiser",
    "name": "Toyota Land Cruiser",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/lc93.jpg",
    "fileName": "lc93.jpg",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "7 Passengers",
    "alt": "Toyota Land Cruiser Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-land-cruiser.png",
    "status": "available_locally"
  },
  "fleet-cadillac-escalade": {
    "id": "fleet-cadillac-escalade",
    "name": "Cadillac Escalade",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/dd1.jpg",
    "fileName": "dd1.jpg",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "7 Passengers",
    "alt": "Cadillac Escalade VIP Chauffeur Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-cadillac-escalade-car.png",
    "status": "available_locally"
  },
  "fleet-hyundai-h1": {
    "id": "fleet-hyundai-h1",
    "name": "9 Seater Hyundai H1",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/9-SEATER-HYUNDAI-H1.jpg",
    "fileName": "9-SEATER-HYUNDAI-H1.jpg",
    "category": "fleet",
    "vehicleCategory": "Passenger Vans",
    "capacity": "9 Passengers",
    "alt": "9 Seater Hyundai H1 Van Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-hyundai-h1.png",
    "status": "available_locally"
  },
  "fleet-toyota-fortuner": {
    "id": "fleet-toyota-fortuner",
    "name": "Toyota Fortuner",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/toyoto-fortuner.jpg",
    "fileName": "toyoto-fortuner.jpg",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "7 Passengers",
    "alt": "Toyota Fortuner SUV Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-fortuner.png",
    "status": "available_locally"
  },
  "fleet-kia-carnival": {
    "id": "fleet-kia-carnival",
    "name": "8 Seater Kia Carnival",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kiacarnival.jpg",
    "fileName": "kiacarnival.jpg",
    "category": "fleet",
    "vehicleCategory": "Passenger Vans",
    "capacity": "8 Passengers",
    "alt": "8 Seater Kia Carnival Family Van Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-kia-carnival.png",
    "status": "available_locally"
  },
  "fleet-toyota-previa": {
    "id": "fleet-toyota-previa",
    "name": "7 Seater Toyota Previa",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/7-SEATER-TOYOTA-PREVIA.jpg",
    "fileName": "7-SEATER-TOYOTA-PREVIA.jpg",
    "category": "fleet",
    "vehicleCategory": "Passenger Vans",
    "capacity": "7 Passengers",
    "alt": "7 Seater Toyota Previa MPV Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-previa.png",
    "status": "available_locally"
  },
  "fleet-toyota-prado": {
    "id": "fleet-toyota-prado",
    "name": "Toyota Prado",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/toyoto-prado.jpg",
    "fileName": "toyoto-prado.jpg",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "7 Passengers",
    "alt": "Toyota Prado 4x4 Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-prado.png",
    "status": "available_locally"
  },
  "fleet-toyota-corolla": {
    "id": "fleet-toyota-corolla",
    "name": "Toyota Corolla",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/toyota-korolla.jpg",
    "fileName": "toyota-korolla.jpg",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "5 Passengers",
    "alt": "Toyota Corolla Sedan Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-corolla.png",
    "status": "available_locally"
  },
  "fleet-kia-optima": {
    "id": "fleet-kia-optima",
    "name": "Kia Optima",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kia-optima.jpg",
    "fileName": "kia-optima.jpg",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "5 Passengers",
    "alt": "Kia Optima Executive Sedan Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-kia-optima.png",
    "status": "available_locally"
  },
  "fleet-hyundai-accent": {
    "id": "fleet-hyundai-accent",
    "name": "Hyundai Accent",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/accent.jpg",
    "fileName": "accent.jpg",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "5 Passengers",
    "alt": "Hyundai Accent Sedan Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-hyundai-accent.png",
    "status": "available_locally"
  },
  "fleet-kia-sportage": {
    "id": "fleet-kia-sportage",
    "name": "Kia Sportage",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kia-sportage-2.jpg",
    "fileName": "kia-sportage-2.jpg",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "5 Passengers",
    "alt": "Kia Sportage Crossover SUV Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-kia-sportage.png",
    "status": "available_locally"
  },
  "fleet-hyundai-creta": {
    "id": "fleet-hyundai-creta",
    "name": "Hyundai Creta",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/creta-hynday.jpg",
    "fileName": "creta-hynday.jpg",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "5 Passengers",
    "alt": "Hyundai Creta Compact SUV Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-hyundai-creta.png",
    "status": "available_locally"
  },
  "fleet-hyundai-santafe": {
    "id": "fleet-hyundai-santafe",
    "name": "Hyundai Santa Fe",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/huyndaisantafe.jpg",
    "fileName": "huyndaisantafe.jpg",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "7 Passengers",
    "alt": "Hyundai Santa Fe Premium SUV Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-hyundai-santafe.png",
    "status": "available_locally"
  },
  "fleet-ashok-leyland-66": {
    "id": "fleet-ashok-leyland-66",
    "name": "66 Seater Ashok Leyland Bus",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/falcon1.jpg",
    "fileName": "falcon1.jpg",
    "category": "fleet",
    "vehicleCategory": "Large Coaches",
    "capacity": "66 Passengers",
    "alt": "66 Seater Ashok Leyland Falcon Bus Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-ashok-leyland-66-car.png",
    "status": "available_locally"
  },
  "fleet-luxury-bus-50": {
    "id": "fleet-luxury-bus-50",
    "name": "50 Seater Luxury Bus",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kl1.jpg",
    "fileName": "kl1.jpg",
    "category": "fleet",
    "vehicleCategory": "Large Coaches",
    "capacity": "50 Passengers",
    "alt": "50 Seater Luxury Coach Bus Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-luxury-coach-50-car.png",
    "status": "available_locally"
  },
  "fleet-luxury-bus-37": {
    "id": "fleet-luxury-bus-37",
    "name": "37 Seater Luxury Bus",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kyo1.jpg",
    "fileName": "kyo1.jpg",
    "category": "fleet",
    "vehicleCategory": "Large Coaches",
    "capacity": "37 Passengers",
    "alt": "37 Seater Luxury Coach Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-luxury-bus-37.png",
    "status": "available_locally"
  },
  "fleet-fuso-bus-34": {
    "id": "fleet-fuso-bus-34",
    "name": "34 Seater Mitsubishi Fuso Bus",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/x1.jpg",
    "fileName": "x1.jpg",
    "category": "fleet",
    "vehicleCategory": "Mini Buses",
    "capacity": "34 Passengers",
    "alt": "34 Seater Mitsubishi Rosa / Fuso Bus Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-mitsubishi-fuso-34-car.png",
    "status": "available_locally"
  },
  "fleet-toyota-coaster-22": {
    "id": "fleet-toyota-coaster-22",
    "name": "22 Seater Toyota Coaster",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/ml1.jpg",
    "fileName": "ml1.jpg",
    "category": "fleet",
    "vehicleCategory": "Mini Buses",
    "capacity": "22-30 Passengers",
    "alt": "22-30 Seater Toyota Coaster Bus Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-coaster.png",
    "status": "available_locally"
  },
  "fleet-toyota-hiace-13": {
    "id": "fleet-toyota-hiace-13",
    "name": "13 Seater Toyota Hiace",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/h1.jpg",
    "fileName": "h1.jpg",
    "category": "fleet",
    "vehicleCategory": "Passenger Vans",
    "capacity": "13-14 Passengers",
    "alt": "13 Seater Toyota Hiace Commuter Van Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-hiace-13-car.png",
    "status": "available_locally"
  },
  "fleet-toyota-hilux": {
    "id": "fleet-toyota-hilux",
    "name": "Toyota Hilux Pickup",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/th1.jpg",
    "fileName": "th1.jpg",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "5 Passengers + Cargo Bed",
    "alt": "Toyota Hilux Double Cabin Pickup Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-hilux.png",
    "status": "available_locally"
  },
  "blog-ser1-1": {
    "id": "blog-ser1-1",
    "name": "Cost of Renting Bus Image",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/ser1-1.jpg",
    "fileName": "ser1-1.jpg",
    "category": "blog",
    "alt": "Cost of renting a bus in Abu Dhabi",
    "page": "Blog",
    "localPath": "/images/ser1-1.jpg",
    "status": "available_locally"
  },
  "blog-staff": {
    "id": "blog-staff",
    "name": "Top Rental Bus Companies Image",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/staff.jpg",
    "fileName": "staff.jpg",
    "category": "blog",
    "alt": "Top rental bus companies in Abu Dhabi",
    "page": "Blog",
    "localPath": "/images/staff.jpg",
    "status": "available_locally"
  },
  "blog-rent-a-car-abu-dhabi": {
    "id": "blog-rent-a-car-abu-dhabi",
    "name": "Rent a car in Abu Dhabi featured",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2025/06/rent-a-car-abu-dhabi.jpg",
    "fileName": "rent-a-car-abu-dhabi.jpg",
    "category": "blog",
    "alt": "Rent a car in Abu Dhabi luxury vehicles",
    "page": "Blog",
    "localPath": "/images/rent-a-car-abu-dhabi.jpg",
    "status": "available_locally"
  },
  "blog-abudhabi": {
    "id": "blog-abudhabi",
    "name": "Abu Dhabi City Skyline",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2025/06/abudhabi.jpg",
    "fileName": "abudhabi.jpg",
    "category": "blog",
    "alt": "Abu Dhabi city travel and tourism",
    "page": "Blog",
    "localPath": "/images/abudhabi.jpg",
    "status": "available_locally"
  }
};

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
