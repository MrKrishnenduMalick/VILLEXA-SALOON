"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, Play, Instagram, Facebook, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { SALON_DATA } from "@/config/salon";
import VideoModal from "@/components/VideoModal";

export default function AboutPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      {/* ===================== ABOUT HERO SECTION ===================== */}
      <section className="relative pt-8 pb-20 lg:pb-28 overflow-hidden">
        {/* Ambient gold glow */}
        <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#D4AF63]/16 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#F3D99B]/12 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#FFF0CA] to-[#D4AF63]" />
                <span className="text-[11px] font-semibold tracking-[0.35em] text-[#F3D99B] uppercase drop-shadow">
                  ABOUT US
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.15] drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
                The Art of Hair, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF0CA] to-[#D4AF63]">
                  With a Personal Touch
                </span>
              </h1>

              <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed max-w-xl drop-shadow">
                LUXE Hair Studio is a modern, design-led salon dedicated to creating bespoke looks that bring out your natural confidence. Our Chelsea flagship marries classical British craftsmanship with avant-garde European color theory.
              </p>

              {/* Three Compact Highlight Panels in Total Glass */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15">
                {SALON_DATA.stats.map((stat, i) => (
                  <div key={i} className="glass-ultra p-4 rounded-2xl flex flex-col items-center text-center">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF0CA] to-[#D4AF63] drop-shadow-[0_0_15px_rgba(212,175,99,0.5)]">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#F3D99B]/90 font-medium mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Video/Image Ambient Card in Total Glass Chassis */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden glass-ultra border-2 border-[#D4AF63]/60 shadow-[0_25px_70px_rgba(0,0,0,0.95)] aspect-[4/3] group">
                <Image
                  src="/images/about-hero.jpg"
                  alt="LUXE Hair Studio Chelsea Salon Interior"
                  fill
                  priority
                  className="object-cover brightness-90 contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Golden Halo Ring around Play Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="w-20 h-20 rounded-full bg-black/60 border-2 border-[#FFF0CA] backdrop-blur-xl flex items-center justify-center text-[#FFF0CA] shadow-[0_0_40px_rgba(243,217,155,0.7)] group-hover:scale-110 transition-transform"
                    aria-label="Play salon tour"
                  >
                    <Play className="w-8 h-8 ml-1 fill-current" />
                  </button>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs text-zinc-200">
                  <span className="font-medium tracking-wider">Chelsea Studio • London Flagship</span>
                  <span className="text-[#FFF0CA] font-semibold">Click to Watch Story</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== OUR STORY & PHILOSOPHY ===================== */}
      <section className="py-20 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#F3D99B] uppercase drop-shadow">
              Our Heritage & Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-3 mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Where Science Meets Artistry
            </h2>
            <p className="text-zinc-300 text-sm font-light leading-relaxed">
              We founded LUXE with a singular philosophy: every client is unique, and exceptional hair starts with authentic listening, healthy scalp biology, and customized tone curation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="glass-ultra glass-ultra-hover rounded-3xl p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF63]/20 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] mb-6 group-hover:scale-110 shadow-[0_0_20px_rgba(212,175,99,0.35)] transition-all">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#F3D99B] transition-colors">
                Bespoke Consultation
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Before a single drop of color or scissor stroke, we conduct an in-depth lifestyle and aesthetic consultation to align with your personal vision.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="glass-ultra glass-ultra-hover rounded-3xl p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF63]/20 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] mb-6 group-hover:scale-110 shadow-[0_0_20px_rgba(212,175,99,0.35)] transition-all">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#F3D99B] transition-colors">
                Hair Health Integrity
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                We use exclusively organic, sulphate-free, and bond-building professional hair formulas to ensure your hair stays stronger after every appointment.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="glass-ultra glass-ultra-hover rounded-3xl p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF63]/20 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] mb-6 group-hover:scale-110 shadow-[0_0_20px_rgba(212,175,99,0.35)] transition-all">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#F3D99B] transition-colors">
                Master Craftsmanship
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Our team undergoes continuous advanced masterclasses in London, Paris, and Milan, bringing world-class runway techniques to your daily look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MEET OUR STYLISTS ===================== */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#F3D99B] uppercase drop-shadow">
                Artisans of Beauty
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium mt-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                Meet Our Stylists
              </h2>
            </div>
            <p className="text-zinc-300 text-sm font-light max-w-md">
              Each stylist brings individual specialization, international training, and a deep dedication to bespoke guest care.
            </p>
          </div>

          {/* 4 Stylist Cards Grid with Total Glass Chassis matching Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {SALON_DATA.stylists.map((stylist) => (
              <div
                key={stylist.id}
                className="glass-ultra glass-ultra-hover rounded-3xl overflow-hidden transition-all duration-500 group flex flex-col justify-between"
              >
                {/* Stylist Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-black/30 to-transparent opacity-95" />

                  {/* Role Badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#FFF0CA] bg-black/75 border border-[#D4AF63]/50 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                      {stylist.role}
                    </span>
                  </div>
                </div>

                {/* Stylist Details in Frosted Glass Body */}
                <div className="p-6 flex flex-col justify-between flex-grow z-20">
                  <div>
                    <h3 className="font-serif text-2xl text-white font-medium mb-1 group-hover:text-[#F3D99B] transition-colors">
                      {stylist.name}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed font-light mt-2 line-clamp-3">
                      {stylist.bio}
                    </p>
                  </div>

                  {/* Social links & Book link */}
                  <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {stylist.instagram && (
                        <a
                          href={stylist.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-[#FFF0CA] hover:border-[#D4AF63] transition-colors"
                          aria-label={`${stylist.name} Instagram`}
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {stylist.facebook && (
                        <a
                          href={stylist.facebook}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-[#FFF0CA] hover:border-[#D4AF63] transition-colors"
                          aria-label={`${stylist.name} Facebook`}
                        >
                          <Facebook className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/contact?service=${encodeURIComponent(stylist.name)}`}
                      className="text-xs font-semibold uppercase tracking-wider text-[#F3D99B] hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Book Chair</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] shadow-[0_0_30px_rgba(212,175,99,0.5)] hover:scale-105 transition-all"
            >
              <span>Consult with Our Directors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== CLIENT ACCLAIM & REVIEWS ===================== */}
      <section className="py-20 lg:py-24 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#F3D99B] uppercase drop-shadow">
              Verified Client Acclaim
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium mt-3 mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Words from Our Guests
            </h2>
            <p className="text-zinc-300 text-sm font-light leading-relaxed">
              Discreet, bespoke hair care trusted by discerning international clientele from London, New York, and Sydney.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SALON_DATA.reviews.map((rev) => (
              <div
                key={rev.id}
                className="glass-ultra glass-ultra-hover rounded-3xl p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Star Rating & Quote Mark */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#F3D99B]">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <span key={idx} className="text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono">{rev.date}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-zinc-200 font-light leading-relaxed italic mb-6">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                {/* Client Profile */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-white font-medium">
                      {rev.client}
                    </h4>
                    <span className="text-[11px] text-[#F3D99B] block font-light">
                      {rev.location}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
