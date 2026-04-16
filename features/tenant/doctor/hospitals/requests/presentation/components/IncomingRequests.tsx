'use client';
import { useRequestSubmit } from '../hooks/useRequestSubmit';
import { useGetIncomingRequest } from '../../application/usecases/useGetIncomingRequest';
import { CardForIncoming } from './CardForIncoming';

const IncomingRequests = () => {
  const { data: incomingRequests } = useGetIncomingRequest();

  const { updateStatus, loading } = useRequestSubmit();

  return (
    <>
      {incomingRequests?.byClinic?.length === 0 ? (
        <div className="text-center text-gray-500 border rounded-lg p-6 mt-6">
          <p className="text-lg font-medium">No hospitals requests found</p>
          <p className="text-sm mt-1">
            You are not associated with any hospitals yet.
          </p>
        </div>
      ) : (
        <CardForIncoming
          incoming={incomingRequests?.byClinic}
          updateStatus={updateStatus}
          loading={loading}
        />
      )}

      {/* <DataTable
        columns={incomigRequestsColumns(updateStatus, loading)}
        data={incomingRequests?.byClinic || []}
      /> */}
    </>
  );
};

export default IncomingRequests;
