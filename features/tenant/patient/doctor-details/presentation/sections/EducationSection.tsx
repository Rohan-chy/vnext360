const EducationSection = ({ doctor }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {doctor.education?.map((edu: string, i: number) => (
        <div
          key={i}
          className="border border-gray-200 p-2 rounded-lg text-sm text-gray-800 hover:shadow-sm transition"
        >
          {edu}
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
