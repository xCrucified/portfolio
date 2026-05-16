"use client";

import { cn } from "@/lib/imports";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}
const links = [
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
  { href: "/resume", label: "resume" },
];

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-21.25 header border-b-[2] border-[#382c3e] absolute top-0 z-1000 rounded-b-lg shadow-lg shadow-black/20 flex items-center justify-center"
    >
      <div
        className={cn(
          "flex w-full justify-between content-center h-full",
          className
        )}
      >
        <div className="flex items-center gap-2 justify-start ml-5 w-[30%]">
          <Avatar className="h-13.75 w-14.25 rounded-md">
            <AvatarImage src="/images/owner3.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-2">
            <Label className="opacity-75 text-md">Max Kononchuk</Label>
            <Label className="opacity-55 text-sm">Software developer</Label>
          </div>
        </div>

        <div className="flex w-27.5 h-10 self-center border-[1] border-[#3b3340] bg-[#3b334050] rounded-sm">
          <div className="flex justify-center items-center gap-2 opacity-90 rounded-xs w-full h-full">
            <div className="w-2.25 h-2 bg-[#1FAC71] rounded-full opacity-75"></div>
            <Label className="text-center text-md">Available</Label>
            <button
              className="p-1 absolute ml-30 outline-0 cursor-pointer"
              onClick={() => console.log("yiooo")}
            />
          </div>
        </div>

        <div className="flex items-center justify-end mr-5 w-[30%] opacity-90">
          <img draggable={false} src="./images/clock-3.svg" alt="" className="mr-2" />
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
    </motion.header>
  );
};

export default Header;
