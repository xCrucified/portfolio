import { Label } from "@/components/ui/label";
import { cn } from "@/lib/imports";
import React from "react";

interface Props {
  className?: string;
  projects: Project[];
  onClose: () => void;
}

interface Project {
  key: number;
  image?: string;
  title: string;
  description: string;
}

export const ProjectCard: React.FC<Props> = ({
  className,
  projects,
  onClose,
}) => {
  return (
    <section className={cn("flex flex-col min-w-155 max-md:min-w-0 max-md:min-h-[55vh] min-h-140 modal-bg text-zinc-100 p-3 sm:p-4 overflow-hidden", className)}>
      <div className="flex w-full justify-between items-center mb-3 shrink-0 px-1">
        <Label className="text-sm font-semibold tracking-widest uppercase text-zinc-400 sm:text-base">
          Projects
        </Label>
        <button
          className="w-7 h-7 sm:w-8 sm:h-8 border border-white/20 flex justify-center rounded-md items-center cursor-pointer transition-colors hover:bg-white/5"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img draggable={false} src="/images/x.svg" alt="close" className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col bg-[#110c17]/60 w-full h-full rounded-xl p-3 sm:p-5 gap-6 sm:gap-8 overflow-y-auto custom-scrollbar min-h-0 flex-1">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={project.key}
              className="w-full flex flex-col gap-4 sm:gap-5"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-stretch w-full">
                
                <div className="w-full md:w-48 h-36 md:h-28 lg:h-32 rounded-lg overflow-hidden bg-zinc-900 shrink-0 relative aspect-video md:aspect-auto">
                  {project.image ? (
                    <img
                      draggable={false}
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-zinc-600">
                      No Image
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 min-w-0 justify-center items-center text-center md:items-start md:text-left gap-1 py-1">
                  <Label className="text-lg sm:text-xl font-medium tracking-tight text-zinc-100 truncate w-full">
                    {project.title}
                  </Label>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed line-clamp-3 md:line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-center shrink-0 w-full md:w-auto">
                  <button
                    onClick={() =>
                      window.open(
                        `https://github.com/xCrucified/${project.title}`,
                        "_blank"
                      )
                    }
                    className="flex justify-center items-center w-full md:w-12 h-10 md:h-12 rounded-lg section cursor-pointer transition-all hover:scale-105 active:scale-95"
                    aria-label="View on GitHub"
                  >
                    <img
                      draggable={false}
                      src="/arrow-right.svg"
                      alt="GitHub"
                      className="w-5 h-5 object-contain"
                    />
                  </button>
                </div>

              </div>

              {index !== projects.length - 1 && (
                <hr className="w-full border-t border-white/5 opacity-50" />
              )}
            </div>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
            No projects found.
          </div>
        )}
      </div>

      <div className="flex justify-center w-full pt-3 shrink-0">
        <Label className="text-xs sm:text-sm text-zinc-500 font-medium tracking-wide">
          {projects?.length || 0} Projects
        </Label>
      </div>
    </section>
  );
};

export default ProjectCard;