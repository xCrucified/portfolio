"use client";

import { useEffect } from "react";
import ResumeCard from '../cards/resumeCard';
import { cn } from "@/lib/imports";

interface Props {
  className?: string;
  onClose: () => void;
}

export const ResumeModalWindow: React.FC<Props> = ({ className, onClose }) => {
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
      <ResumeCard className="max-md:w-[95%] max-md:h-auto max-md:max-h-[50vh] max-md:overflow-y-auto" onClose={onClose}/>
    </div>
  );
};

export default ResumeModalWindow;