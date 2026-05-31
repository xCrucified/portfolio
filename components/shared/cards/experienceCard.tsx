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
        "flex flex-col w-full h-full text-zinc-100 p-3 sm:p-4 overflow-hidden min-h-0 modal-bg",
        className
      )}
    >
      {/* Шапка */}
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

      {/* Рабочая зона */}
      <div className="flex flex-col md:flex-row bg-[#110c17]/60 w-full h-full rounded-xl p-3 sm:p-5 gap-5 overflow-y-auto custom-scrollbar min-h-0 flex-1">
        
        {/* Медиа сторона (Превью) */}
        <div className="w-full md:w-[35%] shrink-0 relative aspect-video md:aspect-auto md:h-full max-h-[200px] md:max-h-none rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
          {imgSrc ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              draggable={false}
              src={"/images/experiencePanel.mp4"}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          ) : (
            <img
              src={"/images/experiencePanel.png"}
              alt="experience"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          )}
        </div>

        {/* Сторона списка */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto custom-scrollbar pr-1">
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