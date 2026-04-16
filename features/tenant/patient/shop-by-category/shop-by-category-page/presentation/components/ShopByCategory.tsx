'use client';

import React, { useState, useEffect } from 'react';
import { allProducts } from '../../application/utils/products';

// Props: category selected
type CategoryProductsProps = {
  category: string;
};

const CategoryProducts: React.FC<CategoryProductsProps> = ({
  category = 'Ayurvedic Diabetes Care',
}) => {
  const [products, setProducts] = useState<typeof allProducts>([]);

  useEffect(() => {
    // Filter products by category (case-sensitive exact match)
    const filtered = allProducts.filter((p) => p.category === category);
    setProducts(filtered);
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50 pt-[72px] px-6 pb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-[#0D6641]">
          {category} ({products.length} Products Found)
        </h2>

        {products.length === 0 ? (
          <p className="text-gray-600">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
              >
                <div className="w-full h-48 relative rounded-lg overflow-hidden mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-500 line-through">
                    ₹{product.price}
                  </span>
                  <span className="text-[#0D6641] font-bold">
                    ₹{product.offerPrice}
                  </span>
                  <span className="text-red-500 font-medium">
                    ({product.discount})
                  </span>
                </div>
                <button className="mt-auto w-full bg-[#0D6641] text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
