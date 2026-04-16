import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { hsCodeResponseItem } from '../../domain/schema/hsCodeResponse.schema';
import { useDeleteHsCode } from '../../application/usecases/useDeleteHsCode';

const TableActionButtons = ({
  data,
  handleEdit,
}: {
  data: hsCodeResponseItem;
  handleEdit: (data: hsCodeResponseItem) => void;
}) => {
  const { mutate: deleteHsCode, isPending: deletePending } = useDeleteHsCode();

  return (
    <>
      <TableUpdateDeleteActions
        data={data}
        onEdit={handleEdit}
        onDelete={(row) => deleteHsCode({ id: String(row.id) })}
        disableActions={deletePending}
        loading={deletePending}
      />
    </>
  );
};
export default TableActionButtons;
