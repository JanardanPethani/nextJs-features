"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeSwitch from "./ThemeSwitch";
import clsx from "clsx";

export default function AuthNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 flex justify-between items-center py-2 px-4 w-full bg-slate-700/50 backdrop-blur-sm text-white">
      <h1 className="text-2xl font-bold">NextJS</h1>
      <ul className="flex gap-1 justify-between items-center space-x-4">
        <li>
          <Link
            className={clsx({
              "font-bold": pathname === "/auth/login",
            })}
            href="/auth/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className={clsx({
              "font-bold": pathname === "/auth/register",
            })}
            href="/auth/register"
          >
            Register
          </Link>
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
}
