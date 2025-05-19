"use client";
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useRouter } from "next/router";
import * as React from "react";
// import { ImSpinner8 } from "react-icons/im";

// import apiMock from "@/lib/axios-mock";
import { getFromLocalStorage } from "@/lib/helper";

import useAuthStore from "@/store/useAuthStore";

// import { ApiReturn } from "@/types/api";
import { User } from "@/types/auth";
import { getCurrentUser } from "@/lib/actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface WithAuthProps {
  user: User;
}

const HOME_ROUTE = "/auth";
const LOGIN_ROUTE = "/auth/login";

enum RouteRole {
  /**
   * For authentication pages
   * @example /login /register
   */
  auth,
  /**
   * Optional authentication
   * It doesn't push to login page if user is not authenticated
   */
  optional,
  /**
   * For all authenticated user
   * will push to login if user is not authenticated
   */
  all,
}

/**
 * Add role-based access control to a component
 *
 * @see https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/
 * @see https://github.com/mxthevs/nextjs-auth/blob/main/src/components/withAuth.tsx
 */
export default function withAuth<T extends WithAuthProps = WithAuthProps>(Component: React.ComponentType<T>, routeRole: keyof typeof RouteRole) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter();
    const pathname = usePathname(); // like router.asPath
    const searchParams = useSearchParams(); // like query

    // const { query } = router;

    //#region  //*=========== STORE ===========
    const isAuthenticated = useAuthStore.useIsAuthenticated();
    const isLoading = useAuthStore.useIsLoading();
    const login = useAuthStore.useLogin();
    const logout = useAuthStore.useLogout();
    const stopLoading = useAuthStore.useStopLoading();
    const user = useAuthStore.useUser();
    //#endregion  //*======== STORE ===========

    const checkAuth = React.useCallback(() => {
      const token = getFromLocalStorage("token");
      if (!token) {
        isAuthenticated && logout();
        stopLoading();
        return;
      }

      const loadUser = async () => {
        try {
          const res = await getCurrentUser(token);

          login({
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            token: token + "",
          });
        } catch (err) {
          localStorage.removeItem("token");
        } finally {
          stopLoading();
        }
      };

      if (!isAuthenticated) {
        loadUser();
      }
    }, [isAuthenticated, login, logout, stopLoading]);

    React.useEffect(() => {
      // run checkAuth every page visit
      checkAuth();

      // run checkAuth every focus changes
      window.addEventListener("focus", checkAuth);
      return () => {
        window.removeEventListener("focus", checkAuth);
      };
    }, [checkAuth]);

    React.useEffect(() => {
      if (!isLoading) {
        const redirect = searchParams.get("redirect");

        if (isAuthenticated) {
          // Prevent authenticated user from accessing auth or other role pages
          if (routeRole === "auth") {
            // Already logged in but trying to access login/register
            router.replace(redirect ?? HOME_ROUTE);
          }
        } else {
          // Prevent unauthenticated user from accessing protected pages
          if (routeRole !== "auth" && routeRole !== "optional") {
            router.replace(`${LOGIN_ROUTE}?redirect=${pathname}`);

            // router.replace(`${LOGIN_ROUTE}?redirect=${router.asPath}`, `${LOGIN_ROUTE}`);
          }
        }
      }
    }, [isAuthenticated, isLoading, router, pathname, searchParams, user]);

    if (
      // If unauthenticated user want to access protected pages
      (isLoading || !isAuthenticated) &&
      // auth pages and optional pages are allowed to access without login
      routeRole !== "auth" &&
      routeRole !== "optional"
    ) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center text-gray-800">
          <p>Loading...</p>
        </div>
      );
    }

    return <Component {...(props as T)} user={user} />;
  };

  // return ComponentWithAuth;
  // 👇 Return a new component wrapped in <Suspense> automatically
  return function WithAuthWithSuspense(props: Omit<T, keyof WithAuthProps>) {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <ComponentWithAuth {...props} />
      </React.Suspense>
    );
  };
}
