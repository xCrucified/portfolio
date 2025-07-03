import React from 'react';

interface Props {
  className?: string;
}

export const Loading: React.FC<Props> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center h-screen ${className}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      <span className="ml-4 text-lg text-gray-700">Loading...</span>
    </div>
  );
};

export default Loading;