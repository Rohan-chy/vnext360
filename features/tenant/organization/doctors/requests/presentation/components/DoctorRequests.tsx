'use client';

import Tablist from '@/components/custom-components/Tablist';
import IncomingRequests from './IncomingRequests';
import OutgoingRequests from './OutgoingRequests';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { useOutgoingRequestHandle } from '../hooks/useOutgoingRequestHandle';
import DatalistHeader from '@/components/custom-components/data-list-header';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import OutgoingRequestForm from './OutgingRequestForm';

const doctorRequestsTab = [
  { title: 'Received', value: 'incoming', icon: ArrowDownLeft },
  { title: 'Sent', value: 'outgoing', icon: ArrowUpRight },
];

const DoctorRequests = () => {
  const { open, setOpen, editingHospital, handleEdit, handleAdd } =
    useOutgoingRequestHandle();

  return (
    <main>
      <DatalistHeader
        title="Doctor Requests"
        description="Track and manage incoming and outgoing doctor requests."
        handleAdd={handleAdd}
      />

      <Tabs defaultValue="incoming" className="mt-2">
        <Tablist tabData={doctorRequestsTab} />

        <TabsContent value="incoming">
          <IncomingRequests />
        </TabsContent>

        <TabsContent value="outgoing">
          <OutgoingRequests handleEdit={handleEdit} />
        </TabsContent>
      </Tabs>

      {/* GLOBAL DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingHospital ? 'Edit Doctor Request' : 'Doctor Request'}
            </DialogTitle>
            <DialogDescription>
              {editingHospital
                ? 'Update Doctor Request'
                : 'Enter Doctor Request'}
            </DialogDescription>
          </DialogHeader>

          <OutgoingRequestForm
            initialValues={editingHospital || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default DoctorRequests;
