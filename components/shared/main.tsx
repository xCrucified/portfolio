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
    <div
      className={cn(
        className,
        "flex justify-center w-[100%] h-[100%] p-[50px] text-[#EFEDFD]"
      )}
    >
      <div className="flex w-[1920px] h-[83vh] justify-between">
        {/* Left Panel */}
        <div className="flex flex-col gap-10 w-[5%] h-[100%] p-5">
          {leftPanel.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id as TabKey, true)}
              className="flex items-center gap-2 p-1 flex-col h-[5%] section cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-[100%] h-[100%] p-[6px]"
              />
              <Label className="text-xs opacity-85">
                {item.id.length > 8 ? item.label.slice(0, 3) + "..." : item.id}
              </Label>
            </button>
          ))}
        </div>

        {/* Center */}
        <div className="w-[90%] h-[100%] p-5 relative flex justify-between">
          {/* left column */}
          <div className="relative h-full outline">
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

          {/* right column */}
          <div className="relative h-[100%] flex flex-col outline">
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
        <div className="flex flex-col gap-10 w-[5%] h-full p-5">
          {leftPanel
            .slice(5, 10)
            .map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id as TabKey, false)}
                className="flex items-center gap-2 p-1 flex-col h-[5%] section cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-full h-full p-[6px]"
                />
                <Label className="text-xs opacity-85">
                  {item.label.length > 7
                    ? item.label.slice(0, 5) + "..."
                    : item.id}
                </Label>
              </button>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Main;
