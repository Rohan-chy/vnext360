const OverviewSection = ({ hospital }: any) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="space-y-1 text-sm text-gray-800">
        <p>
          <span className="font-medium">Timing:</span> {hospital.timing}
        </p>
        <p>
          <span className="font-medium">Departments:</span>{' '}
          {hospital.departments.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default OverviewSection;
