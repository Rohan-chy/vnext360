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
import CreateDoctorScheduleForm from './CreateSchedulesForm';
import { useAllDoctorSchedule } from '../hooks/useAllSchedules';
import { DoctorScheduleColumns } from '../columns/schedulesColumns';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Tablist from '@/components/custom-components/Tablist';
import { RequestsTab } from '@/lib/requestsTabs';
import ReceivedSchedules from './ReceivedSchedules';
import SentSchedules from './SentSchedules';

const AllSchedules = () => {
  const { open, setOpen, editingDoctorSchedule, handleEdit, handleAdd } =
    useAllDoctorSchedule();

  return (
    <>
      <DatalistHeader
        title="Schedules"
        description="Track and manage your schedules"
        handleAdd={handleAdd}
      />

      <Tabs defaultValue="incoming" className="mt-2">
        <Tablist tabData={RequestsTab} />

        <TabsContent value="incoming">
          <ReceivedSchedules handleEdit={handleEdit} />
        </TabsContent>

        <TabsContent value="outgoing">
          <SentSchedules handleEdit={handleEdit} />
        </TabsContent>
      </Tabs>

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingDoctorSchedule ? 'Update Schedules' : ' Schedules'}
            </DialogTitle>
            <DialogDescription>
              {editingDoctorSchedule
                ? 'Update Schedules details'
                : 'Enter Schedules details'}
            </DialogDescription>
          </DialogHeader>

          <CreateDoctorScheduleForm
            initialValues={editingDoctorSchedule || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllSchedules;
