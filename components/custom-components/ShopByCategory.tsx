import React from 'react';

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const SHOP_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Health Monitors',
    image: 'https://picsum.photos/300/300?random=20',
  },
  {
    id: '2',
    name: 'Ayurvedic Care',
    image: 'https://picsum.photos/300/300?random=21',
  },
  {
    id: '3',
    name: 'Pain Relief',
    image: 'https://picsum.photos/300/300?random=22',
  },
  {
    id: '4',
    name: 'Baby Care',
    image: 'https://picsum.photos/300/300?random=23',
  },
  {
    id: '5',
    name: 'Nutritional Drinks',
    image: 'https://picsum.photos/300/300?random=24',
  },
  {
    id: '6',
    name: 'Adult Diapers',
    image: 'https://picsum.photos/300/300?random=25',
  },
  {
    id: '7',
    name: 'Vitamins',
    image: 'https://picsum.photos/300/300?random=26',
  },
  {
    id: '8',
    name: 'Protein Powders',
    image: 'https://picsum.photos/300/300?random=27',
  },
  {
    id: '9',
    name: 'Summer Essentials',
    image: 'https://picsum.photos/300/300?random=28',
  },
  {
    id: '10',
    name: 'Medical Supplies',
    image: 'https://picsum.photos/300/300?random=29',
  },
  {
    id: '11',
    name: 'Intimate Care',
    image: 'https://picsum.photos/300/300?random=30',
  },
  {
    id: '12',
    name: 'Skin & Hair',
    image: 'https://picsum.photos/300/300?random=31',
  },
];

const ShopByCategory: React.FC = () => {
  return (
    <section className="p-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Shop By Category (12)
        </h2>
        <button className="text-sky-600 font-bold hover:underline">
          Explore Store
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {SHOP_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-[2.5rem] p-4 text-center hover:shadow-xl transition-all border border-slate-50 group"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden mb-4">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h4 className="font-bold text-slate-800 text-sm px-2 line-clamp-2">
              {cat.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
