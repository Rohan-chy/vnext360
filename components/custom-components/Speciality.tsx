import React from 'react';

export interface Symptom {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const SYMPTOMS: Symptom[] = [
  { id: '1', name: 'Stomach Ache', icon: '🍲', color: 'bg-emerald-50' },
  { id: '2', name: 'Period Issue', icon: '♈', color: 'bg-rose-50' },
  { id: '3', name: 'Acne / Pimples', icon: '👤', color: 'bg-sky-50' },
  { id: '4', name: 'Fever', icon: '🌡️', color: 'bg-amber-50' },
  { id: '5', name: 'Depression', icon: '🧠', color: 'bg-indigo-50' },
  { id: '6', name: 'Diabetes', icon: '🩸', color: 'bg-red-50' },
  { id: '7', name: 'Cough', icon: '🗣️', color: 'bg-cyan-50' },
  { id: '8', name: 'Hairfall', icon: '👩', color: 'bg-orange-50' },
  { id: '9', name: 'Gastritis', icon: '💧', color: 'bg-blue-50' },
  { id: '10', name: 'Body Pain', icon: '⚡', color: 'bg-violet-50' },
];

const SpecialitySection: React.FC = () => {
  return (
    <section className="p-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Specialties</h2>
          <p className="text-slate-500 mt-1">
            Select a symptom for immediate consultation
          </p>
        </div>
        <button className="text-sky-600 font-bold hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {SYMPTOMS.map((symptom) => (
          <div
            key={symptom.id}
            className={`group p-6 rounded-[2rem] ${symptom.color} border border-transparent hover:border-white hover:shadow-xl transition-all cursor-pointer relative overflow-hidden`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                {symptom.name}
              </span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm transform group-hover:scale-110 transition-transform">
                {symptom.icon}
              </div>
            </div>
            {/* Future-forward decorative element */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialitySection;
