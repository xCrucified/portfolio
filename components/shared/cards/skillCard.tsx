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

  const itemWidth = 1200; //px
  const gap = 16; //*4
  const totalItems = Array.isArray(skills) ? skills.length : 0;

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

  return (
    <div className={className}>
      <section
        className={cn(
          "flex flex-col text-zinc-100 p-3 rounded-xl gap-2 w-[700px] max-w-3xl bg-neutral-950 modal-bg h-[450px]",
          className
        )}
      >
        <div className="w-full h-8 flex items-center ml-1 justify-between">
          <h2 className="font-light">Skills</h2>
          <button
            className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer mr-[5px]"
            onClick={onClose}
            aria-label="Close modal"
          >
            <img src="/images/x.svg" draggable={false} alt="close" />
          </button>
        </div>

        <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg overflow-y-auto">
          {/* Scroll container */}
          <div
            ref={containerRef}
            className="w-full overflow-hidden touch-none select-none"
            onWheel={(e) => e.preventDefault()}
          >
            <div className="flex w-max h-[100%]">
              {(skills ?? []).map((x, index) => (
                <div className="flex w-[15%] h-[100%] self-center flex-shrink-0">
                  <div className="flex items-center justify-center w-[25%] h-80">
                    <img
                      draggable={false}
                      src={x.icon}
                      alt={x.title}
                      className="object-contain h-100 max-w-full rounded-lg pointer-events-none"
                    />
                  </div>
                  <div className="h-[100%] w-1 bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-25 mr-3" />
                  <div className="flex flex-col gap-6 h-[100%] max-w-[500px]">
                    <div className="flex flex-col w-[100%] h-[25%]">
                      <h1 className="text-md font-bold">LoremIpsum</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Illo iure, aliquid id quas minima dolores
                        laboriosam eveniet eius laudantium deleniti itaque
                        tenetur, ducimus nobis. Cumque ipsa sint quos quo
                        asperiores.
                      </p>
                    </div>
                    <div className="flex flex-col w-[100%] h-[25%] gap-1">
                      <h1 className="text-md font-bold">LoremIpsum</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Illo iure, aliquid id quas minima dolores
                        laboriosam eveniet eius laudantium deleniti itaque
                        tenetur, ducimus nobis. Cumque ipsa sint quos quo
                        asperiores.
                      </p>
                    </div>
                    <div className="flex flex-col w-[100%] h-[25%] gap-1">
                      <h1 className="text-md font-bold">LoremIpsum</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Illo iure, aliquid id quas minima dolores
                        laboriosam eveniet eius laudantium deleniti itaque
                        tenetur, ducimus nobis. Cumque ipsa sint quos quo
                        asperiores.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll buttons */}
          <div className="flex justify-between absolute w-[91%] top-[390px]">
            <button
              onClick={scrollLeft}
              className={`px-2 py-1 rounded text-white transition-opacity ${
                scrollIndex > 0
                  ? "cursor-pointer"
                  : "opacity-25 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <img src="/arrow-left.svg" draggable={false} alt="" />
            </button>
            <button
              onClick={scrollRight}
              className={`px-2 py-1 rounded text-white transition-opacity ${
                scrollIndex < totalItems - 1
                  ? "cursor-pointer"
                  : "opacity-25 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <img src="/arrow-right.svg" draggable={false} alt="" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillCard;
