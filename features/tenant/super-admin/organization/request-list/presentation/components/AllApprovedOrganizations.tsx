'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { tenantRequestColumns } from '../columns/tenantRequestColumns';
import { TenantRequest } from '../../domain/getTenantRequest.schema';

interface props {
  data: TenantRequest[];
  handleEdit: any;
}

const AllApprovedOrganizations = ({ data, handleEdit }: props) => {
  // Filter only unverified organizations
  const verifiedOrganizations =
    data?.filter((organization) => organization.isApproved) || [];

  return (
    <>
      <DataTable
        columns={tenantRequestColumns({ handleEdit })}
        data={verifiedOrganizations || []}
      />
    </>
  );
};

export default AllApprovedOrganizations;
