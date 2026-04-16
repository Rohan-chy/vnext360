export const dummyDoctor = {
  id: '1',
  name: 'Dr. Som Shah',
  image: 'https://images.pexels.com/photos/19438560/pexels-photo-19438560.jpeg', // put any image inside public folder
  qualification: 'MBBS, MD (Cardiology)',
  subDepartment: 'Cardiology',
  experience: 12,
  verified: true,
  rating: 4.7,
  bio: 'Experienced cardiologist specializing in preventive heart care and interventional cardiology.',

  clinics: [
    {
      name: 'Biratnagar Eye Hospital',
      address: 'Maitighar Road, Biratnagar, Morang',
      schedule: 'Mon - Fri (10:00 AM - 4:00 PM)',
      fee: 800,
    },
    {
      name: 'Ramlal Golchha Eye Hospital',
      address: 'Golchaa Chowk, Biratnagar, Morang',
      schedule: 'Sat (9:00 AM - 1:00 PM)',
      fee: 1000,
    },
  ],

  services: [
    'Heart Checkup',
    'ECG',
    'Angioplasty',
    'Blood Pressure Management',
  ],

  specialization: ['Interventional Cardiology', 'Preventive Cardiology'],

  education: ['MBBS - AIIMS Delhi', 'MD - Cardiology, CMC Vellore'],

  experienceDetails: [
    'Senior Consultant - Apollo Hospital (2018 - Present)',
    'Consultant - Fortis Hospital (2014 - 2018)',
  ],

  training: [
    'Advanced Cardiac Life Support (ACLS)',
    'Fellowship in Interventional Cardiology',
  ],

  stories: [
    {
      patient: 'Anil Kumar',
      feedback: 'Very friendly doctor and explains clearly.',
      rating: 5,
    },
  ],

  articles: [
    {
      title: 'How to Prevent Heart Disease',
      date: 'Jan 2025',
    },
  ],
};
