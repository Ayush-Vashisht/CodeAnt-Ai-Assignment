"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Gitlab,
  KeyRound,
  PaintBucket,
  Workflow,
  Link2,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsCards from "@/components/StatCards";

export default function SignInPage() {
  const [selectedOption, setSelectedOption] = useState<"saas" | "self-hosted">(
    "saas"
  );

  return (
    <div className=" w-full bg-gray-100 p-2">
      <div className="container flex min-h-screen flex-col justify-center lg:flex-row lg:items-center lg:gap-8">
        <div className="hidden lg:block lg:w-1/2 pl-16 ">
          <StatsCards />
        </div>

        <div className="flex w-full flex-col items-center justify-center p-6 lg:w-1/2 bg-white ">
          <div className="w-full max-w-md space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <LogIn width={40} height={40} className="h-10 w-10" />
              <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
            </div>

            <div className="flex rounded-xl bg-gray-100 p-1 ">
              <button
                className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  selectedOption === "saas"
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedOption("saas")}
              >
                SAAS
              </button>
              <button
                className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  selectedOption === "self-hosted"
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedOption("self-hosted")}
              >
                Self Hosted
              </button>
            </div>
            <div className="border-t" />
            {selectedOption === "saas" && (
              <div className="space-y-3 ">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    Sign in with Github
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2"
                  >
                    <PaintBucket className="h-5 w-5" />
                    Sign in with Bitbucket
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2"
                  >
                    <Workflow className="h-5 w-5" />
                    Sign in with Azure Devops
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2"
                  >
                    <Gitlab className="h-5 w-5 text-[#FC6D26]" />
                    Sign in with GitLab
                  </Button>
                </Link>
              </div>
            )}
            {selectedOption === "self-hosted" && (
              <div className="space-y-3 ">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2"
                  >
                    <Gitlab className="h-5 w-5 text-[#FC6D26]" />
                    Self Hosted GitLab
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2"
                  >
                    <KeyRound className="h-5 w-5" />
                    Sign in with SSO
                  </Button>
                </Link>
              </div>
            )}

            <div className="text-center text-sm text-gray-600">
              By signing up you agree to the{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
