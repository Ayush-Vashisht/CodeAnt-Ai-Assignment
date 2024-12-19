"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  CloudCog,
  FileQuestion,
  Settings,
  LayoutDashboard,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen w-[240px] bg-[#f8f9fa] border-r border-[#e9ecef]">
      <div className="p-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Code2 className="h-5 w-5 text-white" />
        </div>
        <span className="font-semibold text-[15px]">CodeAnt AI</span>
      </div>

      <div className="px-3 mb-2">
        <button className="w-full flex items-center gap-2 p-2 border rounded-xl hover:bg-[#f1f3f5]  text-left">
          <div className="w-8 h-8 rounded-lg bg-[#e9ecef] flex items-center justify-center">
            UD
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">
              UtkarshDhairyaPa...
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-[#868e96]" />
        </button>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-[2px]">
          <li>
            <Link
              href="/Repositories"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-[14px]",
                pathname === "/Repositories"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              Repositories
            </Link>
          </li>
          <li>
            <Link
              href="/CodeReview"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-[14px]",
                pathname === "/CodeReview"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              <Code2 className="h-4 w-4" />
              AI Code Review
            </Link>
          </li>
          <li>
            <Link
              href="/CloudSecurity"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-[14px]",
                pathname === "/CloudSecurity"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              <CloudCog className="h-4 w-4" />
              Cloud Security
            </Link>
          </li>
          <li>
            <Link
              href="/HowToUse"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-[14px]",
                pathname === "/HowToUse"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              <FileQuestion className="h-4 w-4" />
              How to Use
            </Link>
          </li>
          <li>
            <Link
              href="/Settings"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-[14px]",
                pathname === "/Settings"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto px-3 pb-3">
        <Link
          href="/Support"
          className="flex items-center gap-3 px-3 py-2 text-[14px] text-[#495057] hover:bg-[#f1f3f5] rounded-lg"
        >
          <HelpCircle className="h-4 w-4" />
          Support
        </Link>
        <Link href ='/'>
          <button
            onClick={() => console.log("Logout clicked")}
            className="w-full flex items-center gap-3 px-3 py-2 text-[14px] text-[#495057] hover:bg-[#f1f3f5] rounded-lg"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}
