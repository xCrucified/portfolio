"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";

interface Props {
  className?: string;
}
const links = [
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
  { href: "/resume", label: "resume" },
];

export const Header: React.FC<Props> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="w-[100%] h-[64px] bg-[#1a131f] text-white border-b-[2] border-[#382c3e]">
      <div
        className={cn(
          "flex w-[100%] justify-between content-center h-[100%]",
          className
        )}
      >
        <div className="flex items-center gap-2 justify-start ml-5 w-[30%]">
          <Avatar className="h-[50px] w-[50px] p-1 rounded-2xl">
            <AvatarImage src="/images/owner3.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-2 text-sm gap-1">
            <Label className="opacity-75">Max Kononchuk</Label>
            <Label className="text-[#EFEDFD] opacity-55">
              Software developer
            </Label>
          </div>
        </div>

        <div className="flex w-[100px] outline m-4 rounded-sm bg-[#2C2032]">
          <div className="flex justify-center items-center gap-2 bg-[#382c3e] opacity-90 rounded-sm w-full h-full">
            <div className="w-[8px] h-[8px] bg-[#1FAC71] rounded-full opacity-75"></div>
            <Label className="text-center">available</Label>
          </div>
        </div>

        <div className="flex items-center justify-end mr-5 w-[30%] opacity-90">
          <img src="./images/clock-3.svg" alt="" className="mr-2" />
          {(() => {
            const now = new Date();
            const day = now
              .toLocaleString("en-US", { weekday: "long" })
              .slice(0, 3);
            const month = now
              .toLocaleString("en-US", { month: "long" })
              .slice(0, 3);
            const time = now.toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            });

            return (
              <Label className="text-lg font-light">
                {day}, {month}, {time}
              </Label>
            );
          })()}
        </div>
      </div>
    </header>
  );
};

export default Header;
