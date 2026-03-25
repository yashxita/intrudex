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
    <div className="px-4 py-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <header className="panel mb-6 rounded-[24px] border px-5 py-4 md:px-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-[14px]"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-foreground)",
                }}
              >
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Intrudex</div>
                <div className="mono text-xs uppercase tracking-[0.22em] text-muted">
                  Prototype access
                </div>
              </div>
            </Link>
            <ThemeToggle compact />
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <Panel tone="strong" className="border p-7 md:p-9">
            <SectionLabel>
              {isLogin ? "Prototype login" : "Prototype signup"}
            </SectionLabel>
            <h1 className="mt-6 text-4xl font-semibold">
              {isLogin
                ? "Enter any email to open the dashboard prototype."
                : "Use any project details to continue into the prototype."}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-8 text-muted">
              {isLogin
                ? "No validation or backend authentication is connected. This screen is only used to preview the entry flow."
                : "This signup screen is also presentational only. Submitting the form routes directly to the main application."}
            </p>

            <form className="mt-8 space-y-4">
              {!isLogin ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium">First name</span>
                    <Input placeholder="Aisha" />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium">Last name</span>
                    <Input placeholder="Reed" />
                  </label>
                </div>
              ) : null}

              <label className="space-y-2">
                <span className="text-sm font-medium">Work email</span>
                <Input placeholder="name@company.com" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium">Password</span>
                <Input type="password" placeholder="Enter your password" />
              </label>

              {!isLogin ? (
                <label className="space-y-2">
                  <span className="text-sm font-medium">Organization</span>
                  <Input placeholder="Intrudex Labs" />
                </label>
              ) : null}

              <Button
                type="button"
                className="mt-3 w-full"
                onClick={handleContinue}
              >
                {isLogin ? "Open dashboard prototype" : "Continue to dashboard"}
              </Button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span>{isLogin ? "Need an account?" : "Already enrolled?"}</span>
              <Link
                href={isLogin ? "/auth/signup" : "/auth/login"}
                className="font-semibold text-accent"
              >
                {isLogin ? "Create one" : "Sign in"}
              </Link>
            </div>
          </Panel>

          <Panel
            tone="soft"
            className="grid-surface relative overflow-hidden border p-7 md:p-9"
          >
            <div
              className="absolute -right-16 top-10 h-52 w-52 rounded-full blur-3xl"
              style={{ background: "var(--accent-glow)" }}
            />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <SectionLabel>Prototype notes</SectionLabel>
                  <h2 className="mt-5 text-2xl font-semibold">
                    Supporting screens for the prototype entry flow.
                  </h2>
                </div>
                <StatusBadge tone="info">UI only</StatusBadge>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  {
                    icon: LaptopMinimalCheck,
                    label: "Endpoint",
                    value: "Device placeholder",
                  },
                  {
                    icon: Fingerprint,
                    label: "Identity",
                    value: "Profile placeholder",
                  },
                  {
                    icon: ShieldCheck,
                    label: "Routing",
                    value: "Direct to dashboard",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="panel panel-strong rounded-[16px] border p-4"
                    >
                      <Icon className="h-5 w-5 text-accent" />
                      <p className="mono mt-4 text-xs uppercase tracking-[0.24em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-2 font-semibold">{item.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="panel panel-strong rounded-[18px] border p-5">
                  <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                    Prototype behavior
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    {["U", "I", "M", "O", "C", "K"].map((digit, index) => (
                      <div
                        key={`${digit}-${index}`}
                        className="flex h-12 w-12 items-center justify-center rounded-[14px] border text-lg font-semibold"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--card-soft)",
                        }}
                      >
                        {digit}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-muted">
                    Any entered email can be used to continue. This form does
                    not persist session state or validate credentials.
                  </p>
                </div>

                <div className="panel panel-strong rounded-[18px] border p-5">
                  <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                    Included screens
                  </p>
                  <div className="mt-5 space-y-3">
                    {[
                      "Landing page for project overview",
                      "Authentication mock for entry flow",
                      "Operational pages for the main application",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[14px] border p-3 text-sm"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--card-soft)",
                        }}
                      >
                        <span
                          className="mt-1 h-2.5 w-2.5 rounded-full"
                          style={{ background: "var(--accent)" }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
