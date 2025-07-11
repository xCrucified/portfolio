import { cn } from '@/lib/imports';
import React from 'react';
import ServiceCard from '../cards/serviceCard';

interface Props {
  className?: string;
}

export const ServicesModalWindow: React.FC<Props> = ({ className }) => {
  return (
    <ServiceCard/>
  );
};

export default ServicesModalWindow;
