const ClinicStories = ({ hospital }: any) => {
  return (
    <div className="space-y-3">
      {hospital.stories?.map((story: Record<string, any>, i: number) => (
        <div
          key={i}
          className="border border-gray-200 p-3 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <p className="font-semibold text-[#0D6641]">{story.patient}</p>
          <p className="text-sm text-gray-700">{story.feedback}</p>
          <p className="text-sm text-gray-800 font-medium">
            Rating: ⭐ {story.rating}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClinicStories;
