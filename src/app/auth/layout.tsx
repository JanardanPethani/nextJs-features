import Link from "next/link";
import { PropsWithChildren } from "react";

import Template from "./template";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative h-screen w-screen box-border">
      <nav className="sticky flex justify-between items-center py-4 bg-blue-500 text-white px-2 w-full">
        <h1 className="text-3xl font-bold">NextJS</h1>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <Link href="/auth/login" legacyBehavior>
              <a className="hover:text-gray-300">Login</a>
            </Link>
          </li>
          <li>
            <Link href="/auth/register" legacyBehavior>
              <a className="hover:text-gray-300">Register</a>
            </Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>

      {/* Template is added in children by default */}
      {children}
    </div>
  );
}
