import { ClinicTiming } from '../../domain';

// Map day numbers to names
export const DayOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Convert 24-hour time string to 12-hour format
export const formatTime = (time: string): string | null => {
  if (time === '00:00:00') return null; // Treat as closed
  const [hourStr, minStr] = time.split(':');
  const hour = Number(hourStr);
  const min = Number(minStr);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${min.toString().padStart(2, '0')} ${ampm}`;
};

// Group timings by day
export const groupTimingsByDay = (timings: ClinicTiming[]) => {
  const map = new Map<number, string[]>();

  timings.forEach((t) => {
    // Ignore "closed" slots
    if (t.startTime === '00:00:00' && t.endTime === '00:00:00') return;

    const start = formatTime(t.startTime)!;
    const end = formatTime(t.endTime)!;
    const timeRange = `${start} - ${end}`;

    if (!map.has(t.daysOfWeek)) map.set(t.daysOfWeek, []);
    const arr = map.get(t.daysOfWeek)!;

    // Avoid duplicates
    if (!arr.includes(timeRange)) arr.push(timeRange);
  });

  return map;
};

// Get day name
export const getDayName = (day: number) => DayOfWeek[day];
