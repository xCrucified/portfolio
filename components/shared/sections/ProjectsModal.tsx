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
        "flex h-[650px] modal-bg",
        className
      )}
    >
      <div className='flex justify-between flex-col h-[100%] w-[100%] p-4 bg-neutral-950 rounded-xl text-zinc-100'>
        <h1 className='text-xl text-[gray] p-1'>Projects</h1>
        <div className='bg-[#120d18] rounded-lg overflow-auto h-[90%] p-4'>
          <div className=''>
            {/* elements */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsModalWindow;
