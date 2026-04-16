'use client';

import { useGetOutgoingRequest } from '../../application/usecases/useGetOutgoingRequest';
import { DoctorHospitalCard } from './DoctorHospitalCard';

const OutgoingRequests = ({ handleEdit }: any) => {
  const { data: outgoingRequests } = useGetOutgoingRequest();

  return (
    <>
      {outgoingRequests?.data?.length === 0 ? (
        <div className="text-center text-gray-500 border rounded-lg p-6 mt-6">
          <p className="text-lg font-medium">No hospitals requests found</p>
          <p className="text-sm mt-1">
            You are not associated with any hospitals yet.
          </p>
        </div>
      ) : (
        <DoctorHospitalCard
          handleEdit={handleEdit}
          outgoing={outgoingRequests?.data || []}
        />
      )}
    </>
  );
};

export default OutgoingRequests;
