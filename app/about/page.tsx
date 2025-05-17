"use client";

import React from "react";

const AboutPage = () => {
  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>Hello</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4 text-muted-foreground">
        <p>
          You can call me <span className="text-accent-foreground">Rangga</span>, a web developer who interested in an intersection between art and technology.
        </p>
        <p>
          Interested in <span className="text-accent-foreground">Javascript</span> ecosystem like <span className="text-accent-foreground">React(Nextjs and Typescript)</span>.
        </p>
        <p>Currently stay in Kuala Lumpur, Malaysia. Work as Technical Solution Specialist in TDCX Malaysia and mainly focusing on javascript in a daily basis.</p>
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
