'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import AllModalWindow from "./modals/modalAllBtn";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={cn(className, "flex items-center justify-center p-10 bg-gray-100 shadow-md fixed top-0 left-0 right-0 z-1")}>
      <div className="flex items-center justify-around w-full space-x-[1450px] h-[80px]">
        <div className="flex items-center space-x-4 z-1">
          <button className="w-[35px] h-[35px] hover:bg-inherit" onClick={() => setIsModalOpen(!isModalOpen)}>
          {isModalOpen && <AllModalWindow />}
            {
              <img
              src="/images/list.svg"
              alt="Logo"
              className={`h-10 w-10 ${
                isHovered ? "scale-120 duration-200" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          }
          </button>
        </div>
        
        <div className="flex self-center w-[100%] justify-center items-center absolute left-0 right-0 z-0">
          <Link className="text-[30px] font-bold hover:scale-110 duration-200" href={"/"}>Portfolio</Link>
        </div>
        
        <div className="flex space-x-6 text-lg">
          <a href="/home" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
