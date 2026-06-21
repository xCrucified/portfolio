"use client";

import { useEffect } from "react";
import ServiceCard from "../cards/serviceCard";
import { cn } from "@/lib/imports";

interface Props {
  className?: string;
  onClose?: () => void;
}
const services = [
  {
    title: "Web Application development",
    description: "Building responsive and robust web applications tailored to your needs.",
    icon: "/images/web-dev.svg",
  },
  {
    title: "API and microservices development",
    description: "Designing and implementing scalable APIs and microservices architectures.",
    icon: "/images/api.svg",
  },
  {
    title: "UI/UX interfaces",
    description: "Creating intuitive and engaging user interfaces and experiences.",
    icon: "/images/ui-ux.svg",
  },
  {
    title: "Integration with third-party services",
    description: "Seamlessly connecting your app with external platforms and services.",
    icon: "/images/integration.svg",
  },
];

export const ServicesModalWindow: React.FC<Props> = ({ className, onClose }) => {
  useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          if (onClose) {
            onClose();
          }
        }
      };
  
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);
  return (
    <div className={cn("md:w-full md:h-full max-md:fixed max-md:inset-0 max-md:z-[9999] max-md:bg-black/50 max-md:backdrop-blur-sm max-md:flex max-md:items-center max-md:justify-center pointer-events-auto", className)}>
      <ServiceCard className="max-md:w-[95%] max-md:h-[55vh] max-md:overflow-y-auto" services={services} onClose={onClose}/>
    </div>
  );
};

export default ServicesModalWindow;