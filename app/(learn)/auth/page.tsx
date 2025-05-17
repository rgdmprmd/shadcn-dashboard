"use client";

import { StyledJson } from "@/components/styled-json";
import withAuth from "@/components/with-auth";
import useAuthStore from "@/store/useAuthStore";
import Link from "next/link";
import React from "react";

const AuthPage = () => {
  const user = useAuthStore.useUser();

  const contents = [
    { title: "Login", href: "/auth/login" },
    { title: "Register", href: "/auth/register" },
    { title: "Protected", href: "/auth/protected" },
    { title: "Public", href: "/auth/public" },
  ];

  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>Auth</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4">
        <p className="text-muted-foreground">Authentication pattern using Zustand and JWT. I provide 3 routes here to emulate between public, logged in user, and login route.</p>

        <ol className="list-inside list-decimal text-sm/6 font-[family-name:var(--font-geist-mono)]">
          {contents &&
            contents.map((content) => (
              <li className="text-muted-foreground hover:text-accent-foreground" key={content.href}>
                <Link href={content.href} className="text-muted-foreground hover:text-accent-foreground hover:underline hover:underline-offset-4">
                  {content.title}
                </Link>
              </li>
            ))}
        </ol>
        {user && <StyledJson {...user} />}
      </div>
    </main>
  );
};

export default withAuth(AuthPage, "optional");
