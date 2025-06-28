import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import CursorShadow from "@/components/shared/cursorShadows";

const googleFont = Roboto({
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
    <html lang="en" className={cn(googleFont.className, "bg-[#1a131f]")}>
      <body className={`orbitron bg-main h-[100vh]`}>
        <CursorShadow />
        {children}
      </body>
    </html>
  );
}
