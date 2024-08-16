import NavLinks from "@/components/NavLinks";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <NavLinks />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
