import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { SalutationFormValues } from '../../domain/createSalutation.schema';
import { useDeleteSalutation } from '../../application/usecases/useDeleteSalutation';

const SalutationActionButtons = ({
  data,
  handleEdit,
}: {
  data: SalutationFormValues;
  handleEdit: (data: SalutationFormValues) => void;
}) => {
  const { mutate: deleteSalutation, isPending: deletePending } =
    useDeleteSalutation();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteSalutation({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default SalutationActionButtons;
