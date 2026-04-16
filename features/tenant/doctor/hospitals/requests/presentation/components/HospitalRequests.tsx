'use client';

import Tablist from '@/components/custom-components/Tablist';
import IncomingRequests from './IncomingRequests';
import OutgoingRequests from './OutgoingRequests';
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
import { RequestsTab } from '@/lib/requestsTabs';
import ApprovedHospitalRequests from './ApprovedHospitalRequests';

const HospitalRequests = () => {
  const { open, setOpen, editingHospital, handleEdit, handleAdd } =
    useOutgoingRequestHandle();

  return (
    <main>
      <DatalistHeader
        title="Hospital Requests"
        description="Track and manage incoming and outgoing hospital requests."
        handleAdd={handleAdd}
      />

      <Tabs defaultValue="incoming" className="mt-2">
        <Tablist tabData={RequestsTab} />

        <TabsContent value="incoming">
          <IncomingRequests />
        </TabsContent>

        <TabsContent value="outgoing">
          <OutgoingRequests handleEdit={handleEdit} />
        </TabsContent>

        <TabsContent value="approved">
          <ApprovedHospitalRequests />
        </TabsContent>
      </Tabs>

      {/* GLOBAL DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingHospital ? 'Edit Hospital request' : 'Hospital request'}
            </DialogTitle>
            <DialogDescription>
              {editingHospital
                ? 'Update Hospital request details'
                : 'Enter Hospital request details'}
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

export default HospitalRequests;
