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
    <div className={cn(className, "w-[100%] h-[320px] outline")}>
      
    </div>
  );
};

export default Header;
