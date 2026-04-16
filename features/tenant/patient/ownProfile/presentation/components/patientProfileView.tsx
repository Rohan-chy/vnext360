import { Patient } from '../../domain/entities/Patient';

interface Props {
  patient: Patient;
}

export default function PatientProfileView({ patient }: Props) {
  return (
    <div className="space-y-2">
      <p>
        <strong>Name:</strong> {patient.title} {patient.firstName}{' '}
        {patient.lastName}
      </p>
      <p>
        <strong>Email:</strong> {patient.email}
      </p>
      <p>
        <strong>Gender:</strong> {patient.gender}
      </p>
      <p>
        <strong>DOB:</strong> {patient.dateOfBirth}
      </p>
    </div>
  );
}
