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
     <ContactCard className={cn(className, "")} onClose={onClose} />
  );
};

export default ContactModalWindow;