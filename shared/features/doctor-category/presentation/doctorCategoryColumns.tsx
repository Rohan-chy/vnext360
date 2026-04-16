import { ColumnDef } from '@tanstack/react-table';
import { DoctorCategory } from '../domain/doctorCategoryResponse';
import DoctorCategoryActions from './components/DoctoryCategoryActions';
import DoctorCategoryImageUpload from './components/DoctorCategoryImageUpload';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const doctoryCategoryColumns = (
  handleEdit: (category: DoctorCategory) => void
): ColumnDef<DoctorCategory>[] => [
  {
    accessorKey: 'image',
    header: '',
    cell: ({ row }) => <DoctorCategoryImageUpload data={row.original} />,
  },
  {
    accessorKey: 'categoryName',
    header: 'Speciality',
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.original.description || '—';

      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="max-w-[250px] truncate cursor-help text-sm text-gray-600">
              {description}
            </p>
          </TooltipTrigger>

          <TooltipContent className="max-w-xs break-words">
            {description}
          </TooltipContent>
        </Tooltip>
      );
    },
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <DoctorCategoryActions data={row.original} handleEdit={handleEdit} />
    ),
  },
];
