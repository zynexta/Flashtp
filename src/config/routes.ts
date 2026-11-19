export const ROUTES = {
  HOME: '/',
  ABOUT: '/about-us/',
  SERVICES: '/services/',
  FLEET: '/abudhabi-bus-and-cars/',
  BLOG: '/blog/',
  CONTACT: '/contact-us/',
  REQUEST_QUOTE: '/request-a-quote/',
  
  // Exact Original Service Slugs:
  SERVICE_LEASE_BUS: '/long-short-term-lease-bus-rental-abu-dhabi/',
  SERVICE_SCHOOL_BUS: '/school-college-transportation-abu-dabi/',
  SERVICE_STAFF_TRANSPORT: '/staff-transportation-services-abudhabi/',
  SERVICE_RENT_CAR: '/rent-a-car/',
  SERVICE_INTERCITY_TOUR: '/inter-city-tour/',
  SERVICE_GROUP_PICK_DROP: '/group-pick-drop-services/',
  SERVICE_DAILY_BUS: '/daily-bus-service-in-abu-dhabi/',

  // Additional aliases / original paths:
  ABOUT_ORIGINAL: '/best-bus-rental-companies-in-abu-dhabi-and-dubai/',
  FLEET_ALIAS_1: '/fleet/',
  FLEET_ALIAS_2: '/our-fleet/',
  ABOUT_ALIAS: '/about/',
  CONTACT_ALIAS: '/contact/',
  PROJECTS: '/projects/',
} as const;

export const ROUTE_REDIRECTS: Record<string, string> = {
  '/about': ROUTES.ABOUT,
  '/about/': ROUTES.ABOUT,
  '/best-bus-rental-companies-in-abu-dhabi-and-dubai': ROUTES.ABOUT,
  '/best-bus-rental-companies-in-abu-dhabi-and-dubai/': ROUTES.ABOUT,
  '/fleet': ROUTES.FLEET,
  '/fleet/': ROUTES.FLEET,
  '/our-fleet': ROUTES.FLEET,
  '/our-fleet/': ROUTES.FLEET,
  '/services': ROUTES.SERVICES,
  '/contact-us': ROUTES.CONTACT,
  '/contact': ROUTES.CONTACT,
  '/contact/': ROUTES.CONTACT,
  '/projects': ROUTES.SERVICES,
  '/projects/': ROUTES.SERVICES,
};

