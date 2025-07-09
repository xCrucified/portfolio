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
    <section className={cn("flex h-[650px] modal-bg text-zinc-100", className)}>
      <div className="flex flex-col p-3">
        <div className="flex w-full justify-between items-center mb-2">
          <h1 className="text-lg p-1">Projects</h1>
          <button
            className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center rounded-xs items-center cursor-pointer mr-[5px]"
            onClick={onClose}
            aria-label="Close modal"
          >
            <img src="/images/x.svg" alt="close" />
          </button>
        </div>
        <div className="flex flex-col bg-[#110c17] w-[100%] rounded-lg p-4 gap-10 overflow-y-auto">
          {projects?.map((project, index) => (
            <section
              key={project.key}
              className="w-[100%] h-[30%] gap-3 flex flex-col justify-between items-center"
            >
              {/* Project Card */}
              <div
                key={index}
                className="flex flex-col md:flex-row rounded-lg w-[100%] h-[100%]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/3 rounded-lg object-fill max-h-60"
                  loading="lazy"
                />

                <div className="flex flex-col w-full justify-between items-start p-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-sm text-zinc-300 mt-2">
                    {project.description}
                  </p>
                  <div className="flex w-[100px] h-[40px] items-center justify-center mt-4 rounded-sm bg-black">
                    <button className="">asd</button>
                  </div>
                </div>
                <button
                  onClick={() =>
                    window.open(
                      `https://github.com/xCrucified/${project.title}`,
                      "_blank"
                    )
                  }
                  className="flex justify-center items-center w-[60px] h-[30px] self-center section cursor-pointer"
                  aria-label="View on GitHub"
                >
                  <img
                    src="/arrow-right.svg"
                    alt="GitHub"
                    className="w-5 h-5 object-cover"
                  />
                </button>
              </div>
              <hr className="w-[100%] relative opacity-[15%]" />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
