import { cn } from "@/lib/imports";
import React, { useEffect } from "react";
import ExperienceCard from "../cards/experienceCard";

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
    <ExperienceCard
      onClose={onClose}
      imgSrc="/images/experience.png"
      textarea={[
        "Delivered over 40 projects covering full-stack development",
        "Developed backend APIs and frontend applications for e-commerce and media services",
        "Practical experience with network and system programming in C#",
        "Implemented multithreaded and asynchronous applications",
      ]}
    />
  );
};

export default ExperienceModalWindow;
