import { cn } from "@/lib/imports";
import React from "react";

interface Props {
  className?: string;
  onClose: () => void;

}

export const AchievementsModalWindow: React.FC<Props> = ({ className, onClose }) => {
  return (
    <section
      className={cn(
        "flex flex-col info-panel text-zinc-100 p-3 rounded-xl mx-auto mt-70 gap-2  w-full max-w-3xl bg-neutral-950",
        className
      )}
    >
      <div className="w-full h-8 flex items-center ml-1 justify-between">
        <h2 className="font-light">About</h2>
        <button
          className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer mr-[5px]"
          onClick={onClose}
        >
          <img src="/images/x.svg" alt="close"></img>
        </button>
      </div>
      <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg">
        <img
          src="/images/aboutme2.png"
          alt=""
          className="object-cover w-full h-80 bg-teal-900 rounded-lg pointer-events-none"
        />
        <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
          <h3 className="text-xl font-normal">
            Hey there! I'm Max — a digital creative who crafts experiences that
            not only work but resonate. I blend aesthetics with functionality to
            build interfaces that speak without words.
          </h3>

          <p className="opacity-70">
            Passionate about modern web technologies, I thrive on thoughtful UX
            and animated detail. My toolkit includes React, Next.js, TypeScript,
            and Tailwind — all backed by a love for minimalism and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsModalWindow;
