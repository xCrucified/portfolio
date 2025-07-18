"use client";

import { cn, Label } from "@/lib/imports";
import React, { useRef, useState, useEffect } from "react";

interface Props {
  className?: string;
  onClose?: () => void;
}

export const SkillCard: React.FC<Props> = ({ className, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 540;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = containerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={className}>
      <section
        className={cn(
          "flex flex-col text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl bg-neutral-950 modal-bg",
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

        <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg overflow-y-auto max-h-[600px]">
          <div className="w-full overflow-x-auto outline" ref={containerRef}>
            <div className="flex gap-4 w-max">
              {[...Array(4)].map((_, index) => (
                <a
                  key={index}
                  className="flex w-[600px] self-center flex-shrink-0"
                >
                  <img
                    draggable={false}
                    src="/images/skills.png"
                    alt="Skills illustration"
                    className="object-contain w-full h-80 rounded-lg pointer-events-none"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-between absolute w-[91%] top-[350px]">
            <button
              onClick={scrollLeft}
              className={`px-2 py-1 rounded text-white ${
                canScrollLeft ? "cursor-pointer" : "opacity-25 pointer-events-none"
              }`}
              aria-label="Scroll left"
              disabled={!canScrollLeft}
            >
              <img src="/arrow-left.svg" draggable={false} alt="" />
            </button>
            <button
              onClick={scrollRight}
              className={`px-2 py-1 rounded text-white ${
                canScrollRight ? "cursor-pointer" : "opacity-25 pointer-events-none"
              }`}
              aria-label="Scroll right"
              disabled={!canScrollRight}
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
