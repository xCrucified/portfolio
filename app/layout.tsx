import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/imports";
import "./globals.css";
import CursorShadow from "@/components/shared/cursorShadows";

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