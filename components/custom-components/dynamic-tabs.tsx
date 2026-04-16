import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface TabItem {
  label: string;
  value: string;
  icon?: any;
  component?: React.ReactNode;
  triggerClassName?: string;
}

interface DynamicTabsProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (value: string) => void;
  activeColor?: string;
  triggerClassName?: string;
  count?: number;
}

export default function DynamicTabs({
  tabs,
  activeTab,
  setActiveTab,
  activeColor = '#009966',
  triggerClassName,
  count,
}: DynamicTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="bg-transparent rounded-xl p-1 gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                'transition-all data-[state=active]:text-white',
                triggerClassName,
                tab.triggerClassName
              )}
              style={{
                ...(activeTab === tab.value && {
                  backgroundColor: activeColor,
                  boxShadow: `0 4px 14px ${activeColor}80`,
                }),
              }}
            >
              {Icon && <Icon size={16} />}
              {tab.label}
              {count && <span>{count}</span>}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="pt-6">
          {tab.component}
        </TabsContent>
      ))}
    </Tabs>
  );
}
