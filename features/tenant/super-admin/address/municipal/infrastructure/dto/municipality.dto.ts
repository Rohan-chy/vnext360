export interface MunicipalityDTO {
  id: string;
  name: string;
  sortingId: number;
  districtId: string;
  districtName: string;
  stateName: string;
  countryName: string;
  type: string;
  isActive: boolean;
}

export interface MunicipalityListResponseDTO {
  data: MunicipalityDTO[];
}
