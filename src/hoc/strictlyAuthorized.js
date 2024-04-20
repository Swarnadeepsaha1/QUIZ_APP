"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function strictlyAuthorized(Component) {
  return function IsAuth(props) {
    const isLoggedIn =
      typeof window === "undefined"
        ? false
        : localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn);

    useEffect(() => {
      if (!isLoggedIn) {
        return redirect("/loggedOut");
      }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
      return null;
    }

    return <Component {...props} />;
  };
}
