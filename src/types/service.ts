export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  imageKey: string;
  originalImageUrl: string;
  benefits: string[];
  features: ServiceFeature[];
  suitableFor: string[];
  vehicleOptions: string[];
  safetyPoints: string[];
  howItWorks: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
}

