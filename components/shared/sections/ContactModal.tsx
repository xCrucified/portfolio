import { cn } from '@/lib/imports';
import React from 'react';
import ContactCard from '../cards/contactCard';

interface Props {
  className?: string;
  onClose: () => void;
}

export const ContactModalWindow: React.FC<Props> = ({ className, onClose }) => {
  return (
     <ContactCard onClose={onClose} />
  );
};

export default ContactModalWindow;