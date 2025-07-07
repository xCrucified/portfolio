import { cn } from "@/lib/imports";
import React, { useEffect, useState } from "react";
import ProjectCard from "../cards/projectCard";

interface GitHubProject {
  name: string;
  description: string;
  html_url: string;
}

interface Project {
  title: string;
  description: string;
  image?: string; // Optional if you don’t have images
}

interface Props {
  className?: string;
  onClose: () => void;
}

export const ProjectsModalWindow: React.FC<Props> = ({
  className,
  onClose,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const api = "https://api.github.com/users/xCrucified/repos"; // Replace with your GitHub username

    const fetchProjects = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: GitHubProject[] = await response.json();

        const formattedProjects = data.map((repo) => ({
          title: repo.name,
          description: repo.description ?? "No description available.",
          image: "/placeholder.svg", // optional, or you can omit it
        }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Fetch error:", error);
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
  }, [onClose]);

  return (
    <ProjectCard
      className={cn(className)}
      projects={[
        ...projects.map((project, index) => ({
          title: project.title,
          description: project.description,
          image: `${project.image || "/placeholder.svg"}`, // Use a placeholder if no image is provided
        })),
      ]} onClose={onClose}    />
  );
};

export default ProjectsModalWindow;
