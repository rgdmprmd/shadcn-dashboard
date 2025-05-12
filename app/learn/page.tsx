"use client";

import Link from "next/link";
import React from "react";

const LearnPage = () => {
  return (
    <>
      <header className="flex items-center gap-2 hover:underline hover:underline-offset-4">
        <Link href="/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          ← Back
        </Link>
      </header>
      <main className="flex flex-col row-start-2 gap-[24px]">
        <h1>Learn by doing</h1>
        <p className="max-w-[600px] text-muted-foreground">This section is dedicated for education purposes. I liked to experiment about how to do things.</p>
        <ol className="list-inside list-decimal text-sm/6 font-[family-name:var(--font-geist-mono)]">
          <li>
            <Link href="/fetch" className="text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4">
              Fetch (SSR/CSR/SSG/ISR)
            </Link>
          </li>
          <li>
            <Link href="/auth" className="text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4">
              Auth (Email/Oauth)
            </Link>
          </li>
          <li>
            <Link href="/deployment" className="text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4">
              Deployment (Self-hosting/Docker/etc)
            </Link>
          </li>
        </ol>
        <div className="flex gap-4 items-center">
          <a href="https://rgdmprmd.com" className="flex items-center gap-2 hover:underline hover:underline-offset-4" target="_blank">
            Lets Talk!
          </a>
        </div>
      </main>
    </>
  );
};

export default LearnPage;
