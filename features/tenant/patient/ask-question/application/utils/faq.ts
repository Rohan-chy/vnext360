export type FaqCategory =
  | 'general'
  | 'appointments'
  | 'medications'
  | 'billing';

export const faqData: Record<
  FaqCategory,
  { question: string; answer: string }[]
> = {
  general: [
    {
      question: 'What services do you provide?',
      answer:
        'We provide general medical consultations, preventive care guidance, and health information for common conditions.',
    },
    {
      question: 'Is this a replacement for a doctor visit?',
      answer:
        'No. The information provided is for educational purposes only and should not replace professional medical advice, diagnosis, or treatment.',
    },
  ],

  appointments: [
    {
      question: 'How do I book an appointment?',
      answer:
        'Appointments can be booked online through our website or by contacting our support team during business hours.',
    },
    {
      question: 'Can I reschedule or cancel an appointment?',
      answer:
        'Yes, appointments can be rescheduled or canceled up to 24 hours in advance without any charge.',
    },
  ],

  medications: [
    {
      question: 'Do you prescribe medications?',
      answer:
        'Medication prescriptions are only provided by licensed healthcare professionals after an appropriate consultation.',
    },
    {
      question: 'Can I ask questions about my medication?',
      answer:
        'Yes, you can ask general questions about medication usage, side effects, and safety, but always follow your doctor’s instructions.',
    },
  ],

  billing: [
    {
      question: 'Do you accept insurance?',
      answer:
        'Insurance acceptance depends on your provider. Please contact our billing department for detailed information.',
    },
    {
      question: 'How can I get a copy of my invoice?',
      answer:
        'Invoices are available in your account dashboard and can also be requested from our support team.',
    },
  ],
};
