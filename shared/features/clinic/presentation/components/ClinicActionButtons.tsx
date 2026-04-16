import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteClinic } from '../../application/usecases/useDeleteClinic';
import { ClinicResponse } from '../../domain/schemas/getClinic.schema';
import { ClinicScheduleForm } from './ClinicScheduleForm';

const ClinicActions = ({
  data,
  handleEdit,
}: {
  data: ClinicResponse;
  handleEdit: (data: ClinicResponse) => void;
}) => {
  const { mutate: deleteClinic, isPending: deletePending } = useDeleteClinic();

  return (
    <div className="flex items-center gap-1">
      <ClinicScheduleForm clinic={data} />
      <TableUpdateDeleteActions
        data={data}
        onEdit={handleEdit}
        onDelete={(row) => deleteClinic({ id: row.id })}
        disableDelete={deletePending}
        loading={deletePending}
      />
    </div>
  );
};

export default ClinicActions;
