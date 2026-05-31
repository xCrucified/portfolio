import { Label } from "@/components/ui/label";
import { cn } from "@/lib/imports";
import React from "react";

interface Props {
  textarea?: string[];
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export const InfoCard: React.FC<Props> = ({
  className,
  textarea,
  imageSrc,
  imageAlt = "Card image",
}) => {
  return (
    <section className={cn("flex flex-col w-full h-full text-zinc-100 p-3 sm:p-4 overflow-hidden", className)}>
      
      <div className="px-1 shrink-0 mb-3">
        <Label className="text-sm font-semibold tracking-widest uppercase text-zinc-400 sm:text-base">
          About
          </Label>
      </div>

      <div className="flex flex-col w-full h-full gap-4 sm:gap-6 overflow-y-auto custom-scrollbar min-h-0 flex-1">
        
        <div className="w-full shrink-0 relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/5 max-h-[25vh] sm:max-h-[30vh]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 pointer-events-none"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center border border-dashed rounded-xl bg-zinc-900/50 border-zinc-800">
              <span className="text-xs font-medium text-zinc-600 p-4 sm:text-sm">
                Image not provided
              </span>
            </div>
          )}
        </div>

        {/* Абзацы текста с внутренним контролируемым скроллом */}
        <div className="flex flex-col gap-3 sm:gap-4 px-1 pb-2">
          {textarea && textarea.length > 0 ? (
            textarea.map((text, index) => (
              <p
                key={index}
                className={cn(
                  "leading-relaxed tracking-normal break-words",
                  index === 0
                    ? "text-zinc-100 text-lg sm:text-xl md:text-2xl font-medium tracking-tight mb-1"
                    : "text-zinc-400 text-xs sm:text-sm md:text-base font-light",
                  index > 1 && "text-zinc-500 text-[11px] sm:text-xs",
                )}
              >
                {text}
              </p>
            ))
          ) : (
            <div className="flex flex-col gap-3">
              <h3 className="text-base sm:text-lg font-medium tracking-tight text-zinc-100">
                Description not provided
              </h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed text-zinc-400">
                Text for this section was not provided. Please fill the data array for correct display.
              </p>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default InfoCard;