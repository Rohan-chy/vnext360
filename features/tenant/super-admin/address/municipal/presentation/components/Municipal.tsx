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
import { MunicipalColumns } from '../columns/municipalColumns';
import CreateMunicipalForm from './CreateMunicipalForm';
import { useAllMunicipal } from '../../application/controllers/useAllMunicipal';

const AllMunicipal = () => {
  const { Municipal, open, setOpen, editingMunicipal, handleEdit, handleAdd } =
    useAllMunicipal();

  return (
    <>
      <DatalistHeader
        title="Municipal"
        description="Manage and maintain municipalities within districts for accurate local-level data."
        handleAdd={handleAdd}
      />

      <DataTable
        columns={MunicipalColumns(handleEdit)}
        data={Municipal || []}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingMunicipal ? 'Edit Municipal' : 'Municipal'}
            </DialogTitle>
            <DialogDescription>
              {editingMunicipal
                ? 'Update Municipal details'
                : 'Enter Municipal details'}
            </DialogDescription>
          </DialogHeader>

          <CreateMunicipalForm
            initialValues={editingMunicipal || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllMunicipal;
