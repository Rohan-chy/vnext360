import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { hospitalTabTitles } from '../../application/utils/hospitalTabTitles';

const HospitalTabTitles = () => {
  return (
    <TabsList className="flex flex-wrap gap-1 border-b border-gray-200">
      {hospitalTabTitles?.map((tab) => (
        <TabsTrigger
          key={tab.value}
          value={tab.value}
          className="text-sm font-semibold text-gray-700 hover:text-[#0D6641] 
                    data-[state=active]:bg-[#0D6641] data-[state=active]:text-white 
                    px-2 py-1 whitespace-nowrap"
        >
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default HospitalTabTitles;
