'use client';

import { CustomButton } from '@/components/extended/extended-button';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { Icons } from '@/shared/icons';

interface TableActionsProps<T> {
  data: T;

  onEdit?: (data: T) => void;
  onDelete?: (data: T) => void;

  disableEdit?: boolean;
  disableDelete?: boolean;

  loading?: boolean;
  disableActions?: boolean; //flag to disable to edit/delete
}

const TableUpdateDeleteActions = <T,>({
  data,
  onEdit,
  onDelete,
  disableEdit,
  disableDelete,
  loading,
  disableActions = false,
}: TableActionsProps<T>) => {
  return (
    <div className="flex items-center gap-1">
      {/* Edit Button */}
      {onEdit && (
        <CustomButton
          size="icon"
          variant="outline"
          disabled={disableEdit || disableActions}
          className="h-6"
          onClick={() => onEdit(data)}
        >
          <Icons.Pencil className="w-3.5 h-3.5" />
        </CustomButton>
      )}

      {/* Delete Button */}
      {onDelete && (
        <DeleteAlert
          disabled={disableDelete || loading || disableActions}
          loading={loading}
          onClick={() => onDelete(data)}
        />
      )}
    </div>
  );
};

export default TableUpdateDeleteActions;
