"use client";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Loading from "@/components/shared/loading";
import Main from "@/components/shared/main";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-screen">
      <Header className="w-full" />
      <Main className="w-full" />
      <Footer className="w-full" />
    </div>
  );
}
