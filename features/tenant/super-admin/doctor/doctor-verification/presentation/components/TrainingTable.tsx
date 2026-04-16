import { BookOpen, Building, Calendar, Clock } from 'lucide-react';
import { DataCardGrid } from './resuable/DataCardGrid';

interface Props {
  data: any[];
  admin?: boolean;
}

export function TrainingTable({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Training"
      data={data}
      showDocument={true}
      admin={admin}
      fields={[
        {
          label: 'Training',
          key: 'trainingTitle',
          icon: <BookOpen size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Institute',
          key: 'completedFromInstitute',
          icon: <Building size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Duration',
          render: (item) =>
            item.durationInMonths ? `${item.durationInMonths} months` : '—',
          icon: <Clock size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Year',
          key: 'yearOfCompletion',
          icon: <Calendar size={14} className="text-muted-foreground" />,
        },
      ]}
    />
  );
}
