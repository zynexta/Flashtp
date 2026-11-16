import { CompanyContact, CompanyCertification } from '../types/company';

export const COMPANY_CONTACT: CompanyContact = {
  legalName: 'Flash Transport Passengers By Bus LLC',
  brandName: 'Flash Transport',
  phone: '+971 2 554 8788',
  phoneDisplay: '+971 2 554 8788',
  email: 'info@flashtp.com',
  whatsapp: '+971 2 554 8788',
  address: {
    office: 'Office 704',
    building: 'Al Junaibi Building',
    landmark: 'Opposite Al Zahiyah Bus Station',
    street: 'Al Meena Street',
    area: 'TCA (Tourist Club Area)',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    full: '704, Al Junaibi Building, opposite Al Zahiyah Bus Station, Al Meena Street, TCA, Abu Dhabi - UAE'
  },
  workingHours: {
    days: 'Saturday – Thursday (24/7 Operations Support)',
    hours: '8:00 AM – 6:00 PM (Office) | 24/7 Fleet Dispatch',
    support: '24/7 Dedicated Emergency & Logistics Support'
  },
  mapCoordinates: {
    lat: 24.4981,
    lng: 54.3807
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.5517949310887!2d54.3785112!3d24.4981445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665675555555%3A0x6789abcde!2sAl%20Zahiyah%20Bus%20Station%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae'
};

export const COMPANY_STATS = [
  { value: '20+', label: 'Years of Excellence', description: 'Established legacy in UAE commercial transportation' },
  { value: '150+', label: 'Modern Fleet Vehicles', description: 'From VIP sedans to 66-seater luxury coaches' },
  { value: '500K+', label: 'Safe Passenger Trips', description: 'Accident-free journeys delivered across all Emirates' },
  { value: '99.8%', label: 'On-Time Punctuality', description: 'Strict SLA adherence for corporate and school routes' }
];

export const COMPANY_CERTIFICATIONS: CompanyCertification[] = [
  {
    title: 'ISO 9001:2015',
    code: 'CB-QMS/EMS/OHSMS-084',
    description: 'Quality Management System ensuring top-tier operational reliability, rigorous customer satisfaction, and continuous service enhancement.',
    accreditation: 'EIAC (Emirates International Accreditation Centre)',
    imageKey: 'iso-cert'
  },
  {
    title: 'ISO 14001:2015',
    code: 'CB-QMS/EMS/OHSMS-084',
    description: 'Environmental Management System governing eco-conscious fleet maintenance, reduced vehicle emissions, and energy-efficient transit.',
    accreditation: 'EIAC (Emirates International Accreditation Centre)',
    imageKey: 'iso-cert'
  },
  {
    title: 'ISO 45001:2018',
    code: 'CB-QMS/EMS/OHSMS-084',
    description: 'Occupational Health and Safety Management System guaranteeing comprehensive driver welfare, passenger ergonomics, and preventive risk controls.',
    accreditation: 'EIAC (Emirates International Accreditation Centre)',
    imageKey: 'logo-ohms-cert'
  }
];

export const COMPANY_VALUES = [
  {
    title: 'Uncompromising Passenger Safety',
    description: 'Safety is the foundation of Flash Transport. Our vehicles undergo strict preventive maintenance schedules, and every chauffeur undergoes rigorous safety protocols, defensive driving certifications, and periodic background checks.'
  },
  {
    title: 'Punctuality & Reliability',
    description: 'Whether it is corporate staff reporting for high-stakes operations or students traveling to school, our automated route optimization and 24/7 tracking ensure on-time departures and arrivals every single day.'
  },
  {
    title: 'Customer-Centric Flexibility',
    description: 'We believe transport solutions should mold to client needs, not the other way around. We offer tailored daily, weekly, monthly, and multi-year lease agreements matching exact corporate budgets.'
  },
  {
    title: 'Modern & Clean Fleet Standards',
    description: 'Every vehicle in our extensive inventory is maintained to showroom standards, featuring climate control, comfortable high-back seating, modern entertainment systems, and immaculate cleanliness.'
  }
];

