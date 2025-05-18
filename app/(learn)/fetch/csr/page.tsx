"use client";

import Apod from "@/components/apod";
import React, { useEffect, useState } from "react";

export interface ApodProps {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url?: string;
}

const CsrPage = () => {
  const [apod, setApod] = useState<ApodProps>();
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
  //     .then((res) => res.json())
  //     .then((res) => setApod(res))
  //     .catch((err) => console.log("ERR:", err));
  // }, []);

  useEffect(() => {
    // Emulate a delay using setTimeout
    const delay = setTimeout(() => {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then((res) => res.json())
        .then((res) => {
          setApod(res);
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((err) => {
          console.log("ERR:", err);
          setLoading(false); // Ensure loading is false if there's an error
        });
    }, 2000); // Delay of 2 seconds before making the API call

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(delay);
  }, []);

  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>CSR (Client-Side Rendering)</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4 text-muted-foreground">
        <p>This method is the OG-way of fetching data. Before all the Server-side is a thing, CSR is the only way.</p>
        <p>The behavior of this method is page rendered right away even the fetch is still loading. You even can see the loading state.</p>
      </div>
      {loading && <div className="text-sm/6 font-[family-name:var(--font-geist-mono)] animate-pulse">Relax, let this loading first</div>}
      {apod && <Apod apod={apod} />}
    </main>
  );
};

export default CsrPage;
