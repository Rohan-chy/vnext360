'use client';
import { Button } from '@/components/ui/button';
import { FormatTime } from './FormatTime';

export function TimeGroup({ title, slots }: any) {
  if (!slots.length) return null;
  const handleSlotClick = (slot: any) => {
    console.log('trigger');
    console.log(slot);
  };

  return (
    <div>
      <h4 className="font-medium mb-2">
        {title} ({slots.length} slots)
      </h4>

      <div className="flex flex-wrap gap-2">
        {slots.map((slot: any, idx: number) => {
          return (
            <Button
              key={idx}
              variant="outline"
              className="border-blue-500 text-blue-600"
              onClick={() => handleSlotClick(slot)}
            >
              {FormatTime(slot.time)}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
