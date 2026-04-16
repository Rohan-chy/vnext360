import Image from 'next/image';
import { Offer } from '../../application/utils/offers';

type Props = {
  offer: Offer;
};

const OfferCard = ({ offer }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md border overflow-hidden transition transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer group">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover transition-transform duration-500 "
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {offer.discount}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
          {offer.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-3">
          {offer.description}
        </p>

        <button
          className="
                        mt-4 w-full py-2 rounded-lg 
                        bg-[#0D6641] text-white font-medium
                        transition-all duration-300 ease-in-out
                        transform
                        shadow-md
                        hover:shadow-xl
                        hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800
                        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1
                    "
        >
          View Offer
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
