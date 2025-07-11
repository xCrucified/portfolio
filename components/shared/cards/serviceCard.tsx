import { cn, Label } from "@/lib/imports";
import React from "react";

interface Props {
  className?: string;
  onClose?: () => void;
}

export const ServiceCard: React.FC<Props> = ({ className, onClose }) => {
  return (
    <section
      className={cn(
        "flex flex-col text-zinc-100 p-3 rounded-xl gap-2 w-full modal-bg ",
        className
      )}
    >
      <Label>Services</Label>
      <div className="grid grid-cols-2 grid-rows-2 gap-5  bg-[#110c17] p-4 overflow-y-auto rounded-lg">
        <div className="flex justify-center items-center h-36 outline">
          
        </div>
        <div className="flex justify-center items-center h-36 outline"></div>
        <div className="flex justify-center items-center h-36 outline"></div>
        <div className="flex justify-center items-center h-36 outline"></div>
      </div>
      {/* <div className="w-full h-8 flex items-center ml-1 justify-between">
        <h2 className="font-light">Services</h2>
        <button
          className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer mr-[5px]"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src="/images/x.svg" alt="close" />
        </button>
      </div>
      <div className="w-full flex flex-col gap-4 p-4 bg-[#120d18] rounded-lg overflow-auto max-h-[600px]">
        <a className="w-[70%] self-center h-full block">
          <img
            src="/images/services.png"
            alt="GitHub profile"
            className="object-contain w-full h-80 rounded-lg pointer-events-none"
          />
        </a>
        <div className="flex flex-col gap-4 font-light text-base leading-relaxed text-[#EFEDFD]">
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li>Web application development (frontend and backend)</li>
            <li>API and microservices development (C#, ASP.NET)</li>
            <li>UI/UX interfaces (React, Angular)</li>
            <li>Network programming (UDP, SMTP, TCP)</li>
            <li>Multithreading and asynchronous programming in C#</li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default ServiceCard;
