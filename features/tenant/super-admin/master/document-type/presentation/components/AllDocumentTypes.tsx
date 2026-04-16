//rohan
'use client';
import DataTable from '@/components/custom-components/table/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import DatalistHeader from '@/components/custom-components/data-list-header';
import { documentTypeColumns } from '../columns/documentTypeColumns';
import { useGetDocumentType } from '../../application/usecases/useGetDocumentType';
import CreateDocumentTypeForm from './CreateDocumentTypeForm';
import { DocumentType } from '../../domain/documentTypeResponse.schema';

const AllDocumentTypes = () => {
  const { data } = useGetDocumentType();
  const DocumentTypes = data?.data;

  const [open, setOpen] = useState(false);
  const [editingDocumentType, setEditingDocumentType] =
    useState<DocumentType | null>(null);

  const handleEdit = (DocumentType: DocumentType) => {
    setEditingDocumentType(DocumentType);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingDocumentType(null); // reset form for adding
    setOpen(true);
  };

  return (
    <>
      <DatalistHeader title="Document" handleAdd={handleAdd} />

      <DataTable
        columns={documentTypeColumns(handleEdit)}
        data={DocumentTypes || []}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingDocumentType ? 'Edit Document' : 'Document'}
            </DialogTitle>
            <DialogDescription>
              {editingDocumentType
                ? 'Update Document details'
                : 'Enter Document details '}
            </DialogDescription>
          </DialogHeader>

          <CreateDocumentTypeForm
            initialValues={editingDocumentType || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllDocumentTypes;
