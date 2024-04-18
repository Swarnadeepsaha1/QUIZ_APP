import { NextResponse } from "next/server";
import { useRouter } from "next/router";

export default async function middleware(req) {
  const isLoggedIn = await req.cookies.get('isLoggedIn'); // Assuming cookie name is 'isLoggedIn'
  const url = req.url;

  if (isLoggedIn === "true" && url === "/login") {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (!isLoggedIn && url !== "/login") {
    return NextResponse.redirect("http://localhost:3000/login");
  }
  if (shouldRedirect) {
    const router = useRouter(); // Get router in middleware (not ideal)
    router.push(redirectUrl); // Client-side redirect
    return NextResponse.next(); // Prevent server-side redirect loop
  }

  return NextResponse.next(); // Pass through the request if no redirect needed
}