'use client';

import { useState } from 'react';
import { offerCategories, offers } from '../../application/utils/offers';
import OfferCard from '../components/OfferCard';

export default function OffersPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredOffers =
    selectedCategory === 'All'
      ? offers
      : offers.filter((offer) => offer.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 px-6  py-10">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Exclusive Health Offers
        </h1>
        <p className="text-gray-500 mt-2">
          Save more on consultations, lab tests, medicines & surgeries.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {offerCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedCategory === category
                ? 'bg-[#0D6641] text-white border-[#0D6641]'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Offers Grid */}
      {filteredOffers.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No offers available in this category.
        </div>
      )}
    </div>
  );
}
