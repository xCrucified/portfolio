"use client";

import { cn } from "@/lib/imports";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-3 items-center px-6
        h-21.25 
        header 
        border-b-[2] border-[#382c3e] 
        absolute top-0 z-1000 w-full
        rounded-b-lg 
        shadow-lg shadow-black/20
        max-md:flex max-md:justify-between max-md:h-17 max-md:px-4"
    >
      <div className="flex items-center gap-2 justify-start max-md:whitespace-nowrap">
        <Avatar className="h-13.75 w-14.25 max-md:h-10 max-md:w-10 rounded-md">
          <AvatarImage src="/images/owner3.png" />
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ml-2">
          <Label className="opacity-75 text-md max-md:text-sm">
            Max Kononchuk
          </Label>
          <Label className="opacity-55 text-sm max-md:text-xs">
            Software developer
          </Label>
        </div>
      </div>

      <div
        className="flex w-27.5 h-10 max-md:w-22 max-md:h-8 items-center justify-center
                      justify-self-center relative 
                      border-[1] border-[#3b3340] bg-[#3b334050] 
                      rounded-sm gap-2"
      >
        <div className="w-2.25 h-2 max-md:w-1.5 max-md:h-1.5 bg-[#1FAC71] rounded-full opacity-75"></div>
        <Label className="text-center text-md max-md:text-xs">Available</Label>
        <button
          className="absolute inset-0 w-full h-full outline-0 cursor-pointer"
          onClick={() => console.log("yiooo")}
        />
      </div>

      <div className="flex items-center justify-end opacity-90 max-md:hidden">
        <img
          draggable={false}
          src="./images/clock-3.svg"
          alt=""
          className="mr-2"
        />
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
            <Label className="text-lg font-light max-md:text-xs">
              {day}, {month}, {time}
            </Label>
          );
        })()}
      </div>
    </motion.header>
  );
};

export default Header;