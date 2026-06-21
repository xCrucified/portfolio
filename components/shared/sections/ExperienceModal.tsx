"use client";
import React, { useEffect } from "react";
import ExperienceCard from "../cards/experienceCard";
import { cn } from "@/lib/imports"; // Добавлено для работы с классами

interface Props {
  className?: string;
  onClose: () => void;
}

export const ExperienceModalWindow: React.FC<Props> = ({
  className,
  onClose,
}) => {
  useEffect(() => {
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
    <div className={cn("md:w-full md:h-full max-md:fixed max-md:inset-0 max-md:z-[9999] max-md:bg-black/50 max-md:backdrop-blur-sm max-md:flex max-md:items-center max-md:justify-center pointer-events-auto", className)}>
      <ExperienceCard
        className="max-md:w-[95%] max-md:h-auto max-md:max-h-[50vh] max-md:overflow-y-auto"
        onClose={onClose}
        imgSrc="/images/experience.png"
        textarea={[
          "Developed fully functional web applications using React, Next.js, and ASP.NET",
          "Built REST APIs and microservices in C# following Clean Architecture principles",
          "Used Entity Framework and Prisma ORM to interact with MSSQL and PostgreSQL databases",
          "Integrated third-party APIs and payment gateways in projects",
          "Worked with Docker containers to configure development and production environments",
          "Implemented authentication systems using OAuth2 and JWT",
          "Created responsive user interfaces based on Figma designs",
          "Optimized website performance using Lighthouse and lazy loading techniques",
          "Performed code testing with Jest and xUnit frameworks",
          "Worked with network protocols like UDP, TCP, and SMTP in C# system development",
          "Implemented multithreading and asynchronous methods to improve application responsiveness",
          "Developed image upload and storage systems with ASP.NET backend and Next.js frontend display",
          "Configured CI/CD pipelines for automated deployment via GitHub Actions",
          "Built admin panels and user dashboards with dynamic tables and filtering",
          "Integrated real-time notifications using WebSocket and SignalR",
          "Used Tailwind CSS to build well-styled UI components",
          "Created landing pages and single-page applications with high loading speed",
          "Implemented role-based access control in enterprise-level web apps",
          "Developed modular architecture for frontend applications",
          "Worked with Redux and Zustand for application state management",
        ]}
      />
    </div>
  );
};

export default ExperienceModalWindow;