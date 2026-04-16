import DataTable from '@/components/custom-components/table/data-table';
import { clinicAllocationColumns } from '../columns/clinicAllocationColumns';
import { useGetClinicAllocationFromDoctors } from '../../application/usecases/useGetClinicAllocationFromDoctors';

const ReceivedAllocation = ({ handleEdit }: any) => {
  const { data: received } = useGetClinicAllocationFromDoctors();
  const receivedClinicSchedule = received?.data;

  let source = 'incoming';

  return (
    <>
      <DataTable
        columns={clinicAllocationColumns(handleEdit, source)}
        data={receivedClinicSchedule || []}
      />
    </>
  );
};

export default ReceivedAllocation;
