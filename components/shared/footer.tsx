import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className="h-22 text-white flex items-center bottom-0 w-full absolute">
      <div className="flex w-[23%] justify-center">
        © {new Date().getFullYear()} Max Kononchuk. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
