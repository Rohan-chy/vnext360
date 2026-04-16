import { Star } from 'lucide-react';
import Image from 'next/image';

const HospitalHeader = ({ hospital }: any) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <div className="w-32 h-32 relative flex-shrink-0">
        <Image
          src={hospital.logo}
          alt={hospital.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 space-y-1">
        <h1 className="text-2xl font-bold text-[#0D6641]">{hospital.name}</h1>
        <p className="text-sm text-gray-700">{hospital.address}</p>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm">{hospital.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default HospitalHeader;
