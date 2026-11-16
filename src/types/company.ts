export interface CompanyContact {
  legalName: string;
  brandName: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  address: {
    office: string;
    building: string;
    landmark: string;
    street: string;
    area: string;
    city: string;
    country: string;
    full: string;
  };
  workingHours: {
    days: string;
    hours: string;
    support: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  mapEmbedUrl: string;
}

export interface CompanyCertification {
  title: string;
  code: string;
  description: string;
  accreditation: string;
  imageKey?: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  vehicleType: string;
  passengers: string;
  pickupLocation: string;
  destination: string;
  travelDate: string;
  duration: string;
  additionalRequirements: string;
}

