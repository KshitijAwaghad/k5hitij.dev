"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks: Array<{ label: string; href: string }> = [
  { label: "Projects", href: "/#projects" },
  { label: "System Design", href: "/#system-design" },
  { label: "Skills", href: "/#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleCloseMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
      <nav className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white">
            <span className="inline-flex h-9 w-9 overflow-hidden rounded-lg border border-cyan-400/70 bg-gray-900">
              <Image
                src="/WhatsApp%20Image%202026-03-03%20at%2013.27.41.jpeg"
                alt="Kshitij Awaghad profile photo"
                width={36}
                height={36}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span>Kshitij Awaghad</span>
          </Link>

          <div className="flex items-center gap-5">
            <ul className="hidden items-center gap-5 md:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="nav-link text-sm text-gray-300 hover:text-cyan-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="rounded-full border border-gray-700 p-2 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 md:hidden"
            >
              <span
                className={`block transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mb-4 rounded-xl border border-gray-800 bg-gray-900/95 p-4 transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-2"
            }`}
          >
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={handleCloseMenu}
                      className="block rounded-lg px-2 py-1.5 text-sm text-gray-300 transition-all duration-300 hover:text-cyan-400"
                      style={{
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? "translateY(0)" : "translateY(-6px)",
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-gray-800 pt-4">
                <p className="mb-2 text-xs uppercase tracking-[0.15em] text-gray-500">Theme</p>
                <ThemeToggle />
              </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
