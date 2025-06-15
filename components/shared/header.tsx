'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import AllModalWindow from "./modals/modalAllBtn";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-[100%] h-[180px] outline">
      <Container className={cn("flex w-[100%] h-[100%] justify-between items-center outline-3", className)}>
        <Link href={"/"} className="font-bold text-5xl text-white">
          Portfolio
        </Link>

        <div className="flex items-center gap-4 text-white font-bold text-lg">
          <Link href={"/"}>about</Link>
          <Link href={"/"}>contact</Link>
          <Link href={"/"}>resume</Link>
        </div>

      </Container>
    </div>
  );
};

export default Header;
