export const locationQueryKeys = {
  countries: ['countries'],
  states: (countryId: string) => ['states', countryId],
  districts: (stateId: string) => ['districts', stateId],
  municipalities: (districtId: string) => ['municipalities', districtId],
  wards: (municipalityId: string) => ['wards', municipalityId],
};
