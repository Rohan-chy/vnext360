'use client';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';

interface Props {
  form: any;
  fields: any[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onClear: (index: number) => void;
  onSubmit: () => void;
  isSaving?: boolean;
  isDeleting?: boolean;
  prevTab?: string;
  onBack?: () => void;
}

const NomineeView = ({
  form,
  fields,
  onAdd,
  onRemove,
  onClear,
  onSubmit,
  isSaving,
  isDeleting,
  prevTab,
  onBack,
}: Props) => {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* HEADER */}
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <div className="px-5 py-2 text-primary font-semibold text-lg flex justify-between items-center">
            <span>Nominees</span>
            <Button type="button" size="sm" onClick={onAdd}>
              + Add
            </Button>
          </div>

          {/* BODY */}
          <div className="px-5 pb-5 bg-gray-50 space-y-6">
            {fields.length === 0 && (
              <div className="text-center text-gray-500 border border-dashed rounded-lg p-6">
                No nominees added yet
              </div>
            )}

            {fields.map((field, index) => (
              <div
                key={field.id}
                className="bg-white border rounded-xl shadow-sm overflow-hidden"
              >
                {/* CARD HEADER */}
                <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
                  <h3 className="text-sm font-semibold text-primary">
                    Nominee #{index + 1}
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="h-6 p-3"
                      onClick={() => onClear(index)}
                    >
                      Clear
                    </Button>
                    {fields.length > 1 && (
                      <DeleteAlert
                        onClick={() => onRemove(index)}
                        disabled={isDeleting}
                      />
                    )}
                  </div>
                </div>

                {/* 🔹 CARD BODY */}
                <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FloatingLabelFormInput
                    form={form}
                    name={`doctorNominees.${index}.name`}
                    label="Name"
                  />

                  <FloatingLabelFormInput
                    form={form}
                    name={`doctorNominees.${index}.relationship`}
                    label="Relationship"
                  />

                  <FloatingLabelFormInput
                    form={form}
                    name={`doctorNominees.${index}.contactNumber`}
                    label="Contact Number"
                  />
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

export default NomineeView;
