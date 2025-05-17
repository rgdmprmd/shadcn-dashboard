"use client";

import React from "react";
import Link from "next/link";
import { LoginForm } from "@/components/login-form";
import withAuth from "@/components/with-auth";

const LoginPage = () => {
  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>Login</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4">
        <p className="text-muted-foreground">This route you only can access if you are un-authenticated user. Once you already authenticated, you will be redirect to another place.</p>
        <p className="text-muted-foreground">
          If you doesn&apos;t have an account, you can do{" "}
          <Link href="/auth/register" className="text-accent-foreground text-sm/6 font-[family-name:var(--font-geist-mono)] hover:underline hover:underline-offset-4">
            register
          </Link>
          .
        </p>
        <div className="p-6 md:p-20 border">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default withAuth(LoginPage, "auth");
