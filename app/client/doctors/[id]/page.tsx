'use client';
import { useGetDoctorDetails } from '@/features/tenant/patient/doctor-details/application/useCases/useGetDoctorDetails';
import DoctorDetailsPage from '@/features/tenant/patient/doctor-details/presentation/page/DoctorDetailsPage';
import { useParams } from 'next/navigation';

const page = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: doctorDetails } = useGetDoctorDetails(id);
  if (!doctorDetails) return <div>Loading...</div>;
  return <DoctorDetailsPage doctorDetails={doctorDetails} />;
};

export default page;
