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
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

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
        "flex flex-col text-zinc-100 w-full max-w-4xl mx-auto p-3 sm:p-5 max-md:overflow-y-auto modal-bg",
        className,
      )}
    >
      <div className="flex w-full justify-between items-center mb-4 shrink-0 px-1">
        <Label className="text-sm font-semibold tracking-widest uppercase text-zinc-400 sm:text-base">
          Contact
        </Label>
        <button
          className="w-8 h-8 flex justify-center bg-[#1a131f] border border-white/10 rounded-md items-center cursor-pointer transition-colors hover:bg-white/10"
          onClick={onClose}
          aria-label="Close modal"
          {...stopDragProps}
        >
          <img src="/images/x.svg" alt="close" className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col bg-[#110c17]/60 rounded-xl p-5 sm:p-6 gap-6 flex-1 overflow-y-auto custom-scrollbar">        
        <div className="flex flex-col gap-2 w-full shrink-0 text-left">
          <Label className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-100">
            Let's get in touch
          </Label>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            I would love to hear from you. Whether you have a project in mind, a
            question about my services, or just want to say hello, feel free to
            reach out using the contact form.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full mt-2">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              {...stopDragProps}
              className="w-full sm:w-1/2 p-3 text-sm focus:outline-none rounded-lg bg-[#17111c] text-zinc-100 border border-white/5 focus:border-white/20 transition-all placeholder:text-zinc-600"
              placeholder="Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              {...stopDragProps}
              className="w-full sm:w-1/2 p-3 text-sm focus:outline-none rounded-lg bg-[#17111c] text-zinc-100 border border-white/5 focus:border-white/20 transition-all placeholder:text-zinc-600"
              placeholder="Email"
            />
          </div>
          
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            {...stopDragProps}
            className="w-full h-32 sm:h-40 resize-none border border-white/5 bg-[#17111c] cursor-text focus:outline-none rounded-lg p-3 text-sm focus:border-white/20 transition-all placeholder:text-zinc-600"
            placeholder="Message"
            draggable={false}
          />
          
          <button
            onClick={sendEmail}
            disabled={loading}
            {...stopDragProps}
            className="flex justify-center items-center w-full h-11 sm:h-12 bg-[#1a131f] border border-white/10 rounded-lg text-zinc-100 font-medium hover:bg-[#2a1f2f] transition-all cursor-pointer active:scale-[0.99] disabled:opacity-50 mt-1"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactCard;