export interface PatientQuestion {
  id: string;
  patientName: string;
  patientAvatarUrl: string;
  question: string;
  myAnswer?: string;
  dateISO: string; // date when question was asked
}

export const patientQuestionsData: PatientQuestion[] = [
  {
    id: 'Q-1001',
    patientName: 'John Doe',
    patientAvatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    question: 'What should I do for frequent headaches?',
    myAnswer:
      'Stay hydrated, sleep well, and avoid triggers. Consider seeing a neurologist if persistent.',
    dateISO: '2026-03-01',
  },
  {
    id: 'Q-1002',
    patientName: 'Sarah Williams',
    patientAvatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    question: 'Is it safe to take ibuprofen with food?',
    myAnswer:
      'Yes, taking ibuprofen with food can help reduce stomach irritation.',
    dateISO: '2026-03-03',
  },
  {
    id: 'Q-1003',
    patientName: 'Michael Johnson',
    patientAvatarUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
    question: 'How often should I get a dental cleaning?',
    dateISO: '2026-03-04',
  },
  {
    id: 'Q-1004',
    patientName: 'Emily Brown',
    patientAvatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    question: 'What exercises are safe during pregnancy?',
    myAnswer:
      'Low-impact exercises like walking and swimming are generally safe. Avoid heavy lifting and consult your OB.',
    dateISO: '2026-03-05',
  },
];
