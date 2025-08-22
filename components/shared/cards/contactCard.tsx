
import { cn, Label } from "@/lib/imports";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Resend } from "resend";

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


  return (
    <section
      className={cn(
        "flex flex-col info-panel text-zinc-100 p-3 rounded-xl gap-2 w-full max-w-3xl bg-neutral-950 modal-bg",
        className
      )}
    >
      <div className="w-full h-8 flex items-center ml-1 justify-between">
        <h2 className="font-light">Contact</h2>
        <button
          className="w-6 h-6 border-[1px] border-[#ffffff61] flex justify-center bg-[#1a131f] rounded-xs items-center cursor-pointer mr-[5px]"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src="/images/x.svg" alt="close" />
        </button>
      </div>

      <div className="flex flex-col h-[500px] bg-[#120d18] rounded-lg p-1">
        {/* Text side */}
        <div className="flex flex-col p-4 gap-2 h-1/2">
          <Label className="text-3xl">Let's get in touch</Label>
          <p className="text-lg opacity-45 font-light">
            I would love to hear from you. Whether you have a project in mind, a question about my services,
            or just want to say hello, feel free to reach out using the contact form below.
          </p>
        </div>

        {/* Input side */}
        <div className="flex flex-col p-4 gap-4 h-[100%] justify-between">
          <div className="flex gap-4 flex-wrap min-w-[100%] justify-center">
            <div className="flex gap-5 w-[100%] h-[20%]">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex w-[50%] p-3 focus:outline-0 rounded-sm bg-[#17111c]"
                placeholder="Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex w-[50%] p-3 focus:outline-0 rounded-sm bg-[#17111c]"
                placeholder="Email"
              />
            </div>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-[150px] max-h-[150px] resize-none border-0 bg-[#17111c]"
              placeholder="Message"
            />
          </div>
          <button
            onClick={sendEmail}
            disabled={loading}
            className="flex justify-center items-center w-[100%] h-[20%] bg-[#1a131f] rounded-md text-zinc-100 hover:bg-[#2a1f2f] transition-colors disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
