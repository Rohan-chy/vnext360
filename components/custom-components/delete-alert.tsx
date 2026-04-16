import { Button } from '@/components/ui/button';
import { Trash2Icon, type LucideIcon } from 'lucide-react';
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

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Icons } from '@/shared/icons';

interface DeleteAlertProps {
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
  action?: string;
  variant?:
    | 'destructive'
    | 'link'
    | 'default'
    | 'outline'
    | 'secondary'
    | 'ghost';
  tooltip?: string;
  icon?: any;
}

export function DeleteAlert({
  loading = false,
  disabled = false,
  onClick,
  action = 'delete',
  variant = 'destructive',
  tooltip,
  icon: Icon = Icons.Delete,
}: DeleteAlertProps) {
  return (
    <AlertDialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <AlertDialogTrigger asChild>
            <Button
              variant={variant}
              size="icon"
              disabled={disabled}
              className="h-6"
            >
              <Icon className="w-[10px] h-[10px]" />
            </Button>
          </AlertDialogTrigger>
        </TooltipTrigger>

        {tooltip && (
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure want to {action} this item?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant={variant}
              disabled={loading}
              onClick={onClick}
              className={`${variant == 'destructive' ? 'bg-red-600 hover:bg-red-800' : ''}`}
            >
              {action}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
