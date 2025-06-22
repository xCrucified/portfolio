'use client';

import { useEffect, useState } from "@/lib/imports";

export default function CursorShadow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 bg-white/10 z-[9999]"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        boxShadow: '0px 15px 41px 32px rgba(255,255,255,0.13)',
        WebkitBoxShadow: '15px 15px 41px 32px rgba(255,255,255,0.13)',
        MozBoxShadow: '0px 0px 11px 32px rgba(255,255,255,0.13)',
        transition: 'transform 0.05s ease',
      }}
    />
  );
}
