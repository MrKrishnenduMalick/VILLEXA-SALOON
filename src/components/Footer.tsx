import React from "react";
import Link from "next/link";
import { LuxeLogo } from "./Navbar";
import { SALON_DATA } from "@/config/salon";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#070707] border-t border-[#D4AF63]/15 pt-16 pb-12 overflow-hidden">
      {/* Subtle background ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF63]/40 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#D4AF63]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <LuxeLogo />
            <p className="text-sm text-zinc-400 leading-relaxed font-light mt-4">
              A bespoke, design-led hair sanctuary in Chelsea. Dedicated to elevated artistry, precision haircuts, multidimensional balayage and timeless glamour.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-[#D4AF63]/25 flex items-center justify-center text-zinc-400 hover:text-[#D4AF63] hover:border-[#D4AF63] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-[#D4AF63]/25 flex items-center justify-center text-zinc-400 hover:text-[#D4AF63] hover:border-[#D4AF63] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F3D99B]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#F3D99B] transition-colors">
                  Home Experience
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F3D99B] transition-colors">
                  About & Creative Stylists
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F3D99B] transition-colors">
                  Services & Transformations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F3D99B] transition-colors">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F3D99B]">
              Salon Hours
            </h4>
            <div className="space-y-2.5 text-sm text-zinc-400">
              {SALON_DATA.hours.map((h, i) => (
                <div key={i} className="flex justify-between border-b border-zinc-800/60 pb-1.5">
                  <span className="text-zinc-300">{h.days}</span>
                  <span className="text-[#F3D99B]/90 font-medium">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="text-xs text-zinc-500 pt-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF63]" />
              Late appointments available upon request
            </div>
          </div>

          {/* Contact Concierge */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F3D99B]">
              Concierge
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <a
                href={`tel:${SALON_DATA.phoneClean}`}
                className="flex items-start gap-2.5 hover:text-[#F3D99B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF63] flex-shrink-0 mt-0.5" />
                <span>{SALON_DATA.phone}</span>
              </a>
              <a
                href={`mailto:${SALON_DATA.email}`}
                className="flex items-start gap-2.5 hover:text-[#F3D99B] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4AF63] flex-shrink-0 mt-0.5" />
                <span>{SALON_DATA.email}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF63] flex-shrink-0 mt-0.5" />
                <span>{SALON_DATA.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF63] hover:text-[#F3D99B] transition-colors group"
              >
                <span>Reserve Your Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} LUXE Hair Studio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Bespoke Salon Website</span>
            <span>•</span>
            <span className="text-[#D4AF63]/80">International Luxury Edition</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

