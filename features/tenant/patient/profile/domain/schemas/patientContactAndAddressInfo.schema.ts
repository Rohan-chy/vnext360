import { z } from 'zod';

export const patientContactAndAddressInfoSchema = z.object({
  id: z.string().optional(),

  countryCode: z.string(),
  contactNumber: z.string(),

  countryId: z.string().optional(),
  stateId: z.string().optional(),
  municipalityId: z.string().optional(),
  districtId: z.string().optional(),

  wardNumber: z.number().optional(),

  addressLine: z.string().optional(),
  pinCode: z.string().optional(),
});

export type PatientContactAndAdressInfoFormValues = z.infer<
  typeof patientContactAndAddressInfoSchema
>;

//  relatives: {
//     title: string;
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     relationship: string;
//     countryCode: string;
//     contactNumber: string;
//   }[];
