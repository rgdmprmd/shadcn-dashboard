"use client";

import React, { Fragment } from "react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const buildHref = (index: number) => "/" + segments.slice(0, index + 1).join("/");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const href = buildHref(index);
          const isLast = index === segments.length - 1;
          const label = decodeURIComponent(segment).replace(/-/g, " ");

          return (
            <Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={href} className={isLast ? "font-semibold text-foreground" : ""}>
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
