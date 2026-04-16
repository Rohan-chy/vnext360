export type WardFormData = {
  id: string;
  municipalityId: string;
  wardNumber: number;
  isActive: boolean;
};

export type GetWardResponse = {
  data: WardFormData[];
};
