export interface DistrictDTO {
  id: string;
  name: string;
  sortingId: number;
  stateId: string;
  stateName: string;
  countryName: string;
  isActive: boolean;
}

export interface DistrictListResponseDTO {
  data: DistrictDTO[];
}
