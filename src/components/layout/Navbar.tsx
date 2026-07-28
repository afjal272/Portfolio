"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Smooth Scroll
  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    setActive(href);

    const element = document.querySelector(href);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Navbar Background + Active Section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;

      let current = "#home";

      for (const item of navLinks) {
        const id = item.href.replace("#", "");
        const section = document.getElementById(id);

        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          current = item.href;
          break;
        }
      }

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#081014]/75 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="select-none text-[28px] font-semibold tracking-tight text-white transition-colors duration-300 hover:text-teal-300"
        >
          Afjal
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl md:flex">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              aria-current={active === item.href ? "page" : undefined}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === item.href
                  ? "text-black"
                  : "text-gray-300 hover:text-teal-300"
              }`}
            >
              {active === item.href && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
                {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Resume Button */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-teal-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-400/30 md:flex"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-white backdrop-blur-xl transition-all duration-300 hover:border-teal-400/40 hover:bg-white/[0.05] md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#081014]/95 backdrop-blur-2xl md:hidden"
          >

            <div className="flex flex-col gap-2 px-6 py-6">

              {navLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  aria-current={active === item.href ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    active === item.href
                      ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-black"
                      : "text-gray-300 hover:bg-white/[0.05] hover:text-teal-300"
                  }`}
                >
                  {item.name}
                </a>

              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 py-3 text-center text-sm font-semibold text-black shadow-lg shadow-teal-400/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}