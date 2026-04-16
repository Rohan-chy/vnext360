export type Availability = 'Weekdays' | 'Weekends' | 'All Days';

export interface Pharmacy {
  id: number;
  name: string;
  location: string;
  contactNumber: string;
  licenseNumber: string;
  services: string[];
  isOpen24Hours: boolean;
  homeDelivery: boolean;
  availability: Availability;
  rating: number;
  image: string;
}

export interface PharmacyFilters {
  location?: string;
  service?: string;
  availability?: Availability;
  minRating?: number;
  isOpen24Hours?: boolean;
  homeDelivery?: boolean;
}
