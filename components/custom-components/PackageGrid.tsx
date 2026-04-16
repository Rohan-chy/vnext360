import React from 'react';

export interface Package {
  id: string;
  name: string;
  fee: string;
  provider: string;
  address: string;
  contact: string;
}

export const PACKAGES: Package[] = [
  {
    id: '1',
    name: 'Full Body Wellness',
    fee: '$199',
    provider: 'Unity Lab',
    address: 'Downtown',
    contact: '555-0101',
  },
  {
    id: '2',
    name: 'Cardiac Screening',
    fee: '$250',
    provider: 'Heart Care',
    address: 'Uptown',
    contact: '555-0102',
  },
  {
    id: '3',
    name: 'Diabetes Profile',
    fee: '$99',
    provider: 'Sugar Free',
    address: 'Central',
    contact: '555-0103',
  },
];

const PackageGrid: React.FC = () => {
  return (
    <section className="p-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Health Packages</h2>
        <button className="text-sky-600 font-bold hover:underline">
          See All Plans
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-sky-100 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-slate-800 leading-tight">
                  {pkg.name}
                </h3>
                <span className="text-2xl font-black text-sky-600">
                  {pkg.fee}
                </span>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                    🏢
                  </span>
                  <span>{pkg.provider}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    📍
                  </span>
                  <span>{pkg.address}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                    📞
                  </span>
                  <span>{pkg.contact}</span>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full py-4 bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white rounded-2xl font-bold transition-all shadow-sm">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageGrid;
