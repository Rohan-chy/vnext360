import client from '@/core/network/httpClient';
import {
  mapClinicDetailsToEntity,
  mapClinicListItemToEntity,
} from '../mappers/clinic.mapper';
import { ClinicListResponseDTO } from '../dto/getClinics.dto';
import { GetClinicByIdDTO } from '../dto/getClinicById.dto';
import { ClinicRepository } from '../../domain';
import { CreateClinicReviewPayload } from '../../infrastructure/dto/addClinicReview.dto';

export const ClinicRepositoryImpl: ClinicRepository = {
  async getClinics() {
    const response = await client<ClinicListResponseDTO>({
      url: 'v1/patient/clinic',
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });

    return response.data.map(mapClinicListItemToEntity);
  },
  async getClinicById(id: string) {
    const response = await client<GetClinicByIdDTO>({
      url: `v1/patient/clinic/${id}`,
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });

    return mapClinicDetailsToEntity(response);
  },
  async addClinicReview(payload: CreateClinicReviewPayload) {
    await client({
      url: `v1/patient/clinic/clinicReview`,
      method: 'POST',
      payload: payload,
      isProtected: true,
      tokenSource: 'session',
    });
  },
};
