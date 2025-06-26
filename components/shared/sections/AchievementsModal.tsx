import { cn } from "@/lib/imports";
import React from "react";

interface Props {
  className?: string;
  onClose: () => void;
}

export const AchievementsModalWindow: React.FC<Props> = ({
  className,
  onClose,
}) => {
  return (
    <section
      className={cn(
        "flex flex-col info-panel text-zinc-100 p-3 rounded-xl  gap-2  w-full max-w-3xl bg-neutral-950",
        className
      )}
    >
      <div className="w-full h-8 flex items-center ml-1 justify-between">
        <h2 className="font-light">Achievements</h2>
        <button
          className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer mr-[5px]"
          onClick={onClose}
        >
          <img src="/images/x.svg" alt="close"></img>
        </button>
      </div>
      <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg">
        <img
          src="/images/achievs.png"
          alt=""
          className="object-cover w-full h-80 rounded-lg pointer-events-none"
        />
        <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
          <h3 className="text-xl font-normal">
            Built full-stack projects including: NextShop – online clothing
            store (Next.js) TikTok-like server – backend in C# Telegram bot –
            multifunctional bot in C#
          </h3>

          <p className="opacity-70">
            Languages: C++, C#, Java, JavaScript, TypeScript Frameworks: React,
            Angular, Next.js Backend: .NET, ASP.NET Web API/MVC Databases:
            MySQL, SQLite, Prisma
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsModalWindow;
