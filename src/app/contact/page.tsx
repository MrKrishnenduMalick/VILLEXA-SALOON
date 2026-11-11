"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Sparkles,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { SALON_DATA } from "@/config/salon";
import BookingForm from "@/components/BookingForm";

function ContactContent() {
  return (
    <div className="relative min-h-screen bg-transparent text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-[#D4AF63]/16 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#F3D99B]/14 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 relative z-10">
        {/* Page Tag */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#FFF0CA] to-[#D4AF63]" />
          <span className="text-[11px] font-semibold tracking-[0.35em] text-[#F3D99B] uppercase drop-shadow">
            GET IN TOUCH
          </span>
        </div>

        {/* Two-Column Luxury Layout matching Reference 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* ================= LEFT COLUMN: CONTACT INFORMATION ================= */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl text-white font-medium tracking-tight leading-[1.15] drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
                Book Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF0CA] to-[#D4AF63]">
                  Appointment
                </span>
              </h1>
              <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed mt-4 drop-shadow">
                Ready for a new look? Book your visit with our expert stylists today. Our concierge is available seven days a week to tailor your appointment.
              </p>
            </div>

            {/* Direct Contact Details in Total Glass */}
            <div className="space-y-4 pt-2">
              {/* Phone */}
              <a
                href={`tel:${SALON_DATA.phoneClean}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass-ultra glass-ultra-hover transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF63]/20 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] group-hover:scale-110 shadow-[0_0_15px_rgba(212,175,99,0.3)] transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#F3D99B] block font-medium">
                    Call Salon Concierge
                  </span>
                  <span className="text-sm sm:text-base font-medium text-white group-hover:text-[#FFF0CA] transition-colors">
                    {SALON_DATA.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SALON_DATA.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass-ultra glass-ultra-hover transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF63]/20 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] group-hover:scale-110 shadow-[0_0_15px_rgba(212,175,99,0.3)] transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#F3D99B] block font-medium">
                    Email Inquiries
                  </span>
                  <span className="text-sm sm:text-base font-medium text-white group-hover:text-[#FFF0CA] transition-colors">
                    {SALON_DATA.email}
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-ultra">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF63]/20 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] flex-shrink-0 mt-0.5 shadow-[0_0_15px_rgba(212,175,99,0.3)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#F3D99B] block font-medium">
                    Chelsea Flagship Studio
                  </span>
                  <span className="text-sm text-zinc-200 font-light leading-relaxed block mt-0.5">
                    {SALON_DATA.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Salon Hours Panel in Total Glass */}
            <div className="p-6 rounded-3xl glass-ultra space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFF0CA]">
                <Clock className="w-4 h-4 text-[#D4AF63]" />
                <span>Opening Hours</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                {SALON_DATA.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-zinc-300 font-light">{h.days}</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct Chat & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <a
                href={SALON_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20ba5a] shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full glass-ultra flex items-center justify-center text-zinc-300 hover:text-[#FFF0CA] hover:border-[#FFF0CA] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full glass-ultra flex items-center justify-center text-zinc-300 hover:text-[#FFF0CA] hover:border-[#FFF0CA] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Map Preview Card matching Reference 4 in Total Glass Frame */}
            <div className="relative rounded-3xl overflow-hidden glass-ultra border-2 border-[#D4AF63]/50 aspect-[16/7] group shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-zinc-950">
                {/* Stylized Google Map Graphic / Preview */}
                <div className="w-full h-full bg-[#141210] relative overflow-hidden">
                  {/* Subtle map grid vector lines */}
                  <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF63" strokeWidth="0.5" strokeOpacity="0.4" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapGrid)" />
                    <path d="M0,60 Q120,40 240,80 T480,50" fill="none" stroke="#D4AF63" strokeWidth="2" strokeOpacity="0.5" />
                    <path d="M100,0 Q180,80 150,160" fill="none" stroke="#D4AF63" strokeWidth="2" strokeOpacity="0.4" />
                  </svg>

                  {/* Pin locator in Chelsea */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFF0CA] to-[#D4AF63] text-black flex items-center justify-center shadow-[0_0_25px_#F3D99B] animate-bounce">
                      <MapPin className="w-5 h-5 fill-black" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFF0CA] to-[#D4AF63] px-2.5 py-0.5 rounded-full mt-1 shadow">
                      LUXE Chelsea
                    </span>
                  </div>
                </div>
              </div>

              {/* External map link button */}
              <a
                href={SALON_DATA.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-black bg-gradient-to-r from-[#FFF0CA] to-[#D4AF63] backdrop-blur-md hover:scale-105 transition-all shadow-[0_0_15px_rgba(212,175,99,0.5)]"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: LUXURY BOOKING FORM IN TOTAL GLASS ================= */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-luxury-ambience flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#D4AF63] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
