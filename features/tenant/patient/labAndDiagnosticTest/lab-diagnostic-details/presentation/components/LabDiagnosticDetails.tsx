'use client';

import Image from 'next/image';
import { useState } from 'react';
import LabDetails from './LabDetails';

export default function LabDiagnosticDetails() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Test Photo */}
          <div className="w-full h-72 relative rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg"
              alt="Lab Test"
              fill
              className="object-cover"
            />
          </div>

          {/* Test Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Comprehensive Blood Test Package
              </h1>

              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-[#214994]">Provider:</span>{' '}
                GreenLife Diagnostics
              </p>

              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-[#214994]">
                  Certification:
                </span>{' '}
                NABL Certified Lab
              </p>

              <p className="text-gray-600 mb-4">
                <span className="font-semibold text-[#214994]">
                  Sample Collection:
                </span>{' '}
                Home Collection & Lab Visit Available
              </p>

              <div className="text-3xl font-bold text-[#214994] mb-6">
                ₹ 1,499
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg"
                >
                  +
                </button>
              </div>

              <button className="bg-[#0D6641] hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <LabDetails />
      </div>
    </div>
  );
}
