"use client";
import Loading from "@/components/shared/loading";
import { Footer, Header, Main, useEffect, useState } from "@/lib/imports";

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
    <div>
      <Header className="w-full" />
      <Main className="w-full" />
      <Footer className="w-full" />
    </div>
  );
}
