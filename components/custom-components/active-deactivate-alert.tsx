import { Button } from '@/components/ui/button';
import { Trash2Icon } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import clsx from 'clsx';

export function ActivateDeactivateAlert({
  loading = false,
  disabled = false,
  onClick,
  action = 'Deactivate',
}: {
  loading?: boolean;
  onClick: () => void;
  disabled?: boolean;
  action?: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* <Button variant='destructive' size='icon' disabled={disabled} className="h-6"> */}

        <p className="text-[14px] pl-2 hover:bg-gray-100">{action}</p>

        {/* </Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to {action} this item?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              disabled={loading}
              onClick={onClick}
              className={clsx(
                action == 'Activate' && 'bg-green-600 hover:bg-green-800',
                action == 'Deactivate' && 'bg-red-600 hover:bg-red-800',
                loading && 'opacity-60 cursor-not-allowed'
              )}
            >
              {action}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
