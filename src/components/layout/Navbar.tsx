"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {

  return (
    <header className="fixed top-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-white text-lg font-semibold tracking-wide"
        >
          Portfolio
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2">

          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="relative px-5 py-2 text-sm text-gray-300 hover:text-white transition"
            >
              {link.name}

              {/* hover glow */}
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-100"
              />
            </Link>
          ))}

        </div>

        {/* Resume Button */}
        <Link
          href="#"
          className="hidden md:flex items-center px-5 py-2 rounded-full border border-white/15 text-white text-sm hover:bg-white/10 transition"
        >
          Resume
        </Link>

      </div>

    </header>
  )
}