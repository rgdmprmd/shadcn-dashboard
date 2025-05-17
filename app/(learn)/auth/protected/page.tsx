"use client";

import { StyledJson } from "@/components/styled-json";
import withAuth from "@/components/with-auth";
import useAuthStore from "@/store/useAuthStore";
import React from "react";

const ProtectedPage = () => {
  const user = useAuthStore.useUser();

  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>Protected</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4">
        <p className="text-muted-foreground">This route is accessible only to authenticated users. If you are not authenticated, you will be redirected to the login page.</p>
        {user && <StyledJson {...user} />}
      </div>
    </main>
  );
};

export default withAuth(ProtectedPage, "all");
