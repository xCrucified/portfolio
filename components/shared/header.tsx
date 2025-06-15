"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import AllModalWindow from "./modals/modalAllBtn";
import { Container } from "./container";

interface Props {
  className?: string;
}
const links = [
  { href: "/", label: "about" },
  { href: "/", label: "contact" },
  { href: "/", label: "resume" },
];

export const Header: React.FC<Props> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-[100%] h-[180px] outline">
      <Container
        className={cn(
          "flex w-[100%] h-[100%] justify-between items-center outline-3",
          className
        )}
      >
        <Link
          href={"/"}
          className="font-bold text-5xl text-white header-animation"
        >
          Portfolio
        </Link>

        <div className="flex items-center gap-4 text-white font-bold text-lg">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="header-animation">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Header;
