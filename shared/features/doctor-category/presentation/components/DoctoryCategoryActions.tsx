import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteDoctorCategory } from '../../application/useDeleteDoctorCategory';
import { DoctorCategory } from '../../domain/doctorCategoryResponse';

const DoctorCategoryActions = ({
  data,
  handleEdit,
}: {
  data: DoctorCategory;
  handleEdit: (data: DoctorCategory) => void;
}) => {
  const { mutate: deleteDoctorCategory, isPending: deletePending } =
    useDeleteDoctorCategory();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteDoctorCategory(row.id)}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default DoctorCategoryActions;
