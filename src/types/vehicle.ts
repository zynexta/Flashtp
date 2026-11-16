export type VehicleCategory = 
  | 'All Vehicles'
  | 'Luxury Cars'
  | 'SUVs'
  | 'Passenger Vans'
  | 'Mini Buses'
  | 'Large Coaches';

export interface VehicleSpec {
  passengers: string;
  luggage: string;
  transmission?: string;
  airConditioning: string;
  fuelType?: string;
  entertainment?: string;
}

export interface VehicleItem {
  id: string;
  slug: string;
  name: string;
  category: Exclude<VehicleCategory, 'All Vehicles'>;
  capacity: string;
  imageKey: string;
  originalImageUrl: string;
  tagline: string;
  overview: string;
  specs: VehicleSpec;
  features: string[];
  idealFor: string[];
  isPopular?: boolean;
  badge?: string;
  shortDescription?: string;
  keySpecs?: [string, string];
}

