import { cn } from "@/lib/imports";
import React, { useEffect, useState } from "react";
import ProjectCard from "../cards/projectCard";

interface GitHubProject {
  name: string;
  description: string;
  image?: string;
}

interface Props {
  className?: string;
  onClose: () => void;
}

export const ProjectsModalWindow: React.FC<Props> = ({
  className,
  onClose,
}) => {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const api = "https://api.github.com/users/xCrucified/repos";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) throw new Error("Network response was not ok");
        const data: GitHubProject[] = await response.json();

        const formattedProjects = data.map((repo) => ({
          name: repo.name,
          description: repo.description ?? "No description available.",
          image:
            `https://raw.githubusercontent.com/xCrucified/${repo.name}/master/${repo.name}.png` 
            // `https://raw.githubusercontent.com/xCrucified/${repo.name}/master/preview.png`,
        }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, api]);

  if (loading) return <p>Loading projects...</p>;

  return (
    <ProjectCard
      className={cn(className)}
      projects={projects
        .map((project, index) => ({
          key: index,
          title: project.name,
          image: project.image,
          description: project.description,
        }))
        .filter((project) => project.title !== "  ")}
      onClose={onClose}
    />
  );
};

export default ProjectsModalWindow;
