'use client';
import DataTable from '@/components/custom-components/table/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import DatalistHeader from '@/components/custom-components/data-list-header';
import CreateCountryForm from './CreateCountryForm';
import { countryColumns } from '../columns/countryColumns';
import { useAllCountry } from '../../application/controllers/useAllCountry';

const AllCountry = () => {
  const { Country, open, setOpen, editingCountry, handleEdit, handleAdd } =
    useAllCountry();

  return (
    <>
      <DatalistHeader
        title="Country"
        description="Manage and maintain the list of countries available in the system."
        handleAdd={handleAdd}
      />

      <DataTable columns={countryColumns(handleEdit)} data={Country || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingCountry ? 'Edit Country' : 'Country'}
            </DialogTitle>
            <DialogDescription>
              {editingCountry
                ? 'Update Country details'
                : 'Enter Country details'}
            </DialogDescription>
          </DialogHeader>

          <CreateCountryForm
            initialValues={editingCountry || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllCountry;
