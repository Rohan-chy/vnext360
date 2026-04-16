'use client';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Combobox } from '@/components/custom-components/combobox';
import { documentTypeOptions } from '../../application/utils/documentTypeOptions';
import { ImagePreview } from './ImageView';
import { FormTextArea } from '@/components/extended/form-textarea';

const CertificationsView = ({
  form,
  fields,
  onAdd,
  onRemove,
  onClear,
  onUpload,
  onSubmit,
  documentTypeData,
  isPending,
  isSaving,
  isDeleting,
  prevTab,
  onBack,
}: any) => {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* HEADER */}
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <div className="px-5 py-2 text-primary font-semibold text-lg flex justify-between items-center">
            <span>Certifications</span>

            <Button
              type="button"
              size="sm"
              // className="bg-white text-[#224994] hover:bg-gray-100"
              onClick={onAdd}
            >
              + Add
            </Button>
          </div>

          {/* BODY */}
          <div className="px-5 pb-5 space-y-6">
            {fields.length === 0 && (
              <div className="text-center text-gray-500 border border-dashed rounded-lg p-6">
                No certifications added yet
              </div>
            )}

            {fields.map((field: any, index: number) => (
              <div
                key={field.id}
                className="bg-white border rounded-xl shadow-sm overflow-hidden"
              >
                {/* CARD HEADER */}
                <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
                  <h3 className="text-sm font-semibold text-primary">
                    Certification #{index + 1}
                  </h3>

                  <div className="flex gap-2">
                    <CustomButton
                      type="button"
                      variant="outline"
                      size="sm"
                      className="h-6 p-3"
                      onClick={() => onClear(index)}
                    >
                      Clear
                    </CustomButton>

                    {fields.length > 1 && (
                      <DeleteAlert
                        onClick={() => onRemove(index)}
                        disabled={isDeleting}
                      />
                    )}
                  </div>
                </div>

                {/* 🔹 CARD BODY */}
                <div className="p-5 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FloatingLabelFormInput
                      form={form}
                      name={`doctorCertifications.${index}.certificationDetails`}
                      label="Certification Title"
                    />

                    <FloatingLabelFormInput
                      form={form}
                      name={`doctorCertifications.${index}.completedFromInstitute`}
                      label="Awarding Institution"
                    />

                    <FloatingLabelFormInput
                      form={form}
                      name={`doctorCertifications.${index}.completionYear`}
                      label="Year of Completion"
                      type="number"
                      onChange={(e) =>
                        form.setValue(
                          `doctorCertifications.${index}.completionYear`,
                          Number(e.target.value),
                          { shouldValidate: true }
                        )
                      }
                    />

                    <Combobox
                      items={documentTypeOptions(documentTypeData) || []}
                      form={form}
                      name={`doctorCertifications.${index}.dynamicDocumentTypeId`}
                      label="Document Type"
                    />

                    {/* 📄 FILE UPLOAD */}
                    <FloatingLabelFormInput
                      type="file"
                      form={form}
                      name={`doctorCertifications.${index}.documentUrl`}
                      label="Upload Document"
                      disabled={isPending}
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (!file) return;

                        const dynamicDocumentTypeId = form.getValues(
                          `doctorCertifications.${index}.dynamicDocumentTypeId`
                        );

                        onUpload(index, file, dynamicDocumentTypeId);
                      }}
                    />

                    <div className="col-span-full">
                      <FormTextArea
                        form={form}
                        name={`doctorCertifications.${index}.remarks`}
                        label="Additional Notes"
                      />
                    </div>

                    {field?.images && (
                      <div className="border rounded-md p-2 bg-gray-50">
                        <ImagePreview src={field.images} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔻 ACTION BAR */}
        <div className="sticky bottom-0 p-4 flex justify-between">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onBack}
            disabled={!prevTab}
          >
            Back
          </Button>

          <CustomButton type="submit" size="sm" disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save & Continue'}
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};

export default CertificationsView;
