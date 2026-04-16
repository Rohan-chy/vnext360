'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  PatientQuestion,
  patientQuestionsData,
} from '../../application/patientQuestionsData';

export default function PatientQuestions() {
  const [questions, setQuestions] =
    useState<PatientQuestion[]>(patientQuestionsData);

  const handleAnswerChange = (id: string, value: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, myAnswer: value } : q))
    );
  };

  const handleSaveAnswer = (id: string) => {
    const q = questions.find((q) => q.id === id);
    alert(`Answer saved for ${q?.patientName}: ${q?.myAnswer}`);
  };

  return (
    <div className="space-y-6 bg-white ">
      <h2 className="text-2xl font-semibold">Patient Questions</h2>
      {questions.map((q, idx) => (
        <div key={q.id} className="border rounded-lg p-4 space-y-3 bg-gray-50">
          <div className="flex items-center gap-3">
            <span className="font-semibold">{idx + 1}.</span>
            <img
              src={q.patientAvatarUrl}
              alt={q.patientName}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{q.patientName}</p>
              <p className="text-gray-500 text-sm">{q.dateISO}</p>
            </div>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Question:</p>
            <p className="ml-6">{q.question}</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">My Answer:</p>
            <Input
              type="text"
              value={q.myAnswer || ''}
              placeholder="Write your answer here"
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              className="ml-6"
            />
            <Button
              size="sm"
              variant="default"
              className="ml-6 mt-2"
              onClick={() => handleSaveAnswer(q.id)}
            >
              Save
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
