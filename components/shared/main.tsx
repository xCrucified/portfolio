import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

import DraggableDiv from "./dragElement";
import ProjectsModalWindow from "./sections/ProjectsModal";
import ServicesModalWindow from "./sections/ServicesModal";
import SkillsModalWindow from "./sections/SkillsModal";
import ExperienceModalWindow from "./sections/ExperienceModal";
import AboutMeModalWindow from "./sections/AboutMeModal";
import ContactModalWindow from "./sections/ContactModal";
import GalleryModalWindow from "./sections/GalleryModal";
import ResumeModalWindow from "./sections/ResumeModal";

interface Props {
  className?: string;
}

const popIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

const panels = [
  { id: "Projects", label: "Projects", icon: "/images/projects.svg" },
  { id: "Services", label: "Services", icon: "/images/services.svg" },
  { id: "Skills", label: "Skills", icon: "/images/skills.svg" },
  { id: "Experience", label: "Experience", icon: "/images/experience.svg" },

  { id: "Contact", label: "Contact", icon: "/images/contact.svg" },
  { id: "Gallery", label: "Gallery", icon: "/images/gallery.svg" },
  { id: "Resume", label: "Resume", icon: "/images/resume.svg" },
] as const;

const menuItems = [
  {
    id: "github",
    link: "https://github.com/xCrucified",
    icon: "/images/github.svg",
  },
  {
    id: "instagram",
    link: "https://www.instagram.com/xsyhe_/",
    icon: "/images/instagram.svg",
  },
  {
    id: "telegram",
    link: "https://web.telegram.org/k/#@x1Crucified",
    icon: "/images/telegram.svg",
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/mxxknk/",
    icon: "/images/linkedin.svg",
  },
] as const;

const tabs = {
  Projects: ProjectsModalWindow,
  Services: ServicesModalWindow,
  Skills: SkillsModalWindow,
  Experience: ExperienceModalWindow,
  Contact: ContactModalWindow,
  Gallery: GalleryModalWindow,
  Resume: ResumeModalWindow,
} as const;

type TabKey = keyof typeof tabs;
type TabData = { id: TabKey; isLeft: boolean };

export const Main: React.FC<Props> = ({ className }) => {
  const [openTabs, setOpenTabs] = useState<TabData[]>([]);

  const handleTabChange = (tab: TabKey, isLeft: boolean) => {
    setOpenTabs(
      (prev) =>
        prev.some((t) => t.id === tab)
          ? prev.filter((t) => t.id !== tab) // Закрываем, если уже открыта
          : [...prev, { id: tab, isLeft }]   // Открываем новую
    );
  };

  return (
    <div
      className={cn(
        className,
        "flex justify-center w-full absolute bottom-10"
      )}
    >
      <div className="flex w-[90%] h-[83vh] justify-between">
        {/* Левая панель */}
        <div className="flex flex-col gap-10 h-full font-light">
          {panels.slice(0, 4).map((item) => (
            <motion.button
              initial={popIn.initial}
              animate={popIn.animate}
              transition={popIn.transition}
              key={item.id}
              onClick={() => handleTabChange(item.id as TabKey, true)}
              className="flex items-center gap-2 p-1 flex-col w-13.75 h-12.5 section cursor-pointer"
            >
              <img
                draggable={false}
                src={item.icon}
                alt={item.label}
                className="w-full h-full p-2"
              />
              <Label className="text-lg font-light opacity-85 cursor-pointer">
                {item.id.length > 8 ? item.label.slice(0, 3) + "..." : item.id}
              </Label>
            </motion.button>
          ))}
        </div>

        {/* Центр экрана */}
        <div className="w-full h-full relative flex justify-between">
          {/* Левая колонка открытых окон */}
          <div className="absolute h-full z-1005 w-77.5 ml-10 pointer-events-none">
            {openTabs
              .filter((tab) => tab.isLeft)
              .map((tab, index) => {
                const Component = tabs[tab.id];
                return (
                  <DraggableDiv key={tab.id}>
                    <div
                      className="absolute w-160 h-[90%] transition-all duration-300 pointer-events-auto"
                      style={{
                        top: `${index * 80}px`,
                        left: "0px",
                        zIndex: 10 + index,
                      }}
                    >
                      <Component
                        onClose={() => handleTabChange(tab.id, true)}
                      />
                    </div>
                  </DraggableDiv>
                );
              })}
          </div>

          {/* Центральный контент (Приветственное окно) */}
          <div className="flex w-full justify-center relative">
            <DraggableDiv>
              <motion.section
                key="about-me"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full justify-center flex relative z-999"
              >
                <AboutMeModalWindow className="min-w-162.5 min-h-162.5 modal-bg" />
              </motion.section>
            </DraggableDiv>

            {/* Нижнее меню */}
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-0 w-full h-20 z-999 flex justify-center items-center"
            >
              <div className="flex menu-container">
                <button
                  onClick={() => (window.location.href = "/")}
                  className="flex items-center gap-2 mr-2 p-1 flex-col h-full w-full home-btn cursor-pointer"
                >
                  <img draggable={false} src="/images/house.svg" alt="Home" />
                </button>
                <hr className="vertical-hr" />
                
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-1 flex-col w-full h-full home-btn cursor-pointer justify-center"
                  >
                    <img
                      draggable={false}
                      src={item.icon}
                      alt={item.id}
                      className="w-full h-full p-1.5"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Правая колонка открытых окон */}
          <div className="h-full z-1000 w-77.5 absolute right-0 mr-6 pointer-events-none">
            {openTabs
              .filter((tab) => !tab.isLeft)
              .map((tab, index) => {
                const Component = tabs[tab.id];
                return (
                  <DraggableDiv key={tab.id}>
                    <div
                      className="absolute w-160 h-[90%] transition-all duration-300 pointer-events-auto"
                      style={{
                        top: `${index * 80}px`,
                        right: "0px",
                        zIndex: 10 + index,
                      }}
                    >
                      <Component
                        onClose={() => handleTabChange(tab.id, false)}
                      />
                    </div>
                  </DraggableDiv>
                );
              })}
          </div>
        </div>

        {/* Правая панель */}
        <div className="flex flex-col gap-10 h-full font-light">
          {panels.slice(4, 7).map((item) => (
            <motion.button
              initial={popIn.initial}
              animate={popIn.animate}
              transition={popIn.transition}
              key={item.id}
              onClick={() => handleTabChange(item.id as TabKey, false)}
              className="flex items-center gap-2 p-1 flex-col w-13.75 h-12.5 section cursor-pointer"
            >
              <img
                draggable={false}
                src={item.icon}
                alt={item.label}
                className="w-full h-full p-2"
              />
              <Label className="text-lg font-light opacity-85 cursor-pointer">
                {item.id.length > 8 ? item.label.slice(0, 3) + "..." : item.id}
              </Label>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;