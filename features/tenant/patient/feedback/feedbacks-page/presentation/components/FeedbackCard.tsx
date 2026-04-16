'use client';

import { Star } from 'lucide-react';

type Feedback = {
  id: number;
  name: string;
  age: number;
  rating: number;
  description: string;
};

export default function FeedbackCard({ feedback }: { feedback: Feedback }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Name & Age */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-[#0D6641]">
          {feedback.name}
        </h3>
        <p className="text-sm text-gray-500">Age: {feedback.age}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < feedback.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">{feedback.description}</p>
    </div>
  );
}
