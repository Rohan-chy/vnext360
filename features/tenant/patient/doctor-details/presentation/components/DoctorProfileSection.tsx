'use client';

import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { DoctorDetailResponse } from '../../infrastructure/dto/doctorDetails.dto';

export function DoctorProfileSection({
  doctorDetails,
}: {
  doctorDetails: DoctorDetailResponse;
}) {
  const avatarUrl =
    doctorDetails?.imageBaseAddress && doctorDetails?.imagePath
      ? `http://${doctorDetails.imageBaseAddress}${doctorDetails.imagePath}`
      : '';

  return (
    <div className="bg-white col-span-2 shadow rounded-xl p-6 flex gap-6 border border-gray-200">
      {/* Image */}
      <div className="w-64 h-64 rounded overflow-hidden">
        <img
          src={avatarUrl}
          alt="doctor profile image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="space-y-2 flex-1">
        <h1 className="text-2xl font-bold text-[#0D6641]">
          {`${doctorDetails.title} ${doctorDetails.firstName} ${doctorDetails.middleName} ${doctorDetails.lastName}`}
        </h1>

        <p className="text-gray-700 text-sm">
          {doctorDetails?.categoryName} • {doctorDetails?.subCategoryName}
        </p>

        {/* <p className="text-gray-700 text-sm">12 Years of Experience</p> */}

        {doctorDetails.isVerified && (
          <Badge className="bg-[#E6F4EE] text-[#0D6641] font-semibold">
            VNext360 Verified
          </Badge>
        )}

        {/* <div className="flex items-center gap-2 text-sm">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-gray-800">4.7</span>
        </div> */}

        <p className="text-gray-600 text-sm">{doctorDetails?.briefBio}</p>

        <button className="text-[#0D6641] underline font-semibold text-sm hover:bg-[#E0E7FF] rounded px-2 py-1">
          Share your story
        </button>
      </div>
    </div>
  );
}
