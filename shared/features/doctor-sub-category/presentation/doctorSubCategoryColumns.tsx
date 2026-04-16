import { ColumnDef } from '@tanstack/react-table';
import { DoctorSubCategory } from '../domain/doctorSubCategoryResponse';
import SubCategoryActions from './components/SubCategoryActions';

export const doctorSubCategoryColumns = (
  handleEdit: (data: DoctorSubCategory) => void
): ColumnDef<DoctorSubCategory>[] => [
  {
    accessorKey: 'subCategoryName',
    header: 'Sub Speciality',
  },
  {
    accessorKey: 'doctorCategoryName',
    header: 'Speciality',
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => row.original.description || '—',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <SubCategoryActions data={row.original} handleEdit={handleEdit} />
    ),
  },
];
