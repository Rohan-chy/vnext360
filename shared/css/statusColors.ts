export const statusColors: Record<string, string> = {
  Confirmed: 'bg-blue-100 text-blue-700 border border-blue-200',
  'In Progress': 'bg-yellow-100 text-yellow-800 border border-yellow-300',
  Completed: 'bg-green-100 text-green-700 border border-green-200',
  Cancelled: 'bg-red-100 text-red-700 border border-red-200',
};

export const statusColorHexCode: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  Confirmed: {
    bg: '#DBEAFE', // light blue
    border: '#2563EB', // blue
    text: '#1E3A8A',
  },
  'In Progress': {
    bg: '#FEF9C3', // light yellow
    border: '#CA8A04',
    text: '#854D0E',
  },
  Completed: {
    bg: '#DCFCE7', // light green
    border: '#16A34A',
    text: '#065F46',
  },
  Cancelled: {
    bg: '#FEE2E2', // light red
    border: '#DC2626',
    text: '#7F1D1D',
  },
};
