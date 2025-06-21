import { cn } from '@/lib/imports';
import React from 'react';

interface Props {
  className?: string;
}

export const ContactModalWindow: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-[1200px] h-[1000px] bg-blue-500",className)}>
            <div>
    
            </div>
        </div>
  );
};

export default ContactModalWindow;