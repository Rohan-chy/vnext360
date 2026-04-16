'use client';

import { useState } from 'react';
import { productData } from '../../application/utils/sampleProduct';

export default function ProductDetails() {
  const [qty, setQty] = useState(1);
  const product = productData; // Using the JSON above

  return (
    <div className="min-h-screen bg-gray-50 pt-[72px] px-6 pb-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Product Image */}
        <div className="col-span-1 md:col-span-1 rounded-lg overflow-hidden shadow-sm bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-96"
            loading="lazy"
          />
        </div>

        {/* Product Info */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            {/* Product Name */}
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Pricing */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-extrabold text-[#0D6641]">
                ₹{product.offerPrice}
              </span>
              <span className="line-through text-gray-500 text-lg">
                ₹{product.price}
              </span>
              <span className="text-red-600 font-semibold">
                {product.discount} OFF
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mb-6">
              <label htmlFor="quantity" className="font-semibold text-gray-700">
                Quantity:
              </label>
              <select
                id="quantity"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#0D6641]"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              className="w-full md:w-auto bg-[#0D6641] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
              onClick={() => alert(`Added ${qty} item(s) to cart`)}
            >
              Add to Cart
            </button>
          </div>

          {/* Shipping Info */}
          <div className="mt-10 bg-gray-100 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Shipping Information
            </h2>
            <p className="text-gray-700 mb-1">
              {product.shippingInfo.deliveryEstimate}
            </p>
            <p className="text-gray-700 mb-1">
              {product.shippingInfo.shippingCost}
            </p>
            <p className="text-gray-700">
              Sold by:{' '}
              <span className="font-semibold">
                {product.shippingInfo.soldBy}
              </span>
            </p>
          </div>

          {/* Other Info Sections */}
          <div className="mt-10 space-y-8">
            {product.otherInfo.map(({ title, content }, idx) => (
              <section key={idx}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {title}
                </h3>

                {/* Content can be string or array */}
                {Array.isArray(content) ? (
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {content.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{content}</p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
