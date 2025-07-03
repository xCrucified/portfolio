"use client";

import { useEffect, useState } from "@/lib/imports";

export default function CursorShadow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsSafari(/^((?!chrome|android).)*safari/i.test(ua));
    if (isSafari) {
      document.body.style.cursor = "none";
    }
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 bg-white/10 z-[9999]"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        transition: "transform 0.05s ease",
        boxShadow: isSafari
          ? "none"
          : "20px 15px 81px 32px rgba(255,255,255,0.13)",
      }}
    />
  );
}
