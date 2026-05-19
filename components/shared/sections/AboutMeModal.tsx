import { cn } from "@/lib/imports";
import InfoCard from "../cards/infoCard";

interface Props {
  className?: string;
  onClose?: () => void;
}

export const AboutMeModalWindow: React.FC<Props> = ({ className, onClose }) => {
  return (
    <InfoCard
      className={cn("modal-bg", className)}
      imageSrc="/images/aboutme2.png"
      textarea={[
        "Hey there! I'm Max — a digital creative who crafts experiences that not only work but resonate. I blend aesthetics with functionality to build interfaces that speak without words.",
        "Passionate about modern web technologies, I thrive on thoughtful UX and animated detail. My toolkit includes React, Next.js, TypeScript, and Tailwind — all backed by a love for minimalism and precision.",
        "Stack: Full-Stack C# with React/Next.js",
      ]}
    />
  );
};

export default AboutMeModalWindow;