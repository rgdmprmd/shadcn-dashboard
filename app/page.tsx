"use client";

import React from "react";

const AboutPage = () => {
  return (
    <main className="flex flex-col row-start-2 gap-[24px] ">
      <h1>Hello, my name is Rangga</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4">
        <p className="text-muted-foreground">Welcome in my nest, here i just put everything i want to see/test/taste. Give me a heads up if you found something can be improve in my nest.</p>
      </div>
      <div className="flex gap-4 items-center">
        <a href="https://rgdmprmd.com" className="flex items-center gap-2 hover:underline hover:underline-offset-4" target="_blank">
          Lets Talk!
        </a>
      </div>
    </main>
  );
};

export default AboutPage;
