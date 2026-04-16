'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { SpinnerCustom } from '@/components/custom-components/SpinnerCustom';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import clsx from 'clsx';
import Tablist from '@/components/custom-components/Tablist';
import DatalistHeader from '@/components/custom-components/data-list-header';
import { useGetMyHospitalSchedules } from '../../application/useGetMyHospitalSchedules';

const MyHospitalSchedules = () => {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();

  const hospitalId = params.id; // from the path
  const hospitalName = searchParams.get('name'); // from query

  const { data, isLoading } = useGetMyHospitalSchedules(hospitalId);

  if (isLoading) return <SpinnerCustom />;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formatDateKey = (dateStr: string | Date) => {
    const d = new Date(dateStr);
    return d.toISOString().split('T')[0];
  };

  const formatTime = (time: string) => time.slice(0, 5);

  // Categorize schedules
  const pastSchedules: any[] = [];
  const todaySchedules: any[] = [];
  const upcomingSchedules: any[] = [];

  (data?.data || []).forEach((schedule) => {
    const scheduleDate = new Date(schedule.date);
    scheduleDate.setHours(0, 0, 0, 0);

    if (scheduleDate.getTime() < today.getTime()) {
      pastSchedules.push(schedule);
    } else if (scheduleDate.getTime() === today.getTime()) {
      todaySchedules.push(schedule);
    } else {
      upcomingSchedules.push(schedule);
    }
  });

  const categories = [
    { key: 'past', title: 'Past', schedules: pastSchedules },
    { key: 'today', title: 'Today', schedules: todaySchedules },
    { key: 'upcoming', title: 'Upcoming', schedules: upcomingSchedules },
  ];

  // Determine default tab
  const defaultCategory = todaySchedules.length ? 'today' : 'upcoming';

  return (
    <div className="space-y-6">
      <DatalistHeader
        title={`${hospitalName} Schedules`}
        description={`Track and manage ${hospitalName} Schedules`}
        showBack={true}
      />

      <Tabs defaultValue={defaultCategory} className="space-y-4">
        {/* Category Tabs */}
        <Tablist
          tabData={categories.map((cat) => ({
            value: cat.key,
            title: `${cat.title} (${cat.schedules.length})`,
          }))}
        />

        {categories.map((category) => {
          const schedules = category.schedules.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );

          // Prepare date tabs inside category
          const dateTabData = schedules.map((schedule) => {
            const key = formatDateKey(schedule.date);
            return {
              value: key,
              title: new Date(schedule.date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              }),
              isToday: formatDateKey(schedule.date) === formatDateKey(today),
            };
          });

          const defaultDateTab =
            dateTabData.find((t) => t.isToday)?.value || dateTabData[0]?.value;

          return (
            <TabsContent key={category.key} value={category.key}>
              {schedules.length === 0 ? (
                <div className="text-muted-foreground text-center py-10">
                  No slots available.
                </div>
              ) : (
                <Tabs defaultValue={defaultDateTab} className="space-y-2">
                  {/* Date Tabs inside category */}
                  <Tablist tabData={dateTabData} />

                  {schedules.map((schedule) => {
                    const key = formatDateKey(schedule.date);
                    const isToday = key === formatDateKey(today);

                    return (
                      <TabsContent key={key} value={key}>
                        {schedule.times.length === 0 ? (
                          <div className="text-muted-foreground text-center py-10">
                            No slots available.
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-h-[60vh] overflow-y-auto p-2">
                            {schedule.times.map((slot: any, idx: number) => (
                              <div
                                key={idx}
                                className={clsx(
                                  'p-3 rounded-md shadow-sm flex flex-col gap-1 text-sm text-primary ',
                                  slot.isApproved ? 'bg-muted' : 'bg-gray-100'
                                )}
                              >
                                <div className="flex items-center gap-1 font-semibold">
                                  <Clock size={14} />
                                  <span>
                                    {formatTime(slot.from)} -{' '}
                                    {formatTime(slot.to)}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 text-xs font-medium">
                                  <span>₹{slot.fee}</span>
                                  {slot.isApproved ? (
                                    <CheckCircle
                                      size={14}
                                      className={
                                        isToday
                                          ? 'text-white'
                                          : 'text-green-600'
                                      }
                                    />
                                  ) : (
                                    <XCircle
                                      size={14}
                                      className="text-red-500"
                                    />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </TabsContent>
                    );
                  })}
                </Tabs>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default MyHospitalSchedules;
