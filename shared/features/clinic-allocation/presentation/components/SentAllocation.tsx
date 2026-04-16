import DataTable from '@/components/custom-components/table/data-table';
import { clinicAllocationColumns } from '../columns/clinicAllocationColumns';
import { useGetClinicAllocationToDoctors } from '../../application/usecases/useGetClinicAllocationToDoctors';

const SentAllocation = ({ handleEdit }: any) => {
  const { data: sent } = useGetClinicAllocationToDoctors();
  const sentClinicSchedule = sent?.data;

  let source = 'outgoing';

  return (
    <>
      <DataTable
        columns={clinicAllocationColumns(handleEdit, source)}
        data={sentClinicSchedule || []}
      />
    </>
  );
};

export default SentAllocation;
