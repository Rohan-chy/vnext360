export interface StateDTO {
  id: string;
  name: string;
  sortingId: number;
  countryId: string;
  countryName: string;
  isActive: boolean;
}

export interface StateListResponseDTO {
  data: StateDTO[];
}
