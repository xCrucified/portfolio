import { cn, Label } from "@/lib/imports";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("h-22 text-white flex items-center bottom-0 w-full absolute", className)}>
      <Label className="flex w-[23%] justify-center">
        © {new Date().getFullYear()} Max Kononchuk. All rights reserved.
      </Label>
    </footer>
  );
};

export default Footer;
