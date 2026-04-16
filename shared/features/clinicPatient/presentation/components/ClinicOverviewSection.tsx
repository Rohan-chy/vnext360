import { P } from '@/components/custom-components/typography/P';
import { Clinic } from '../../domain';
import {
  getDayName,
  groupTimingsByDay,
} from '../helpers/clinicTimingFormatter';
import { H6 } from '@/components/custom-components/typography/H6';
import { Small } from '@/components/custom-components/typography/Small';

const DAYS_ORDER = [0, 1, 2, 3, 4, 5, 6];

const ClinicOverviewSection = ({ clinic }: { clinic: Clinic }) => {
  const groupedTimings = groupTimingsByDay(clinic.timings);

  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition bg-white">
      <div className="space-y-5">
        {/*Timings Section */}
        <div>
          <H6 className="tracking-wide text-gray-500">Clinic Timings</H6>
          <div className="mt-3 space-y-2">
            {DAYS_ORDER.map((day) => {
              const ranges = groupedTimings.get(day);
              if (!ranges) return null;

              return (
                <div key={day} className="flex items-start gap-3">
                  {/* Day */}
                  <P className="w-24">{getDayName(day)}</P>

                  {/* Time Slots */}
                  <div className="flex flex-wrap gap-2">
                    {ranges.map((range, index) => (
                      <Small
                        key={index}
                        className="px-3 py-1 bg-green-50 rounded-full border border-green-400"
                      >
                        {range}
                      </Small>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Departments Section */}
        <div>
          <H6 className="tracking-wide text-gray-500">Departments</H6>

          <div className="mt-3 flex flex-wrap gap-2">
            {/* {(clinic.departments ?? [
              'Cardiology',
              'Orthopedics',
              'Neurology',
              'Pediatrics',
            ]).map((dept, index) => ( */}
            {/* <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border"
            > */}
            {/* Cardiology, Orthopedics, Neurology, Pediatrics,
              {dept}
            </span> */}
            <Small className="px-3 py-1 bg-green-50 rounded-full border border-green-400">
              Cardiology, Orthopedics, Neurology, Pediatrics,
            </Small>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicOverviewSection;
