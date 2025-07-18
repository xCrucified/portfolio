import { cn, Label } from "@/lib/imports";
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
    <section className={cn("flex h-[650px] modal-bg text-zinc-100", className)}>
      <div className="flex flex-col p-3">
        <div className="flex w-full justify-between items-center mb-2">
          <Label className="text-lg p-1">Projects</Label>
          <button
            className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center rounded-xs items-center cursor-pointer mr-[5px]"
            onClick={onClose}
            aria-label="Close modal"
          >
            <img draggable={false} src="/images/x.svg" alt="close" />
          </button>
        </div>
        <div className="flex flex-col bg-[#110c17] w-[100%] rounded-lg p-4 gap-10 overflow-y-auto">
          {projects?.map((project, index) => (
            <section
              key={project.key}
              className="w-[100%] h-[170px] gap-3 flex flex-col items-center"
            >
              {/* Project Card */}
              <div
                key={index}
                className="flex flex-row rounded-lg w-[100%] h-[100%]"
              >
                <img
                draggable={false}
                  src={project.image}
                  alt={project.title}
                  className="w-[190] rounded-lg object-fill max-h-60"
                  loading="lazy"
                />
                <div className="flex flex-col w-full h-[100%] justify-around items-start p-4">
                  <Label className="text-xl font-light">{project.title}</Label>
                  <Label className="text-sm text-zinc-300 opacity-60 mt-2">
                    {project.description}
                  </Label>
                </div>
                <button
                  onClick={() =>
                    window.open(
                      `https://github.com/xCrucified/${project.title}`,
                      "_blank"
                    )
                  }
                  className="flex justify-center items-center w-[65px] h-[35px] self-center section cursor-pointer"
                  aria-label="View on GitHub"
                >
                  <img
                  draggable={false}
                    src="/arrow-right.svg"
                    alt="GitHub"
                    className="w-5 h-5 object-cover"
                  />
                </button>
              </div>
              <hr className="w-[100%] h-[100%] mt-2 opacity-[15%]" />
            </section>
          ))}
        </div>
        <div className="flex justify-center w-[100%] pt-2">
          <Label className="opacity-70">{projects.length} Projects</Label>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
