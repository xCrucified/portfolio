import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={"flex w-[100%] h-[320px] outline-4"}>
      <Container
        className={cn(className, "flex flex-1/2 w-[100%] h-[100%] outline")}
      >
        <div className="w-[50%] h-[100%] outline-2 bg-gray-200 flex items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
        </div>
        <div className="w-[50%] h-[100%] outline-2 bg-gray-300 flex items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
