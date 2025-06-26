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
           <h2 className="font-light">Skills</h2>
           <button
             className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer mr-[5px]"
             onClick={onClose}
             aria-label="Close modal"
           >
             <img src="/images/x.svg" alt="close" />
           </button>
         </div>
         <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg overflow-auto max-h-[600px]">
           <a className="w-[70%] self-center h-full block">
             <img
               src="/images/services.png"
               alt="Skills illustration"
               className="object-contain w-full h-80 rounded-lg pointer-events-none"
             />
           </a>
           <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
             <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
               <li>Frontend: React, Next.js, Angular, TypeScript, JavaScript, HTML, CSS</li>
               <li>Backend: ASP.NET Core, C#, REST API</li>
               <li>Databases: MSSQL, PostgreSQL</li>
               <li>Tools: Git, Docker, Postman, Visual Studio</li>
               <li>Concepts: SOLID principles, Clean Architecture, OAuth, multithreading, streams</li>
               <li>Other: Prisma ORM</li>
             </ul>
           </div>
         </div>
       </section>
  );
};

export default ExperienceModalWindow;