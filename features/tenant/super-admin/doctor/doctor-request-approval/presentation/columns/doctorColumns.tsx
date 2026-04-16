import { ColumnDef } from '@tanstack/react-table';
import { DoctorsResponse } from '../../domain/getDoctors.schema';
import { PencilIcon } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { useDeleteDoctor } from '../../application/usecases/useDeleteDoctor';
import { CustomButton } from '@/components/extended/extended-button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const genderMap: Record<number, string> = {
  0: 'Male',
  1: 'Female',
  2: 'Others',
};

export const doctorColumns = (): ColumnDef<DoctorsResponse>[] => [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    id: 'fullName',
    header: 'Full Name',
    cell: ({ row }) => {
      const { firstName, middleName, lastName } = row.original;
      return (
        <span>
          {firstName} {middleName ? middleName + ' ' : ''}
          {lastName}
        </span>
      );
    },
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
    cell: ({ row }) => genderMap[row.original.gender] ?? '—',
  },
  {
    accessorKey: 'dateOfBirth',
    header: 'DOB',
    cell: ({ row }) => new Date(row.original.dateOfBirth).toLocaleDateString(),
  },
  {
    accessorKey: 'dateOfBirthNp',
    header: 'DOB (NP)',
    cell: ({ row }) => row.original.dateOfBirthNp || '—',
  },
  {
    id: 'contact',
    header: 'Contact',
    cell: ({ row }) => {
      const { countryCode, contactNumber } = row.original;
      return (
        <span>
          {countryCode ? `${countryCode} ` : ''}
          {contactNumber}
        </span>
      );
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'isVerified',
    header: 'Status',
    cell: ({ row }) => {
      const verified = row.original.isVerified;

      return (
        <Badge
          className={
            verified
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
          }
        >
          {verified ? 'Verified' : 'Unverified'}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { id } = row.original;
      const { mutate: deleteDoctor, isPending: deletePending } =
        useDeleteDoctor();

      return (
        <div className="space-x-1 flex">
          <Link href={`/superAdmin/doctor/request/${row.original.id}`}>
            <CustomButton size="icon" className="h-6">
              <PencilIcon className="w-3 h-3" />
            </CustomButton>
          </Link>

          <DeleteAlert
            disabled={deletePending}
            loading={deletePending}
            onClick={() => deleteDoctor({ id })}
          />
        </div>
      );
    },
  },
];
