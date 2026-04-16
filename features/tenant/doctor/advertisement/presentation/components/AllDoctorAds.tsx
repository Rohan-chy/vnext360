'use client';
import DataTable from '@/components/custom-components/table/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import DatalistHeader from '@/components/custom-components/data-list-header';
import { DoctorAdsForm } from './AddDoctorAds';
import { doctorAdvertisementColumns } from '../columns/doctorAdvertisementColumns';
import { DoctorAdvertisementFormValues } from '../../domain/doctorAdvertisement.schema';

const AllDoctorAds = () => {
  const [open, setOpen] = useState(false);
  const [editingOffers, setEditingOffers] =
    useState<DoctorAdvertisementFormValues | null>(null);

  const handleEdit = (Offers: DoctorAdvertisementFormValues) => {
    setEditingOffers(Offers);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingOffers(null); // reset form for adding
    setOpen(true);
  };

  return (
    <>
      <DatalistHeader title="Advertisement" handleAdd={handleAdd} />
      <div className="mt-4 border rounded-xl p-4 bg-white">
        <DataTable columns={doctorAdvertisementColumns(handleEdit)} data={[]} />
      </div>

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-blue-500">
              {editingOffers ? 'Edit Advertisement' : 'Advertisement'}
            </DialogTitle>
            <DialogDescription>
              {editingOffers
                ? 'Update Advertisement details'
                : 'Enter Advertisement details '}
            </DialogDescription>
          </DialogHeader>

          <DoctorAdsForm
            initialValues={editingOffers || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllDoctorAds;
