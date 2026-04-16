import DataTable from '@/components/custom-components/table/data-table';
import { DoctorScheduleColumns } from '../columns/schedulesColumns';
import { useGetDoctorOutgoingSchedule } from '../../application/usecases/useGetOutgoingSchedules';

const SentSchedules = ({ handleEdit }: any) => {
  const { data: outgoingSchedule } = useGetDoctorOutgoingSchedule();
  const outgoingScheduleData = outgoingSchedule?.data;

  let source = 'outgoing';

  return (
    <>
      <DataTable
        columns={DoctorScheduleColumns(handleEdit, source)}
        data={outgoingScheduleData || []}
      />
    </>
  );
};

export default SentSchedules;
