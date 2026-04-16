import React from 'react';

export interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Managing Diabetes in 2026',
    category: 'Health',
    image: 'https://picsum.photos/600/400?random=40',
  },
  {
    id: '2',
    title: 'Top 10 Superfoods for Immunity',
    category: 'Nutrition',
    image: 'https://picsum.photos/600/400?random=41',
  },
  {
    id: '3',
    title: 'The Future of Telemedicine',
    category: 'Technology',
    image: 'https://picsum.photos/600/400?random=42',
  },
];

const ArticlesSection: React.FC = () => {
  return (
    <section className="p-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Top Rated Articles
        </h2>
        <button className="text-sky-600 font-bold hover:underline">
          Read More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <div className="h-64 rounded-3xl overflow-hidden mb-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <span className="inline-block px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-bold mb-3">
              {article.category}
            </span>
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors leading-snug">
              {article.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
