import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  UpgradeTenantProps,
  UpgradeTenantSchema,
  UpgradeTenantSchemaFormValues,
} from '../../domain/upgradeTenant.schema';
import { useUpgradeTenant } from '../../application/usecases/useUpgradeTenant';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';

const UpgradeTenant: React.FC<UpgradeTenantProps> = ({ tenantId, onClose }) => {
  const today = new Date().toISOString().split('T')[0];
  const form = useForm({
    resolver: zodResolver(UpgradeTenantSchema),
    defaultValues: {
      tenant: tenantId,
      extendedExpiryDate: today,
    },
  });

  const { mutate, isPending } = useUpgradeTenant();

  const onSubmit = (values: UpgradeTenantSchemaFormValues) => {
    const payload = {
      ...values,
      extendedExpiryDate: new Date(values.extendedExpiryDate).toISOString(),
    };

    mutate(payload, {
      onSuccess: () => {
        onClose(); // close the dialog after success
      },
    });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-100 w-full">
        {' '}
        {/* smaller width */}
        <DialogHeader>
          <DialogTitle>Update Subscription</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Form Fields */}
            <FloatingLabelFormInput
              form={form}
              name="tenant"
              label="Tenant ID"
            />
            <FloatingLabelFormInput
              form={form}
              type="date"
              name="extendedExpiryDate"
              label="Extend Date"
            />

            {/* Dialog Footer */}
            <div className="mt-6 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" disabled={isPending}>
                {isPending ? 'Updating…' : 'Update'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeTenant;
