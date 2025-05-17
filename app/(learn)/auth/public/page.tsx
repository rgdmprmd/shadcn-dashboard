"use client";

import { StyledJson } from "@/components/styled-json";
import withAuth from "@/components/with-auth";
import useAuthStore from "@/store/useAuthStore";
import React from "react";

const PublicPage = () => {
  const user = useAuthStore.useUser();

  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>Public</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4">
        <p className="text-muted-foreground">This route is accessible to all users. Doesn&apos;t matter you are authenticated or not, you still can access this route.</p>
        {user && <StyledJson {...user} />}
      </div>
    </main>
  );
};

export default withAuth(PublicPage, "optional");
