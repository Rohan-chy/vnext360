'use client';
import { useState } from 'react';
import DataTable from '@/components/custom-components/table/data-table';
import { patientColumns } from '../patientColumns';
import { patientsData } from '../../application/utils/patientsData';
import PatientDetails from './PatientDetails';
import DatalistHeader from '@/components/custom-components/data-list-header';

const PatientList = () => {
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    null
  );

  return (
    <>
      <DatalistHeader
        title="Patients"
        description="Track and manage your patients"
      />
      <DataTable
        columns={patientColumns((id: string) => setSelectedPatientId(id))}
        data={patientsData || []}
      />

      {selectedPatientId && (
        <PatientDetails
          patientId={selectedPatientId}
          onClose={() => setSelectedPatientId(null)}
        />
      )}
    </>
  );
};

export default PatientList;
