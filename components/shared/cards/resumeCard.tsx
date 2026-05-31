import { Label } from "@/components/ui/label";
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
        "flex flex-col w-full h-full text-zinc-100 p-3 sm:p-4 overflow-hidden min-h-0 modal-bg",
        className
      )}
    >
      {/* Шапка */}
      <div className="flex w-full justify-between items-center mb-3 shrink-0 px-1">
        <Label className="text-sm font-semibold tracking-widest uppercase text-zinc-400 sm:text-base">
          Resume
        </Label>
        <button
          className="w-7 h-7 sm:w-8 sm:h-8 border border-white/20 flex justify-center bg-[#1a131f] rounded-md items-center cursor-pointer transition-colors hover:bg-white/5"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img draggable={false} src="/images/x.svg" alt="close" className="w-4 h-4" />
        </button>
      </div>

      {/* Внутренний контейнер */}
      <div className="flex flex-col items-center justify-center bg-[#110c17]/60 w-full h-full rounded-xl p-4 sm:p-6 text-center overflow-y-auto custom-scrollbar flex-1 min-h-0">
        <div className="max-w-md flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <img src="/images/resume.svg" alt="resume" className="w-6 h-6 opacity-80" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base sm:text-lg font-medium text-zinc-100">Curriculum Vitae</h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              View or download the full resume to see technical skills, workflow background, and education details.
            </p>
          </div>
          <a 
            href="/files/Kononchuk-Maksym-CV.pdf" 
            download
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium text-zinc-100 bg-[#1a131f] border border-white/10 rounded-lg hover:bg-[#2a1f2f] transition-all cursor-pointer active:scale-95"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeCard;