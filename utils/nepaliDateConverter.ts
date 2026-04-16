import NepaliDate from 'nepali-date-converter';

// Convert Gregorian (AD) YYYY-MM-DD to Nepali BS YYYY-MM-DD
export function convertAdToBs(adDateString: string): string {
  const [year, month, day] = adDateString.split('-').map(Number);
  if (!year || !month || !day) return '';

  const nepDate = new NepaliDate(year, month - 1, day); // month 0-based
  const bsYear = nepDate.getYear();
  const bsMonth = nepDate.getMonth() + 1; // 1-based month
  const bsDay = nepDate.getDate();

  // Format YYYY-MM-DD (zero padded)
  return `${bsYear}-${String(bsMonth).padStart(2, '0')}-${String(bsDay).padStart(2, '0')}`;
}

// Convert Nepali BS YYYY-MM-DD to Gregorian (AD) YYYY-MM-DD
export function convertBsToAd(bsDateString: string): string {
  const [year, month, day] = bsDateString.split('-').map(Number);
  if (!year || !month || !day) return '';

  const nepDate = new NepaliDate(year, month - 1, day);
  const adDate = nepDate.toJsDate();

  const adYear = adDate.getFullYear();
  const adMonth = adDate.getMonth() + 1;
  const adDay = adDate.getDate();

  return `${adYear}-${String(adMonth).padStart(2, '0')}-${String(adDay).padStart(2, '0')}`;
}
