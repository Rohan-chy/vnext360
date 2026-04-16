'use client';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { CustomButton } from '@/components/extended/extended-button';
import { Form } from '@/components/ui/form';
import { useAskQuestionForm } from '../../domain/createAskQuestion.schema';
import { FormTextArea } from '@/components/extended/form-textarea';

const AskQuestionForm = () => {
  const form = useAskQuestionForm();

  return (
    <main className="flex justify-center lg:justify-start">
      <div className="w-full max-w-lg rounded-3xl border bg-white px-6 sm:px-8 py-4 shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
          Ask Questions
        </h2>
        <Form {...form}>
          <form
          // onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-5">
              <FloatingLabelFormInputForClient
                form={form}
                name="email"
                label="Email"
                type="email"
              />
              <FloatingLabelFormInputForClient
                form={form}
                name="contact"
                label="Contact"
              />
              <FormTextArea
                form={form}
                name="question"
                label="Write Your Question"
              />
            </div>

            {/* Submit */}
            <div className="mt-4 flex justify-center">
              <CustomButton
                type="submit"
                className="w-full font-bold bg-[#0D6641] text-green-50 hover:bg-green-900/90 dark:bg-green-600 dark:text-white dark:hover:bg-green-50/90"
                // disabled={isPending}
              >
                {/* {isPending ? 'Logging...' : 'Login'} */}
                Submit Question
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default AskQuestionForm;
