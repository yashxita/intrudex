"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fingerprint, LaptopMinimalCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./theme-toggle";
import { Panel, SectionLabel, StatusBadge } from "./ui";

export function AuthScreen({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  const router = useRouter();

  const handleContinue = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      {/* Top-right Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle compact />
      </div>

      <div className="w-full max-w-md">
        <Panel tone="strong" className="border p-7 md:p-9">
          <SectionLabel>{isLogin ? "Login" : "Signup"}</SectionLabel>

          <h1 className="mt-6 text-3xl font-semibold text-center">
            {isLogin ? "Enter email to continue" : "Create your account"}
          </h1>

          <form className="mt-8 space-y-4">
            {!isLogin && (
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-3">
                  <span className="text-sm font-medium">First name</span>
                  <Input placeholder="Aisha" />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="text-sm font-medium">Last name</span>
                  <Input placeholder="Reed" />
                </label>
              </div>
            )}

            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium">Email</span>
              <Input placeholder="name@company.com" />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium">Password</span>
              <Input type="password" placeholder="Enter your password" />
            </label>

            {!isLogin && (
              <label className="flex flex-col gap-3">
                <span className="text-sm font-medium">Organization</span>
                <Input placeholder="Intrudex Labs" />
              </label>
            )}

            <Button
              type="button"
              className="mt-3 w-full"
              onClick={handleContinue}
            >
              {isLogin ? "Login" : "Sign up"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted">
            {isLogin ? "Need an account?" : "Already have an account?"}{" "}
            <Link
              href={isLogin ? "/auth/signup" : "/auth/login"}
              className="font-semibold text-accent"
            >
              {isLogin ? "Sign up" : "Login"}
            </Link>
          </div>
        </Panel>
      </div>
    </div>
  );
}
