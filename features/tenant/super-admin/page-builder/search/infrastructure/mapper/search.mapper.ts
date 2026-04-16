import { SearchClinic, SearchDoctor, SearchResult } from '../../domain';
import {
  SearchGlobalResponseDTO,
  DoctorSearchDTO,
  ClinicSearchDTO,
} from '../dto/searchGlobal.dto';

// Doctor Mapper
const mapDoctor = (dto: DoctorSearchDTO): SearchDoctor => {
  return {
    id: dto.id,
    fullName:
      `${dto.salutation} ${dto.firstName} ${dto.middleName ?? ''} ${dto.lastName}`.trim(),
    category: dto.category,
    description: dto.description,
    imageUrl: dto.imageUrl ? `http://${dto.baseAddress}${dto.imageUrl}` : null,
  };
};

// Clinic Mapper
const mapClinic = (dto: ClinicSearchDTO): SearchClinic => {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    location: dto.location,
    imageUrl: dto.imageUrl ? `http://${dto.baseAddress}${dto.imageUrl}` : null,
  };
};

// Final Mapper
export const mapSearchResultToEntity = (
  dto: SearchGlobalResponseDTO
): SearchResult => {
  return {
    doctors: dto.doctors.map(mapDoctor),
    clinics: dto.clinics.map(mapClinic),
  };
};
