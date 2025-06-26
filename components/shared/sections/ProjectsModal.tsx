import { cn } from '@/lib/imports';
import Link from 'next/link';
import React from 'react';

interface Project {
  title: string;
  description: string;
}

interface Props {
  className?: string;
  onClose?: () => void;
}

const projects: Project[] = [
  { title: "Amazon-Front-End", description: "Non-commercial frontend application (TypeScript, Next.js)" },
  { title: "Amazon-Back-End", description: "REST API for the store (C#, ASP.NET)" },
  { title: "NextShop", description: "Non-commercial project, educational app for practice (TypeScript)" },
  { title: "Pizza-app", description: "Pizza ordering application (React, TypeScript)" },
  { title: "TikTok_Server", description: "Backend for a TikTok clone (C#)" },
  { title: "Back-end-Steam", description: "Steam API imitation (C#)" },
  { title: "Angular-Steam", description: "Steam-like UI built with Angular" },
  { title: "React-ToDo-List", description: "Task management app (React)" },
  { title: "Market_Project", description: "Shopping service (C#)" },
  { title: "Networking projects", description: "Various networking and multithreading projects (Downloader, FileReader, SMTP, UDP, TCP in C#)" },
];

export const ProjectsModalWindow: React.FC<Props> = ({ className, onClose }) => {
  return (
    <section
      className={cn(
        "flex flex-col info-panel text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl bg-neutral-950",
        className
      )}
    >
      <div className="w-full h-8 flex items-center ml-1 justify-between">
        <h2 className="font-light">Projects</h2>
        <button
          className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer mr-[5px]"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src="/images/x.svg" alt="close" />
        </button>
      </div>
      <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg overflow-auto max-h-[600px]">
        <img
          src="/images/github.webp"
          alt="Achievements illustration"
          className="object-contain w-full h-80 rounded-lg pointer-events-none"
          />
        <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
          <ul className="list-disc list-inside max-h-60 overflow-auto">
            {projects.map(({ title, description }) => (
              <li key={title}>
                <strong>{title}:</strong> {description}
              </li>
            ))}
          </ul>
          {/* <p className="opacity-70 mt-4">
            Languages: C++, C#, Java, JavaScript, TypeScript. Frameworks: React, Angular, Next.js. Backend: .NET, ASP.NET Web API/MVC. Databases: MySQL, SQLite, Prisma.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsModalWindow;
