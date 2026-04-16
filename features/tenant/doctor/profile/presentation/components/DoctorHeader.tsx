import Image from 'next/image';
import { genderText } from '@/lib/genderItems';

export default function DoctorHeader({ doctorProfileData }: any) {
  if (!doctorProfileData) return null;

  const {
    title,
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
    dateOfBirthNp,
    countryCode,
    contactNumber,
    imageBaseAddress,
    imagePath,
    email,
    bio,
  } = doctorProfileData;

  const imageUrl =
    imageBaseAddress && imagePath
      ? `http://${imageBaseAddress}${imagePath}`
      : null;

  return (
    <div className="bg-white shadow rounded-xl p-6 flex flex-col md:flex-row gap-6 border border-gray-200">
      {/* Profile Image */}
      <div className="w-40 h-40 relative flex-shrink-0">
        <Image
          src={imageUrl || '/default-avatar.png'}
          alt={firstName || 'Doctor'}
          fill
          className="rounded-xl object-cover"
          unoptimized
        />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-3">
        {/* Name & Title */}
        <h1 className="text-2xl font-bold text-[#0D6641]">
          {title} {firstName} {middleName} {lastName}
        </h1>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-gray-600 text-sm">
          {email && (
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>
          )}
          {contactNumber && (
            <p>
              <span className="font-semibold">Phone:</span> {countryCode}{' '}
              {contactNumber}
            </p>
          )}
          {gender !== null && gender !== undefined && (
            <p>
              <span className="font-semibold">Gender:</span>{' '}
              {genderText(gender)}
            </p>
          )}
          {dateOfBirth && (
            <p>
              <span className="font-semibold">DOB:</span>{' '}
              {dateOfBirth?.split('T')[0]} ({dateOfBirthNp})
            </p>
          )}
        </div>

        {/* Bio */}
        {bio && <p className="text-gray-600 text-sm mt-2">{bio}</p>}
      </div>
    </div>
  );
}
