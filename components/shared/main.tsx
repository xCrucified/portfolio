import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "flex w-[100% ] justify-center")}>
      <div className='flex w-[1688px] outline-2 mt-[200px] mb-[1000px]'>
        <div className="flex flex-col items-center justify-center w-full h-full p-10 bg-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-lg text-gray-700 mb-6">
            Here you can find my projects, skills, and experiences.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;