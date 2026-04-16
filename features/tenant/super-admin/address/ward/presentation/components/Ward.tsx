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
import CreateWardForm from './CreateWardForm';
import { useAllWard } from '../hooks/useAllWard';
import { WardColumns } from '../columns/wardColumns';

const AllWard = () => {
  const { Ward, open, setOpen, editingWard, handleEdit, handleAdd } =
    useAllWard();

  return (
    <>
      <DatalistHeader
        title="Ward"
        description="Manage and maintain wards within municipalities for precise local-level data."
        handleAdd={handleAdd}
      />

      <DataTable columns={WardColumns(handleEdit)} data={Ward || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingWard ? 'Edit Ward' : 'Ward'}
            </DialogTitle>
            <DialogDescription>
              {editingWard ? 'Update Ward details' : 'Enter Ward details'}
            </DialogDescription>
          </DialogHeader>

          <CreateWardForm
            initialValues={editingWard || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllWard;
