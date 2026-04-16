'use client';

import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { CustomButton } from '../extended/extended-button';
import { H4 } from './typography/H4';
import { ArrowLeft } from 'lucide-react'; // nice back arrow icon

interface DatalistHeaderProps {
  title: string;
  description?: string;
  handleAdd?: MouseEventHandler<HTMLButtonElement>;
  showBack?: boolean; // optional prop to show back button
}

const DatalistHeader = ({
  title,
  description,
  handleAdd,
  showBack = false,
}: DatalistHeaderProps) => {
  const router = useRouter();

  return (
    <header className="my-2 flex justify-between items-start">
      <div className="flex gap-2">
        {showBack && (
          <CustomButton
            size="sm"
            variant="outline"
            icon={<ArrowLeft />}
            onClick={() => router.back()}
          ></CustomButton>
        )}

        <div>
          <H4 className="text-primary">{title}</H4>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>

      {handleAdd && (
        <CustomButton size="sm" onClick={handleAdd} className="font-semibold">
          Add {title}
        </CustomButton>
      )}
    </header>
  );
};

export default DatalistHeader;
