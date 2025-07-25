"use client";

import { cn, Label } from "@/lib/imports";
import React, { useRef, useState, useEffect } from "react";
import EmptyItemError from "../emptyItem";

interface Props {
  className?: string;
  onClose?: () => void;
  skills?: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export const SkillCard: React.FC<Props> = ({ className, onClose, skills }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const itemWidth = 600;
  const gap = 1;
  const totalItems = skills?.length ?? 0;

  const scrollToIndex = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const offset = index * (itemWidth + gap);
    el.scrollTo({ left: offset, behavior: "smooth" });
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

    const preventTouchMove = (e: TouchEvent) => e.preventDefault();
    el.addEventListener("touchmove", preventTouchMove, { passive: false });

    return () => el.removeEventListener("touchmove", preventTouchMove);
  }, []);

  if (totalItems === 0) return <EmptyItemError />;

  if (!skills || skills.length === 0) {
    return <EmptyItemError />;
  }

  return (
    <section className={cn("flex flex-col outline modal-bg p-2", className)}>
      <div className="flex items-center justify-between p-1">
        <Label className="font-light p-1">Skills</Label>
        {onClose && (
          <button
            className="w-6 h-6 border border-[#ffffff61] flex justify-center items-center rounded-sm cursor-pointer"
            onClick={onClose}
            aria-label="Close modal"
          >
            <img src="/images/x.svg" draggable={false} alt="close" />
          </button>
        )}
      </div>

      <div className="relative flex items-center justify-center w-full h-[300px] bg-[#120d18] rounded-2xl">
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory m-4 rounded-2xl"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[100%] h-[300px] snap-start flex items-center px-10 gap-4 justify-center"
              style={{ scrollSnapAlign: "start" }}
            >
              {skill.icon && (
                <img
                  draggable={false}
                  src={skill.icon}
                  alt="image is not provided"
                  className="object-cover w-80 h-60 rounded-lg pointer-events-none shadow-2xl"
                />
              )}
              <div className="flex flex-col items-center mt-3 gap-2 text-center">
                <h3 className="select-none text-xl font-semibold text-white">
                  {skill.title}
                </h3>
                <p className="select-none text-gray-300">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-[100%] h-[100%] absolute top-0 left-0 items-center z-10 px-1">
          <button
            onClick={scrollLeft}
            className={cn(
              "px-2 py-1 rounded text-white transition-opacity h-[100%]",
              scrollIndex > 0
                ? "cursor-pointer opacity-100"
                : "opacity-25 pointer-events-none invisible"
            )}
            aria-label="Scroll left"
          >
            <img src="/arrow-left.svg" alt="Scroll left" draggable={false} />
          </button>
          <button
            onClick={scrollRight}
            className={cn(
              "px-2 py-1 rounded text-white transition-opacity h-[100%]",
              scrollIndex < totalItems - 1
                ? "cursor-pointer opacity-100"
                : "opacity-25 pointer-events-none invisible"
            )}
            aria-label="Scroll right"
          >
            <img src="/arrow-right.svg" alt="Scroll right" draggable={false} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillCard;
