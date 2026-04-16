export function generateTimeItems() {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const h = hour.toString().padStart(2, '0');
      const m = minute.toString().padStart(2, '0');
      const time = `${h}:${m}`;
      options.push({ label: time, value: time });
    }
  }
  return options;
}

export function generateTimeItemsWithAmPm() {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const h = hour.toString().padStart(2, '0');
      const m = minute.toString().padStart(2, '0');
      const value = `${h}:${m}`;

      // 12-hour format with AM/PM
      let hour12 = hour % 12 || 12;
      let period = hour < 12 ? 'AM' : 'PM';
      const label = `${hour12.toString().padStart(2, '0')}:${m} ${period}`;

      options.push({ label, value });
    }
  }
  return options;
}
