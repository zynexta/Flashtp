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
    "originalUrl": "https://flashtp.com/wp-content/themes/annvision-temp/images/logo.webp",
    "fileName": "flash-transport-logo.webp",
    "category": "logo",
    "alt": "Flash Transport Passengers By Bus LLC Logo",
    "page": "Header & Brand",
    "localPath": "/images/flash-transport-logo.webp",
    "status": "available_locally"
  },
  "logo-footer": {
    "id": "logo-footer",
    "name": "Flash Transport Footer Logo",
    "originalUrl": "https://flashtp.com/wp-content/themes/annvision-temp/images/ft-logo.webp",
    "fileName": "flash-transport-logo-white.webp",
    "category": "logo",
    "alt": "Flash Transport Bus LLC Footer Logo",
    "page": "Footer",
    "localPath": "/images/flash-transport-logo-white.webp",
    "status": "available_locally"
  },
  "logo-mobile": {
    "id": "logo-mobile",
    "name": "Flash Transport Mobile Logo",
    "originalUrl": "https://flashtp.com/wp-content/themes/annvision-temp/images/mob-logo.webp",
    "fileName": "flash-transport-logo.webp",
    "category": "logo",
    "alt": "Flash Transport Mobile Logo",
    "page": "Mobile Header",
    "localPath": "/images/flash-transport-logo.webp",
    "status": "available_locally"
  },
  "logo-ohms-cert": {
    "id": "logo-ohms-cert",
    "name": "OHSMS EIAC Certificate Badge",
    "originalUrl": "https://flashtp.com/wp-content/themes/annvision-temp/images/ohms.webp",
    "fileName": "ohms.webp",
    "category": "cert",
    "alt": "EIAC Accredited OHSMS CB-QMS/EMS/OHSMS-084 Certification",
    "page": "Homepage / About",
    "localPath": "/images/ohms.webp",
    "status": "available_locally"
  },
  "iso-cert": {
    "id": "iso-cert",
    "name": "ISO Certification Badge",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2025/05/iso1.jpg",
    "fileName": "iso1.webp",
    "category": "cert",
    "alt": "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Certification",
    "page": "About Us",
    "localPath": "/images/iso1.webp",
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
    "fileName": "cadillac.webp",
    "category": "hero",
    "alt": "Cadillac Escalade Luxury Chauffeur Transport",
    "page": "Homepage Hero",
    "localPath": "/images/cadillac.webp",
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
    "fileName": "second.webp",
    "category": "feature",
    "alt": "Quality Transport Services Abu Dhabi",
    "page": "Homepage Feature",
    "localPath": "/images/second.webp",
    "status": "available_locally"
  },
  "feature-safety": {
    "id": "feature-safety",
    "name": "Safety First Shield",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/safey.png",
    "fileName": "safey.webp",
    "category": "feature",
    "alt": "Passenger Safety Standards and Protocols",
    "page": "Homepage Feature",
    "localPath": "/images/safey.webp",
    "status": "available_locally"
  },
  "feature-driver": {
    "id": "feature-driver",
    "name": "Professional Trained Drivers",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/driver2.png",
    "fileName": "driver2.webp",
    "category": "feature",
    "alt": "Certified Professional Drivers Flash Transport",
    "page": "Homepage Feature",
    "localPath": "/images/driver2.webp",
    "status": "available_locally"
  },
  "feature-quality-round": {
    "id": "feature-quality-round",
    "name": "Quality Assurance Stamp",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/quality-but.png",
    "fileName": "quality-but.webp",
    "category": "feature",
    "alt": "ISO Quality Guaranteed",
    "page": "Homepage Feature",
    "localPath": "/images/quality-but.webp",
    "status": "available_locally"
  },
  "service-lease-bus": {
    "id": "service-lease-bus",
    "name": "Long and Short Term Lease Bus Rental",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/bus1.jpg",
    "fileName": "dubai-hero-luxury-coach.webp",
    "category": "service",
    "alt": "Long and Short Term Lease Bus Rental in Abu Dhabi",
    "page": "Service: Lease Bus Rental",
    "localPath": "/images/dubai-hero-luxury-coach.webp",
    "status": "available_locally"
  },
  "service-school-bus": {
    "id": "service-school-bus",
    "name": "School and College Transportation",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/sc11.jpg",
    "fileName": "hero-school-bus-fleet.webp",
    "category": "service",
    "alt": "School and College Bus Transportation in Abu Dhabi",
    "page": "Service: School Bus",
    "localPath": "/images/hero-school-bus-fleet.webp",
    "status": "available_locally"
  },
  "service-staff-transport": {
    "id": "service-staff-transport",
    "name": "Corporate Staff Transportation",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/staff_abudhabi.jpg",
    "fileName": "service-staff-transport.webp",
    "category": "service",
    "alt": "Corporate Staff Transportation Services Abu Dhabi",
    "page": "Service: Staff Transportation",
    "localPath": "/images/service-staff-transport.webp",
    "status": "available_locally"
  },
  "service-rent-a-car": {
    "id": "service-rent-a-car",
    "name": "Rent A Car & Executive Limousine Abu Dhabi",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/car1.jpg",
    "fileName": "cadillac.webp",
    "category": "service",
    "alt": "Rent A Car and Executive Limousine Services Abu Dhabi",
    "page": "Service: Rent A Car",
    "localPath": "/images/cadillac.webp",
    "status": "available_locally"
  },
  "service-intercity-tour": {
    "id": "service-intercity-tour",
    "name": "Tour and Excursion Transport UAE",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/inter.jpg",
    "fileName": "service-tour-excursion.webp",
    "category": "service",
    "alt": "Tour & Excursion Transport and UAE Sightseeing",
    "page": "Service: Inter City Tour",
    "localPath": "/images/service-tour-excursion.webp",
    "status": "available_locally"
  },
  "service-group-pick-drop": {
    "id": "service-group-pick-drop",
    "name": "Airport Transfer & Group Pick Drop Services",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/xx1.jpg",
    "fileName": "service-airport-transfer.webp",
    "category": "service",
    "alt": "Airport Transfer Services and Group Transit Abu Dhabi Dubai",
    "page": "Service: Group Pick & Drop",
    "localPath": "/images/service-airport-transfer.webp",
    "status": "available_locally"
  },
  "service-daily-bus": {
    "id": "service-daily-bus",
    "name": "Daily Bus Service Abu Dhabi",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/rd22.jpg",
    "fileName": "hero-abu-dhabi-bus.webp",
    "category": "service",
    "alt": "Daily Bus Service Operations in Abu Dhabi",
    "page": "Service: Daily Bus Service",
    "localPath": "/images/hero-abu-dhabi-bus.webp",
    "status": "available_locally"
  },
  "banner-general": {
    "id": "banner-general",
    "name": "Fleet Overview Banner",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/03/banner-1.jpg",
    "fileName": "banner-1.webp",
    "category": "hero",
    "alt": "Flash Transport Fleet Banner",
    "page": "Blog / Projects Banner",
    "localPath": "/images/banner-1.webp",
    "status": "available_locally"
  },
  "banner-service-rs2": {
    "id": "banner-service-rs2",
    "name": "Services Hero Banner",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/rs2.jpg",
    "fileName": "rs2.webp",
    "category": "hero",
    "alt": "Transport Services in UAE",
    "page": "Services / About",
    "localPath": "/images/rs2.webp",
    "status": "available_locally"
  },
  "banner-contact": {
    "id": "banner-contact",
    "name": "Contact Page Banner",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/contact.jpg",
    "fileName": "contact.webp",
    "category": "hero",
    "alt": "Contact Flash Transport Abu Dhabi",
    "page": "Contact Us",
    "localPath": "/images/contact.webp",
    "status": "available_locally"
  },
  "about-vision-mission": {
    "id": "about-vision-mission",
    "name": "Vision and Mission Graphic",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/07/visionmission.jpg",
    "fileName": "visionmission.webp",
    "category": "feature",
    "alt": "Flash Transport Vision and Mission",
    "page": "About Us",
    "localPath": "/images/visionmission.webp",
    "status": "available_locally"
  },
  "banner-magic-1": {
    "id": "banner-magic-1",
    "name": "Service Header Accent",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/11/magic-1.jpg",
    "fileName": "magic-1.webp",
    "category": "feature",
    "alt": "Modern Bus Fleet Service Highlight",
    "page": "Service Header",
    "localPath": "/images/magic-1.webp",
    "status": "available_locally"
  },
  "fleet-gmc-denali": {
    "id": "fleet-gmc-denali",
    "name": "GMC Denali",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/gmc-denali1.jpg",
    "fileName": "gmc-denali1.webp",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "7 Passengers",
    "alt": "GMC Denali Luxury SUV Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-gmc-denali-car.webp",
    "status": "available_locally"
  },
  "fleet-toyota-land-cruiser": {
    "id": "fleet-toyota-land-cruiser",
    "name": "Toyota Land Cruiser",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/lc93.jpg",
    "fileName": "lc93.webp",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "7 Passengers",
    "alt": "Toyota Land Cruiser Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-land-cruiser.webp",
    "status": "available_locally"
  },
  "fleet-cadillac-escalade": {
    "id": "fleet-cadillac-escalade",
    "name": "Cadillac Escalade",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/dd1.jpg",
    "fileName": "dd1.webp",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "7 Passengers",
    "alt": "Cadillac Escalade VIP Chauffeur Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-cadillac-escalade-car.webp",
    "status": "available_locally"
  },
  "fleet-hyundai-h1": {
    "id": "fleet-hyundai-h1",
    "name": "9 Seater Hyundai H1",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/9-SEATER-HYUNDAI-H1.jpg",
    "fileName": "9-SEATER-HYUNDAI-H1.webp",
    "category": "fleet",
    "vehicleCategory": "Passenger Vans",
    "capacity": "9 Passengers",
    "alt": "9 Seater Hyundai H1 Van Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-hyundai-h1.webp",
    "status": "available_locally"
  },
  "fleet-toyota-fortuner": {
    "id": "fleet-toyota-fortuner",
    "name": "Toyota Fortuner",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/toyoto-fortuner.jpg",
    "fileName": "toyoto-fortuner.webp",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "7 Passengers",
    "alt": "Toyota Fortuner SUV Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-fortuner.webp",
    "status": "available_locally"
  },
  "fleet-kia-carnival": {
    "id": "fleet-kia-carnival",
    "name": "8 Seater Kia Carnival",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kiacarnival.jpg",
    "fileName": "kiacarnival.webp",
    "category": "fleet",
    "vehicleCategory": "Passenger Vans",
    "capacity": "8 Passengers",
    "alt": "8 Seater Kia Carnival Family Van Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-kia-carnival.webp",
    "status": "available_locally"
  },
  "fleet-toyota-previa": {
    "id": "fleet-toyota-previa",
    "name": "7 Seater Toyota Previa",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/7-SEATER-TOYOTA-PREVIA.jpg",
    "fileName": "7-SEATER-TOYOTA-PREVIA.webp",
    "category": "fleet",
    "vehicleCategory": "Passenger Vans",
    "capacity": "7 Passengers",
    "alt": "7 Seater Toyota Previa MPV Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-previa.webp",
    "status": "available_locally"
  },
  "fleet-toyota-prado": {
    "id": "fleet-toyota-prado",
    "name": "Toyota Prado",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/toyoto-prado.jpg",
    "fileName": "toyoto-prado.webp",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "7 Passengers",
    "alt": "Toyota Prado 4x4 Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-prado.webp",
    "status": "available_locally"
  },
  "fleet-toyota-corolla": {
    "id": "fleet-toyota-corolla",
    "name": "Toyota Corolla",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/toyota-korolla.jpg",
    "fileName": "toyota-korolla.webp",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "5 Passengers",
    "alt": "Toyota Corolla Sedan Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-corolla.webp",
    "status": "available_locally"
  },
  "fleet-kia-optima": {
    "id": "fleet-kia-optima",
    "name": "Kia Optima",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kia-optima.jpg",
    "fileName": "kia-optima.webp",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "5 Passengers",
    "alt": "Kia Optima Executive Sedan Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-kia-optima.webp",
    "status": "available_locally"
  },
  "fleet-hyundai-accent": {
    "id": "fleet-hyundai-accent",
    "name": "Hyundai Accent",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/accent.jpg",
    "fileName": "accent.webp",
    "category": "fleet",
    "vehicleCategory": "Luxury Cars",
    "capacity": "5 Passengers",
    "alt": "Hyundai Accent Sedan Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-hyundai-accent.webp",
    "status": "available_locally"
  },
  "fleet-kia-sportage": {
    "id": "fleet-kia-sportage",
    "name": "Kia Sportage",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kia-sportage-2.jpg",
    "fileName": "kia-sportage-2.webp",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "5 Passengers",
    "alt": "Kia Sportage Crossover SUV Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-kia-sportage.webp",
    "status": "available_locally"
  },
  "fleet-hyundai-creta": {
    "id": "fleet-hyundai-creta",
    "name": "Hyundai Creta",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/creta-hynday.jpg",
    "fileName": "creta-hynday.webp",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "5 Passengers",
    "alt": "Hyundai Creta Compact SUV Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-hyundai-creta.webp",
    "status": "available_locally"
  },
  "fleet-hyundai-santafe": {
    "id": "fleet-hyundai-santafe",
    "name": "Hyundai Santa Fe",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/huyndaisantafe.jpg",
    "fileName": "huyndaisantafe.webp",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "7 Passengers",
    "alt": "Hyundai Santa Fe Premium SUV Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-hyundai-santafe.webp",
    "status": "available_locally"
  },
  "fleet-ashok-leyland-66": {
    "id": "fleet-ashok-leyland-66",
    "name": "66 Seater Ashok Leyland Bus",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/falcon1.jpg",
    "fileName": "falcon1.webp",
    "category": "fleet",
    "vehicleCategory": "Large Coaches",
    "capacity": "66 Passengers",
    "alt": "66 Seater Ashok Leyland Falcon Bus Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-ashok-leyland-66-car.webp",
    "status": "available_locally"
  },
  "fleet-luxury-bus-50": {
    "id": "fleet-luxury-bus-50",
    "name": "50 Seater Luxury Bus",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kl1.jpg",
    "fileName": "kl1.webp",
    "category": "fleet",
    "vehicleCategory": "Large Coaches",
    "capacity": "50 Passengers",
    "alt": "50 Seater Luxury Coach Bus Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-luxury-coach-50-car.webp",
    "status": "available_locally"
  },
  "fleet-luxury-bus-37": {
    "id": "fleet-luxury-bus-37",
    "name": "37 Seater Luxury Bus",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/kyo1.jpg",
    "fileName": "kyo1.webp",
    "category": "fleet",
    "vehicleCategory": "Large Coaches",
    "capacity": "37 Passengers",
    "alt": "37 Seater Luxury Coach Rental Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-luxury-bus-37.webp",
    "status": "available_locally"
  },
  "fleet-fuso-bus-34": {
    "id": "fleet-fuso-bus-34",
    "name": "34 Seater Mitsubishi Fuso Bus",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/x1.jpg",
    "fileName": "x1.webp",
    "category": "fleet",
    "vehicleCategory": "Mini Buses",
    "capacity": "34 Passengers",
    "alt": "34 Seater Mitsubishi Rosa / Fuso Bus Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-mitsubishi-fuso-34-car.webp",
    "status": "available_locally"
  },
  "fleet-toyota-coaster-22": {
    "id": "fleet-toyota-coaster-22",
    "name": "22 Seater Toyota Coaster",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/ml1.jpg",
    "fileName": "ml1.webp",
    "category": "fleet",
    "vehicleCategory": "Mini Buses",
    "capacity": "22-30 Passengers",
    "alt": "22-30 Seater Toyota Coaster Bus Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-coaster.webp",
    "status": "available_locally"
  },
  "fleet-toyota-hiace-13": {
    "id": "fleet-toyota-hiace-13",
    "name": "13 Seater Toyota Hiace",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/h1.jpg",
    "fileName": "h1.webp",
    "category": "fleet",
    "vehicleCategory": "Passenger Vans",
    "capacity": "13-14 Passengers",
    "alt": "13 Seater Toyota Hiace Commuter Van Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-hiace-13-car.webp",
    "status": "available_locally"
  },
  "fleet-toyota-hilux": {
    "id": "fleet-toyota-hilux",
    "name": "Toyota Hilux Pickup",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/th1.jpg",
    "fileName": "th1.webp",
    "category": "fleet",
    "vehicleCategory": "SUVs",
    "capacity": "5 Passengers + Cargo Bed",
    "alt": "Toyota Hilux Double Cabin Pickup Abu Dhabi",
    "page": "Our Fleet",
    "localPath": "/images/fleet-toyota-hilux.webp",
    "status": "available_locally"
  },
  "blog-ser1-1": {
    "id": "blog-ser1-1",
    "name": "Cost of Renting Bus Image",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/ser1-1.jpg",
    "fileName": "ser1-1.webp",
    "category": "blog",
    "alt": "Cost of renting a bus in Abu Dhabi",
    "page": "Blog",
    "localPath": "/images/ser1-1.webp",
    "status": "available_locally"
  },
  "blog-staff": {
    "id": "blog-staff",
    "name": "Top Rental Bus Companies Image",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2024/05/staff.jpg",
    "fileName": "staff.webp",
    "category": "blog",
    "alt": "Top rental bus companies in Abu Dhabi",
    "page": "Blog",
    "localPath": "/images/staff.webp",
    "status": "available_locally"
  },
  "blog-rent-a-car-abu-dhabi": {
    "id": "blog-rent-a-car-abu-dhabi",
    "name": "Rent a car in Abu Dhabi featured",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2025/06/rent-a-car-abu-dhabi.jpg",
    "fileName": "rent-a-car-abu-dhabi.webp",
    "category": "blog",
    "alt": "Rent a car in Abu Dhabi luxury vehicles",
    "page": "Blog",
    "localPath": "/images/rent-a-car-abu-dhabi.webp",
    "status": "available_locally"
  },
  "blog-abudhabi": {
    "id": "blog-abudhabi",
    "name": "Abu Dhabi City Skyline",
    "originalUrl": "https://flashtp.com/wp-content/uploads/2025/06/abudhabi.jpg",
    "fileName": "abudhabi.webp",
    "category": "blog",
    "alt": "Abu Dhabi city travel and tourism",
    "page": "Blog",
    "localPath": "/images/abudhabi.webp",
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
