import { cn } from '@/lib/imports';
import React from 'react';
import ServiceCard from '../cards/serviceCard';

interface Props {
  className?: string;
}
const services = [
  {
    title: "Web application development (frontend and backend)",
    icon: "/images/icons/web-dev.svg",
  },
  {
    title: "API and microservices development (C#, ASP.NET)",
    icon: "/images/icons/api.svg",
  },
  {
    title: "UI/UX interfaces (React, Angular)",
    icon: "/images/icons/ui-ux.svg",
  },
  {
    title: "UI/UX interfaces (React, Angular)",
    icon: "/images/icons/network.svg",
  },
];

export const ServicesModalWindow: React.FC<Props> = ({ className }) => {
  return (
    <ServiceCard services={services}/>
  );
};

export default ServicesModalWindow;
