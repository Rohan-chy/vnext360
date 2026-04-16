'use client';

import { articlesData } from '../../application/utils/articles';
import ArticleCard from '../components/ArticleCard';

export default function Articles() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 pb-10">
      <h1 className="text-3xl font-bold text-[#0D6641] mb-8">
        Top Rated Articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articlesData.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
