import { dummyDoctor } from '../../application/lib/doctorDetails';
import { DoctorDetailResponse } from '../../infrastructure/dto/doctorDetails.dto';
import DoctorHeader from '../components/DoctorHeader';
import DoctorTabs from '../components/DoctorTabs';

export default function DoctorDetailsPage({
  doctorDetails,
}: {
  doctorDetails: DoctorDetailResponse;
}) {
  return (
    <div className="container mx-auto py-10 space-y-6">
      <DoctorHeader doctorDetails={doctorDetails} />
      <DoctorTabs doctorDetails={doctorDetails} doctor={dummyDoctor} />
    </div>
  );
}
