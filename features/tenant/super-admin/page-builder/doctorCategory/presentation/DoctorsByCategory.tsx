'use client';
import { CategoryDoctorCard } from './component/CategoryDoctorCard';
import { useParams } from 'next/navigation';
import { useGetDoctorsByCategoryId } from './hooks/useGetDoctorsByCategoryId';
import { Doctor } from '../domain';

const DoctorsByCategory = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: doctors } = useGetDoctorsByCategoryId(id);
  if (!doctors) return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {doctors?.map((doctor: Doctor, i: number) => (
        <CategoryDoctorCard key={i} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorsByCategory;
