"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Galeri", href: "#galeri" },
    { name: "Blog", href: "#blog" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className={`text-2xl font-bold ${scrolled ? "text-primary" : "text-white"}`}>Brick Property</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={scrolled ? "nav-link-dark" : "nav-link"}>
              {link.name}
            </Link>
          ))}
          <Link href="/login" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300">
            Login
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className={scrolled ? "text-secondary" : "text-white"} size={24} /> : <Menu className={scrolled ? "text-secondary" : "text-white"} size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-secondary hover:text-primary py-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link href="/login" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 text-center" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
