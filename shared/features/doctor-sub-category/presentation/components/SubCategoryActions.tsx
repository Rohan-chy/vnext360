import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteDoctorSubCategory } from '../../application/useDeleteDoctorSubCategory';
import { DoctorSubCategory } from '../../domain/doctorSubCategoryResponse';

const SubCategoryActions = ({
  data,
  handleEdit,
}: {
  data: DoctorSubCategory;
  handleEdit: (data: DoctorSubCategory) => void;
}) => {
  const { mutate: deleteDoctorSubCategory, isPending: deletePending } =
    useDeleteDoctorSubCategory();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteDoctorSubCategory(row.id)}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default SubCategoryActions;
