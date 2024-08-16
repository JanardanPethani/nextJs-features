import { PropsWithChildren } from "react";

import AuthNavLinks from "@/components/AuthNavLinks";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative h-screen w-screen box-border">
      <AuthNavLinks />

      {/* Template is added in children by default */}
      {children}
    </div>
  );
}
