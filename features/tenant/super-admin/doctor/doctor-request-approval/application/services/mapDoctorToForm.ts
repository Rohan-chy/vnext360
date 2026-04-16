import { DoctorsResponse } from '../../domain/getDoctors.schema';
import { CreateDoctorFormValues } from '../../domain/createDoctor.schema';

export const mapDoctorToFormValues = (
  doctor: DoctorsResponse
): CreateDoctorFormValues => ({
  title: doctor.title,
  firstName: doctor.firstName,
  middleName: doctor.middleName ?? '',
  lastName: doctor.lastName,
  gender: String(doctor.gender), // number → string
  dateOfBirth: doctor.dateOfBirth.split('T')[0],
  dateOfBirthNp: doctor.dateOfBirthNp ?? '',
  countryCode: doctor.countryCode ?? '+977',
  contactNumber: doctor.contactNumber,
  email: doctor.email,
  userName: doctor.email, // or doctor.userName if available
  password: '',
  confirmPassword: '',
});
