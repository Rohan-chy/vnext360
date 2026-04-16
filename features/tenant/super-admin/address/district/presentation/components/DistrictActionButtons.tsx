import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteDistrict } from '../../application/usecases/useDeleteDistrict';
import { DistrictFormData } from '../../domain/district.schema';

const DistrictActionButtons = ({
  data,
  handleEdit,
}: {
  data: DistrictFormData;
  handleEdit: (data: DistrictFormData) => void;
}) => {
  const { mutate: deleteDistrict, isPending: deletePending } =
    useDeleteDistrict();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteDistrict({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default DistrictActionButtons;
