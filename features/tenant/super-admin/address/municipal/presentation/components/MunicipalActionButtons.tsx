import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteMunicipal } from '../../application/usecases/useDeleteMunicipal';
import { MunicipalFormData } from '../../domain/municipal.schema';

const MunicipalActionButtons = ({
  data,
  handleEdit,
}: {
  data: MunicipalFormData;
  handleEdit: (data: MunicipalFormData) => void;
}) => {
  const { mutate: deleteMunicipal, isPending: deletePending } =
    useDeleteMunicipal();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteMunicipal({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default MunicipalActionButtons;
