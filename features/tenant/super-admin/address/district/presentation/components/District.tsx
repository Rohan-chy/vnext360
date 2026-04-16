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
import { DistrictColumns } from '../columns/districtColumns';
import CreateDistrictForm from './CreateDistrictForm';
import { useAllDistrict } from '../../application/controllers/useAllDistrict';

const AllDistrict = () => {
  const { District, open, setOpen, editingDistrict, handleEdit, handleAdd } =
    useAllDistrict();

  return (
    <>
      <DatalistHeader
        title="District"
        description="Manage and maintain the list of districts within each state for accurate location data."
        handleAdd={handleAdd}
      />

      <DataTable columns={DistrictColumns(handleEdit)} data={District || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingDistrict ? 'Edit District' : 'District'}
            </DialogTitle>
            <DialogDescription>
              {editingDistrict
                ? 'Update District details'
                : 'Enter District details'}
            </DialogDescription>
          </DialogHeader>

          <CreateDistrictForm
            initialValues={editingDistrict || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllDistrict;
