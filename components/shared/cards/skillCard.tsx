"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/imports";
import React, { useRef, useState, useEffect } from "react";

interface Props {
  className?: string;
  onClose?: () => void;
  skills?: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export const SkillCard: React.FC<Props> = ({ className, onClose, skills = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const totalItems = skills.length;

  const scrollToIndex = (index: number) => {
    const el = containerRef.current;
    if (!el || totalItems === 0) return;

    const itemWidth = el.clientWidth; 
    
    el.scrollTo({ left: index * itemWidth, behavior: "smooth" });
    setScrollIndex(index);
  };

  const scrollLeft = () => {
    if (scrollIndex > 0) scrollToIndex(scrollIndex - 1);
  };

  const scrollRight = () => {
    if (scrollIndex < totalItems - 1) scrollToIndex(scrollIndex + 1);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const itemWidth = el.clientWidth;
      if (itemWidth > 0) {
        const newIndex = Math.round(el.scrollLeft / itemWidth);
        setScrollIndex(newIndex);
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  if (totalItems === 0) {
    return (
      <section className={cn("flex flex-col w-full h-full text-zinc-100 p-3 sm:p-4 overflow-hidden min-h-0 modal-bg", className)}>
        <div className="flex items-center justify-between p-1 shrink-0 mb-3">
          <Label className="text-sm font-semibold tracking-widest uppercase text-zinc-400 sm:text-base">Skills</Label>
          {onClose && (
            <button onClick={onClose} aria-label="Close modal">
              <img src="/images/x.svg" alt="close" className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="text-center text-zinc-500 text-sm p-8 flex-1 flex items-center justify-center">No skills available.</div>
      </section>
    );
  }

  return (
    <section className={cn("flex flex-col w-full h-full text-zinc-100 p-3 sm:p-4 overflow-hidden min-h-0 modal-bg", className)}>
      {/* Шапка */}
      <div className="flex items-center justify-between shrink-0 px-1 mb-3">
        <Label className="text-sm font-semibold tracking-widest uppercase text-zinc-400 sm:text-base">Skills</Label>
        {onClose && (
          <button
            className="w-7 h-7 sm:w-8 sm:h-8 border border-white/20 flex justify-center items-center rounded-md cursor-pointer transition-colors hover:bg-white/5"
            onClick={onClose}
            aria-label="Close modal"
          >
            <img src="/images/x.svg" draggable={false} alt="close" className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Тело слайдера */}
      <div className="relative flex items-center justify-center w-full h-full bg-[#110c17]/60 rounded-xl border border-white/5 overflow-hidden flex-1 min-h-0">
        <div
          ref={containerRef}
          className="flex w-full h-full overflow-x-auto scrollbar-hide snap-x snap-mandatory rounded-xl"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shrink-0 w-full h-full snap-start flex flex-col sm:flex-row items-center justify-center px-10 sm:px-14 gap-4 sm:gap-6 overflow-y-auto custom-scrollbar"
              style={{ scrollSnapAlign: "start" }}
            >
              {skill.icon && (
                <img
                  draggable={false}
                  src={skill.icon}
                  alt={skill.title}
                  className="object-contain w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-lg pointer-events-none shrink-0" 
                />
              )}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 sm:gap-2 min-w-0 max-w-xs sm:max-w-none pb-4 sm:pb-0">
                <h3 className="select-none text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white w-full truncate">
                  {skill.title}
                </h3>
                <p className="select-none text-xs sm:text-sm text-zinc-400 font-light leading-relaxed line-clamp-4 sm:line-clamp-none">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Навигационные стрелки */}
        <div className="flex justify-between w-full h-full absolute top-0 left-0 items-center z-10 px-1 pointer-events-none">
          <button
            onClick={scrollLeft}
            className={cn(
              "p-2 text-white transition-opacity scroll-btn pointer-events-auto rounded-lg bg-black/10 hover:bg-black/30 backdrop-blur-xs",
              scrollIndex > 0
                ? "cursor-pointer opacity-100"
                : "opacity-0 pointer-events-none invisible"
            )}
            aria-label="Scroll left"
          >
            <img src="/arrow-left.svg" alt="Scroll left" draggable={false} className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className={cn(
              "p-2 text-white transition-opacity scroll-btn pointer-events-auto rounded-lg bg-black/10 hover:bg-black/30 backdrop-blur-xs",
              scrollIndex < totalItems - 1
                ? "cursor-pointer opacity-100"
                : "opacity-0 pointer-events-none invisible"
            )}
            aria-label="Scroll right"
          >
            <img src="/arrow-right.svg" alt="Scroll right" draggable={false} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillCard;