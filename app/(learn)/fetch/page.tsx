"use client";

import Link from "next/link";
import React from "react";

const contents = [
  { title: "CSR (Client-Side Rendering)", href: "/fetch/csr" },
  { title: "SSR (Server-Side Rendering)", href: "/fetch/ssr" },
  { title: "SSR-suspense (Server-Side Rendering)", href: "/fetch/ssr-suspense" },
  { title: "SSG (Static Site Generation)", href: "/fetch/ssg" },
  { title: "ISR (Incremental Static Regeneration)", href: "/fetch/isr" },
];

const FetchPage = () => {
  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>Fetch</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4">
        <p className="text-muted-foreground">Next.js has many ways to fetch data. This page is utilized as my personal lab, to learn about each fetch method behavior.</p>
        <ol className="list-inside list-decimal text-sm/6 font-[family-name:var(--font-geist-mono)]">
          {contents.map((content) => (
            <li className="text-muted-foreground hover:text-accent-foreground" key={content.href}>
              <Link href={content.href} className="text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4">
                {content.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default FetchPage;
