import { useState } from 'react';
import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import {
  CreateClinicFormValues,
  useCreateClinicForm,
} from '../../domain/forms/createClinicForm';
import { useClinicSubmit } from '../hooks/useClinicSubmit';

// ShadCN Dialog
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import dynamic from 'next/dynamic';

interface CreateClinicFormProps {
  initialValues?: CreateClinicFormValues;
  onClose?: () => void;
}

type LocationData = {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
};

const LocationPicker = dynamic(
  () => import('@/shared/components/map/GoogleLocationPicker'),
  { ssr: false }
);

const CreateClinicForm = ({
  initialValues,
  onClose,
}: CreateClinicFormProps) => {
  const form = useCreateClinicForm(initialValues);
  const { onSubmit, isSubmitting } = useClinicSubmit({ onClose });

  const [mapOpen, setMapOpen] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: form.getValues('latitude') ?? 27.7172,
    lng: form.getValues('longitude') ?? 85.324,
  });

  const [selectedPosition, setSelectedPosition] = useState<LocationData>({
    lat: form.getValues('latitude') ?? 27.7172,
    lng: form.getValues('longitude') ?? 85.324,
  });

  const openMap = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      setMapOpen(true);
      return;
    }

    try {
      const permission = await navigator.permissions.query({
        name: 'geolocation',
      });
      if (permission.state === 'granted' || permission.state === 'prompt') {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const coords = {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            };
            setCurrentPosition(coords);
            setSelectedPosition(coords);
            setMapOpen(true);
          },
          () => setMapOpen(true)
        );
      } else {
        alert('Location permission denied. Enable in browser settings.');
        setMapOpen(true);
      }
    } catch {
      setMapOpen(true);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
              <FloatingLabelFormInput form={form} name="name" label="Name" />
              <FloatingLabelFormInput
                form={form}
                name="location"
                label="Location"
              />
              <FloatingLabelFormInput form={form} name="type" label="Type" />
              <FloatingLabelFormInput form={form} name="pan" label="PAN" />
              <FloatingLabelFormInput
                form={form}
                name="contactNo"
                label="Contact Number"
              />
              <FloatingLabelFormInput
                form={form}
                name="manager"
                label="Manager"
              />
              <FloatingLabelFormInput
                form={form}
                name="registrationNumber"
                label="Regd. No."
              />
              <FloatingLabelFormInput
                form={form}
                type="date"
                name="registrationDate"
                label="Regd. Date"
              />
            </div>

            <div>
              <CustomButton type="button" onClick={openMap}>
                Pick Location from Map
              </CustomButton>
              {form.watch('latitude') && form.watch('longitude') && (
                <p className="text-sm mt-2">
                  📍 {form.watch('latitude')}, {form.watch('longitude')}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <CustomButton type="submit" disabled={isSubmitting}>
                {initialValues ? 'Update' : 'Add'}
              </CustomButton>
              <CustomButton
                type="button"
                variant={'destructive'}
                disabled={isSubmitting}
                onClick={() => form.reset(initialValues || undefined)}
              >
                Clear
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>

      <Dialog open={mapOpen} onOpenChange={setMapOpen}>
        <DialogContent className="w-screen max-w-3xl">
          <DialogHeader>
            <DialogTitle>Select Location</DialogTitle>
          </DialogHeader>

          {currentPosition && (
            <LocationPicker
              initialPosition={currentPosition}
              onSelect={(data) => setSelectedPosition(data)}
            />
          )}

          <DialogFooter className="flex justify-end gap-2">
            <CustomButton variant="outline" onClick={() => setMapOpen(false)}>
              Cancel
            </CustomButton>

            <CustomButton
              disabled={!selectedPosition}
              onClick={() => {
                if (selectedPosition) {
                  form.setValue('latitude', selectedPosition.lat);
                  form.setValue('longitude', selectedPosition.lng);
                  // form.setValue('location', selectedPosition.address || '');
                }
                setMapOpen(false);
              }}
            >
              Confirm
            </CustomButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateClinicForm;
