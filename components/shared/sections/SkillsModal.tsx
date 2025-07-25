import { cn } from '@/lib/imports';
import React from 'react';
import SkillCard from '../cards/skillCard';

interface Props {
  className?: string;
  onClose?: () => void;
}
const skills = [
  {
    title: "Amazon Web Services (AWS)",
    description: "Cloud computing services to help host and manage applications with high scalability.",
    icon: "/images/aws.png",
  },
  {
    title: "Node.js",
    description: "JavaScript runtime for building scalable and fast server-side applications.",
    icon: "/images/nodejs.png",
  },
  {
    title: "React.js",
    description: "A JavaScript library for building user interfaces, focusing on component-based architecture.",
    icon: "/images/reactjs.png",
  },
  {
    title: "Express.js",
    description: "Web application framework for Node.js, designed for building robust APIs.",
    icon: "/images/expressjs.png",
  },
  {
    title: "NestJS",
    description: "A framework for building efficient, scalable Node.js applications with TypeScript support.",
    icon: "/images/nestjs.png",
  },
  {
    title: "Git",
    description: "Version control system for tracking changes in code, supporting collaboration in development.",
    icon: "/images/git.png",
  },
  {
    title: "Redux.js",
    description: "State management library for JavaScript apps, especially with React.",
    icon: "/images/reduxjs.png",
  },
  {
    title: "HTML5",
    description: "The latest version of HTML for building structured web pages with multimedia support.",
    icon: "/images/html5.png",
  },
  {
    title: "PostgreSQL",
    description: "Open-source relational database management system known for its reliability and scalability.",
    icon: "/images/postgresql.png",
  },
  {
    title: "REST APIs",
    description: "Designing and implementing RESTful APIs to enable communication between systems.",
    icon: "/images/restapis.png",
  },
  {
    title: "SQL",
    description: "Structured Query Language used to manage and manipulate relational databases.",
    icon: "/images/sql.png",
  },
  {
    title: "Cascading Style Sheets (CSS)",
    description: "Style sheet language used to define the look and layout of web pages.",
    icon: "/images/css.png",
  },
  {
    title: "Prisma ORM",
    description: "Object-relational mapping tool for working with databases in Node.js.",
    icon: "/images/prisma.png",
  },
  {
    title: "Next.js",
    description: "React framework for building server-side rendered and static web applications.",
    icon: "/images/nextjs.png",
  },
  {
    title: "Microsoft SQL Server",
    description: "Relational database management system by Microsoft, known for enterprise-level applications.",
    icon: "/images/mssql.png",
  },
  {
    title: "ASP.NET Web API",
    description: "Framework for building APIs and web services in .NET.",
    icon: "/images/aspnetwebapi.png",
  },
  {
    title: "TypeScript",
    description: "Superset of JavaScript that adds static typing for more robust code.",
    icon: "/images/typescript.png",
  },
  {
    title: "AngularTS",
    description: "A framework for building dynamic web applications using TypeScript and Angular.",
    icon: "/images/angular.png",
  },
  {
    title: ".NET Framework",
    description: "A framework for building and running Windows-based applications and web services.",
    icon: "/images/dotnet.png",
  },
];

export const SkillsModalWindow: React.FC<Props> = ({ className, onClose }) => {
  return (
    <SkillCard skills={skills} onClose={onClose} className={cn("", className)}/>
  );
};

export default SkillsModalWindow;
