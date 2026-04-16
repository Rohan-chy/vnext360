'use client';

import { Star } from 'lucide-react';

interface Feedback {
  id: string;
  ratedBy: string;
  avatar: string;
  rateValue: number;
  comment: string;
  rateDate: string;
}

const dummyFeedback: Feedback[] = [
  {
    id: '1',
    ratedBy: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rateValue: 5,
    comment: 'Excellent service. The doctor was very professional.',
    rateDate: '2026-03-05',
  },
  {
    id: '2',
    ratedBy: 'Emily Davis',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rateValue: 4,
    comment: 'Very helpful consultation. Highly recommended.',
    rateDate: '2026-03-04',
  },
  {
    id: '3',
    ratedBy: 'Michael Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    rateValue: 3,
    comment: 'Good experience but waiting time was a bit long.',
    rateDate: '2026-03-02',
  },
];

function RatingStars({ value }: { value: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= value ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }
        />
      ))}
    </div>
  );
}

export default function RatingFeedback() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Ratings & Feedback</h2>

      <div className="grid grid-cols-3 gap-4">
        {dummyFeedback.map((feedback) => (
          <div
            key={feedback.id}
            className="border rounded-xl p-4 bg-white shadow-sm"
          >
            <div className="flex items-start gap-3">
              <img
                src={feedback.avatar}
                alt={feedback.ratedBy}
                className="h-10 w-10 rounded-full object-cover"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{feedback.ratedBy}</h4>
                  <span className="text-sm text-gray-500">
                    {feedback.rateDate}
                  </span>
                </div>

                <div className="mt-1">
                  <RatingStars value={feedback.rateValue} />
                </div>

                <p className="text-gray-600 mt-2 text-sm">{feedback.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
