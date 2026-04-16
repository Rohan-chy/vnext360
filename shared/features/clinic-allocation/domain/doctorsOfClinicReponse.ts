export type DoctorsOfClincItem = {
  doctorId: string;
  doctorName: string;
  baseAddress: string;
  imageUrl: string;
};

export type GetDoctorsOfClincResponse = {
  data: DoctorsOfClincItem[];
};
