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
import { DoctorOfferForm } from './AddDoctorOffer';
import { DoctorOfferFormValues } from '../../domain/doctorOffer.schema';
import { doctorOfferColumns } from '../columns/doctorOfferColumns';

const AllDoctorOffers = () => {
  const [open, setOpen] = useState(false);
  const [editingOffers, setEditingOffers] =
    useState<DoctorOfferFormValues | null>(null);

  const handleEdit = (Offers: DoctorOfferFormValues) => {
    setEditingOffers(Offers);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingOffers(null); // reset form for adding
    setOpen(true);
  };

  return (
    <>
      <DatalistHeader title="Offers" handleAdd={handleAdd} />
      <div className="mt-4 border rounded-xl p-4 bg-white">
        <DataTable columns={doctorOfferColumns(handleEdit)} data={[]} />
      </div>

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-blue-500">
              {editingOffers ? 'Edit Offers' : 'Offers'}
            </DialogTitle>
            <DialogDescription>
              {editingOffers
                ? 'Update Offers details'
                : 'Enter Offers details '}
            </DialogDescription>
          </DialogHeader>

          <DoctorOfferForm
            initialValues={editingOffers || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllDoctorOffers;
