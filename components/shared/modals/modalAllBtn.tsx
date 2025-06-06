import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const AllModalWindow: React.FC<Props> = ({ className }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-2">
      <div className="absolute w-[100%] h-[100%] bg-black opacity-30 z-5"></div>
      <div
        className={cn(
          className,
          "flex w-[100%] h-[100%] justify-center items-center fixed top-0 left-0 z-10"
        )}
      ></div>
    </div>
  );
};

export default AllModalWindow;
