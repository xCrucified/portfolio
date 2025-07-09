import { cn, useState } from "@/lib/imports";
import InfoCard from "../cards/infoCard";

interface Props {
  className?: string;
  onClose?: () => void;
}

export const AboutMeModalWindow: React.FC<Props> = ({ className, onClose }) => {
  return (
    <InfoCard
      className={cn(
        "flex flex-col text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl",
        className
      )}
      imageSrc="/images/aboutme2.png"
      textarea={[
        "Hey there! I'm Max — a digital creative who crafts experiences that not only work but resonate. I blend aesthetics with functionality to build interfaces that speak without words.",
        "Passionate about modern web technologies, I thrive on thoughtful UX and animated detail. My toolkit includes React, Next.js, TypeScript, and Tailwind — all backed by a love for minimalism and precision.",
        "Stack: Full-Stack C# with React/Next.js",
      ]}
    />
    
    // Uncomment the following section to use original layout
    // <section
    //   className={cn(
    //     "flex flex-col info-panel text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl bg-neutral-950",
    //     className
    //   )}
    // >
    //   <h2 className="font-light p-1">About</h2>
    //   <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg">
    //     <img
    //       src="/images/aboutme2.png"
    //       alt=""
    //       className="object-cover w-full h-80 bg-teal-900 rounded-lg pointer-events-none"
    //     />
    //     <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
    //       <h3 className="text-xl font-normal">
    //         Hey there! I'm Max — a digital creative who crafts experiences that
    //         not only work but resonate. I blend aesthetics with functionality to
    //         build interfaces that speak without words.
    //       </h3>

    //       <p className="opacity-70">
    //         Passionate about modern web technologies, I thrive on thoughtful UX
    //         and animated detail. My toolkit includes React, Next.js, TypeScript,
    //         and Tailwind — all backed by a love for minimalism and precision.
    //       </p>
    //       <p className="opacity-50">Stack: Full-Stack C# with React/Next.js</p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default AboutMeModalWindow;
