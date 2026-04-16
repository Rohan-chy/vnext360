import {
  AllocationSchedule,
  ClinicAllocation,
  DoctorDetailResponse,
  StartEndTime,
} from '../../infrastructure/dto/doctorDetails.dto';

import { MapPin, Phone, CalendarDays } from 'lucide-react';

export default function InfoSection({
  doctorDetails,
}: {
  doctorDetails: DoctorDetailResponse;
}) {
  const formatTime = (time: string) => {
    if (!time) return '';
    return new Date(`1970-01-01T${time}`).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {doctorDetails.clinicAllocations?.map(
        (clinic: ClinicAllocation, index: number) => {
          const schedules = clinic.allocationSchedules ?? [];
          const avatarUrl =
            clinic?.baseAddress && clinic?.imageUrl
              ? `http://${clinic.baseAddress}${clinic.imageUrl}`
              : '';
          console.log(clinic?.clinicName);
          // clinicName: 'Paaila Technology',
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-6/3 w-full overflow-hidden">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="clinic image"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-3xl text-white font-bold">
                    {clinic.clinicName?.[0] || 'C'}
                  </div>
                )}
              </div>

              {/* DIVIDER */}
              <div className="border-t" />

              {/* CONTENT */}
              <div className="p-4 space-y-4">
                {/* Info */}
                <div className="flex flex-col justify-center gap-1">
                  <h3 className="text-lg font-semibold text-primary">
                    {clinic.clinicName || 'Clinic Name Not Available'}
                  </h3>

                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin size={14} className="mt-0.5" />
                    <span>
                      {clinic.location || 'Maitighar Road, Biratnagar, Morang'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={14} />
                    <span>{clinic.contactNumber || '98xxxxxxxx'}</span>
                  </div>
                </div>
                {/* SCHEDULE */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    <CalendarDays size={16} />
                    <span>Available Slots</span>
                  </div>

                  {schedules.length > 0 ? (
                    schedules.map(
                      (schedule: AllocationSchedule, sIndex: number) => {
                        const slots = schedule.startEndTimes ?? [];

                        return (
                          <div
                            key={sIndex}
                            className="bg-[#f9fbfa] rounded-xl p-3 space-y-2"
                          >
                            {/* DAY */}
                            <p className="text-sm font-semibold text-primary">
                              {schedule.dayOfWeek}
                            </p>

                            {/* SLOTS */}
                            <div className="flex flex-wrap gap-2">
                              {slots.length > 0 ? (
                                slots.map((slot: StartEndTime, idx: number) => (
                                  <button
                                    key={idx}
                                    className="px-3 py-2 rounded-lg text-xs border border-primary/30 bg-white text-primary hover:bg-primary hover:text-white transition shadow-sm hover:shadow-md"
                                  >
                                    <div className="font-medium">
                                      {formatTime(slot.startTime)} -{' '}
                                      {formatTime(slot.endTime)}
                                    </div>
                                    <div className="text-[11px] opacity-70">
                                      NPR {slot.quotedFee}
                                    </div>
                                  </button>
                                ))
                              ) : (
                                <span className="text-xs text-gray-400">
                                  No slots available
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      }
                    )
                  ) : (
                    <p className="text-sm text-gray-400">
                      Mon - Fri (10:00 AM - 4:00 PM)
                    </p>
                  )}
                </div>

                {/* ACTION */}
                <button className="w-full bg-primary text-white py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition shadow-sm hover:shadow-md">
                  Book Appointment
                </button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
