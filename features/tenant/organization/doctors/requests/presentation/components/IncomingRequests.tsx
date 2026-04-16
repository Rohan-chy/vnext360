'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { incomigRequestsColumns } from '../columns/incomingRequestsColumns';
import { useRequestSubmit } from '../hooks/useRequestSubmit';
import { useGetIncomingRequest } from '../../application/usecases/useGetIncomingRequest';

const IncomingRequests = () => {
  const { data: incomingRequests } = useGetIncomingRequest();

  const { updateStatus, loading } = useRequestSubmit();

  return (
    <>
      <DataTable
        columns={incomigRequestsColumns(updateStatus, loading)}
        data={incomingRequests?.data || []}
      />
    </>
  );
};

export default IncomingRequests;
