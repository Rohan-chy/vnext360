'use client';

import Tablist from '@/components/custom-components/Tablist';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import DatalistHeader from '@/components/custom-components/data-list-header';
import AllApprovedOrganizations from './AllApprovedOrganizations';
import AllOrganizationRequests from './AllOrganizationRequests';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CreateTenantForm from './CreateOrganizationForm';
import { useAllOrganizationRequestHandle } from '../hooks/useAllOrganizationRequestHandle';

const AllOrganizations = () => {
  const {
    tenantRequests,
    open,
    setOpen,
    selectedTenant,
    handleEdit,
    doctorRequestsTab,
  } = useAllOrganizationRequestHandle();

  return (
    <main>
      <DatalistHeader
        title="Organizations"
        description="Track and manage incoming and outgoing organization requests."
      />

      <Tabs defaultValue="pending" className="mt-2">
        <Tablist tabData={doctorRequestsTab} />

        <TabsContent value="pending">
          <AllOrganizationRequests
            data={tenantRequests}
            handleEdit={handleEdit}
          />
        </TabsContent>

        <TabsContent value="approved">
          <AllApprovedOrganizations
            data={tenantRequests}
            handleEdit={handleEdit}
          />
        </TabsContent>
      </Tabs>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-125">
          <DialogHeader>
            <DialogTitle className="text-primary">
              {selectedTenant ? 'Edit Organization' : 'Create Organization'}
            </DialogTitle>
            <DialogDescription>
              {selectedTenant
                ? 'Update Organization details'
                : 'Enter Organization details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <CreateTenantForm
            defaultValues={selectedTenant}
            onSuccess={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default AllOrganizations;
