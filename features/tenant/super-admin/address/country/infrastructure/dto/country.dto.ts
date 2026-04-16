export interface CountryDTO {
  id: string;
  name: string;
  code: string;
  dialingCode: string;
  sortingId: number;
  isActive: boolean;
}

export interface CountryListResponseDTO {
  data: CountryDTO[];
}
