import { cn } from "@/lib/imports";
import React from "react";

interface Props {
  className?: string;
  onClose: () => void;
}

export const ResumeCard: React.FC<Props> = ({ className, onClose }) => {
  return (
    <section
      className={cn(
        "flex flex-row info-panel text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl bg-neutral-950 modal-bg",
        className
      )}
    >
      <button
        className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center rounded-xs items-center cursor-pointer mr-[5px]"
        onClick={onClose}
        aria-label="Close modal"
      >
        <img draggable={false} src="/images/x.svg" alt="close" />
      </button>
      <a href="/files/Kononchuk-Maksym-CV.pdf" download>
        Download Kononchuk-Maksym-CV.pdf
      </a>
    </section>
  );
};

export default ResumeCard;
