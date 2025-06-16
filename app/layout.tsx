import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/header";

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
    <html lang="en">
      <body className={`nunito-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
