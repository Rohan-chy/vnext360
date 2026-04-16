import DataTable from '@/components/custom-components/table/data-table';
import { DoctorScheduleColumns } from '../columns/schedulesColumns';
import { useGetDoctorIncomingSchedule } from '../../application/usecases/useGetIncomingSchedules';

const ReceivedSchedules = ({ handleEdit }: any) => {
  const { data: incomingSchedule } = useGetDoctorIncomingSchedule();
  const incomingScheduleData = incomingSchedule?.data;

  let source = 'incoming';

  return (
    <>
      <DataTable
        columns={DoctorScheduleColumns(handleEdit, source)}
        data={incomingScheduleData || []}
      />
    </>
  );
};

export default ReceivedSchedules;
