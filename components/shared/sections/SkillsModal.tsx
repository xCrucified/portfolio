import { cn } from '@/lib/imports';
import React from 'react';
import SkillCard from '../cards/skillCard';

interface Props {
  className?: string;
  onClose?: () => void;
}

export const SkillsModalWindow: React.FC<Props> = ({ className, onClose }) => {
  return (
    <SkillCard />
  );
};

export default SkillsModalWindow;
