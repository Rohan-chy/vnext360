import { TabsTrigger } from '@/components/ui/tabs';
import { doctorTabs } from '../../application/lib/doctorTabs';

const TabTitles = () => {
  return (
    <>
      {doctorTabs?.map((tab) => (
        <TabsTrigger
          key={tab.value}
          value={tab.value}
          className="text-sm font-semibold text-gray-700 hover:text-[#0D6641] data-[state=active]:bg-[#0D6641] data-[state=active]:text-white px-2 py-1 whitespace-nowrap"
        >
          {tab.label}
        </TabsTrigger>
      ))}
    </>
  );
};

export default TabTitles;
