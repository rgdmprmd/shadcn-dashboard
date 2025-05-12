"use client";

import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="row-start-2 text-sm/6 font-[family-name:var(--font-geist-mono)] max-w-[600px]">
      <p>
        404-NotFound: <span className="text-muted-foreground">Page you are looking for either under construction, or might be broken. Let me bring you</span>{" "}
        <Link href="/" className="hover:underline hover:underline-offset-4">
          back home.
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
