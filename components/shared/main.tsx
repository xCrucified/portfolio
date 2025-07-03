"use client";
import {
  AboutMeModalWindow,
  AchievementsModalWindow,
  cn,
  ContactModalWindow,
  GalleryModalWindow,
  Label,
  ProjectsModalWindow,
  ResumeModalWindow,
  ServicesModalWindow,
  SkillsModalWindow,
  ToolsModalWindow,
  useState,
} from "@/lib/imports";
import ExperienceModalWindow from "./sections/ExperienceModal";
import DraggableDiv from "./dragElement";
import { motion } from "framer-motion";

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
  { id: "Info", label: "About Me", icon: "/images/info.svg" },
  { id: "Achievements", label: "Achievements", icon: "/images/award.svg" },
  { id: "Contact", label: "Contact", icon: "/images/contact.svg" },
  { id: "Gallery", label: "Gallery", icon: "/images/gallery.svg" },
  { id: "Tools", label: "Tools I Use", icon: "/images/tools.svg" },
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
  Info: AboutMeModalWindow,
  Achievements: AchievementsModalWindow,
  Contact: ContactModalWindow,
  Gallery: GalleryModalWindow,
  Tools: ToolsModalWindow,
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
          ? prev.filter((t) => t.id !== tab) // Close the tab if it already exists
          : [...prev, { id: tab, isLeft }] // Open a new tab
    );
  };

  return (
    <div className={cn(className, "flex justify-center w-[100%] pt-[120px]")}>
      <div className="flex w-[90%] h-[83vh] justify-between">
        {/* Left Panel */}
        <div className="flex flex-col gap-10 h-[100%]">
          {panels.slice(0, 5).map((item) => (
            <motion.button
              initial={popIn.initial}
              animate={popIn.animate}
              transition={popIn.transition}
              key={item.id}
              onClick={() => handleTabChange(item.id as TabKey, true)}
              className="flex items-center gap-2 p-1 flex-col w-[55px] h-[5%] section cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-[100%] h-[100%] p-[8px]"
              />
              <Label className="text-lg font-light opacity-85">
                {item.id.length > 8 ? item.label.slice(0, 3) + "..." : item.id}
              </Label>
            </motion.button>
          ))}
        </div>

        {/* Center */}
        <div className="w-[90%] h-[100%] relative flex justify-between">
          {/* left column */}
          <div className="relative h-full outline z-[1005] w-[310px]">
            {openTabs
              .filter((tab) => tab.isLeft)
              .map((tab, index) => {
                const Component = tabs[tab.id];
                return (
                  <DraggableDiv key={tab.id}>
                    <div
                      className="absolute w-[640px] h-[90%] transition-all duration-300"
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

          {/* Center Content */}
          <DraggableDiv>
            <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-[100%] place-items-center absolute z-[999]"
            >
              <section
                className={cn(
                  "flex flex-col info-panel text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl bg-neutral-950",
                  className
                )}
              >
                <div className="w-full h-8 flex items-center ml-1">
                  <h2 className="font-light">About</h2>
                </div>
                <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg">
                  <img
                    src="/images/aboutme2.png"
                    alt=""
                    className="object-cover w-full h-80 bg-teal-900 rounded-lg pointer-events-none"
                  />
                  <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
                    <h3 className="text-xl font-normal">
                      I'm Max — a digital creative who crafts experiences that
                      not only work but resonate. I blend aesthetics with
                      functionality to build interfaces that speak without
                      words.
                    </h3>

                    <p className="opacity-70">
                      Passionate about modern web technologies, I thrive on
                      thoughtful UX and animated detail. My toolkit includes
                      React, Next.js, TypeScript, and Tailwind — all backed by a
                      love for minimalism and precision.
                    </p>
                    <p className="opacity-50">
                      Stack: Full-Stack C# with React/Next.js
                    </p>
                  </div>
                </div>
              </section>
            </motion.div>
          </DraggableDiv>
          {/* Bottom Menu */}
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-0 w-[100%] h-[80px] z-[999]"
          >
            <div className="flex place-self-center menu-container">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center gap-2 mr-2 p-1 flex-col h-[100%] w-full home-btn cursor-pointer"
              >
                <img src="/images/house.svg" alt="Home" />
              </button>
              <hr className="vertical-hr"></hr>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className="flex items-center gap-2 p-1 flex-col w-[100%] h-[100%] home-btn cursor-pointer"
                  onClick={() => (window.location.href = item.link)}
                >
                  <img
                    src={item.icon}
                    alt={item.id}
                    className="w-full h-full p-[6px]"
                  />
                </button>
              ))}
            </div>
          </motion.div>
          {/* right column */}
          <div className="relative h-full outline z-[1005] w-[310px]">
            {openTabs
              .filter((tab) => !tab.isLeft)
              .map((tab, index) => {
                const Component = tabs[tab.id];
                return (
                  <DraggableDiv key={tab.id}>
                    <div
                      className="absolute w-[640px] h-[90%] transition-all duration-300"
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

        {/* Right Panel */}
        <div className="flex flex-col gap-10 h-full">
          {panels.slice(5, 10).map((item) => (
            <motion.button
              initial={popIn.initial}
              animate={popIn.animate}
              transition={popIn.transition}
              key={item.id}
              onClick={() => handleTabChange(item.id as TabKey, false)}
              className="flex items-center gap-2 p-1 flex-col h-[5%] section cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-full h-full p-[8px]"
              />
              <Label className="text-xs opacity-85">
                {item.label.length > 7
                  ? item.label.slice(0, 5) + "..."
                  : item.id}
              </Label>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
