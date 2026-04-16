'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { Button } from '@/components/ui/button';
import { useGetNumberSettings } from '../../application/usecases/useGetNumberSetting';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CreateNumberSettingForm from './CreateNumberSettingForm';
import { useState } from 'react';
import { NumberSettingResponse } from '../../domain/getNumberSetting.schema';
import { numberSettingColumns } from '../columns/numberSettingColumns';
import DatalistHeader from '@/components/custom-components/data-list-header';

const AllNumberSettings = () => {
  const { data } = useGetNumberSettings();
  const NumberSettings = data?.data;

  const [open, setOpen] = useState(false);
  const [editingNumberSetting, setEditingNumberSetting] =
    useState<NumberSettingResponse | null>(null);

  const handleEdit = (NumberSetting: NumberSettingResponse) => {
    setEditingNumberSetting(NumberSetting);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingNumberSetting(null); // reset form for adding
    setOpen(true);
  };

  return (
    <>
      <DatalistHeader title="Number Setting" handleAdd={handleAdd} />

      <DataTable columns={numberSettingColumns(handleEdit)} data={[]} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingNumberSetting
                ? 'Edit Number Setting'
                : 'Create Number Setting'}
            </DialogTitle>
            <DialogDescription>
              {editingNumberSetting
                ? 'Update Number Setting details'
                : 'Enter Number Setting details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <CreateNumberSettingForm
            initialValues={editingNumberSetting || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllNumberSettings;
