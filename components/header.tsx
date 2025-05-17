"use client";

import React from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const Header = () => {
  return (
    <header className="flex items-center gap-2">
      <Breadcrumbs />
    </header>
  );
};
