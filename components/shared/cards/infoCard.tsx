import { cn, Label } from "@/lib/imports";
import React from "react";

interface Props {
  textarea?: string[];
  imageSrc?: string;
  className?: string;
}

export const InfoCard: React.FC<Props> = ({
  className,
  textarea,
  imageSrc,
}) => {
  return (
    <section
      className={cn(
        "flex flex-col text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl",
        className
      )}
    >
      <Label className="font-light p-1">About</Label>
      <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg">
        <img
        draggable={false}
          src={imageSrc}
          alt="image is not provided"
          className="object-cover w-full h-80 bg-teal-900 rounded-lg pointer-events-none"
        />
        {textarea && textarea.length > 0 ? (
          <div
            className="flex flex-col gap-4 font-light text-base leading-relaxed p-2
            text-[#EFEDFD]"
          >
            {textarea.map((text, index) => (
              <Label
                key={index}
                className={index === 0 ? "text-2xl font-normal" : "opacity-70"}
              >
                {text}
              </Label>
            ))}
          </div>
        ) : (
          // Default content if textarea is not provided
          <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
            <h3 className="text-xl font-normal">
              Text not provided, using default content.
            </h3>

            <p className="opacity-70">
              Text not provided, using default content.
            </p>
            <p className="opacity-50">
              Text not provided, using default content.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoCard;
