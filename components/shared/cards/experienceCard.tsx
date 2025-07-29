import { cn, Label } from "@/lib/imports";
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
        "flex flex-col text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl bg-neutral-950 modal-bg",
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
      <div className="w-full flex gap-4 p-4 bg-[#120d18] rounded-lg overflow-auto max-h-[600px]">
        <div className="w-[70%] self-center h-[80%] block">
          <img
            draggable={false}
            src={imgSrc}
            alt="Experience illustration"
            className="object-contain w-[100%] rounded-lg pointer-events-none"
          />
        </div>
        <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
          <ul className="list-inside space-y-2 text-lg leading-relaxed">
            {textarea &&
              textarea.map((text, index) => (
                <li key={index} className="text-md">
                  {text}
                  {index !== textarea.length - 1 && (
                  <hr className="my-2 border-zinc-700" />
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
