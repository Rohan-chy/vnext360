export interface CountryRequestDTO {
  name: string;
  code: string;
  dialingCode: string;
  sortingId: number;
  isActive: boolean;
}

export interface CountryResponseDTO {
  id: string;
  name: string;
  code: string;
  dialingCode: string;
  sortingId: number;
  isActive: boolean;
}

export interface CountryListResponseDTO {
  data: CountryResponseDTO[];
}
