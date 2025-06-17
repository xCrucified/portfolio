import type { Metadata } from "next";
import "./globals.css";
import { Orbitron } from "next/font/google";
import { cn } from "@/lib/utils";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  weight: ['400'],
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
    <html lang="en" className={cn(orbitronFont.className, "bg-[#1a131f]")}>
      <body className={`orbitron bg-main h-[100vh]`}>{children}</body>
    </html>
  );
}
