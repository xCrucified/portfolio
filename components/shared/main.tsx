import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const leftPanel = [
  { id: 'AboutMe', label: 'About Me', icon: '/assets/images/about.svg' },
  { id: 'Projects', label: 'Projects', icon: '/assets/images/projects.svg' },
  { id: 'Services', label: 'Services', icon: '/assets/images/services.svg' },
  { id: 'Skills', label: 'Skills', icon: '/assets/images/tools.svg' },
  { id: 'Experience', label: 'Experience', icon: '/assets/images/book.svg' },
  { id: 'Testimonials', label: 'Testimonials', icon: '/assets/images/testimonials.svg' },
  { id: 'Gallery', label: 'Gallery', icon: '/assets/images/gallery.svg' },
  { id: 'Blog', label: 'Blog', icon: '/assets/images/blog.svg' },
  { id: 'Achievements', label: 'Achievements', icon: '/assets/images/award.svg' },
  { id: 'Contact', label: 'Contact', icon: '/assets/images/contact.svg' },
];


export const Main: React.FC<Props> = ({ className }) => {

  const tabs = {
    // "Login&Security": () => <LoginSecurity />,
    // "your-orders": () => <YourOrders />,
    // "your-addresses": () => <YourAddresses />,
    // "customer-service": () => <CustomerService/>,
    // "exit": () => null,
    // "your-payments": () => <YourPayments/>,
    // "gift-cards": () => <GiftCards/>,
    // "your-messages": () => <YourMessages/>,
  } as const;

  return (
    <div
      className={cn(
        className,
        "flex justify-center  w-[100%] h-[100%] p-[50px]"
      )}
    >
      <div className="flex w-[1920px] h-[83vh] outline-4 outline-green-500 justify-between">
        <div className="flex flex-col gap-4 outline-4 outline-red-500 w-[10%] h-[100%] p-5">

        </div>
        <div className="outline-4 outline-blue-950-500 w-[80%] h-[100%] p-5">
          <div className="w-[100%] h-[100%] bg-amber-300"></div>
        </div>
        <div className="outline-4 outline-blue-500 w-[10%] h-[100%] p-5">
          <div className="w-[100%] h-[100%] bg-amber-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
