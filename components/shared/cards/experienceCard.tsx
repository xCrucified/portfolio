import { cn, Label } from "@/lib/imports";
import { error } from "console";
import { i } from "framer-motion/client";
import React from "react";

interface Props {
  imgSrc?: string;
  textarea?: string[];
  className?: string;
  onClose: () => void;
}

export const ExperienceCard: React.FC<Props> = ({
  className,
  onClose,
  textarea,
  imgSrc,
}) => {
  return (
    <section
      className={cn(
        "flex flex-col text-zinc-100 p-3 rounded-xl gap-2 w-[800px] h-[300px] bg-neutral-950 modal-bg",
        className
      )}
    >
      <div className="w-full h-6 flex items-center ml-1 justify-between">
        <Label className="font-light p-1">Experiences</Label>
        <button
          className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img draggable={false} src="/images/x.svg" alt="close" />
        </button>
      </div>
      <div className="w-full flex gap-4 p-4 bg-[#120d18] rounded-lg overflow-auto">
        {imgSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            draggable={false}
            src={"/images/experiencePanel.mp4"}
            className="static object-cover w-[30%] h-[100%] self-center outline rounded-lg pointer-events-none"
          />
        ) : (
          <img
            src={"/images/experiencePanel.png"}
            alt="experience"
            draggable={false}
            className="static object-cover w-[30%] h-[100%] self-center outline rounded-lg pointer-events-none"
          />
        )}
        <div className="flex flex-col gap-4 font-light leading-relaxed text-[#EFEDFD]">
          <ul className="list-inside list-decimal space-y-2 text-lg leading-relaxed overflow-auto opacity-65 p-1">
            {textarea &&
              textarea.map((text, index) => (
                <li key={index} className="text-base">
                  {text}
                  {index !== textarea.length - 1 && (
                    <hr className="my-2 border-zinc-600 from-transparent opacity-50 to-transparent bg-gradient-to-bl" />
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;
