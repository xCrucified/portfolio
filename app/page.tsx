"use client";
import Loading from "@/components/shared/loading";
import { Footer, Header, Main, useEffect, useState } from "@/lib/imports";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      // Simulate loading or perform any async initialization here
      // For demonstration, we'll use a timeout
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } catch (error) {
      // Handle error if needed
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header className="w-[100%]" />
      <Main className="w-[100%]" />
      <Footer className="w-[100%]" />
    </div>
  );
}
