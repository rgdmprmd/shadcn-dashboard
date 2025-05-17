"use client";

import { User } from "@/types/auth";
import React from "react";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/useAuthStore";

export const StyledJson = (data: User) => {
  const { name, email } = data;

  const logout = useAuthStore.useLogout();

  return (
    <div className="flex flex-col gap-2">
      <pre className="max-w-[600px] p-6 border overflow-hidden text-ellipsis">{JSON.stringify({ name, email }, null, 2)}</pre>
      <Button variant="default" onClick={logout} className="cursor-pointer">
        Logout
      </Button>
    </div>
  );
};
