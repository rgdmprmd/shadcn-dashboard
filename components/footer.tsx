"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <Link className="flex items-center gap-2 text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4" href="/learn">
        Learn
      </Link>
      <Link className="flex items-center gap-2 text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4" href="/examples">
        Examples
      </Link>
      <Link className="flex items-center gap-2 text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4" href="/about">
        About
      </Link>
    </footer>
  );
};
