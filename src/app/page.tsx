"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Play,
  Diamond,
  Leaf,
  Star,
  Scissors,
  Droplet,
  Sparkles,
  Wind,
  ArrowRight,
  Phone,
} from "lucide-react";
import Carousel3D from "@/components/Carousel3D";
import VideoModal from "@/components/VideoModal";
import { SALON_DATA } from "@/config/salon";

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-6 pb-16 lg:pb-24">
        {/* Luminous Cinematic Salon Interior blended seamlessly with Marble & Gold Strips */}
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero-salon-bg.jpg"
            alt="LUXE Hair Studio Interior"
            fill
            priority
            className="object-cover object-center opacity-45 mix-blend-screen contrast-125 brightness-95 scale-105"
          />
          {/* Soft ambient gradient overlay that lets the marble texture and golden strips show through */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black/40" />
        </div>

        {/* Golden ambient lighting beams & volumetric warmth */}
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#D4AF63]/18 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-5 w-[650px] h-[650px] bg-[#F3D99B]/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#D4AF63]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT HERO CONTENT (Col 1-5 on Desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left z-20">
              {/* Small Category Label */}
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#FFF0CA] to-[#D4AF63]" />
                <span className="text-[11px] font-semibold tracking-[0.35em] text-[#F3D99B] uppercase drop-shadow-[0_2px_10px_rgba(212,175,99,0.5)]">
                  PREMIUM HAIR SALON
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.1] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                Hair That Defines <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF0CA] to-[#D4AF63] drop-shadow-[0_0_30px_rgba(212,175,99,0.4)]">
                  Your Style
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed max-w-lg drop-shadow">
                {SALON_DATA.subTagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] shadow-[0_0_25px_rgba(212,175,99,0.5)] hover:shadow-[0_0_40px_rgba(243,217,155,0.7)] hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F3D99B] bg-black/50 hover:bg-[#D4AF63]/25 border border-[#D4AF63]/50 hover:border-[#FFF0CA] backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-300 group"
                >
                  <span className="w-5 h-5 rounded-full bg-[#D4AF63]/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_10px_#D4AF63]">
                    <Play className="w-2.5 h-2.5 fill-current text-[#FFF0CA] ml-0.5" />
                  </span>
                  <span>Watch Our Work</span>
                </button>
              </div>

              {/* Four Feature Highlights Row with Total Glass Effect */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 pt-6 border-t border-white/15">
                <div className="glass-ultra p-3 rounded-xl flex flex-col items-start gap-1 group">
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF63]/20 border border-[#D4AF63]/40 flex items-center justify-center text-[#F3D99B] mb-0.5 shadow-[0_0_10px_rgba(212,175,99,0.3)]">
                    <Diamond className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-white">Expert Stylists</span>
                  <span className="text-[9px] text-[#F3D99B]/80 font-light">Master craft</span>
                </div>

                <div className="glass-ultra p-3 rounded-xl flex flex-col items-start gap-1 group">
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF63]/20 border border-[#D4AF63]/40 flex items-center justify-center text-[#F3D99B] mb-0.5 shadow-[0_0_10px_rgba(212,175,99,0.3)]">
                    <Leaf className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-white">Premium Products</span>
                  <span className="text-[9px] text-[#F3D99B]/80 font-light">Cruelty-free</span>
                </div>

                <div className="glass-ultra p-3 rounded-xl flex flex-col items-start gap-1 group">
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF63]/20 border border-[#D4AF63]/40 flex items-center justify-center text-[#F3D99B] mb-0.5 shadow-[0_0_10px_rgba(212,175,99,0.3)]">
                    <Star className="w-3.5 h-3.5 fill-[#F3D99B] text-[#F3D99B]" />
                  </div>
                  <span className="text-[11px] font-semibold text-white">5★ Client Reviews</span>
                  <span className="text-[9px] text-[#F3D99B]/80 font-light">2,400+ reviews</span>
                </div>

                <div className="glass-ultra p-3 rounded-xl flex flex-col items-start gap-1 group">
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF63]/20 border border-[#D4AF63]/40 flex items-center justify-center text-[#F3D99B] mb-0.5 shadow-[0_0_10px_rgba(212,175,99,0.3)]">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-white">Flexible Booking</span>
                  <span className="text-[9px] text-[#F3D99B]/80 font-light">Instant slots</span>
                </div>
              </div>
            </div>

            {/* RIGHT HERO 3D CURVED CAROUSEL (Col 6-12 on Desktop) */}
            <div className="lg:col-span-7 flex justify-center items-center w-full relative">
              <Carousel3D />
            </div>

          </div>
        </div>
      </section>

      {/* ===================== HOMEPAGE LOWER SECTION ===================== */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Subtle decorative salon ambient light leaks */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF63]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F3D99B]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#F3D99B] uppercase drop-shadow-[0_2px_8px_rgba(212,175,99,0.4)]">
              Bespoke Hair Solutions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium mt-3 mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Signature Salon Experiences
            </h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Every appointment begins with a personal consultation to design a tailored look that enhances your natural elegance.
            </p>
          </div>

          {/* Four Elegant Total-Glass Service Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Cut & Style */}
            <div className="glass-ultra glass-ultra-hover rounded-3xl p-8 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF63]/18 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] mb-6 group-hover:scale-110 group-hover:border-[#FFF0CA] shadow-[0_0_20px_rgba(212,175,99,0.35)] transition-all duration-300">
                  <Scissors className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#F3D99B] transition-colors">
                  Cut & Style
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Precision cuts for your perfect look, shaped to harmonize with your facial structure and hair movement.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10">
                <Link
                  href="/services#cut-and-style"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F3D99B] group-hover:text-white transition-colors"
                >
                  <span>Discover Cut & Style</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* 2. Colour Services */}
            <div className="glass-ultra glass-ultra-hover rounded-3xl p-8 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF63]/18 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] mb-6 group-hover:scale-110 group-hover:border-[#FFF0CA] shadow-[0_0_20px_rgba(212,175,99,0.35)] transition-all duration-300">
                  <Droplet className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#F3D99B] transition-colors">
                  Colour Services
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  From natural sun-kissed tones to bold transformations with protective bond-strengthening formulations.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10">
                <Link
                  href="/services#hair-colour"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F3D99B] group-hover:text-white transition-colors"
                >
                  <span>Explore Colour Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* 3. Treatments */}
            <div className="glass-ultra glass-ultra-hover rounded-3xl p-8 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF63]/18 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] mb-6 group-hover:scale-110 group-hover:border-[#FFF0CA] shadow-[0_0_20px_rgba(212,175,99,0.35)] transition-all duration-300">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#F3D99B] transition-colors">
                  Treatments
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Nourish, repair and restore your hair with molecular peptide infusions and glass-like gloss therapy.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10">
                <Link
                  href="/services#treatments"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F3D99B] group-hover:text-white transition-colors"
                >
                  <span>View Treatments</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* 4. Styling & Finish */}
            <div className="glass-ultra glass-ultra-hover rounded-3xl p-8 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF63]/18 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] mb-6 group-hover:scale-110 group-hover:border-[#FFF0CA] shadow-[0_0_20px_rgba(212,175,99,0.35)] transition-all duration-300">
                  <Wind className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#F3D99B] transition-colors">
                  Styling & Finish
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Bouncy, sleek or red-carpet ready blowouts that hold all day with natural movement and brilliant shine.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10">
                <Link
                  href="/services#cut-and-style"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F3D99B] group-hover:text-white transition-colors"
                >
                  <span>Discover Blowouts</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Final Luxury Total-Glass Appointment CTA Banner */}
          <div className="relative mt-20 rounded-3xl overflow-hidden glass-ultra border border-[#D4AF63]/50 p-8 sm:p-12 lg:p-16 shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF63]/18 rounded-full blur-[110px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#D4AF63]" />
                  <span className="text-[11px] font-semibold tracking-[0.25em] text-[#F3D99B] uppercase">
                    Your Personalized Hair Journey
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium">
                  Elevate Your Style at LUXE
                </h3>
                <p className="text-zinc-200 text-sm font-light mt-3 leading-relaxed">
                  Experience bespoke luxury hairdressing in our Chelsea studio. Reserve your private styling chair with our senior specialists today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] shadow-[0_0_30px_rgba(212,175,99,0.5)] hover:scale-105 transition-all text-center"
                >
                  Book Appointment
                </Link>
                <a
                  href={`tel:${SALON_DATA.phoneClean}`}
                  className="px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-[#F3D99B] bg-black/60 border border-[#D4AF63]/40 hover:border-[#FFF0CA] backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#D4AF63]" />
                  <span>Call Concierge</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Video Reel Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}
