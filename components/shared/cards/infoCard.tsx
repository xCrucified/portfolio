import { Label } from "@/components/ui/label";
import { cn } from "@/lib/imports";
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
        "flex flex-col text-zinc-100 p-3 rounded-xl gap-2 w-full h-[60vh] overflow-hidden",
        className
      )}
    >
      <Label className="font-light p-1 shrink-0">About</Label>
      
      <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg overflow-y-auto custom-scrollbar h-full">
        <img
          src={imageSrc}
          alt="image is not provided"
          className="object-cover w-full bg-teal-900 rounded-lg pointer-events-none shrink-0"
        />
        {textarea && textarea.length > 0 ? (
          <div className="flex flex-col gap-4 font-light text-base leading-relaxed p-2">
            {textarea.map((text, index) => (
              <p
                key={index}
                className={cn(
                  index === 0 
                    ? "text-[#fcfcfcdb] lg:text-xl md:text-lg font-normal" 
                    : "text-zinc-100/70 text-sm",
                  index === 2 && "text-zinc-100/40" 
                )}
              >
                {text}
              </p>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 font-light text-base leading-relaxed">
            <h3 className="text-xl font-normal">
              Text not provided, using default content.
            </h3>
            <p className="opacity-70">Text not provided, using default content.</p>
            <p className="opacity-50">Text not provided, using default content.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoCard;