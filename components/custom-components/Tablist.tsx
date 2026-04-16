import { TabsList, TabsTrigger } from '../ui/tabs';

const Tablist = ({ tabData }: any) => {
  return (
    <TabsList className="rounded-t-md flex gap-1 bg-transparent">
      {tabData?.map((tab: Record<string, any>) => {
        const Icon = tab.icon;

        return (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            type="button"
            className={`
            text-gray-600
            border border-transparent
        
            data-[state=active]:bg-primary
            data-[state=active]:text-white
            data-[state=active]:border-transparent
        
            data-[state=inactive]:border-gray-300
        
            font-medium px-4 py-2 
            flex items-center gap-1
            rounded-xl
          `}
          >
            {Icon && <Icon size={16} />}
            {tab.title}
            {tab.count && <h3>{tab.count}</h3>}
          </TabsTrigger>
        );
      })}
    </TabsList>
  );
};

export default Tablist;
