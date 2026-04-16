import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Define the Zod schema
export const askQuestionSchema = z.object({
  email: z.string().email('Invalid email address'), // email validation
  contact: z.string().optional(),
  question: z.string().optional(),
});

// TypeScript type inferred from Zod schema
export type AskQuestionFormValues = z.infer<typeof askQuestionSchema>;

export const useAskQuestionForm = () => {
  const form = useForm<AskQuestionFormValues>({
    resolver: zodResolver(askQuestionSchema),
    defaultValues: {
      email: '',
      contact: '',
      question: '',
    },
    mode: 'onSubmit',
  });
  return form;
};
