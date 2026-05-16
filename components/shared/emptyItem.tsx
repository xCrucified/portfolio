import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const EmptyItemError: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "modal-bg h-150")}>
        
    </div>
  );
};

export default EmptyItemError;