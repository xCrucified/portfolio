
import { useEffect } from '@/lib/imports';
import ResumeCard from '../cards/resumeCard';
interface Props {
  className?: string;
  onClose: () => void;
}

export const ResumeModalWindow: React.FC<Props> = ({ className, onClose }) => {
  useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
  
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);
    
  return <ResumeCard onClose={onClose}/>;
};

export default ResumeModalWindow;