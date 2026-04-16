export type Availability = 'Weekdays' | 'Weekends' | 'All Days';

export interface Surgery {
  id: number;
  hospitalName: string;
  location: string;
  specialties: string[];
  operatingRooms: number;
  availability: Availability;
  rating: number;
  contactNumber: string;
  emergencySupport: boolean;
  image: string;
}

export interface SurgeryFilters {
  location?: string;
  specialty?: string;
  availability?: Availability;
  minRating?: number;
  emergencySupport?: boolean;
}
