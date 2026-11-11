"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Droplet,
  Sparkles,
  Crown,
  User,
  Clock,
  ArrowRight,
  Maximize2,
  CheckCircle,
} from "lucide-react";
import { SALON_DATA, ServiceItem, GalleryItem } from "@/config/salon";
import GalleryLightbox from "@/components/GalleryLightbox";
import { useCurrency } from "@/context/CurrencyContext";

export default function ServicesPage() {
  const { formatPrice } = useCurrency();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items
  const filteredGallery =
    selectedCategory === "all"
      ? SALON_DATA.gallery
      : SALON_DATA.gallery.filter((item) => item.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "scissors":
        return <Scissors className="w-6 h-6" />;
      case "droplet":
        return <Droplet className="w-6 h-6" />;
      case "sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "crown":
        return <Crown className="w-6 h-6" />;
      case "user":
        return <User className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "colour", label: "Hair Colour" },
    { id: "styling", label: "Styling" },
    { id: "bridal", label: "Bridal" },
    { id: "mens", label: "Men's" },
    { id: "treatments", label: "Treatments" },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-8 pb-20 lg:pb-28 overflow-hidden">
        {/* Ambient gold glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#D4AF63]/16 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#F3D99B]/12 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#FFF0CA] to-[#D4AF63]" />
                <span className="text-[11px] font-semibold tracking-[0.35em] text-[#F3D99B] uppercase drop-shadow">
                  OUR SERVICES
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.15] drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
                Premium Care for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF0CA] to-[#D4AF63]">
                  Every Hair Type
                </span>
              </h1>

              <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed max-w-xl drop-shadow">
                From classic precision cuts to luxury balayage and restorative bond treatments, we offer an exquisite menu of services to refresh, transform and elevate your look.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-zinc-300 font-medium">
                <span className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#FFF0CA]" />
                  Complimentary Consultation
                </span>
                <span className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#FFF0CA]" />
                  Organic Premium Formulas
                </span>
              </div>
            </div>

            {/* Right Hero Image in Total Glass Chassis */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden glass-ultra border-2 border-[#D4AF63]/50 shadow-[0_25px_70px_rgba(0,0,0,0.95)] aspect-[4/5] group">
                <Image
                  src="/images/services-hero.jpg"
                  alt="LUXE Salon Hair Artistry"
                  fill
                  priority
                  className="object-cover brightness-95 contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-ultra border border-[#D4AF63]/40">
                  <p className="font-serif text-lg text-white font-medium">Bespoke Couture Styling</p>
                  <p className="text-xs text-[#FFF0CA] font-light mt-0.5">Tailored to your individual aesthetic</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FIVE SERVICE CARDS IN TOTAL GLASS ===================== */}
      <section className="py-20 border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#F3D99B] uppercase drop-shadow">
              The Service Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium mt-3 mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Bespoke Hair Menu
            </h2>
            <p className="text-zinc-300 text-sm font-light leading-relaxed">
              Transparent starting prices across all four major international currencies (USD, GBP, CAD, AUD).
            </p>
          </div>

          {/* Responsive Total Glass Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SALON_DATA.services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="glass-ultra glass-ultra-hover rounded-3xl p-8 flex flex-col justify-between group relative scroll-mt-28"
              >
                <div>
                  {/* Top Bar with Icon and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#D4AF63]/20 border border-[#D4AF63]/50 flex items-center justify-center text-[#FFF0CA] group-hover:scale-110 shadow-[0_0_20px_rgba(212,175,99,0.35)] transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[#FFF0CA]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-1 group-hover:text-[#F3D99B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#F3D99B] font-light tracking-wide mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFF0CA] shadow-[0_0_8px_#F3D99B]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Price & Booking CTA */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">
                      Starting From
                    </span>
                    <span className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF0CA] to-[#D4AF63] drop-shadow">
                      {formatPrice(service.priceValue || 45)}
                    </span>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] shadow-[0_0_20px_rgba(212,175,99,0.4)] hover:scale-105 transition-all"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Extra Card for VIP Bridal Suite */}
            <div className="glass-ultra glass-ultra-hover rounded-3xl p-8 flex flex-col justify-between border-2 border-[#D4AF63]/60 relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-black bg-gradient-to-r from-[#FFF0CA] to-[#D4AF63] shadow-[0_0_15px_#D4AF63]">
                  VIP Concierge
                </span>
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF63]/25 border border-[#FFF0CA] flex items-center justify-center text-[#FFF0CA] mb-6 shadow-[0_0_25px_rgba(243,217,155,0.5)]">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-1">
                  Full Day Runway & Bridal Suite
                </h3>
                <p className="text-xs text-[#F3D99B] font-light tracking-wide mb-4">
                  Exclusive Salon Buyout & Private On-Location Team
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  Private lounge booking, champagne service, bridal party styling, makeup artist coordination and continuous touch-ups.
                </p>
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-zinc-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFF0CA]" />
                    <span>Private Chelsea lounge access</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFF0CA]" />
                    <span>Dedicated senior styling duo</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFF0CA]" />
                    <span>Bespoke catering & refreshments</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">
                    Starting From
                  </span>
                  <span className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF0CA] to-[#D4AF63]">
                    {formatPrice(650)}
                  </span>
                </div>
                <Link
                  href="/contact?service=VIP%20Bridal%20Suite"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FFF0CA] border border-[#FFF0CA] hover:bg-[#FFF0CA] hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,99,0.3)]"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRANSFORMATION GALLERY ===================== */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#F3D99B] uppercase drop-shadow">
              Real Client Results
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium mt-3 mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Transformation Gallery
            </h2>
            <p className="text-zinc-300 text-sm font-light leading-relaxed">
              Explore authentic salon work created by our Chelsea specialists. Click any photograph to inspect details and book the look.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] text-black shadow-[0_0_20px_rgba(212,175,99,0.5)]"
                      : "glass-ultra text-zinc-300 hover:text-white hover:border-[#FFF0CA]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Transformation Grid in Total Glass Frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] glass-ultra glass-ultra-hover cursor-pointer transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Glass Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-20">
                  <span className="px-3 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider text-[#FFF0CA] bg-black/75 border border-[#D4AF63]/50 backdrop-blur-md shadow">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-3.5 right-3.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/80 border border-[#FFF0CA] flex items-center justify-center text-[#FFF0CA] shadow-[0_0_15px_#F3D99B]">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform z-20">
                  <h3 className="font-serif text-lg text-white font-medium drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-light mt-1 line-clamp-2">
                    {item.description}
                  </p>
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
              <span>Schedule a Hair Transformation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
}
