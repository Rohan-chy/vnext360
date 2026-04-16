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
import { useAllHsCodesHandler } from '../hooks/useAllHsCodesHandler';
import AddHsCodeForm from './AddHsCodeForm';
import { hsCodeColumns } from '../columns/hsCodeColumns';

const AllHsCodes = () => {
  const { open, setOpen, editingHscode, handleEdit, handleAdd, hsCodeData } =
    useAllHsCodesHandler();

  return (
    <>
      <DatalistHeader
        title="Hs Code"
        description="Manage HS codes used for product classification. Add, update, or remove codes to ensure accurate trade and compliance."
        handleAdd={handleAdd}
      />

      <DataTable columns={hsCodeColumns(handleEdit)} data={hsCodeData || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingHscode ? 'Edit Hs code' : 'Hs code'}
            </DialogTitle>
            <DialogDescription>
              {editingHscode
                ? 'Update Hs code details'
                : 'Enter Hs code details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <AddHsCodeForm
            initialValues={editingHscode || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllHsCodes;
