"use client";

import React, { useState, useEffect } from "react";

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
  {
    id: "Projects",
    label: "Projects",
    icon: "/images/projects.svg",
    isLeft: true,
  },
  {
    id: "Services",
    label: "Services",
    icon: "/images/services.svg",
    isLeft: true,
  },
  { id: "Skills", label: "Skills", icon: "/images/skills.svg", isLeft: true },
  {
    id: "Experience",
    label: "Experience",
    icon: "/images/experience.svg",
    isLeft: true,
  },

  {
    id: "Contact",
    label: "Contact",
    icon: "/images/contact.svg",
    isLeft: false,
  },
  {
    id: "Gallery",
    label: "Gallery",
    icon: "/images/gallery.svg",
    isLeft: false,
  },
  { id: "Resume", label: "Resume", icon: "/images/resume.svg", isLeft: false },
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
type TabData = { id: TabKey; isLeft: boolean; orderId: number };

export const Main: React.FC<Props> = ({ className }) => {
  const [openTabs, setOpenTabs] = useState<TabData[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTabChange = (tab: TabKey, isLeft: boolean) => {
    setOpenTabs((prev) => {
      const exists = prev.some((t) => t.id === tab);
      if (exists) {
        return prev.filter((t) => t.id !== tab);
      } else {
        const currentPanelTabsCount = prev.filter(
          (t) => t.isLeft === isLeft,
        ).length;
        return [...prev, { id: tab, isLeft, orderId: currentPanelTabsCount }];
      }
    });
  };

  const focusTab = (tabId: TabKey) => {
    setOpenTabs((prev) => {
      const target = prev.find((t) => t.id === tabId);
      if (!target) return prev;
      return [...prev.filter((t) => t.id !== tabId), target];
    });
  };

  return (
    <div
      className={cn(
        className,
        "fixed inset-0 top-17 md:top-21.25 flex justify-center items-center w-full overflow-hidden box-border select-none",
      )}
    >
      <div className="flex w-[95%] md:w-[90%] h-full md:h-[83vh] justify-between relative items-center box-border">
        {/* left panel */}
        <div className="flex flex-col gap-10 h-full font-light max-md:hidden z-20">
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
                {item.id}
              </Label>
            </motion.button>
          ))}
        </div>

        {/* center */}
        <div className="flex-1 h-full relative flex justify-between box-border">
          {/* left tabs */}
          <div className="absolute h-full z-1005 w-full md:w-77.5 ml-0 md:ml-10 pointer-events-none">
            {openTabs
              .filter((tab) => tab.isLeft)
              .map((tab) => {
                const Component = tabs[tab.id];
                const globalIndex = openTabs.findIndex((t) => t.id === tab.id);

                return (
                  <DraggableDiv key={tab.id}>
                    <div
                      onMouseDown={() => focusTab(tab.id)}
                      className="absolute w-160 max-md:w-full h-[70%] md:h-[90%] pointer-events-auto box-border"
                      style={{
                        top: isMobile ? "76px" : `${tab.orderId * 40}px`,
                        left: "0px",
                        zIndex: 10 + globalIndex,
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

          {/* main footer + mobile panel */}
          <div className="flex w-full relative pointer-events-none justify-center">
            <div className="hidden max-md:flex justify-center w-full absolute top-4 z-1010 px-2 pointer-events-auto">
              <div className="flex flex-row gap-3 max-w-full overflow-x-auto py-2 px-3 bg-[#1a131fcc] backdrop-blur-md rounded-xl border border-[#3b3340] shadow-xl">
                {panels.map((item) => {
                  const isActive = openTabs.some((t) => t.id === item.id);
                  return (
                    <motion.button
                      initial={popIn.initial}
                      animate={popIn.animate}
                      key={item.id}
                      onClick={() =>
                        handleTabChange(item.id as TabKey, item.isLeft)
                      }
                      className={cn(
                        "flex items-center justify-center p-2 rounded-lg cursor-pointer w-11 h-11 transition-all",
                        isActive
                          ? "bg-[#3b3340] scale-95 border border-[#1FAC71]"
                          : "bg-[#251b2a50]",
                      )}
                    >
                      <img
                        draggable={false}
                        src={item.icon}
                        alt={item.label}
                        className="w-6 h-6 object-contain"
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>
            {/* main footer */}
            <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-999 outline-1 p-5 box-border">
              <DraggableDiv>
                <motion.section
                  key="about-me"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full flex justify-center items-center pointer-events-auto"
                >
                  <AboutMeModalWindow
                    className={cn(
                      "modal-bg max-md:overflow-y-auto",
                      "w-full",
                    )}
                  />
                </motion.section>
              </DraggableDiv>
            </div>
            <motion.section
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-4 w-full h-20 z-999 flex justify-center items-center pointer-events-auto max-md:bottom-15"
            >
              <div className="flex menu-container box-border">
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
            </motion.section>
          </div>

          {/* right tabs */}
          <div className="h-full z-1000 w-full md:w-77.5 absolute right-0 pointer-events-none">
            {openTabs
              .filter((tab) => !tab.isLeft)
              .map((tab) => {
                const Component = tabs[tab.id];
                const globalIndex = openTabs.findIndex((t) => t.id === tab.id);

                return (
                  <DraggableDiv key={tab.id}>
                    <div
                      onMouseDown={() => focusTab(tab.id)}
                      // ИСПРАВЛЕНО: Синхронизировали отступ сверху с левыми вкладками на мобилке
                      className="absolute w-160 max-md:w-full h-[70%] md:h-[90%] pointer-events-auto box-border"
                      style={{
                        top: isMobile ? "76px" : `${tab.orderId * 40}px`,
                        right: "0px",
                        zIndex: 10 + globalIndex,
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

        {/* right panel */}
        <div className="flex flex-col gap-10 h-full font-light max-md:hidden z-20">
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
                {item.id}
              </Label>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
