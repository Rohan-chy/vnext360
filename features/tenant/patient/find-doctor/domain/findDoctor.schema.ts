export type Availability = 'Weekdays' | 'Weekends' | 'All Days';

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  availability: Availability;
  rating: number;
  image: string;
}

export interface DoctorFilters {
  specialization?: string;
  availability?: Availability;
  minRating?: number;
}
