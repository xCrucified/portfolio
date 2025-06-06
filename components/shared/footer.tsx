import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "h-[350px] w-full")}>
      <div className="flex justify-center items-center outline w-full h-full">
        <div className="flex justify-between items-center w-[1688px] h-full outline pl-10 pr-10">
          <div>a</div>
          <div className="flex outline w-[1320px] h-[320px] items-center justify-between p-10">
            <div>a</div>
            <div>a</div>
          </div>
          <div>a</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
