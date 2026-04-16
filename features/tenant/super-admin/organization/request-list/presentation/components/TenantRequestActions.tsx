'use client';

import { useDeleteTenantRequest } from '../../application/usecases/useDeleteTenantRequest';
import { TenantRequest } from '../../domain/getTenantRequest.schema';
import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';

interface Props {
  data: TenantRequest;
  onEdit: (data: TenantRequest) => void;
}

const TenantRequestActions = ({ data, onEdit }: Props) => {
  const { isApproved } = data;

  const { mutate: deleteRequest, isPending: deletePending } =
    useDeleteTenantRequest();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={onEdit}
      onDelete={deleteRequest}
      loading={deletePending}
      disableActions={isApproved}
    />
  );
};

export default TenantRequestActions;
