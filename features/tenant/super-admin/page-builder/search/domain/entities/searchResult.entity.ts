import { SearchDoctor } from './searchDoctor.entity';
import { SearchClinic } from './searchClinic.entity';

export interface SearchResult {
  doctors: SearchDoctor[];
  clinics: SearchClinic[];
}
