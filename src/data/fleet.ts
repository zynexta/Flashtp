import { VehicleItem, VehicleCategory } from '../types/vehicle';

export const FLEET_CATEGORIES: VehicleCategory[] = [
  'All Vehicles',
  'Large Coaches',
  'Mini Buses',
  'Passenger Vans',
  'SUVs',
  'Luxury Cars'
];

export const FLEET_VEHICLES: VehicleItem[] = [
  {
    id: 'cadillac-escalade',
    slug: 'cadillac-escalade',
    name: 'Cadillac Escalade',
    category: 'Luxury Cars',
    badge: 'Luxury SUV',
    capacity: '7 Passengers',
    imageKey: 'fleet-cadillac-escalade',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/dd1.jpg',
    tagline: 'Flagship American Luxury VIP Transportation',
    shortDescription: 'Ultimate luxury and performance.',
    keySpecs: ['Premium Comfort', 'Advanced Safety'],
    overview: 'The pinnacle of road presence, opulent comfort, and executive prestige. Boasts hand-stitched leather appointments, magnetic ride control, and state-of-the-art rear seat entertainment.',
    specs: {
      passengers: '7 Passengers (Captain Chair configuration)',
      luggage: '4 Large Suitcases + Carry-ons',
      transmission: '10-Speed Electronic Automatic',
      airConditioning: 'Tri-Zone Automatic Climate Control',
      fuelType: 'V8 Premium Petrol',
      entertainment: 'AKG Studio Sound System & Rear OLED Screens'
    },
    features: [
      'Curved OLED display with ultra-high resolution',
      'Heated and ventilated massaging leather captain seats',
      'Panoramic power sunroof and acoustic sound insulation',
      'Uniformed executive chauffeur with diplomatic protocol training'
    ],
    idealFor: [
      'VIP state guests, celebrities & diplomatic delegations',
      'Executive corporate roadshows and Board meetings',
      'Luxury luxury hotel & airport VIP arrival transfers'
    ],
    isPopular: true
  },
  {
    id: 'gmc-denali',
    slug: 'gmc-denali',
    name: 'GMC Yukon Denali',
    category: 'Luxury Cars',
    badge: 'Luxury Coach',
    capacity: '7 Passengers',
    imageKey: 'fleet-gmc-denali',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/gmc-denali1.jpg',
    tagline: 'Commanding Power and Professional Elegance',
    shortDescription: 'Power, luxury and exceptional space.',
    keySpecs: ['Premium Features', 'Top Safety'],
    overview: 'A favorite among UAE executives and government leaders. Delivers massive interior volume, supreme highway stability, and unmatched towing and carrying capability with elite Denali craftsmanship.',
    specs: {
      passengers: '7 Passengers',
      luggage: '4 Suitcases',
      transmission: '10-Speed Automatic',
      airConditioning: 'Tri-Zone Climate Control',
      fuelType: '6.2L EcoTec3 V8',
      entertainment: 'Bose Centerpoint Premium Sound'
    },
    features: [
      'Signature Denali chrome honeycomb grille and LED headlamps',
      'Power-retractable assist steps with perimeter lighting',
      'Spacious third-row legroom with power fold-flat capability',
      'Air Ride Adaptive Suspension for pillow-soft cruising'
    ],
    idealFor: [
      'Corporate executive chauffeur hire',
      'High-profile VIP desert and city excursions',
      'Executive family luxury rentals'
    ],
    isPopular: true
  },
  {
    id: 'toyota-land-cruiser',
    slug: 'toyota-land-cruiser',
    name: 'Toyota Land Cruiser',
    category: 'SUVs',
    badge: 'Luxury Coach',
    capacity: '7 Passengers',
    imageKey: 'fleet-toyota-land-cruiser',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/lc93.jpg',
    tagline: 'The Undisputed King of the Arabian Desert & Highway',
    shortDescription: 'Legendary reliability and comfort.',
    keySpecs: ['Unmatched Reliability', 'Superior Comfort'],
    overview: 'Synonymous with prestige, invincibility, and comfort in the UAE. The Land Cruiser glides effortlessly across desert dunes and city boulevards alike in peerless air-conditioned comfort.',
    specs: {
      passengers: '7 Passengers',
      luggage: '3-4 Medium Suitcases',
      transmission: 'Automatic 4WD with Terrain Select',
      airConditioning: 'Four-Zone Independent Climate Control',
      fuelType: 'Twin Turbo V6 / V8 Petrol',
      entertainment: 'JBL High-Fidelity Audio System'
    },
    features: [
      'Legendary all-terrain capability with Multi-Terrain Select',
      'Cool-box console refrigerator for chilled beverages',
      'Premium leather upholstery with power-adjustable seats',
      'Advanced driver assist and lane-keep safety technologies'
    ],
    idealFor: [
      'VIP intercity touring between Abu Dhabi and Dubai',
      'Executive desert safaris and remote site inspections',
      'Corporate long-term monthly vehicle leasing'
    ],
    isPopular: true
  },
  {
    id: 'ashok-leyland-66',
    slug: '66-seater-ashok-leyland-bus',
    name: '66 Seater Ashok Leyland Bus',
    category: 'Large Coaches',
    capacity: '66 Passengers',
    imageKey: 'fleet-ashok-leyland-66',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/falcon1.jpg',
    tagline: 'High-Capacity Heavy Commercial Staff & School Transport',
    overview: 'The heavy-duty workhorse of corporate staff and school transportation in the UAE. Renowned for supreme durability, high passenger capacity, and proven performance across high-volume transit routes.',
    specs: {
      passengers: '66 Seats (3x2 seating layout)',
      luggage: 'Underfloor & cabin parcel racks',
      transmission: 'Manual 6-Speed Heavy Duty',
      airConditioning: 'Dual High-Capacity Tropicalized AC Units',
      fuelType: 'Diesel (Euro 4/5 compliant)',
      entertainment: 'PA Public Announcement System'
    },
    features: [
      'High-capacity 66 passenger configuration',
      'Heavy-duty industrial climate control system',
      'DoT & ADEK school and staff transit compliance',
      'Full emergency door exits and automatic safety glass breakers',
      'Integrated telematics and speed limiter device'
    ],
    idealFor: [
      'Industrial and construction workforce transport',
      'Large student school and college routes',
      'High-volume event shuttle logistics'
    ],
    isPopular: true
  },
  {
    id: 'luxury-bus-50',
    slug: '50-seater-luxury-bus',
    name: '50 Seater Luxury Coach',
    category: 'Large Coaches',
    capacity: '50 Passengers',
    imageKey: 'fleet-luxury-bus-50',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kl1.jpg',
    tagline: 'Premium Long-Distance Intercity Touring Coach',
    overview: 'Engineered for exceptional executive comfort, our 50-seater luxury coach features reclining plush seats, individual passenger AC vents, reading lights, and massive lower cargo compartments for luggage.',
    specs: {
      passengers: '50 Reclining Luxury Seats (2x2 layout)',
      luggage: 'Massive Underfloor Luggage Holds',
      transmission: 'Automated Manual Transmission (AMT)',
      airConditioning: 'Individual Climate Control Vents',
      fuelType: 'Diesel (Low emission)',
      entertainment: 'Dual LCD Screens, Mic & Premium Audio'
    },
    features: [
      'Ergonomic high-back velvet/leatherette reclining seats',
      'Panoramic tinted UV-protection windows',
      'Generous legroom with fold-out footrests and meal trays',
      'Onboard Wi-Fi and USB device charging stations',
      'Air-suspension delivering smooth highway cruising'
    ],
    idealFor: [
      'Inter-Emirate tourism & luxury travel',
      'International corporate delegations & conferences',
      'Airport group transit with heavy luggage'
    ],
    isPopular: true
  },
  {
    id: 'luxury-bus-37',
    slug: '37-seater-luxury-bus',
    name: '37 Seater Luxury Bus',
    category: 'Large Coaches',
    capacity: '37 Passengers',
    imageKey: 'fleet-luxury-bus-37',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kyo1.jpg',
    tagline: 'Mid-Size Luxury Coach with Executive Finishes',
    overview: 'The ideal balance between high passenger capacity and nimble maneuverability through city streets. Provides full luxury coach amenities in a versatile 37-passenger profile.',
    specs: {
      passengers: '37 Executive Seats',
      luggage: 'Integrated Underfloor Baggage Locker',
      transmission: 'Heavy Duty Automatic / Manual',
      airConditioning: 'Central Multi-Zone AC',
      fuelType: 'Diesel',
      entertainment: 'Overhead LCD Monitor & PA Sound System'
    },
    features: [
      'Plush reclining seats with armrests and seatbelts',
      'Dedicated luggage storage for group travel',
      'Tinted panoramic windows for sightseeing',
      'Smooth pneumatic suspension for optimal ride comfort'
    ],
    idealFor: [
      'Corporate executive off-sites and team retreats',
      'City sightseeing tours and cruise passenger excursions',
      'Private VIP wedding guest transfers'
    ]
  },
  {
    id: 'fuso-bus-34',
    slug: '34-seater-mitsubishi-fuso-bus',
    name: '34 Seater Mitsubishi Fuso Bus',
    category: 'Mini Buses',
    capacity: '34 Passengers',
    imageKey: 'fleet-fuso-bus-34',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/x1.jpg',
    tagline: 'Reliable Japanese Engineering for Daily Group Commutes',
    overview: 'The Mitsubishi Fuso Rosa is renowned worldwide for bulletproof reliability, low emissions, and exceptional passenger comfort across daily urban and commercial routes.',
    specs: {
      passengers: '34 Seats with Safety Seatbelts',
      luggage: 'Rear Trunk & Overhead Interior Racks',
      transmission: 'Smooth Automatic Transmission',
      airConditioning: 'Full Vehicle Roof-Mounted AC',
      fuelType: 'Efficient Clean Diesel',
      entertainment: 'FM/AM Radio & Cabin PA Speaker'
    },
    features: [
      'Proven Japanese commercial vehicle reliability',
      'Easy step-in low threshold boarding for all passengers',
      'Superior tight-turning radius for urban streets and complexes',
      'Optimized fuel efficiency for cost-effective daily leasing'
    ],
    idealFor: [
      'Daily staff transportation contracts',
      'School and college daily bus runs',
      'Hotel staff and guest shuttle routes'
    ],
    isPopular: true
  },
  {
    id: 'toyota-coaster-22',
    slug: '22-seater-toyota-coaster',
    name: '22 Seater Toyota Coaster',
    category: 'Mini Buses',
    capacity: '22-30 Passengers',
    imageKey: 'fleet-toyota-coaster-22',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/ml1.jpg',
    tagline: 'The Gold Standard of UAE Medium-Group Mobility',
    overview: 'The Toyota Coaster is the undisputed market leader in passenger satisfaction. Spacious head clearance, comfortable individual seats, and whisper-quiet ride quality make it the first choice for VIP staff and guest transfers.',
    specs: {
      passengers: '22 to 30 Seating Configurations',
      luggage: 'Dedicated Rear Luggage Area',
      transmission: 'Automatic / Manual',
      airConditioning: 'High-Efficiency Dual Air Conditioning',
      fuelType: 'Diesel / Petrol Options',
      entertainment: 'Digital Sound System with Driver Mic'
    },
    features: [
      'Whisper-quiet cabin insulation for comfortable conversation',
      'High ceiling providing effortless walk-through access',
      'Electrically operated passenger sliding entrance door',
      'Exceptional Toyota safety construction with reinforced pillars'
    ],
    idealFor: [
      'VIP corporate employee shuttles',
      'Airport transfers for delegations',
      'Private family group weekend excursions'
    ],
    isPopular: true
  },
  {
    id: 'toyota-hiace-13',
    slug: '13-seater-toyota-hiace',
    name: '13 Seater Toyota Hiace',
    category: 'Passenger Vans',
    capacity: '13-14 Passengers',
    imageKey: 'fleet-toyota-hiace-13',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/h1.jpg',
    tagline: 'Versatile High-Roof Passenger Commuter Van',
    overview: 'Compact exterior dimensions coupled with an expansive high-roof passenger interior. Fits easily in underground corporate parking decks while transporting up to 13 adults comfortably.',
    specs: {
      passengers: '13-14 Passengers',
      luggage: 'Rear Storage Space',
      transmission: 'Automatic Transmission',
      airConditioning: 'Front and Rear Air Conditioning Ducts',
      fuelType: 'Petrol / Clean Diesel',
      entertainment: 'AM/FM, Bluetooth Audio'
    },
    features: [
      'High-roof cabin allows natural entry posture',
      'Fits inside standard airport and mall basement parking',
      'Extremely economical fuel consumption',
      'Chauffeur-driven with punctual door-to-door service'
    ],
    idealFor: [
      'Executive airport pickups and drop-offs',
      'Project management site inspection teams',
      'Small group city tours and family transfers'
    ],
    isPopular: true
  },
  {
    id: 'toyota-prado',
    slug: 'toyota-prado',
    name: 'Toyota Prado',
    category: 'SUVs',
    capacity: '7 Passengers',
    imageKey: 'fleet-toyota-prado',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/toyoto-prado.jpg',
    tagline: 'Dynamic Mid-Size 4x4 for Business and Adventure',
    overview: 'Rugged capability meets everyday sophistication. The Prado offers true full-time 4WD engineering, 7-passenger seating flexibility, and renowned Japanese reliability.',
    specs: {
      passengers: '7 Passengers',
      luggage: '3 Suitcases',
      transmission: '6-Speed Automatic',
      airConditioning: 'Dual Front/Rear Climate Control',
      fuelType: 'Petrol',
      entertainment: 'Touchscreen Infotainment with Apple CarPlay'
    },
    features: [
      'Full-time four-wheel drive with Torsen limited-slip differential',
      'Versatile split-folding 2nd and 3rd-row seats',
      'High ground clearance for rough terrain and construction sites',
      'Quiet, well-appointed passenger cabin'
    ],
    idealFor: [
      'Engineering and site supervisor transport',
      'Family vacation travel across the Emirates',
      'Reliable corporate self-drive or chauffeured rental'
    ]
  },
  {
    id: 'toyota-fortuner',
    slug: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'SUVs',
    capacity: '7 Passengers',
    imageKey: 'fleet-toyota-fortuner',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/toyoto-fortuner.jpg',
    tagline: 'Strong, Dependable 7-Seater Family and Work SUV',
    overview: 'Built on a heavy-duty ladder frame chassis, the Toyota Fortuner handles UAE road conditions with unwavering strength, delivering 7 seats of practical passenger mobility.',
    specs: {
      passengers: '7 Passengers',
      luggage: '3 Suitcases',
      transmission: 'Automatic Transmission with Paddle Shift',
      airConditioning: 'Ceiling-Mounted Rear AC Vents',
      fuelType: 'Petrol',
      entertainment: 'Display Audio with Bluetooth & USB'
    },
    features: [
      'High ride height providing commanding road visibility',
      'Easy fold-up 3rd-row seating for expansive cargo room',
      'ABS, Vehicle Stability Control, and Hill-Start Assist',
      'Tough, low-maintenance interior finishes'
    ],
    idealFor: [
      'Field engineering and technical personnel transit',
      'Budget-conscious corporate SUV leasing',
      'Family holiday trips'
    ]
  },
  {
    id: 'kia-carnival',
    slug: '8-seater-kia-carnival',
    name: '8 Seater Kia Carnival',
    category: 'Passenger Vans',
    capacity: '8 Passengers',
    imageKey: 'fleet-kia-carnival',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kiacarnival.jpg',
    tagline: 'First-Class Multi-Purpose Vehicle for Families and VIPs',
    overview: 'Combines the interior luxury of a private jet with the versatility of an 8-passenger vehicle. Features smart power sliding doors, second-row lounge seating, and whisper-quiet road manners.',
    specs: {
      passengers: '8 Passengers',
      luggage: 'Deep Sunken Trunk + 4 Large Suitcases',
      transmission: '8-Speed SmartStream Automatic',
      airConditioning: 'Independent Tri-Zone Climate Control',
      fuelType: '3.5L V6 Petrol Engine',
      entertainment: 'Dual Screen Multimedia with Bluetooth'
    },
    features: [
      'Dual smart power sliding doors with hands-free opening',
      'Slide-flex second-row seats converting to table mode',
      'Ultra-deep luggage well behind the third row',
      'Rear sunshade blinds and numerous device USB ports'
    ],
    idealFor: [
      'Family vacations and sightseeing tours in Abu Dhabi & Dubai',
      'VIP hotel airport shuttles with substantial baggage',
      'Corporate delegation executive transfers'
    ],
    isPopular: true
  },
  {
    id: 'hyundai-h1',
    slug: '9-seater-hyundai-h1',
    name: '9 Seater Hyundai H1',
    category: 'Passenger Vans',
    capacity: '9 Passengers',
    imageKey: 'fleet-hyundai-h1',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/9-SEATER-HYUNDAI-H1.jpg',
    tagline: 'Practical, Spacious 9-Seat Passenger Van',
    overview: 'A proven favorite across UAE hotels and shuttle providers. The Hyundai H1 provides generous individual seating for 9 occupants alongside dedicated luggage capacity.',
    specs: {
      passengers: '9 Passengers',
      luggage: '3-4 Medium Bags',
      transmission: 'Smooth Automatic',
      airConditioning: 'Independent Overhead Passenger AC Controls',
      fuelType: 'Diesel / Petrol Options',
      entertainment: 'Audio Sound System'
    },
    features: [
      'Twin sliding doors for effortless curb boarding',
      'High driver seating position with wide visibility',
      'Durable stain-resistant upholstery built for commercial use',
      'Compact turning circle for easy city parking'
    ],
    idealFor: [
      'Hotel guest airport shuttles',
      'Executive staff departmental transport',
      'Group event transfers'
    ]
  },
  {
    id: 'toyota-previa',
    slug: '7-seater-toyota-previa',
    name: '7 Seater Toyota Previa',
    category: 'Passenger Vans',
    capacity: '7 Passengers',
    imageKey: 'fleet-toyota-previa',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/7-SEATER-TOYOTA-PREVIA.jpg',
    tagline: 'Smooth, Aerodynamic MPV for Group Comfort',
    overview: 'The Toyota Previa offers an aerodynamic egg-profile that reduces wind resistance and cabin noise while granting 7 passengers generous personal space and smooth ride comfort.',
    specs: {
      passengers: '7 Passengers',
      luggage: '3 Suitcases',
      transmission: 'Automatic Transmission',
      airConditioning: 'Dual Front and Rear Air Conditioners',
      fuelType: 'Petrol',
      entertainment: 'AM/FM/CD and Aux input'
    },
    features: [
      'Low floor entry for elderly and child accessibility',
      'Versatile sliding captain chairs in the middle row',
      'Smooth, car-like ride dynamics and suspension',
      'Comprehensive passenger airbag system'
    ],
    idealFor: [
      'Corporate client and visitor transfers',
      'Small family tours and airport pickups',
      'Daily staff team commuting'
    ]
  },
  {
    id: 'toyota-corolla',
    slug: 'toyota-corolla',
    name: 'Toyota Corolla',
    category: 'Luxury Cars',
    capacity: '5 Passengers',
    imageKey: 'fleet-toyota-corolla',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/toyota-korolla.jpg',
    tagline: 'The Benchmark for Reliability and Fuel Economy',
    overview: 'The world’s best-selling car delivers flawless everyday mobility. Perfect for individual executives, sales representatives, and corporate car fleets requiring low fuel overhead.',
    specs: {
      passengers: '5 Passengers',
      luggage: '2-3 Medium Suitcases',
      transmission: 'CVT Automatic',
      airConditioning: 'High-Efficiency Tropical AC',
      fuelType: 'Efficient Petrol Engine',
      entertainment: 'Touchscreen with Bluetooth & Handsfree'
    },
    features: [
      'Outstanding fuel efficiency of up to 18 km/L',
      'Smooth suspension absorbing urban potholes and speed bumps',
      'Compact footprint making Abu Dhabi parking effortless',
      'Toyota Safety Sense active driving aids'
    ],
    idealFor: [
      'Corporate monthly staff leases',
      'Daily business commuting across Abu Dhabi',
      'Economical tourist self-drive rental'
    ]
  },
  {
    id: 'kia-optima',
    slug: 'kia-optima',
    name: 'Kia Optima / K5',
    category: 'Luxury Cars',
    capacity: '5 Passengers',
    imageKey: 'fleet-kia-optima',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kia-optima.jpg',
    tagline: 'Sleek Executive Sedan with Modern Styling',
    overview: 'Fastback silhouette, generous rear legroom, and refined interior tech make the Kia Optima a popular choice for corporate professionals seeking stylish mobility.',
    specs: {
      passengers: '5 Passengers',
      luggage: '3 Medium Suitcases',
      transmission: 'Automatic Transmission',
      airConditioning: 'Dual-Zone Automatic Climate Control',
      fuelType: 'Petrol',
      entertainment: 'Infotainment with Apple CarPlay & Android Auto'
    },
    features: [
      'Fastback styling with aggressive LED headlamps',
      'Spacious executive back-seat accommodation',
      'Smart keyless entry and push-button engine start',
      'Cruise control for relaxed highway travel'
    ],
    idealFor: [
      'Corporate executive daily leases',
      'Client meeting and business appointments',
      'Intercity commutes between Abu Dhabi and Dubai'
    ]
  },
  {
    id: 'hyundai-accent',
    slug: 'hyundai-accent',
    name: 'Hyundai Accent',
    category: 'Luxury Cars',
    capacity: '5 Passengers',
    imageKey: 'fleet-hyundai-accent',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/accent.jpg',
    tagline: 'Affordable, Agile City Commuter Sedan',
    overview: 'Compact, modern, and exceptionally economical to run. The Hyundai Accent is the premier choice for budget-conscious business travelers and fleet operations.',
    specs: {
      passengers: '5 Passengers',
      luggage: '2 Medium Bags',
      transmission: 'Smart Automatic',
      airConditioning: 'Manual Powerful AC',
      fuelType: 'Petrol (Ultra-low consumption)',
      entertainment: 'Bluetooth Audio and Smartphone Dock'
    },
    features: [
      'Class-leading fuel economy and low running costs',
      'Effortless power steering for tight city turns',
      'Surprisingly spacious trunk for its compact class',
      'High-strength steel safety cage'
    ],
    idealFor: [
      'Long-term corporate fleet leasing',
      'Daily city driving and running errands',
      'Budget travelers seeking reliable wheels'
    ]
  },
  {
    id: 'kia-sportage',
    slug: 'kia-sportage',
    name: 'Kia Sportage',
    category: 'SUVs',
    capacity: '5 Passengers',
    imageKey: 'fleet-kia-sportage',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/kia-sportage-2.jpg',
    tagline: 'Dynamic Urban Crossover with Striking Design',
    overview: 'Sporty dynamics, elevated ride height, and futuristic cockpit design make the Kia Sportage a standout crossover SUV for city professionals and small families.',
    specs: {
      passengers: '5 Passengers',
      luggage: '3 Suitcases',
      transmission: 'Dual-Clutch / Automatic',
      airConditioning: 'Rear Air Ducts & Climate Control',
      fuelType: 'Petrol',
      entertainment: 'Digital Driver Cockpit & Touchscreen'
    },
    features: [
      'Elevated seating position with panoramic windshield view',
      'Flexible split-folding rear bench for oversized cargo',
      'Multiple driving modes (Eco, Normal, Sport)',
      'Advanced safety airbag suite'
    ],
    idealFor: [
      'Corporate managers and engineers',
      'Weekend family road trips',
      'Stylish city commuting'
    ]
  },
  {
    id: 'hyundai-creta',
    slug: 'hyundai-creta',
    name: 'Hyundai Creta',
    category: 'SUVs',
    capacity: '5 Passengers',
    imageKey: 'fleet-hyundai-creta',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/creta-hynday.jpg',
    tagline: 'Compact SUV Built for Everyday Versatility',
    overview: 'Compact exterior footprint that makes city maneuvers a breeze, paired with elevated ground clearance and SUV seating commanding a great view of the road.',
    specs: {
      passengers: '5 Passengers',
      luggage: '2-3 Medium Bags',
      transmission: 'Automatic Transmission',
      airConditioning: 'Automatic Climate Control',
      fuelType: 'Petrol',
      entertainment: 'Touchscreen with Smartphone Mirroring'
    },
    features: [
      'High ground clearance tackling curbs and obstacles with ease',
      'Ergonomic seating with durable fabric upholstery',
      'Rear parking sensors and camera guidance',
      'Excellent fuel economy for an SUV'
    ],
    idealFor: [
      'Daily corporate site visits and office transit',
      'Individual long-term car rentals',
      'Small family transport'
    ]
  },
  {
    id: 'hyundai-santafe',
    slug: 'hyundai-santafe',
    name: 'Hyundai Santa Fe',
    category: 'SUVs',
    capacity: '7 Passengers',
    imageKey: 'fleet-hyundai-santafe',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/huyndaisantafe.jpg',
    tagline: 'Refined 7-Seat Midsize Family and Executive SUV',
    overview: 'Bold cascading grille, premium cabin materials, and comfortable 3-row seating make the Santa Fe a favorite choice for executives and families desiring comfort.',
    specs: {
      passengers: '7 Passengers',
      luggage: '3 Suitcases',
      transmission: '8-Speed Automatic',
      airConditioning: 'Dual Front & Dedicated 3rd Row AC Vents',
      fuelType: 'V6 Petrol',
      entertainment: 'Premium Multi-Speaker Audio with Bluetooth'
    },
    features: [
      'One-touch walk-in access to third-row seats',
      'Blind-spot collision avoidance assist',
      'Power smart tailgate for hands-free cargo loading',
      'Quiet ride with acoustic laminated front glass'
    ],
    idealFor: [
      'Family travel and vacations across the UAE',
      'Executive car leases for corporate leaders',
      'Airport pickups with 7 passengers'
    ]
  },
  {
    id: 'toyota-hilux',
    slug: 'toyota-hilux-pickup',
    name: 'Toyota Hilux Pickup',
    category: 'SUVs',
    capacity: '5 Passengers + Cargo Bed',
    imageKey: 'fleet-toyota-hilux',
    originalImageUrl: 'https://flashtp.com/wp-content/uploads/2024/05/th1.jpg',
    tagline: 'Unbreakable Double-Cabin Utility Workhorse',
    overview: 'The global legend of indestructible utility. Double cabin seating accommodates 5 personnel comfortably while the expansive rear bed carries heavy tools, industrial equipment, or materials.',
    specs: {
      passengers: '5 Passengers (Double Cabin)',
      luggage: 'Heavy Open Utility Cargo Bed (1-Ton Payload)',
      transmission: 'Manual / Automatic Heavy Duty 4x4',
      airConditioning: 'High-Output Heavy AC',
      fuelType: 'Diesel / Petrol Options',
      entertainment: 'Rugged Radio & USB Audio'
    },
    features: [
      '1-ton payload capacity on heavy steel rear deck',
      'Heavy-duty 4x4 with low-range transfer case',
      'High ground clearance for construction and desert sites',
      'Approved for site access permits in oilfield & industrial zones'
    ],
    idealFor: [
      'EPC construction projects & site surveying',
      'Oilfield & industrial facility operations',
      'Equipment transport and field service teams'
    ]
  }
];

export const FLEET_MAP: Record<string, VehicleItem> = FLEET_VEHICLES.reduce((acc, curr) => {
  acc[curr.slug] = curr;
  return acc;
}, {} as Record<string, VehicleItem>);

