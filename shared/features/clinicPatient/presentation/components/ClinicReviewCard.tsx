import { Star } from 'lucide-react';
import { ClinicReview } from '../../domain';

const ClinicReviewCard = ({ review }: { review: ClinicReview }) => {
  const hasImage = review?.imageUrl;

  return (
    <div className="p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white">
      {/* 👤 Header */}
      <div className="flex items-center gap-3">
        {hasImage ? (
          <img
            src={`http://${review.baseAddress}/${review.imageUrl}`}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover border"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold border">
            {review.name?.charAt(0).toUpperCase()}
          </div>
        )}

        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-800">{review.name}</h4>
          {/* Rating */}
          {/* const arr = Array.from({ length: 5 }); */}
          {/* console.log(arr); */}
          {/* // Output: [undefined, undefined, undefined, undefined, undefined] */}
          {/* but it has index */}
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                className={
                  index < review.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* 📝 Review */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        "{review.review}"
      </p>
    </div>
  );
};

export default ClinicReviewCard;
