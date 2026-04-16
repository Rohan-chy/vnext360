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
import { useAllState } from '../../application/controllers/useAllState';
import { StateColumns } from '../columns/stateColumns';
import CreateStateForm from './CreateStateForm';

const AllState = () => {
  const { State, open, setOpen, editingState, handleEdit, handleAdd } =
    useAllState();

  return (
    <>
      <DatalistHeader
        title="State"
        description="Manage and maintain the list of states associated with countries in the system."
        handleAdd={handleAdd}
      />

      <DataTable columns={StateColumns(handleEdit)} data={State || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingState ? 'Edit State' : 'State'}
            </DialogTitle>
            <DialogDescription>
              {editingState ? 'Update State details' : 'Enter State details'}
            </DialogDescription>
          </DialogHeader>

          <CreateStateForm
            initialValues={editingState || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllState;
