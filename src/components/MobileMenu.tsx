"use client";

import {
  X,
  ChevronDown,
  LayoutDashboard,
  Code2,
  CloudCog,
  FileQuestion,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";


export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full p-0">
        <SheetHeader className="border-b p-4 text-left">
          <SheetTitle className="flex items-center justify-between">
            <span>CodeAnt AI</span>
            <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className="px-4 py-2">
          <button className="w-full flex items-center gap-2 p-2 hover:bg-[#f1f3f5] rounded-lg text-left">
            <div className="w-8 h-8 rounded-lg bg-[#e9ecef] flex items-center justify-center">
              UD
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">
                UtkarshDhairyaPanwar
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-[#868e96]" />
          </button>
        </div>
        <div className="px-2">
          <nav className="space-y-1">
            <Link
              href="/Repositories"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-[14px]",
                pathname === "/Repositories"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
              onClick={onClose}
            >
              <LayoutDashboard className="h-4 w-4" />
              Repositories
            </Link>
            <Link
              href="/CodeReview"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-[14px]",
                pathname === "/CodeReview"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
              onClick={onClose}
            >
              <Code2 className="h-4 w-4" />
              AI Code Review
            </Link>
            <Link
              href="/CloudSecurity"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-[14px]",
                pathname === "/CloudSecurity"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
              onClick={onClose}
            >
              <CloudCog className="h-4 w-4" />
              Cloud Security
            </Link>
            <Link
              href="/HowToUse"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-[14px]",
                pathname === "/HowToUse"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
              onClick={onClose}
            >
              <FileQuestion className="h-4 w-4" />
              How to Use
            </Link>
            <Link
              href="/Settings"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-[14px]",
                pathname === "/Settings"
                  ? "bg-primary text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
              onClick={onClose}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link
              href="/Support"
              className="flex items-center gap-3 px-3 py-2 text-[14px] text-[#495057] hover:bg-[#f1f3f5] rounded-lg"
              onClick={onClose}
            >
              <HelpCircle className="h-4 w-4" />
              Support
            </Link>
            <Link href='/'>
            <button
              onClick={() => {
                console.log("Logout clicked");
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-[14px] text-[#495057] hover:bg-[#f1f3f5] rounded-lg"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button></Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
