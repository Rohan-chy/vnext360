'use client';

import { feedbackData } from '../../application/utils/feedbackData';
import FeedbackCard from './FeedbackCard';

export default function Feedback() {
  return (
    <div className=" bg-gray-50 px-6 py-5">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[#0D6641] mb-6">
        Patient Feedback
      </h1>

      {/* Total Feedback Count */}
      <p className="text-gray-600 mb-3">{feedbackData.length} Feedback Found</p>

      {/* Feedback Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbackData.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}
