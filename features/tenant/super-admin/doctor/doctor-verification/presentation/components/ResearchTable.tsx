import { Book, Calendar, CheckCircle, MessageSquare } from 'lucide-react';
import { DataCardGrid } from './resuable/DataCardGrid';

interface Props {
  data: any[];
  admin?: boolean;
}

export function ResearchTable({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Research"
      data={data}
      showDocument={true}
      admin={admin}
      fields={[
        {
          label: 'Research Title',
          key: 'researchTitle',
          icon: <Book size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Year',
          key: 'yearOfCompletion',
          icon: <Calendar size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Outcome',
          key: 'researchOutcome',
          icon: <CheckCircle size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Remarks',
          key: 'remarks',
          icon: <MessageSquare size={14} className="text-muted-foreground" />,
        },
      ]}
    />
  );
}
