'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { doctorColumns } from '../columns/doctorColumns';
import { DoctorsResponse } from '../../domain/getDoctors.schema';

interface props {
  doctors: DoctorsResponse[];
}
const AllDoctorsRequest = ({ doctors }: props) => {
  // Filter only unverified doctors
  const unverifiedDoctors =
    doctors?.filter((doctor) => !doctor.isVerified) || [];

  return (
    <>
      <DataTable columns={doctorColumns()} data={unverifiedDoctors || []} />
    </>
  );
};

export default AllDoctorsRequest;
