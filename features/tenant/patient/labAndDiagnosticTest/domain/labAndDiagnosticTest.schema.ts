export type Availability = 'Weekdays' | 'Weekends' | 'All Days';

export interface Lab {
  id: number;
  name: string;
  location: string;
  contactNumber: string;
  testsOffered: string[];
  availability: Availability;
  reportDelivery: ('Online' | 'Pickup')[];
  rating: number;
  accredited: boolean;
  image: string;
}

export interface LabFilters {
  location?: string;
  test?: string;
  availability?: Availability;
  minRating?: number;
  accredited?: boolean;
  reportDelivery?: 'online' | 'pickup';
}
