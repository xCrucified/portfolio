import { cn } from "@/lib/imports";
import React from "react";
import ServiceCard from "../cards/serviceCard";

interface Props {
  className?: string;
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

export const ServicesModalWindow: React.FC<Props> = ({ className }) => {
  return <ServiceCard services={services} />;
};

export default ServicesModalWindow;
