const SpecializationSection = ({ doctor }: any) => {
  return (
    <>
      {doctor.specializations?.map((spec: string, i: number) => (
        <div
          key={i}
          className="border border-gray-200 p-2 rounded-lg text-sm text-gray-800 hover:shadow-sm transition"
        >
          {spec}
        </div>
      ))}
    </>
  );
};

export default SpecializationSection;
