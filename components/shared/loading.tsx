import React from 'react';

interface Props {
  className?: string;
}

export const Loading: React.FC<Props> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center justify-center h-screen bg-[#130919] select-none ${className}`}>
      <div className="relative flex items-center justify-center">
        <div className="absolute animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#1FAC71] opacity-40 blur-xs"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#7d1fac]"></div>
      </div>
      
      <span className="mt-6 text-lg font-light text-[#b3a1bd] tracking-wider animate-pulse">
        Loading...
      </span>
    </div>
  );
};

export default Loading;