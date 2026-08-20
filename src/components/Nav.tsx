import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#leadership", label: "Leadership" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#cricket", label: "Cricket" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-white/75 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Yuvaan<span className="text-accent">.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-[13px] tracking-wide text-ink/80 hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden lg:inline-flex items-center gap-2 text-[13px] tracking-wide">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" /> Available
        </a>
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
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-serif text-2xl">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
