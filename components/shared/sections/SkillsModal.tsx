import { cn } from '@/lib/imports';
import React from 'react';
import SkillCard from '../cards/skillCard';

interface Props {
  className?: string;
  onClose?: () => void;
}
const skills = [
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


export const SkillsModalWindow: React.FC<Props> = ({ className, onClose }) => {
  return (
    <SkillCard skills={skills} onClose={onClose} className={cn("", className)}/>
  );
};

export default SkillsModalWindow;
