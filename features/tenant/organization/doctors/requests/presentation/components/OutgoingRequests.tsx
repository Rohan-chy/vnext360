'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { outgoingRequestsColumns } from '../columns/outgoingRequestsColumns';
import { useGetOutgoingRequest } from '../../application/usecases/useGetOutgoingRequest';

const OutgoingRequests = ({ handleEdit }: any) => {
  const { data: outgoingRequests } = useGetOutgoingRequest();
  return (
    <>
      <DataTable
        columns={outgoingRequestsColumns(handleEdit)}
        data={outgoingRequests?.data || []}
      />
    </>
  );
};

export default OutgoingRequests;
