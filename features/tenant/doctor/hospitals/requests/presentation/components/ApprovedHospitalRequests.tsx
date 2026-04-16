import { useGetMyHospitals } from '../../../my-hospitals/application/useGetMyHospitals';
import { ApprovedCard } from './ApprovedCard';

const ApprovedHospitalRequests = () => {
  const { data: myHospitals } = useGetMyHospitals();
  const myHospitalsData = myHospitals?.data;

  return (
    <>
      {myHospitalsData?.length === 0 ? (
        <div className="text-center text-gray-500 border rounded-lg p-6 mt-6">
          <p className="text-lg font-medium">No hospitals requests found</p>
          <p className="text-sm mt-1">
            You are not associated with any hospitals yet.
          </p>
        </div>
      ) : (
        <ApprovedCard data={myHospitalsData || []} />
      )}
    </>
  );
};

export default ApprovedHospitalRequests;
