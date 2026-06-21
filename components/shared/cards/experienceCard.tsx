import { Label } from "@/components/ui/label";
import { cn } from "@/lib/imports";
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
        "flex flex-col md:min-w-120 md:min-h-[10vh] md:overflow-hidden max-md:h-auto max-md:max-h-[55vh] text-zinc-100 p-3 sm:p-4 max-md:overflow-y-auto min-h-0 modal-bg",
        className
      )}
    >
      <div className="flex w-full justify-between items-center mb-3 shrink-0 px-1">
        <Label className="text-sm font-semibold tracking-widest uppercase text-zinc-400 sm:text-base">
          Experiences
        </Label>
        <button
          className="w-7 h-7 sm:w-8 sm:h-8 border border-white/20 flex justify-center bg-[#1a131f] rounded-md items-center cursor-pointer transition-colors hover:bg-white/5"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img draggable={false} src="/images/x.svg" alt="close" className="w-4 h-4" />
        </button>
      </div>

      <div className="bg-[#110c17]/60 w-full h-full rounded-xl p-3 sm:p-5 overflow-y-auto custom-scrollbar flex-1 min-h-0">
        <div className="w-full mb-5 aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
          {imgSrc ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              draggable={false}
              src={"/images/experiencePanel.mp4"}
              className="w-full h-full object-cover pointer-events-none"
            />
          ) : (
            <img
              src={"/images/experiencePanel.png"}
              alt="experience"
              draggable={false}
              className="w-full h-full object-cover pointer-events-none"
            />
          )}
        </div>

        <div className="w-full">
          <ul className="list-inside list-decimal space-y-3 text-zinc-300 font-light leading-relaxed">
            {textarea && textarea.length > 0 ? (
              textarea.map((text, index) => (
                <li key={index} className="text-sm sm:text-base leading-relaxed break-words">
                  <span className="text-zinc-100">{text}</span>
                  {index !== textarea.length - 1 && (
                    <hr className="mt-3 border-t border-white/5 opacity-50" />
                  )}
                </li>
              ))
            ) : (
              <div className="text-zinc-500 text-sm">No experiences listed.</div>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;