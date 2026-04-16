'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { patientSchema } from '../schema/patientSchema';
import { z } from 'zod';
import { createPatientAction } from '@/app/(tenant)/patient/create/actions';
import { useTransition } from 'react';

type FormData = z.infer<typeof patientSchema>;

export default function PatientCreateForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(patientSchema),
  });

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      await createPatientAction(data);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('title')} placeholder="Title" />
      <input {...register('firstName')} placeholder="First Name" />
      <input {...register('middleName')} placeholder="Middle Name" />
      <input {...register('lastName')} placeholder="Last Name" />
      <input type="number" {...register('gender', { valueAsNumber: true })} />
      <input type="date" {...register('dateOfBirth')} />
      <input {...register('dateOfBirthNp')} placeholder="DOB (NP)" />
      <input {...register('email')} placeholder="Email" />

      <button type="submit" disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Patient'}
      </button>
    </form>
  );
}
