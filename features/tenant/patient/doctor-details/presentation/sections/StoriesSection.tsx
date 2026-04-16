import { Star } from 'lucide-react';

const StoriesSection = ({ doctor }: any) => {
  return (
    <>
      {doctor?.stories?.map((story: any, i: number) => (
        <div
          key={i}
          className="border border-gray-200 p-3 rounded-lg text-sm text-gray-800 shadow-sm hover:shadow-md transition flex flex-col gap-1"
        >
          <p className="font-semibold text-[#0D6641]">{story.patient}</p>
          <p className="text-gray-700">{story.feedback}</p>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium text-sm">{story.rating}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default StoriesSection;
