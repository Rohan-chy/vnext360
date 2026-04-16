import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
  UserIcon,
  HospitalIcon,
  CalendarIcon,
  FileTextIcon,
  StethoscopeIcon,
} from 'lucide-react';
import { VisitHistory } from '../../domain/visit-history.schema';

interface Props {
  visits: VisitHistory[];
}

export const VisitHistoryCard: React.FC<Props> = ({ visits }) => {
  const getStatusBadge = (status: VisitHistory['status']) => {
    if (status === 'Completed')
      return <Badge className="bg-green-600">Completed</Badge>;
    if (status === 'Upcoming')
      return <Badge className="bg-blue-600">Upcoming</Badge>;
    return <Badge variant="destructive">Canceled</Badge>;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {visits.map((visit) => (
        <Card key={visit.id} className="shadow-md hover:shadow-lg transition">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <StethoscopeIcon className="w-5 h-5" />
                {visit.department}
              </CardTitle>

              {getStatusBadge(visit.status)}
            </div>

            <CardDescription>{visit.hospital}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {/* Doctor */}
            <div className="flex items-center gap-2 text-sm">
              <UserIcon className="w-4 h-4" />
              {visit.doctorName}
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm">
              <CalendarIcon className="w-4 h-4" />
              {visit.visitDate}
            </div>

            {/* Diagnosis */}
            {visit.diagnosis && (
              <div className="flex items-start gap-2 text-sm">
                <FileTextIcon className="w-4 h-4 mt-1" />
                Diagnosis: {visit.diagnosis}
              </div>
            )}

            {/* Prescription */}
            {visit.prescription && (
              <div className="flex items-start gap-2 text-sm">
                <HospitalIcon className="w-4 h-4 mt-1" />
                Prescription: {visit.prescription}
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button variant="outline">View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
