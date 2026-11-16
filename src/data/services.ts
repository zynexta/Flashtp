import { ServiceItem } from '../types/service';
import { ROUTES } from '../config/routes';

export const SERVICES: ServiceItem[] = [
  {
    id: 'school-bus',
    slug: 'school-college-transportation-abu-dabi',
    title: 'School & College Transportation',
    shortDescription: 'Dedicated student transportation engineered for total safety, comfort, and peace of mind. Approved under UAE Department of Transport.',
    longDescription: 'At Flash Transport, we recognize that transporting students is a sacred trust. As a premier transportation partner in Abu Dhabi, we offer safe, efficient, and comfortable school and university bus services tailored for educational institutions. Our modern school buses are equipped with state-of-the-art safety technology, high-visibility livery, and driven by specially vetted, child-safety certified chauffeurs.',
    iconName: 'GraduationCap',
    imageKey: 'service-school-bus',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/sc11.jpg',
    benefits: [
      'Strict adherence to Abu Dhabi DoT & ADEK school transport regulations',
      'Specially trained and licensed school bus drivers with clean records',
      'Real-time GPS vehicle tracking and onboard CCTV surveillance',
      'Comfortable, air-conditioned seating designed for student ergonomic safety',
      'Punctual morning pick-ups and afternoon returns guaranteeing zero missed classes'
    ],
    features: [
      {
        title: 'Child Safety First Protocols',
        description: 'Equipped with electronic stop arms, passenger motion detectors, emergency exits, and automatic fire suppression.'
      },
      {
        title: 'Dedicated Route Optimization',
        description: 'Route planning designed to minimize travel times, preventing student fatigue while ensuring neighborhood-level pick-up convenience.'
      },
      {
        title: 'Certified Bus Supervisors',
        description: 'Trained bus attendants available to assist young children during boarding, seating, and disembarkation.'
      },
      {
        title: 'Annual Institutional Agreements',
        description: 'Turnkey transportation management for private schools, colleges, academies, and university campuses.'
      }
    ],
    suitableFor: [
      'Private & International K-12 Schools',
      'Universities, Colleges & Higher Education Campuses',
      'Sports Academies & Extracurricular Institutions',
      'Educational Field Trips & Science Excursions'
    ],
    vehicleOptions: [
      '66 Seater Heavy School Bus (ADEK Compliant)',
      '34 Seater Mitsubishi Fuso School Bus',
      '22-30 Seater Toyota Coaster School Bus'
    ],
    safetyPoints: [
      'Electronic Child Check-Mate systems ensuring no child is left behind',
      'Automated exterior stop arms and hazard warning flashers',
      'Speed limiters restricted to 80 km/h in accordance with school transit laws',
      'High-resolution multi-angle cameras covering internal cabin and external doors'
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Route & Enrollment Analysis',
        description: 'We assess student residential density to map optimized, safe pick-up clusters.'
      },
      {
        step: 2,
        title: 'Fleet Allocation & Inspection',
        description: 'Assign certified school transport vehicles equipped with all regulatory hardware.'
      },
      {
        step: 3,
        title: 'Driver Safety Briefing',
        description: 'Conduct dedicated driver route trial runs and school gate protocol alignment.'
      },
      {
        step: 4,
        title: 'Daily Operation & Monitoring',
        description: 'Real-time telemetry and dispatch supervision throughout morning and afternoon runs.'
      }
    ],
    faqs: [
      {
        question: 'Are Flash Transport school buses approved by Abu Dhabi transport authorities?',
        answer: 'Yes, our entire school transport fleet meets all standards established by the Department of Transport (DoT) and ADEK, including yellow school bus paint schemes, safety stop signs, and speed limiters.'
      },
      {
        question: 'Can you provide transportation for school field trips and sporting events?',
        answer: 'Absolutely. We provide flexible charter buses for academic field trips, sports days, debate competitions, and weekend university excursions across all Emirates.'
      },
      {
        question: 'Are certified bus attendants / supervisors provided on student routes?',
        answer: 'Yes. In strict alignment with ADEK kindergarten and primary grade requirements, we provide certified female bus supervisors trained in child safety management, first aid, and orderly boarding and disembarkation.'
      },
      {
        question: 'How do schools and parents track student transit schedules in real-time?',
        answer: 'Every vehicle in our school transport fleet is equipped with live GPS telematics and onboard digital video surveillance, allowing institutional dispatchers to verify exact stop arrival times and driver adherence.'
      },
      {
        question: 'What emergency safety hardware is installed onboard Flash Transport school buses?',
        answer: 'All vehicles feature electronic Child Check-Mate systems, automated fire suppression canisters, exterior swing-out stop arms with high-intensity flashers, speed governors locked at 80 km/h, and push-out emergency windows.'
      }
    ],
    metaTitle: 'School & College Bus Transportation Abu Dhabi | Flash Transport',
    metaDescription: 'Safe, certified school and university transportation in Abu Dhabi. ADEK compliant modern buses, trained drivers, GPS tracking, and dedicated student safety features.'
  },
  {
    id: 'staff-transport',
    slug: 'staff-transportation-services-abudhabi',
    title: 'Staff Transportation Services',
    shortDescription: 'Reliable, cost-effective corporate employee transport solutions ensuring your workforce arrives on time, safe, and refreshed across Abu Dhabi.',
    longDescription: 'Flash Transport is the trusted mobility partner for leading corporate, manufacturing, construction, and healthcare organizations across Abu Dhabi. Our dependable employee shuttle networks connect residential quarters, metro hubs, and worker accommodations with corporate offices, industrial cities (ICAD, Musaffah, Khalifa Industrial Zone KIZAD), and remote project sites.',
    iconName: 'Users',
    imageKey: 'service-staff-transport',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/11/staff_abudhabi.jpg',
    benefits: [
      'Eliminate employee tardiness and reduce workforce transit stress',
      'Substantial corporate cost savings compared to managing in-house fleets',
      'Optimized multi-shift coverage: Day shifts, night shifts, and 24/7 rotational cycles',
      'Modern, climate-controlled buses ensuring optimal worker comfort and productivity',
      'Transparent corporate reporting with monthly attendance and mileage telemetry'
    ],
    features: [
      {
        title: 'Customized Route Scheduling',
        description: 'Custom routes designed around your company work shifts, accommodation hubs, and operational headquarters.'
      },
      {
        title: 'High-Capacity Fleet Options',
        description: 'Diverse vehicles from 13-seater executive vans for managers to 66-seater high-capacity buses for plant workers.'
      },
      {
        title: 'Industrial & Remote Site Access',
        description: 'Equipped with permits and safety gear for industrial zones including Musaffah, ICAD, Al Ruwais, and Habshan.'
      },
      {
        title: '24/7 Shift Coverage',
        description: 'Seamless operations for continuous 24-hour operations in healthcare, security, facilities, and manufacturing.'
      }
    ],
    suitableFor: [
      'Construction & Civil Engineering Workforces',
      'Manufacturing Plants & Industrial Facilities',
      'Retail Chains & Hospitality Staff Operations',
      'Healthcare & Hospital Shift Workers',
      'Facilities Management & Security Service Providers'
    ],
    vehicleOptions: [
      '66 Seater Ashok Leyland Bus (Standard Staff Transit)',
      '34 Seater Mitsubishi Fuso Bus',
      '22 Seater Toyota Coaster',
      '13 Seater Toyota Hiace Executive Shuttle'
    ],
    safetyPoints: [
      'Strict fatigue management policies ensuring fresh, rested drivers for all shifts',
      'Regular air-conditioning filter replacement and sanitization',
      'Commercial fleet insurance with comprehensive passenger liability coverage',
      'Direct radio and cellular connection to 24/7 central dispatch'
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Workforce Logistics Audit',
        description: 'Review staff living locations, work shifts, and site access constraints.'
      },
      {
        step: 2,
        title: 'Route & Schedule Architecture',
        description: 'Design fastest routes with minimal stops to keep transit times under 45 minutes.'
      },
      {
        step: 3,
        title: 'Fleet Deployment',
        description: 'Mobilize dedicated buses with prominent corporate identification signs.'
      },
      {
        step: 4,
        title: 'Monthly Review & Optimization',
        description: 'Analyze telemetry and adapt routes dynamically as your workforce headcount scales.'
      }
    ],
    faqs: [
      {
        question: 'Do you operate staff buses outside central Abu Dhabi?',
        answer: 'Yes, we operate extensive staff shuttle networks connecting Abu Dhabi, Musaffah, Al Ain, Dubai, Western Region (Al Ruwais, Madinat Zayed), and remote project sites.'
      },
      {
        question: 'How quickly can you scale our bus fleet if staff count increases?',
        answer: 'With our large fleet of over 150 vehicles, we can deploy additional vehicles within 24 to 48 hours to accommodate corporate expansion or project ramping.'
      }
    ],
    metaTitle: 'Staff Transportation Services Abu Dhabi | Flash Transport',
    metaDescription: 'Trusted corporate employee shuttle and staff transportation services in Abu Dhabi, Musaffah, and ICAD. Reliable multi-shift transit with certified drivers.'
  },
  {
    id: 'rent-a-car',
    slug: 'rent-a-car',
    title: 'Executive Car & Limousine Services',
    shortDescription: 'Premium chauffeured vehicles for corporate leaders, VIP guests, and special occasions, combining comfort, privacy, and professionalism.',
    longDescription: 'Whether you need a reliable sedan for everyday city commuting, a rugged SUV for executive site visits, or a luxury flagship like the Cadillac Escalade for VIP delegation, Flash Transport provides the premier rent-a-car service in Abu Dhabi. We offer transparent rental agreements, pristine vehicle condition, 24/7 roadside assistance, and competitive corporate and individual rates.',
    iconName: 'Car',
    imageKey: 'service-rent-a-car',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/11/car1.jpg',
    benefits: [
      'Wide fleet choice: From economical sedans to luxury executive SUVs',
      'Flexible options: Chauffeur-driven VIP services or self-drive rentals',
      'Pristine condition: Meticulously sanitized and mechanically inspected before every rental',
      'Transparent terms with no hidden fees, clear mileage allowances, and simple paperwork',
      'Free airport delivery and hotel pick-up service across Abu Dhabi'
    ],
    features: [
      {
        title: 'VIP Chauffeur Services',
        description: 'Polite, multi-lingual, and suited executive chauffeurs trained in diplomatic and VIP protocol.'
      },
      {
        title: 'Comprehensive Insurance',
        description: 'Full comprehensive vehicle insurance included with 24/7 emergency roadside support.'
      },
      {
        title: 'Airport Meet & Greet',
        description: 'Seamless arrival pickups from Abu Dhabi International Airport (AUH) and Dubai International (DXB).'
      },
      {
        title: 'Corporate Fleet Leasing',
        description: 'Long-term corporate monthly leasing packages with complimentary maintenance and replacement cars.'
      }
    ],
    suitableFor: [
      'Business Executives & Corporate Travelers',
      'Visiting Delegates & Diplomatic Missions',
      'Residents Requiring Reliable Monthly Leases',
      'Tourists Seeking Freedom to Explore the UAE'
    ],
    vehicleOptions: [
      'Cadillac Escalade Platinum Edition',
      'GMC Yukon Denali Luxury SUV',
      'Toyota Land Cruiser V8 / Prado',
      'Toyota Fortuner 7-Seater',
      'Toyota Corolla & Hyundai Accent Sedans'
    ],
    safetyPoints: [
      'Full multi-point safety check completed prior to hand-over',
      'Child safety seats available upon request',
      '24/7 real-time roadside assistance across all seven Emirates',
      'Sanitized interior with climate control pre-cooled for your comfort'
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Select Vehicle & Dates',
        description: 'Choose your desired car model, rental duration, and chauffeur preference.'
      },
      {
        step: 2,
        title: 'Quick Verification',
        description: 'Submit basic identification (Emirates ID / Driving License or International Permit).'
      },
      {
        step: 3,
        title: 'Delivery or Pickup',
        description: 'Receive your vehicle delivered directly to your hotel, office, or airport terminal.'
      },
      {
        step: 4,
        title: 'Smooth Travel Experience',
        description: 'Enjoy effortless driving with dedicated 24/7 customer support whenever needed.'
      }
    ],
    faqs: [
      {
        question: 'Can I rent a car with a personal driver in Abu Dhabi?',
        answer: 'Yes, we provide luxury and executive vehicles with uniformed, professional English and Arabic speaking chauffeurs for hourly, daily, or monthly bookings.'
      },
      {
        question: 'What documents are required to rent a car?',
        answer: 'For UAE residents: Valid UAE Driving License and Emirates ID. For tourists/visitors: Passport with UAE entry stamp and a valid International Driving Permit or approved national driving license.'
      }
    ],
    metaTitle: 'Rent A Car Abu Dhabi | Luxury & Sedan Rentals | Flash Transport',
    metaDescription: 'Premium car rental and executive chauffeur services in Abu Dhabi. From Toyota Land Cruisers to Cadillac Escalade. Flexible daily, weekly, and monthly rates.'
  },
  {
    id: 'inter-city-tour',
    slug: 'inter-city-tour',
    title: 'Tour & Excursion Transport',
    shortDescription: 'Comfortable and reliable group transport for city tours, corporate outings, and cross-emirate excursions across the UAE.',
    longDescription: 'Are you ready to explore the wonders of the UAE in absolute comfort? Flash Transport offers bespoke Inter City Tour packages connecting the historic cultural sites of Abu Dhabi with the futuristic skyline of Dubai and beyond. Whether you are traveling with family, entertaining international business partners, or organizing a luxury VIP excursion, our chauffeur-driven vehicles ensure an unforgettable journey.',
    iconName: 'Compass',
    imageKey: 'service-intercity-tour',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/11/inter.jpg',
    benefits: [
      'Customizable itineraries matching your exact timetable and landmarks of interest',
      'Knowledgeable chauffeurs familiar with best photography spots, history, and traffic flows',
      'Direct door-to-door luxury transfers between Abu Dhabi and Dubai hotels or residences',
      'Complimentary onboard bottled water, Wi-Fi connectivity, and device charging ports',
      'Eliminate parking hassles and navigation stress while traveling between Emirates'
    ],
    features: [
      {
        title: 'Abu Dhabi Iconic Landmarks',
        description: 'Visit Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, Qasr Al Watan, and Ferrari World.'
      },
      {
        title: 'Dubai Highlights Tour',
        description: 'Experience Burj Khalifa, Dubai Mall, Museum of the Future, Palm Jumeirah, and Dubai Marina.'
      },
      {
        title: 'Al Ain Oasis & Desert Excursions',
        description: 'Scenic tours to the Garden City of Al Ain, Jebel Hafeet, and traditional camel heritage circuits.'
      },
      {
        title: 'VIP Chauffeur Comfort',
        description: 'Chauffeured in high-spec luxury sedans, spacious executive SUVs, or luxury mini coaches.'
      }
    ],
    suitableFor: [
      'International Tourists & Family Holiday Groups',
      'Corporate Visiting Delegations & VIP Guests',
      'Cruise Ship Shore Excursion Groups',
      'Private Photography & Cultural Tours'
    ],
    vehicleOptions: [
      'Cadillac Escalade (VIP Luxury Tour)',
      'Toyota Land Cruiser / GMC Denali',
      'Kia Carnival 8-Seater (Ideal for Families)',
      'Toyota Hiace 13-Seater Executive Van',
      '37-50 Seater Luxury Tour Coach'
    ],
    safetyPoints: [
      'Comfort-tuned suspension ensuring smooth highway cruising between Emirates',
      'Chauffeurs strictly trained in courteous hospitality and defensive driving',
      'Direct coordination with attraction entry gates and private VIP parking access',
      'Child seats and accessibility assistance available upon advance request'
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Design Your Itinerary',
        description: 'Select your preferred tourist landmarks or let our travel advisors recommend the ideal route.'
      },
      {
        step: 2,
        title: 'Choose Vehicle Class',
        description: 'Select from executive SUVs, premium family vans, or luxury panoramic tour buses.'
      },
      {
        step: 3,
        title: 'Hotel / Airport Pick-Up',
        description: 'Your chauffeur greets you with a dedicated welcome sign at the scheduled time.'
      },
      {
        step: 4,
        title: 'Explore in Total Comfort',
        description: 'Relax and take photos while your driver manages navigation, tolls, and parking.'
      }
    ],
    faqs: [
      {
        question: 'How long does a typical Abu Dhabi to Dubai city tour take?',
        answer: 'Our standard full-day inter-city tour is 8 to 10 hours, allowing ample time to visit 4-5 major landmarks in Dubai and return relaxed to Abu Dhabi.'
      },
      {
        question: 'Can we modify our stops during the tour?',
        answer: 'Yes! Our private tours are 100% flexible. You can spend more time at a particular museum or stop for dining whenever you like.'
      }
    ],
    metaTitle: 'Inter City Tour Abu Dhabi & Dubai | Private Sightseeing | Flash Transport',
    metaDescription: 'Exclusive inter-city tours and luxury transfers between Abu Dhabi and Dubai. Chauffeured sightseeing in luxury SUVs, vans, and coaches. Book your UAE tour today.'
  },
  {
    id: 'group-pick-drop',
    slug: 'group-pick-drop-services',
    title: 'Airport Transfer Services',
    shortDescription: 'Punctual and hassle-free airport pickups and drop-offs with a professional fleet, ensuring a smooth travel experience across Abu Dhabi and Dubai.',
    longDescription: 'The group pick and drop service by Flash Transport is customized around your exact logistical requirements. Whether you are coordinating delegate transfers for a major ADNEC conference, organizing guest transportation for a wedding celebration, or moving a sports team between stadium venues, we deliver seamless, coordinated, and comfortable group transport solutions.',
    iconName: 'BusFront',
    imageKey: 'service-group-pick-drop',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/xx1.jpg',
    benefits: [
      'Coordinated multi-vehicle fleets managed by dedicated on-ground transport supervisors',
      'Guaranteed punctual airport meet-and-greet transfers with flight delay tracking',
      'Cost-effective per-passenger rates compared to multiple individual taxis',
      'Ample luggage storage compartments for international travel baggage',
      'Custom corporate signage on vehicle windscreens for easy group identification'
    ],
    features: [
      {
        title: 'ADNEC & Exhibition Logistics',
        description: 'Shuttle management between Abu Dhabi National Exhibition Centre (ADNEC) and official partner hotels.'
      },
      {
        title: 'Airport Group Transfers',
        description: 'Direct pickups from Abu Dhabi (AUH) and Dubai (DXB) terminals to any UAE destination.'
      },
      {
        title: 'Private Event & Wedding Shuttles',
        description: 'Keep your guests safe and together with dedicated luxury shuttles throughout celebratory events.'
      },
      {
        title: 'Sports & Team Transit',
        description: 'Spacious luggage capacity for athletic gear, team kit, and equipment.'
      }
    ],
    suitableFor: [
      'Conference & Exhibition Organizers (ADNEC, Dubai World Trade Centre)',
      'Wedding Planners & Family Celebrations',
      'Sports Teams & Athletic Federations',
      'Airline Crew & Corporate Delegates',
      'Religious & Community Group Pilgrimages'
    ],
    vehicleOptions: [
      '50 Seater Luxury Coach with Baggage Bays',
      '34 Seater Mitsubishi Fuso Bus',
      '22 Seater Toyota Coaster',
      '13 Seater Toyota Hiace Commuter',
      '8 Seater Kia Carnival Luxury Van'
    ],
    safetyPoints: [
      'On-site dispatch coordinators ensuring orderly boarding and headcount verification',
      'Sanitized passenger cabins with active climate cooling',
      'Luggage securely stowed in underfloor cargo lockers or dedicated rear compartments',
      'Full emergency support and backup fleet ready in case of flight schedule changes'
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Submit Group Schedule',
        description: 'Provide flight times, hotel venues, passenger manifests, and event timings.'
      },
      {
        step: 2,
        title: 'Logistics Blueprint',
        description: 'Our fleet controllers formulate vehicle allocations, shuttle frequencies, and parking staging.'
      },
      {
        step: 3,
        title: 'Execution & Ground Management',
        description: 'Coordinators oversee boarding with custom name boards and digital tracking.'
      },
      {
        step: 4,
        title: 'Post-Event Wrap-up',
        description: 'Detailed attendance reports and single consolidated invoice.'
      }
    ],
    faqs: [
      {
        question: 'Do you track delayed flights for airport group pickups?',
        answer: 'Yes, our dispatch team monitors flight numbers in real-time. If your group flight is delayed, pick-up timings are automatically adjusted with zero penalty.'
      },
      {
        question: 'Can you handle multiple pickup points across Abu Dhabi for a single event?',
        answer: 'Absolutely. We regularly design synchronized multi-pickup routes that collect attendees from different hotels and deliver everyone concurrently to the venue.'
      }
    ],
    metaTitle: 'Group Pick & Drop Services Abu Dhabi | Event & Airport Shuttles | Flash Transport',
    metaDescription: 'Customized group pick and drop bus services in Abu Dhabi. Airport transfers, corporate events, conferences, and private group charters with luxury coaches.'
  },
  {
    id: 'daily-bus',
    slug: 'daily-bus-service-in-abu-dhabi',
    title: 'Daily Bus Services in Abu Dhabi',
    shortDescription: 'Convenient, economical daily mass transport connecting residential hubs with key commercial and industrial districts across Abu Dhabi and Dubai.',
    longDescription: 'Flash Transport provides dependable daily bus services designed for professionals, shift workers, and regular commuters who require comfortable daily transit without the high cost of car ownership or individual taxis. Running on strict schedules with modern air-conditioned buses, our daily services ensure you commute in relaxation and always arrive on time.',
    iconName: 'Clock',
    imageKey: 'service-daily-bus',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/rd22.jpg',
    benefits: [
      'Reliable fixed morning and evening departure times you can set your watch by',
      'Significant commute cost savings with affordable weekly and monthly commuter passes',
      'Modern, air-conditioned buses with comfortable reclining seats and Wi-Fi',
      'Strategically located pickup stops near major residential and commercial landmarks',
      'Relax during your commute instead of dealing with highway traffic and parking stress'
    ],
    features: [
      {
        title: 'Scheduled Commuter Routes',
        description: 'Direct routes connecting popular residential areas with commercial centres and business hubs.'
      },
      {
        title: 'Inter-Emirate Commuter Express',
        description: 'Daily morning and evening services between Abu Dhabi and Dubai for working professionals.'
      },
      {
        title: 'Affordable Subscription Passes',
        description: 'Flexible payment plans: Daily tickets, weekly bundles, or monthly unlimited commuter passes.'
      },
      {
        title: 'Strict Punctuality Standards',
        description: 'Real-time GPS tracking and dedicated lane management to ensure consistent arrival times.'
      }
    ],
    suitableFor: [
      'Daily Office Commuters & Professionals',
      'Inter-Emirate Daily Workers (Abu Dhabi - Dubai)',
      'Hospital & Healthcare Shift Staff',
      'Retail & Hospitality Workers',
      'Contractors & Freelancers Needing Regular Transit'
    ],
    vehicleOptions: [
      '50 Seater Luxury Express Coach',
      '34 Seater Mitsubishi Fuso Commuter Bus',
      '22 Seater Toyota Coaster Express'
    ],
    safetyPoints: [
      'Daily interior sanitization and air filter maintenance',
      'Professional drivers adhering to strict defensive driving guidelines',
      'Comfortable seating with high headrests for resting during long commutes',
      'Onboard customer support hotline for timetable and stop queries'
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Review Route Schedules',
        description: 'Explore our published commuter route timetables and nearest stop locations.'
      },
      {
        step: 2,
        title: 'Select Pass & Reserve',
        description: 'Choose between single trip, weekly pass, or discounted monthly corporate subscription.'
      },
      {
        step: 3,
        title: 'Board at Your Stop',
        description: 'Arrive 5 minutes before scheduled departure and board using your digital pass.'
      },
      {
        step: 4,
        title: 'Enjoy a Relaxing Ride',
        description: 'Enjoy climate-controlled comfort and reach your workplace energized.'
      }
    ],
    faqs: [
      {
        question: 'Are seats guaranteed on daily commuter bus routes?',
        answer: 'Yes, when you subscribe to a monthly or weekly commuter pass, your seat is reserved, so you never have to stand or worry about overcrowded buses.'
      },
      {
        question: 'Can companies sponsor daily bus passes for their staff?',
        answer: 'Yes, we provide corporate commuter pass billing with monthly invoicing, allowing employers to subsidize employee transportation effortlessly.'
      }
    ],
    metaTitle: 'Daily Bus Service in Abu Dhabi | Commuter & Express Routes | Flash Transport',
    metaDescription: 'Affordable, punctual daily bus services across Abu Dhabi and between Abu Dhabi and Dubai. Comfortable air-conditioned commuter coaches with monthly passes.'
  }
];

export const SERVICE_MAP: Record<string, ServiceItem> = SERVICES.reduce((acc, curr) => {
  acc[curr.slug] = curr;
  return acc;
}, {} as Record<string, ServiceItem>);

