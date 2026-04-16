export type Availability = 'Weekdays' | 'Weekends' | 'All Days';

export interface Hospital {
  id: number;
  name: string;
  location: string;
  departments: string[];
  bedCapacity: number;
  availability: Availability;
  rating: number;
  image: string;
}

export interface HospitalFilters {
  location?: string;
  department?: string;
  availability?: Availability;
  minRating?: number;
}
