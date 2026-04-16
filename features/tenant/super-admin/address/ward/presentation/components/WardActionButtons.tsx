import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteWard } from '../../application/usecases/useDeleteWard';
import { WardFormData } from '../../domain/ward.schema';

const WardActionButtons = ({
  data,
  handleEdit,
}: {
  data: WardFormData;
  handleEdit: (data: WardFormData) => void;
}) => {
  const { mutate: deleteWard, isPending: deletePending } = useDeleteWard();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteWard({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default WardActionButtons;
