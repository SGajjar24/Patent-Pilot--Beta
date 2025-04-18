import React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-2">
            <Icons.fileText className="h-6 w-6" />
            <span className="font-bold text-xl">PatentPilot</span>
          </div>
          <nav className="ml-auto flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-1 text-sm font-medium">
              <Icons.home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a href="/draft" className="flex items-center space-x-1 text-sm font-medium">
              <Icons.fileText className="h-4 w-4" />
              <span>Draft</span>
            </a>
            <a href="/search" className="flex items-center space-x-1 text-sm font-medium">
              <Icons.search className="h-4 w-4" />
              <span>Search</span>
            </a>
            <a href="/predict" className="flex items-center space-x-1 text-sm font-medium">
              <Icons.checkCircle className="h-4 w-4" />
              <span>Predict</span>
            </a>
            <a href="/consultation" className="flex items-center space-x-1 text-sm font-medium">
              <Icons.phone className="h-4 w-4" />
              <span>Consultation</span>
            </a>
            <a href="/help" className="flex items-center space-x-1 text-sm font-medium">
              <Icons.helpCircle className="h-4 w-4" />
              <span>Help</span>
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">{children}</main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} PatentPilot. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
