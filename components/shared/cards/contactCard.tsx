"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  className?: string;
  onClose: () => void;
}

export const ContactCard: React.FC<Props> = ({ className, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  const disableDragPropagation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  const stopDragProps = {
    onPointerDown: disableDragPropagation,
    onMouseDown: disableDragPropagation,
    onTouchStart: disableDragPropagation,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === " ") {
        e.stopPropagation();
      }
    },
    "data-drag": "false",
  };

  return (
    <section
      className={cn(
        "flex flex-col w-full md:h-full max-md:h-auto max-md:max-h-[55vh] text-zinc-100 p-3 sm:p-4 md:overflow-hidden max-md:overflow-y-auto min-h-0 modal-bg",
        className,
      )}
    >
      <div className="flex w-full justify-between items-center mb-3 shrink-0 px-1">
        <Label className="text-sm font-semibold tracking-widest uppercase text-zinc-400 sm:text-base">
          Contact
        </Label>
        <button
          className="w-7 h-7 sm:w-8 sm:h-8 border border-white/20 flex justify-center bg-[#1a131f] rounded-md items-center cursor-pointer transition-colors hover:bg-white/5"
          onClick={onClose}
          aria-label="Close modal"
          {...stopDragProps}
        >
          <img src="/images/x.svg" alt="close" className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row bg-[#110c17]/60 w-full h-full rounded-xl p-3 sm:p-5 gap-6 overflow-y-auto custom-scrollbar min-h-0 flex-1">        
        <div className="flex flex-col gap-2 w-full lg:w-1/2 shrink-0 lg:justify-center text-center lg:text-left">
          <Label className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-100">
            Let's get in touch
          </Label>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            I would love to hear from you. Whether you have a project in mind, a
            question about my services, or just want to say hello, feel free to
            reach out using the contact form.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2 min-h-0 justify-between">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                {...stopDragProps}
                className="w-full sm:w-1/2 p-3 text-sm focus:outline-hidden rounded-lg bg-[#17111c] text-zinc-100 border border-white/5 focus:border-white/20 transition-colors"
                placeholder="Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                {...stopDragProps}
                className="w-full sm:w-1/2 p-3 text-sm focus:outline-hidden rounded-lg bg-[#17111c] text-zinc-100 border border-white/5 focus:border-white/20 transition-colors"
                placeholder="Email"
              />
            </div>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              {...stopDragProps}
              className="w-full h-28 sm:h-36 resize-none border border-white/5 bg-[#17111c] cursor-text focus:outline-hidden rounded-lg p-3 text-sm focus:border-white/20 transition-colors"
              placeholder="Message"
              draggable={false}
            />
          </div>
          
          <button
            onClick={sendEmail}
            disabled={loading}
            {...stopDragProps}
            className="flex justify-center items-center w-full h-11 p-2 sm:h-12 bg-[#1a131f] border border-white/10 rounded-lg text-zinc-100 font-medium hover:bg-[#2a1f2f] transition-all cursor-pointer active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactCard;