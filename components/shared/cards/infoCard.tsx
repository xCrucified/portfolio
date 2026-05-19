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
  imageAlt = "Изображение карточки",
}) => {
  return (
    <section className={cn("flex flex-col w-full h-full gap-3 p-4 max-md:mt-40", className)}>
      <div className="w-full h-[60vh]">
        <div className="px-1 shrink-0">
          <Label className="text-xs font-semibold tracking-widest uppercase text-zinc-500 sm:text-sm">
            About
          </Label>
        </div>

        <div className="flex flex-col w-full h-full gap-4 sm:gap-6 overflow-y-auto custom-scrollbar min-h-0">
          <div className="w-full shrink-0 max-h-[35vh]">
            {imageSrc ? (
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-900 aspect-video">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="lazy"
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 pointer-events-none hover:scale-105"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full border border-dashed rounded-xl bg-zinc-900/50 border-zinc-800 aspect-video">
                <span className="text-xs font-medium text-center text-zinc-600 p-4 sm:text-sm">
                  image not provided
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 px-1 overflow-y-auto min-h-0">
            {textarea && textarea.length > 0 ? (
              textarea.map((text, index) => (
                <p
                  key={index}
                  className={cn(
                    "leading-relaxed tracking-normal",
                    index === 0
                      ? "text-zinc-100 text-base sm:text-xl md:text-2xl font-medium tracking-tight mb-0.5"
                      : "text-zinc-400 text-xs sm:text-base font-light",
                    index > 1 && "text-zinc-500 text-[11px] sm:text-sm",
                  )}
                >
                  {text}
                </p>
              ))
            ) : (
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium tracking-tight text-zinc-100 sm:text-xl md:text-2xl">
                  Description not provided
                </h3>
                <p className="text-sm font-light leading-relaxed text-zinc-400 sm:text-base">
                  Text for this section was not provided. Please fill the data
                  array for correct display.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
