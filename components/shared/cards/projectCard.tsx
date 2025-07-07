import { cn } from "@/lib/imports";
import React from "react";

interface Props {
  className?: string;
  projects: Project[];
  onClose: () => void;
}

interface Project {
  title: string;
  description: string;
  image: string;
}

export const ProjectCard: React.FC<Props> = ({
  className,
  projects,
  onClose,
}) => {
  return (
    <section className={cn("flex h-[650px] modal-bg", className)}>
      <div className="flex justify-between flex-col h-full w-full p-4 bg-neutral-950 rounded-xl text-zinc-100">
        <div className="flex w-full justify-between items-center mb-2">
          <h1 className="text-lg text-[gray] p-1">Projects</h1>
          <button
            className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer mr-[5px]"
            onClick={onClose}
            aria-label="Close modal"
          >
            <img src="/images/x.svg" alt="close" />
          </button>
        </div>
        <div className="flex flex-col bg-[#120d18] rounded-lg h-[90%] p-4 gap-10 overflow-y-auto">
          {projects?.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 bg-emerald-950 rounded-lg p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/3 rounded-lg object-cover max-h-60"
              />
              <div className="flex flex-col justify-between w-full">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm text-zinc-300 mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
