import { Badge } from '@/components/ui/badge';

type StatusConfig = {
  label: string;
  className: string;
};

type StatusBadgeProps = {
  status: number;
  statusMap: Record<number, StatusConfig>;
};

export function StatusBadge({ status, statusMap }: StatusBadgeProps) {
  const config = statusMap[status] || {
    label: 'Unknown',
    className: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  return <Badge className={`border ${config.className}`}>{config.label}</Badge>;
}
