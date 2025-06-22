import { cn } from '@/lib/imports';
import React from 'react';

interface Props {
  className?: string;
}

export const ExperienceModalWindow: React.FC<Props> = ({ className }) => {
  return (
   <div className={cn("w-[900px] h-[850px] bg-purple-500",className)}>
           <div>
   
           </div>
       </div>
  );
};

export default ExperienceModalWindow;