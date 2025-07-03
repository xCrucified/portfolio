import { cn } from '@/lib/imports';
import React from 'react';

interface Props {
  className?: string;
  onClose: () => void;
}

export const ExperienceModalWindow: React.FC<Props> = ({ className, onClose }) => {
  return (
    <section
      className={cn(
        "flex flex-col info-panel text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl bg-neutral-950",
        className
      )}
    >
      <div className="w-full h-8 flex items-center ml-1 justify-between">
        <h2 className="font-light">Experience</h2>
        <button
          className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src="/images/x.svg" alt="close" />
        </button>
      </div>
      <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg overflow-auto max-h-[600px]">
        <div className="w-[70%] self-center h-[80%] block">
          <img
            src="/images/experience.png"
            alt="Experience illustration"
            className="object-contain w-[100%] rounded-lg pointer-events-none"
          />
        </div>
        <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li>Delivered over 40 projects covering full-stack development</li>
            <li>Developed backend APIs and frontend applications for e-commerce and media services</li>
            <li>Practical experience with network and system programming in C#</li>
            <li>Implemented multithreaded and asynchronous applications</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceModalWindow;
