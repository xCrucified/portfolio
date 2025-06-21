import { cn } from '@/lib/imports';
import React from 'react';

interface Props {
  className?: string;
}

export const SkillsModalWindow: React.FC<Props> = ({ className }) => {
  return (
   <div className={cn("w-[1200px] h-[1000px] bg-white",className)}>
           <div>
   
           </div>
       </div>
  );
};

export default SkillsModalWindow;