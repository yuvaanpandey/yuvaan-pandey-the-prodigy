import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections";

export function Page({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="bg-background text-foreground overflow-x-clip">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
