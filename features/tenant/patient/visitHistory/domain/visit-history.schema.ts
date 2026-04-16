export interface VisitHistory {
  id: string;
  doctorName: string;
  department: string;
  hospital: string;
  visitDate: string;
  diagnosis?: string;
  prescription?: string;
  status: 'Completed' | 'Upcoming' | 'Canceled';
}
