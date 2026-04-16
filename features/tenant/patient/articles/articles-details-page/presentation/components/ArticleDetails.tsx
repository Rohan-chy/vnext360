'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Star, Share2 } from 'lucide-react';
import { articlesData } from '../../../articles-page/application/utils/articles';

export default function SingleArticle() {
  const params = useParams();
  const articleId = Number(params.id);

  const article =
    articlesData && articlesData?.find((item) => item.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Article not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-5">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        <div className="w-full h-72 relative">
          <Image
            src={article.picture}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-[#0D6641] mb-4">
            {article.title}
          </h1>

          {/* Author */}
          <p className="text-gray-700 ">
            <span className="font-semibold">By:</span> {article.author}{' '}
            <span className="text-sm text-gray-500">
              ({article.qualification})
            </span>
          </p>

          {/* Article Details */}
          <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
            {article.content}
          </div>

          {/* Tags */}
          <div className="mb-6">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-[#0D6641] text-white text-xs px-3 py-1 rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Rating & Shares */}
          <div className="flex items-center justify-between border-t pt-4 text-gray-700 font-semibold">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-400" />
              <span>{article.rating.toFixed(1)}</span>
            </div>

            <div className="flex items-center gap-2">
              <Share2 size={20} className="text-gray-500" />
              <span>{article.shares} Shares</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
