 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const HeaderNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }
    document.body.style.setProperty("overflow", "hidden");
    return () => document.body.style.removeProperty("overflow");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-night/85 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="#top" className="text-lg font-semibold tracking-tight">
          <span className="text-accent">Aamir</span>{" "}
          <span className="text-slate-200">Mallick</span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:bg-accent before:transition-all before:duration-300 hover:text-white hover:before:w-full"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1iGU9WTu3ce1d5850EHBv2E1s1TddhumU/view"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-night"
          >
            View Résumé
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden rounded-full border border-slate-700/80 p-2 text-slate-200 transition hover:border-accent hover:text-accent"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-800/70 bg-night/95 px-6 pb-6 pt-4 shadow-xl shadow-cyan-900/40 md:hidden"
          >
            <ul className="space-y-4">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg border border-transparent px-4 py-3 text-base font-medium text-slate-300 transition hover:border-accent/40 hover:bg-slate-900/60 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className="block rounded-lg border border-accent px-4 py-3 text-center text-base font-semibold text-accent transition hover:bg-accent hover:text-night"
                  href="https://drive.google.com/file/d/1iGU9WTu3ce1d5850EHBv2E1s1TddhumU/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  View Résumé
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
