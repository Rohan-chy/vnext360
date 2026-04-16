'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface PatientDetail {
  complaintHistory: string;
  diagnosis: string;
  advice: string;
  followUp: string;
}

interface PatientDetailsProps {
  patientId: string | null;
  onClose: () => void;
}

// Dummy patient details
const dummyPatientDetails: Record<string, PatientDetail> = {
  'P-1001': {
    complaintHistory: 'Fever, cough for 3 days.',
    diagnosis: 'Viral Infection',
    advice: 'Rest, hydrate, take paracetamol.',
    followUp: 'Follow up in 5 days.',
  },
  'P-1002': {
    complaintHistory: 'Tooth pain in upper molars.',
    diagnosis: 'Cavity and gum inflammation',
    advice: 'Dental cleaning and filling recommended.',
    followUp: 'Follow up in 1 week.',
  },
  'P-1003': {
    complaintHistory: 'Headache and nausea',
    diagnosis: 'Migraine',
    advice: 'Avoid triggers, take prescribed medication',
    followUp: 'Follow up if symptoms persist',
  },
  'P-1004': {
    complaintHistory: 'Knee pain after exercise',
    diagnosis: 'Mild sprain',
    advice: 'Rest, ice, compression, elevation (RICE)',
    followUp: 'Follow up after 1 week',
  },
  'P-1005': {
    complaintHistory: 'High blood pressure check',
    diagnosis: 'Hypertension Stage 1',
    advice: 'Lifestyle changes, start low dose medication',
    followUp: 'Monthly blood pressure monitoring',
  },
  'P-1006': {
    complaintHistory: 'Skin rashes on arms',
    diagnosis: 'Allergic dermatitis',
    advice: 'Apply topical steroid cream, avoid allergens',
    followUp: 'Recheck after 2 weeks',
  },
};

export default function PatientDetails({
  patientId,
  onClose,
}: PatientDetailsProps) {
  const [activeTab, setActiveTab] = useState<
    'complaint' | 'diagnosis' | 'advice' | 'fu'
  >('complaint');
  const [details, setDetails] = useState<PatientDetail | null>(null);

  useEffect(() => {
    if (patientId) {
      setDetails(dummyPatientDetails[patientId] || null);
    }
  }, [patientId]);

  if (!patientId || !details) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 pt-20">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Patient Details</h2>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as any)}
        >
          <TabsList className="mb-4">
            <TabsTrigger value="complaint">Complaint / History</TabsTrigger>
            <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
            <TabsTrigger value="advice">Advice</TabsTrigger>
            <TabsTrigger value="fu">Follow-Up</TabsTrigger>
          </TabsList>

          <TabsContent value="complaint">
            <p className="text-gray-700">{details.complaintHistory}</p>
          </TabsContent>
          <TabsContent value="diagnosis">
            <p className="text-gray-700">{details.diagnosis}</p>
          </TabsContent>
          <TabsContent value="advice">
            <p className="text-gray-700">{details.advice}</p>
          </TabsContent>
          <TabsContent value="fu">
            <p className="text-gray-700">{details.followUp}</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
