'use client';
import DataTable from '@/components/custom-components/table/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { clinicAllocationColumns } from '../columns/clinicAllocationColumns';
import CreateClinicAllocationForm from './CreateClinicAllocationForm';
import DatalistHeader from '@/components/custom-components/data-list-header';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Tablist from '@/components/custom-components/Tablist';
import { RequestsTab } from '@/lib/requestsTabs';
import { useAllClinicAllocationHandle } from '../hooks/useAllClinicAllocationHandle';
import ReceivedAllocation from './ReceivedAllocation';
import SentAllocation from './SentAllocation';

const AllClinicAllocation = () => {
  const { open, setOpen, editingClinic, handleEdit, handleAdd } =
    useAllClinicAllocationHandle();

  return (
    <>
      <DatalistHeader
        title="Doctor Schedules"
        description="Track and manage your schedules"
        handleAdd={handleAdd}
      />

      <Tabs defaultValue="incoming" className="mt-2">
        <Tablist tabData={RequestsTab} />

        <TabsContent value="incoming">
          <ReceivedAllocation handleEdit={handleEdit} />
        </TabsContent>

        <TabsContent value="outgoing">
          <SentAllocation handleEdit={handleEdit} />
        </TabsContent>
      </Tabs>

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingClinic ? 'Edit Doctor Schedule' : 'Doctor Schedule'}
            </DialogTitle>
            <DialogDescription>
              {editingClinic
                ? 'Update Doctor Schedule details'
                : 'Enter Doctor Schedule details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <CreateClinicAllocationForm
            initialValues={editingClinic || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllClinicAllocation;
