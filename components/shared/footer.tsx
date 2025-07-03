import { cn, Label } from "@/lib/imports";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <motion.footer
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.6}}
      className={cn("h-22 flex items-center w-full absolute", className)}
    >
      <Label className="flex w-[23%] justify-center">
        © {new Date().getFullYear()} Max Kononchuk. All rights reserved.
      </Label>
    </motion.footer>
  );
};

export default Footer;
