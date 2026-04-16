'use client';

import { specilitiesDetails } from '../../application/utils/specialitiesDetails';
import SpecialityDoctors from './SpecialityDoctors';

export default function DepartmentSection() {
  const data = specilitiesDetails;

  return (
    <div className=" mx-6 py-6 space-y-6">
      {/*  HEADER  */}
      <h1 className="text-xl sm:text-2xl font-bold text-[#0D6641]">
        {data.title} {data.department} available in {data.location}
      </h1>

      {/*  DOCTOR LIST  */}
      <SpecialityDoctors data={data} />
    </div>
  );
}
