"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="border-4 border-stone-600 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 gap-[24px] border border-stone-600">
        <h1>Hello, my name is Rangga</h1>
        <ol className="list-inside list-decimal text-sm/6 font-[family-name:var(--font-geist-mono)]">
          <li className="tracking-[-.01em]">Lorem ipsum dolor sit amet.</li>
          <li className="tracking-[-.01em]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore.</li>
        </ol>
        <div className="flex gap-4 items-center">
          <a href="" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            Lets Talk!
          </a>
          <a href="" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            Lets Talk!
          </a>
        </div>
      </main>
      <footer className="border border-stone-600 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
};

export default AboutPage;
