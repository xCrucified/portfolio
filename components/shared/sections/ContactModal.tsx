"use client";

import { useEffect } from "react";
import ContactCard from '../cards/contactCard';
import { cn } from "@/lib/imports";

interface Props {
  className?: string;
  onClose: () => void;
}

export const ContactModalWindow: React.FC<Props> = ({ className, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  return (
    <div className={cn("md:min-w-105 md:h-full max-md:fixed max-md:inset-0 max-md:z-9999 max-md:bg-black/50 max-md:backdrop-blur-sm max-md:flex max-md:items-center max-md:justify-center pointer-events-auto", className)}>
      <ContactCard className="max-md:w-[95%] max-md:h-auto max-md:max-h-[50vh] max-md:overflow-y-auto
                              " onClose={onClose} />
    </div>
  );
};

export default ContactModalWindow;