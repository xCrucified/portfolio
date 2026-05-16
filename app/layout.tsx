import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import CursorShadow from "@/components/shared/cursorShadows";
import { cn } from "@/lib/imports";
import "./globals.css";

const googleFont = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description: "Portfolio of a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={cn(googleFont.className, "bg-[#0f0b14] select-none")}>
      <body className={`bg-main h-screen`}>
        <CursorShadow />
        {children}
      </body>
    </html>
  );
}