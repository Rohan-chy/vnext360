import type { Clinic, ClinicReview } from '../../domain';
import AddClinicReview from './AddClinicReview';
import ClinicReviewCard from './ClinicReviewCard';

const ClinicReview = ({ clinic }: { clinic: Clinic }) => {
  return (
    <div className="space-y-6">
      <AddClinicReview clinicId={clinic.id} />
      <div className="grid grid-cols-1 gap-4">
        {clinic.reviews?.map((clinicReview: ClinicReview, i: number) => (
          <ClinicReviewCard key={i} review={clinicReview} />
        ))}
      </div>
    </div>
  );
};

export default ClinicReview;
