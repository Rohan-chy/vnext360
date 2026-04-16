import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteState } from '../../application/usecases/useDeleteState';
import { stateFormData } from '../../domain/state.schema';

const StateActionButtons = ({
  data,
  handleEdit,
}: {
  data: stateFormData;
  handleEdit: (data: stateFormData) => void;
}) => {
  const { mutate: deleteState, isPending: deletePending } = useDeleteState();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteState({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default StateActionButtons;
