import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "The Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Eager Group", href: "#group" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/75 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Logo className="w-[280px] shrink-0" />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[16px] text-ink transition-colors duration-300 hover:text-azure"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#event" className="btn-pill hidden !px-7 !py-3.5 lg:inline-flex">
          Register for Karachi Event
        </a>

        <button
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-[2px] w-6 bg-ink transition-all duration-300 ${
                open ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-6 bg-ink transition-all duration-300 ${
                open ? "top-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg text-ink">
              {l.label}
            </a>
          ))}
          <a href="#event" onClick={() => setOpen(false)} className="btn-pill">
            Register for Karachi Event
          </a>
        </div>
      </div>
    </header>
  );
}
