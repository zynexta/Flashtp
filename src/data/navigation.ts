import { ROUTES } from '../config/routes';

export interface NavLinkItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'About Us', href: ROUTES.ABOUT },
  {
    label: 'Our Services',
    href: ROUTES.SERVICES,
    children: [
      {
        label: 'School & College Transportation',
        href: ROUTES.SERVICE_SCHOOL_BUS,
        description: 'Certified student transport adhering to UAE educational safety codes'
      },
      {
        label: 'Staff Transportation',
        href: ROUTES.SERVICE_STAFF_TRANSPORT,
        description: 'Punctual employee shuttle networks across Abu Dhabi and industrial zones'
      },
      {
        label: 'Rent a Car',
        href: ROUTES.SERVICE_RENT_CAR,
        description: 'Executive sedans and premium SUVs for business travel and leisure'
      },
      {
        label: 'Inter City Tour',
        href: ROUTES.SERVICE_INTERCITY_TOUR,
        description: 'Customized luxury travel between Abu Dhabi, Dubai, and all Emirates'
      },
      {
        label: 'Group Pick & Drop Services',
        href: ROUTES.SERVICE_GROUP_PICK_DROP,
        description: 'Tailored event, airport, and delegate group transit'
      },
      {
        label: 'Daily Bus Services',
        href: ROUTES.SERVICE_DAILY_BUS,
        description: 'Dependable daily bus routes connecting key commercial districts'
      }
    ]
  },
  { label: 'Our Fleet', href: ROUTES.FLEET },
  { label: 'Blog', href: ROUTES.BLOG },
  { label: 'Contact Us', href: ROUTES.CONTACT }
];

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'About Flash Transport', href: ROUTES.ABOUT },
  { label: 'Our Services Overview', href: ROUTES.SERVICES },
  { label: 'Vehicle Fleet Catalogue', href: ROUTES.FLEET },
  { label: 'Latest News & Guides', href: ROUTES.BLOG },
  { label: 'Contact Us', href: ROUTES.CONTACT },
  { label: 'Request a Corporate Quote', href: ROUTES.REQUEST_QUOTE }
];

export const FOOTER_SERVICES_LINKS = [
  { label: 'School & College Bus Transport', href: ROUTES.SERVICE_SCHOOL_BUS },
  { label: 'Corporate Staff Transportation', href: ROUTES.SERVICE_STAFF_TRANSPORT },
  { label: 'Rent a Car Abu Dhabi', href: ROUTES.SERVICE_RENT_CAR },
  { label: 'Inter City Tours & Excursions', href: ROUTES.SERVICE_INTERCITY_TOUR },
  { label: 'Group Pick & Drop Services', href: ROUTES.SERVICE_GROUP_PICK_DROP },
  { label: 'Daily Bus Services Abu Dhabi', href: ROUTES.SERVICE_DAILY_BUS }
];

