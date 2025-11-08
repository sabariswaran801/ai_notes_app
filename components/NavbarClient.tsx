"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleRedirect = (path: string) => router.push(path);
 const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-xl font-bold text-indigo-600 cursor-pointer"
          onClick={() => handleRedirect("/")}
        >
          AI Notes
        </h1>

        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Account</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 w-[200px]">
                  {pathname !== "/login" && (
                    <li>
                      <NavigationMenuLink asChild>
                        <Button variant="ghost" size="sm" onClick={() => handleRedirect("/login")}>
                          Login
                        </Button>
                      </NavigationMenuLink>
                    </li>
                  )}
                  {pathname !== "/register" && (
                    <li>
                      <NavigationMenuLink asChild>
                        <Button variant="ghost" size="sm" onClick={() => handleRedirect("/register")}>
                          Register
                        </Button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Button variant="ghost" size="sm" onClick={() => handleLogout()}>
                          logout
                        </Button>
                      </NavigationMenuLink>
                    </li>
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
