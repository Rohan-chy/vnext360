'use client';

import Image from 'next/image';
import { Star, Share2 } from 'lucide-react';
import Link from 'next/link';

export type Article = {
  id: number;
  picture: string;
  title: string;
  author: string;
  qualification: string;
  brief: string;
  tags: string[];
  rating: number;
  shares: number;
};

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/client/articles/${article?.id}`}>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
        {/* Image */}
        <div className="w-full h-48 relative rounded-t-lg overflow-hidden">
          <Image
            src={article.picture}
            alt={article.title}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {article.title}
          </h2>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold">By:</span> {article.author}{' '}
            <span className="text-sm text-gray-500">
              ({article.qualification})
            </span>
          </p>

          <p className="text-gray-600 mb-4 flex-grow">{article.brief}</p>

          {/* Tags */}
          <div className="mb-4">
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-block bg-[#0D6641] text-white text-xs px-3 py-1 rounded-full mr-2 cursor-pointer select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Rating and Shares */}
          <div className="flex items-center justify-between text-gray-700 text-sm font-semibold">
            <div className="flex items-center gap-1">
              <Star size={20} className="text-yellow-400" />
              <span>{article.rating.toFixed(1)}</span>
            </div>

            <div className="flex items-center gap-1">
              <Share2 size={20} className="text-gray-500" />
              <span>{article.shares} Shares</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
