import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { DocumentType } from '../../domain/documentTypeResponse.schema';
import { useDeleteDocumentType } from '../../application/usecases/useDeleteDocumentType';

const DocumentActionButtons = ({
  data,
  handleEdit,
}: {
  data: DocumentType;
  handleEdit: (data: DocumentType) => void;
}) => {
  const { mutate: deleteDocument, isPending: deletePending } =
    useDeleteDocumentType();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteDocument({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default DocumentActionButtons;
