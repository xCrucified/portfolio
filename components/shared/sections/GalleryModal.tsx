import { cn } from '@/lib/imports';
import React from 'react';

interface Props {
  className?: string;
}

export const GalleryModalWindow: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-[1200px] h-[1000px] bg-pink-500",className)}>
            <div>
    
            </div>
        </div>
  );
};

export default GalleryModalWindow;