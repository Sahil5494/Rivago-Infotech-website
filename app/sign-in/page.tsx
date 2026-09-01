import { Suspense } from "react";
import type { Metadata } from "next";
import SignInCard from "./SignInCard";

export const metadata: Metadata = {
  title: "Sign In — Rivago Infotech",
  description: "Sign in or create a candidate/client account with Rivago Infotech to apply to roles and track your applications.",
  alternates: { canonical: "https://rivagoinfotech.com/sign-in" },
};

function SignInFallback() {
  return <div style={{ minHeight: "calc(100vh - 62px)", background: "var(--bg)" }} />;
}

export default function SignInPage() {
  return (
    <Suspense fallback={<SignInFallback />}>
      <SignInCard />
    </Suspense>
  );
}
