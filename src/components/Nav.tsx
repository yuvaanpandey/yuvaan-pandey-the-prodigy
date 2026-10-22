import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/about", label: "About" },
  { to: "/achievements", label: "Achievements" },
  { to: "/leadership", label: "Leadership" },
  { to: "/research", label: "Research" },
  { to: "/projects", label: "Projects" },
  { to: "/cricket", label: "Cricket" },
  { to: "/community", label: "Community" },
  { to: "/resume", label: "Résumé" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  // Inner pages can open on a dark section, so keep the bar solid there.
  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? "backdrop-blur-xl bg-white/75 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-lg tracking-tight">
          Yuvaan<span className="text-accent">.</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-[13px] tracking-wide text-ink/80 hover:text-ink transition-colors"
              activeProps={{ className: "!text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden lg:inline-flex items-center gap-2 text-[13px] tracking-wide">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" /> Available
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden size-9 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="font-serif text-2xl" activeProps={{ className: "text-accent" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
