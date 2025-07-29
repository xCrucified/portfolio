import { cn } from '@/lib/imports';
import React, { useEffect } from 'react';
import ContactCard from '../cards/contactCard';

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
     <ContactCard onClose={onClose} />
  );
};

export default ContactModalWindow;