'use client';

import { useState } from 'react';
import { Offer } from '@/features/tenant/patient/offers/application/utils/offers';
import OfferCard from '@/shared/components/OfferCard';

const corporateCategories = ['All', 'Hospital', 'Clinic', 'Pharmacy', 'Lab'];

const corporateOffers: Offer[] = [
  {
    id: 1,
    title: 'Flat 50% Off Full Body Checkup',
    description: 'Comprehensive blood test package at discounted price.',
    category: 'Lab',
    discount: '50% OFF',
    image:
      'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Online Consultation at ₹99',
    description: 'Consult top doctors online at affordable price.',
    category: 'Doctor',
    discount: '₹99',
    image:
      'https://images.pexels.com/photos/4173256/pexels-photo-4173256.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: '20% Off on Medicines',
    description: 'Get discount on all prescription medicines.',
    category: 'Pharmacy',
    discount: '20% OFF',
    image:
      'https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Knee Replacement Package',
    description: 'Complete surgery package with post-care support.',
    category: 'Surgery',
    discount: 'Save ₹15,000',
    image:
      'https://images.pexels.com/photos/4163413/pexels-photo-4163413.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Health Prime Membership',
    description: 'Free consultations + Free delivery for 1 year.',
    category: 'Membership',
    discount: '30% OFF',
    image:
      'https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function CorporateOffersPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredOffers =
    selectedCategory === 'All'
      ? corporateOffers
      : corporateOffers.filter((offer) => offer.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Corporate Health Offers
        </h1>
        <p className="text-gray-500 mt-2">
          Exclusive partnership offers for hospitals, clinics, pharmacies &
          labs.
        </p>
      </div>

      {/* Category Filters */}
      {/* <div className="flex flex-wrap gap-3 mb-8">
                {corporateCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition ${selectedCategory === category
                                ? 'bg-[#0D6641] text-white border-[#0D6641]'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div> */}

      {/* Offers Grid */}
      {corporateOffers?.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {corporateOffers?.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No corporate offers available in this category.
        </div>
      )}
    </div>
  );
}
