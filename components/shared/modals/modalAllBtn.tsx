import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const AllModalWindow: React.FC<Props> = ({ className }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-2 justify-center items-center">
      <div className="flex justify-center items-center w-full h-[1272px] absolute bottom-0 z-30">
        <div className="absolute w-[100%] h-[97%] bottom-0 bg-black opacity-25 z-2 blur-lg"></div>
        <div className="absolute w-[90%] h-[90%] bg-black opacity-5 z-3 blur-lg bottom-[7%]"></div>
        <div className="absolute w-[70%] h-[80%] bg-black opacity-20 z-3 blur-lg top-[7%]"></div>
      </div>
      <div
        className={cn(
          className,
          "flex w-[100%] h-[100%] justify-center items-center z-10",
        )}
      >
        <div className="flex items-center justify-center w-[1600px] h-[1000px] relative bg-white rounded-lg shadow-lg z-50 glow-modal-style">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-3xl font-bold mb-4">Modal Window</h2>
            <p className="text-lg mb-6">This is the content of the modal window.</p>
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              onClick={() => console.log("Close Modal")}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllModalWindow;
