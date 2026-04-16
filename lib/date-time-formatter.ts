import { format, parse } from 'date-fns';

export const formatTimeHourMinute = (time: string) => {
  if (!time) return '';

  try {
    // parse HH:mm:ss → Date
    const parsed = parse(time, 'HH:mm:ss', new Date());
    return format(parsed, 'hh:mm a'); // 03:00 PM
  } catch {
    return time;
  }
};

export const formatDateYearMonthDay = (date: string) => {
  if (!date) return '';

  try {
    return format(new Date(date), 'dd MMM yyyy'); //  03 Apr 2026
  } catch {
    return date;
  }
};
