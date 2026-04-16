import { ClinicListItemDTO } from '../dto/getClinics.dto';
import { Clinic } from '../../domain/entities/clinic.entity';
import { GetClinicByIdDTO } from '../dto/getClinicById.dto';

const buildImageUrl = (base: string, path: string) => {
  if (!path) return null;
  return `http://${base}${path}`;
};

export const mapClinicListItemToEntity = (dto: ClinicListItemDTO): Clinic => {
  return {
    id: dto.id,
    name: dto.name,
    location: dto.location,
    type: dto.type,

    pan: dto.pan,
    contactNo: dto.contactNo,
    manager: dto.manager,

    registrationNumber: dto.registrationNumber,
    registrationDate: dto.registrationDate,

    logoUrl: buildImageUrl(dto.baseAddress, dto.imageUrl),

    clinicImages: [],
    doctors: [],
    reviews: [],
    timings: [],
  };
};

export const mapClinicDetailsToEntity = (dto: GetClinicByIdDTO): Clinic => {
  return {
    id: dto.id,
    name: dto.name,
    location: dto.location,
    type: dto.type,

    pan: dto.pan,
    contactNo: dto.contactNo,
    manager: dto.manager,

    registrationNumber: dto.registrationNumber,
    registrationDate: dto.registrationDate,

    logoUrl: buildImageUrl(dto.baseAddress, dto.imageUrl),

    clinicImages: dto.clinicImages.map((img) => ({
      id: img.id,
      imageUrl: `http://${img.imageUrl}`,
    })),

    doctors: dto.doctors.map((doc) => ({
      id: doc.id,
      name: doc.name,
      contactNo: doc.contactNo,
      imageUrl: doc.imageUrl
        ? buildImageUrl(doc.baseAddress, doc.imageUrl)
        : null,
    })),

    reviews: dto.reviews.map((review) => ({
      id: review.id,
      name: review.name,
      review: review.review,
      rating: review.rating,
      baseAddress: review.baseAddress,
      imageUrl: review.imageUrl,
    })),
    timings: dto.timings.map((t) => ({
      id: t.id,
      daysOfWeek: t.daysOfWeek,
      startTime: t.startTime,
      endTime: t.endTime,
    })),
  };
};
