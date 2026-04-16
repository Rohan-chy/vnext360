import { Award, Building, Calendar } from 'lucide-react';
import { DataCardGrid } from './resuable/DataCardGrid';

export function CertificationTable({
  data,
  admin = false,
}: {
  data: any[];
  admin?: boolean;
}) {
  return (
    <DataCardGrid
      title="Certification"
      data={data}
      showDocument={true}
      admin={admin}
      fields={[
        {
          label: 'Certification',
          key: 'certificationDetails',
          icon: <Award size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Institute',
          key: 'completedFromInstitute',
          icon: <Building size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Year',
          key: 'completionYear',
          icon: <Calendar size={14} className="text-muted-foreground" />,
        },
      ]}
    />
  );
}
