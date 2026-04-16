'use client';

import { useState } from 'react';
import { useDoctorProfileVerificationForm } from '../../domain/requestVerification.schema';
import { useDoctorProfileVerificationSubmit } from '../../application/controllers/useDoctorProfileVerificationSubmit';
import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FormTextArea } from '@/components/extended/form-textarea';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface Props {
  verification: any;
}

export function VerificationActions({ verification }: Props) {
  const form = useDoctorProfileVerificationForm(verification);
  const { handleSubmit, isSubmitting } = useDoctorProfileVerificationSubmit();

  const [action, setAction] = useState<'approve' | 'reject' | null>(null);

  const isVerified = form.watch('isVerified');

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="rounded-2xl border shadow-sm bg-white overflow-hidden">
          {/* HEADER */}
          <div className="px-4 py-3 text-white font-semibold bg-primary">
            Verification Decision
          </div>

          <div className="p-4 space-y-4">
            {/* CURRENT STATUS */}
            <div className="flex items-center gap-2 text-sm">
              {verification?.isVerified ? (
                <>
                  <CheckCircle className="text-[#0D6641]" size={18} />
                  <span className="text-[#0D6641] font-medium">
                    Currently Verified
                  </span>
                </>
              ) : (
                <>
                  <AlertTriangle className="text-yellow-500" size={18} />
                  <span className="text-yellow-600 font-medium">
                    Pending Verification
                  </span>
                </>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setAction('approve');
                  form.setValue('isVerified', true);
                }}
                className={`flex items-center justify-center gap-2 py-1 rounded-md border transition text-sm
                  ${
                    action === 'approve'
                      ? 'bg-primary text-white border-primary'
                      : 'hover:bg-green-50 border-gray-200'
                  }`}
              >
                <CheckCircle size={16} />
                Approve
              </button>

              <button
                type="button"
                onClick={() => {
                  setAction('reject');
                  form.setValue('isVerified', false);
                }}
                className={`flex items-center justify-center gap-2 py-1 rounded-md border transition  text-sm
                  ${
                    action === 'reject'
                      ? 'bg-red-500 text-white border-red-500'
                      : 'hover:bg-red-50 border-gray-200'
                  }`}
              >
                <XCircle size={16} />
                Reject
              </button>
            </div>

            {/* REJECTION REASON */}
            {action === 'reject' && (
              <FormTextArea
                form={form}
                name="rejectionReason"
                placeholder="Enter reason for rejection..."
              />
            )}

            {/* ACTION BAR */}
            <div className="flex justify-between gap-3 pt-2">
              <CustomButton
                type="button"
                size="sm"
                variant="outline"
                disabled={isSubmitting}
                onClick={() => {
                  form.reset();
                  setAction(null);
                }}
              >
                Reset
              </CustomButton>

              <CustomButton
                type="submit"
                size="sm"
                disabled={!action || isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </CustomButton>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
