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
    <div className={cn(className, "flex justify-center w-[100%] absolute bottom-10")}>
      <div className="flex w-[90%] h-[83vh] justify-between">
        {/* Left Panel */}
        <div className="flex flex-col gap-10 h-[100%] font-light">
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
        <div className="w-[100%] h-[100%] relative flex justify-between">
          {/* left column */}
          <div className="relative h-full z-[1005] w-[310px]">
            {openTabs
              .filter((tab) => tab.isLeft)
              .map((tab, index) => {
                const Component = tabs[tab.id];
                return (
                  <DraggableDiv key={tab.id}>
                    <div
                      className="absolute w-[640px] h-[90%]"
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
          <div className="flex justify-center relative">
            <DraggableDiv>
              <motion.section
                key="about-me"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-[100%] justify-center flex relative z-[999]"
              >
                <AboutMeModalWindow
                  className="w-full h-full"
                />
              </motion.section>
            </DraggableDiv>
          </div>
          {/* Bottom Menu */}
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-0 w-full h-[80px] z-[999] flex justify-center items-center"
          >
            <div className="flex menu-container">
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
          <div className="relative h-full z-[1005] w-[310px]">
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
        <div className="flex flex-col gap-10 h-[100%] font-light">
          {panels.slice(5, 10).map((item) => (
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
      </div>
    </div>
  );
};

export default Main;
