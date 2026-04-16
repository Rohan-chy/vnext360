import { Star } from 'lucide-react';
import Image from 'next/image';

const SpecialityDoctors = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.doctors.map((doctor: Record<string, any>, index: number) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
        >
          <div className="flex gap-4">
            {/* Doctor Image */}
            <div className="w-30 h-30 relative shrink-0">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Doctor Details */}
            <div className="flex-1 space-y-1 text-sm">
              <h2 className="font-semibold text-[#0D6641] text-base">
                {doctor.name}
              </h2>

              <p className="text-gray-700">{doctor.designation}</p>
              <p className="text-gray-700">
                {doctor.qualification} • {doctor.subDepartment}
              </p>

              <p className="text-gray-600">{doctor.hospital}</p>
              <p className="text-gray-600">{doctor.address}</p>

              <p className="font-medium text-gray-800">Fee: ₹{doctor.fee}</p>

              <p className="text-green-600 font-medium">
                {doctor.availability}
              </p>

              {/* Experience & Rating */}
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <span>{doctor.experience} Years Experience</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{doctor.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="bg-[#0D6641] text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-green-700 transition">
              Book Clinic
            </button>

            <button className="border border-gray-300 text-gray-800 px-3 py-1.5 rounded-md text-sm hover:bg-gray-50 transition">
              Video Consult
            </button>

            <button className="bg-green-100 text-[#0D6641] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-green-200 transition">
              Contact Hospital
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialityDoctors;
