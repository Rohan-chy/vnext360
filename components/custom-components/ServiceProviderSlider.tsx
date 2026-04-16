import React from 'react';

export interface ServiceProvider {
  id: string;
  name: string;
  address: string;
  image: string;
  rating: number;
}

export const SERVICE_PROVIDERS: ServiceProvider[] = [
  {
    id: '1',
    name: 'City General Hospital',
    address: '123 Health Ave, NY',
    image: 'https://picsum.photos/400/300?random=1',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'MedPlus Clinic',
    address: '456 Wellness Blvd, LA',
    image: 'https://picsum.photos/400/300?random=2',
    rating: 4.5,
  },
  {
    id: '3',
    name: 'Unity Diagnostics',
    address: '789 Lab Road, CH',
    image: 'https://picsum.photos/400/300?random=3',
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Apolo Spectra',
    address: '101 Modern St, SF',
    image: 'https://picsum.photos/400/300?random=4',
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Apolo Spectra',
    address: '101 Modern St, SF',
    image: 'https://picsum.photos/400/300?random=4',
    rating: 4.7,
  },
  {
    id: '6',
    name: 'Apolo Spectra',
    address: '101 Modern St, SF',
    image: 'https://picsum.photos/400/300?random=4',
    rating: 4.7,
  },
  {
    id: '7',
    name: 'Apolo Spectra',
    address: '101 Modern St, SF',
    image: 'https://picsum.photos/400/300?random=4',
    rating: 4.7,
  },
];

const ServiceProviderSlider: React.FC = () => {
  return (
    <section className="p-4">
      <div className="flex items-center justify-between mb-8 ">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Top Service Providers
          </h2>
          <p className="text-slate-500 mt-1">
            Vetted and verified medical facilities
          </p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
            ←
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
            →
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide no-scrollbar">
        {SERVICE_PROVIDERS.map((provider) => (
          <div
            key={provider.id}
            className="min-w-[300px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                ⭐ {provider.rating}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-slate-800 mb-1">
                {provider.name}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{provider.address}</p>
              <button className="w-full py-3 bg-slate-50 group-hover:bg-sky-600 group-hover:text-white transition-all font-bold text-slate-600 rounded-xl">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProviderSlider;
