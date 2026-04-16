import { ColumnDef } from '@tanstack/react-table';
import { documentTypeItems } from '../../application/utils/documentTypeItems';
import DocumentActionButtons from '../components/DocumentActionButtons';
import { DocumentType } from '../../domain/documentTypeResponse.schema';

export const documentTypeColumns = (
  handleEdit: (data: DocumentType) => void
): ColumnDef<DocumentType>[] => [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'documentType',
    header: 'Document Type',
    cell: ({ row }) => {
      const value = row.original.documentType;

      const item = documentTypeItems?.find(
        (item) => item.value === String(value)
      );

      return <p>{item?.label ?? '-'}</p>;
    },
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <DocumentActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
