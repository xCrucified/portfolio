import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "flex w-[100%] h-[100%] justify-center")}>
      <div className='flex w-[1688px] h-[1142px] bg-green-600'>
        
      </div>
    </div>
  );
};

export default Main;