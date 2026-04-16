import { Button } from '@/components/ui/button';
import { CalendarIcon, List } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface ToogleTableCalendarButtonProps {
  viewMode: string;
  setViewMode: Dispatch<SetStateAction<'table' | 'calendar'>>;
}

const ToogleTableCalendarButton: React.FC<ToogleTableCalendarButtonProps> = ({
  viewMode,
  setViewMode,
}) => {
  return (
    <Button
      variant="outline"
      onClick={() => setViewMode(viewMode === 'table' ? 'calendar' : 'table')}
      className="flex items-center gap-2"
    >
      {viewMode === 'table' ? (
        <>
          <CalendarIcon className="w-4 h-4" />
          Calendar View
        </>
      ) : (
        <>
          <List className="w-4 h-4" />
          Table View
        </>
      )}
    </Button>
  );
};

export default ToogleTableCalendarButton;
