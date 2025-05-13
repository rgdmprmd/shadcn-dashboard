"use client";

import Link from "next/link";
import React from "react";

const FetchPage = () => {
  return (
    <>
      <header className="flex items-center gap-2 hover:underline hover:underline-offset-4">
        <Link href="/learn" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          ← Back
        </Link>
      </header>
      <main className="flex flex-col row-start-2 gap-[24px]">
        <h1>Fetch</h1>
        <div className="flex flex-col justify-center max-w-[600px] gap-4">
          <p className="text-muted-foreground">Next.js has many ways to fetch data. This page is utilized as my personal lab, to learn about each fetch method behavior.</p>
          <ol className="list-inside list-decimal text-sm/6 font-[family-name:var(--font-geist-mono)]">
            <li className="text-muted-foreground hover:text-accent-foreground">
              <Link href="/fetch/csr" className="text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4">
                CSR (Client-Side Rendering)
              </Link>
            </li>
            <li className="text-muted-foreground hover:text-accent-foreground">
              <Link href="/fetch/ssr" className="text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4">
                SSR (Server-Side Rendering)
              </Link>
            </li>
            <li className="text-muted-foreground hover:text-accent-foreground">
              <Link href="/fetch/ssg" className="text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4">
                SSG (Static Site Generation)
              </Link>
            </li>
            <li className="text-muted-foreground hover:text-accent-foreground">
              <Link href="/fetch/isr" className="text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4">
                ISR (Incremental Static Regeneration)
              </Link>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
};

export default FetchPage;
