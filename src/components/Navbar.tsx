"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Menu, X, Phone, Clock } from "lucide-react";
import { SALON_DATA } from "@/config/salon";
import CurrencySelector from "./CurrencySelector";

export const LuxeLogo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Stylized Luxury Profile Icon */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[#D4AF63] flex-shrink-0 drop-shadow-[0_0_12px_rgba(212,175,99,0.5)]"
      >
        <circle cx="32" cy="32" r="30" stroke="url(#goldGradient)" strokeWidth="1.5" strokeOpacity="0.4" />
        <path
          d="M26 18C28 15 34 14 38 17C43 20 44 26 41 31C39 34 35 36 34 40C33 43 33 46 32 48"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 23C26 21 29 20 32 21C35 22 36 25 34 28C32 30 28 32 27 36C26 39 27 43 28 46"
          stroke="url(#goldGradient)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M38 27C39 27 41 28 42 30C43 32 42 35 40 37C37 40 34 42 34 47"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="goldGradient" x1="16" y1="14" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#F3D99B" />
            <stop offset="0.7" stopColor="#D4AF63" />
            <stop offset="1" stopColor="#AA8030" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col">
        <span className="font-serif tracking-[0.25em] text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3D99B] to-[#D4AF63]">
          LUXE
        </span>
        <span className="text-[9px] tracking-[0.35em] text-[#D4AF63]/80 uppercase -mt-0.5 font-sans font-medium">
          HAIR STUDIO
        </span>
      </div>
    </div>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090909]/90 backdrop-blur-md border-b border-[#D4AF63]/15 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center transition-transform hover:scale-[1.02]">
            <LuxeLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wider uppercase font-medium transition-all duration-300 relative py-1 ${
                    active
                      ? "text-[#F3D99B] font-semibold"
                      : "text-zinc-300 hover:text-[#F3D99B]"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF63] to-transparent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Book Appointment CTA & Currency Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <CurrencySelector />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F3D99B] via-[#D4AF63] to-[#AA8030] shadow-[0_2px_15px_rgba(212,175,99,0.3)] hover:shadow-[0_4px_25px_rgba(212,175,99,0.5)] hover:scale-[1.03] transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <CurrencySelector />
            <Link
              href="/contact"
              className="p-2 rounded-full text-black bg-[#D4AF63]"
              aria-label="Book Appointment"
            >
              <Calendar className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-[#D4AF63] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-[#D4AF63]/20 px-6 py-8 animate-fadeIn">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg tracking-wider uppercase font-medium transition-colors ${
                  isActive(link.href) ? "text-[#F3D99B] font-semibold" : "text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-gradient-to-r from-[#F3D99B] via-[#D4AF63] to-[#AA8030] shadow-[0_0_20px_rgba(212,175,99,0.3)]"
              >
                Book Appointment
              </Link>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF63]" />
                  {SALON_DATA.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF63]" />
                  Mon-Sat 9AM-7PM
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

