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
  useEffect,
  useState,
} from "@/lib/imports";
import { Info } from "lucide-react";
import ExperienceModalWindow from "./sections/ExperienceModal";

interface Props {
  className?: string;
}

const leftPanel = [
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
];

export const Main: React.FC<Props> = ({ className }) => {

  const handleTabChange = (tab: keyof typeof tabs) => {
    setActiveTab(tab);
  };

  const tabs = {
    Projects: () => <ProjectsModalWindow />,
    Services: () => <ServicesModalWindow />,
    Skills: () => <SkillsModalWindow />,
    Experience: () => <ExperienceModalWindow />,
    Info: () => <AboutMeModalWindow />,
    Achievements: () => <AchievementsModalWindow />,
    Contact: () => <ContactModalWindow />,
    Gallery: () => <GalleryModalWindow />,
    Tools: () => <ToolsModalWindow />,
    Resume: () => <ResumeModalWindow />,
  } as const;

  const [activeTab, setActiveTab] = useState<TabKey>("Projects");
  type TabKey = keyof typeof tabs;
  const ActiveComponent = tabs[activeTab];

  return (
    <div
      className={cn(
        className,
        "flex justify-center w-[100%] h-[100%] p-[50px] text-[#EFEDFD]"
      )}
    >
      <div className="flex w-[1920px] h-[83vh] justify-between">
        <div className="flex flex-col gap-10 w-[5%] h-[100%] p-5 ">
          {leftPanel
            .map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id as TabKey)}
                className="flex items-center gap-2 p-1 flex-col h-[5%] section cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[100%] h-[100%] p-[6px]"
                />
                <Label className="text-xs opacity-85">
                  {item.id.length > 8
                    ? item.label.slice(0, 3) + "..."
                    : item.id}
                </Label>
              </button>
            ))
            .slice(0, 5)}
        </div>
        <div className="w-[90%] h-[100%] p-5 outline">
          <div className="md:flex-[2] w-full flex items-start md:justify-between justify-start flex-col md:flex-row min-h-screen px-0 md:p-4 md:mt-[50px] mt-[34px]">
            <ActiveComponent />
          </div>
        </div>
        <div className="flex flex-col gap-10 w-[5%] h-[100%] p-5">
          {leftPanel
            .map((item) => (
              <button
                onClick={() => handleTabChange(item.id as TabKey)}
                key={item.id}
                className="flex items-center gap-2 p-1 flex-col h-[5%] section cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[100%] h-[100%] p-[6px]"
                />
                <Label className="text-xs opacity-85">
                  {item.id.length > 7
                    ? item.label.slice(0, 7) + "..."
                    : item.id}
                </Label>
              </button>
            ))
            .slice(5, 10)}
        </div>
      </div>
    </div>
  );
};

export default Main;
