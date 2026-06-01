"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/#food", label: "Recs" },
  { href: "/news", label: "News" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-xl px-6 py-3 shadow-lg shadow-black/5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Austin Food Heads"
              width={40}
              height={40}
              className="rounded-full transition-transform group-hover:scale-110"
            />
            <span className="font-serif font-bold text-lg text-dark hidden sm:block">
              Austin Food Heads
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark/70 hover:text-orange transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all group-hover:w-full" />
              </Link>
            ))}
            <a
              href="https://forms.clickup.com/9011221962/f/8chrnea-4191/N6GG09LFE1WOEVJWE7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-dark transition-all hover:scale-105 shadow-md shadow-orange/20"
            >
              Book a call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-dark block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-dark block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-dark block"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="md:hidden mt-2 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-dark hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://forms.clickup.com/9011221962/f/8chrnea-4191/N6GG09LFE1WOEVJWE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange text-white px-5 py-3 rounded-full text-center font-semibold hover:bg-orange-dark transition-all"
                >
                  Book a call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
