import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.austinfoodheads.com";

// Next.js redirects() in next.config.ts matches source paths case
// insensitively, so a rule for the stray "/Privacy" backlink would also
// match the real lowercase "/privacy" route and redirect it to itself.
// Handled here instead, with an exact case-sensitive string check.
const CASE_SENSITIVE_REDIRECTS: Record<string, string> = {
  "/Privacy": "/privacy",
};

export function proxy(request: NextRequest) {
  const target = CASE_SENSITIVE_REDIRECTS[request.nextUrl.pathname];
  if (target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }

  if (
    process.env.VERCEL_ENV === "production" &&
    request.nextUrl.hostname !== CANONICAL_HOST
  ) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
