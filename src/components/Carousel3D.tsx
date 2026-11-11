"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { SALON_DATA } from "@/config/salon";

export default function Carousel3D() {
  const cards = SALON_DATA.carouselCards;
  const [activeIndex, setActiveIndex] = useState(1); // Default to Hair Styling (Card 2) like in Reference Image
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  // Auto-rotation when idle
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    touchStartX.current = null;
  };

  /**
   * 3D Perspective placement in curved arc
   */
  const getCardPosition = (index: number) => {
    const total = cards.length;
    let diff = (index - activeIndex) % total;
    if (diff < -1) diff += total;
    if (diff > 2) diff -= total;

    let translateX = "0%";
    let translateZ = "190px";
    let rotateY = "0deg";
    let scale = 1;
    let opacity = 1;
    let zIndex = 40;
    let filter = "brightness(1.05)";
    let cursor = "default";

    if (diff === 0) {
      // Center Active Card
      translateX = "0%";
      translateZ = "200px";
      rotateY = "0deg";
      scale = 1.06;
      opacity = 1;
      zIndex = 50;
      filter = "brightness(1.08)";
    } else if (diff === 1) {
      // Right Card
      translateX = "62%";
      translateZ = "-20px";
      rotateY = "-20deg";
      scale = 0.85;
      opacity = 0.82;
      zIndex = 30;
      filter = "brightness(0.78)";
      cursor = "pointer";
    } else if (diff === -1) {
      // Left Card
      translateX = "-62%";
      translateZ = "-20px";
      rotateY = "20deg";
      scale = 0.85;
      opacity = 0.82;
      zIndex = 30;
      filter = "brightness(0.78)";
      cursor = "pointer";
    } else if (diff === 2 || diff === -2) {
      // Far Right / Background Card
      translateX = "108%";
      translateZ = "-110px";
      rotateY = "-30deg";
      scale = 0.72;
      opacity = 0.6;
      zIndex = 15;
      filter = "brightness(0.65)";
      cursor = "pointer";
    }

    return {
      transform: `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}) scale(${scale})`,
      opacity,
      zIndex,
      filter,
      cursor,
    };
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto flex flex-col items-center select-none py-4 lg:py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Perspective Stage Container */}
      <div
        className="relative w-full h-[470px] sm:h-[520px] md:h-[570px] lg:h-[620px] flex items-center justify-center"
        style={{ perspective: "1400px" }}
      >
        {/* Glow ambient background spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[550px] h-[400px] md:h-[550px] rounded-full bg-[#D4AF63]/15 blur-[130px] pointer-events-none" />

        {/* 3D Cards track */}
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            const pos = getCardPosition(index);

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
                style={pos}
                className={`absolute w-[245px] sm:w-[285px] md:w-[325px] lg:w-[350px] h-[390px] sm:h-[450px] md:h-[510px] lg:h-[550px] rounded-[34px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center will-change-transform group cursor-pointer ${
                  isActive
                    ? "shadow-[0_0_55px_rgba(243,217,155,0.55),0_30px_70px_rgba(0,0,0,0.95)]"
                    : "shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(212,175,99,0.35)]"
                }`}
              >
                {/* ================= ULTRA PREMIUM 3D METALLIC CHASSIS BORDER ================= */}
                <div
                  className={`w-full h-full p-[2.5px] rounded-[34px] transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-b from-[#FFF5D6] via-[#D4AF63] to-[#8C6B28] shadow-[inset_0_0_10px_rgba(255,255,255,0.9)]"
                      : "bg-gradient-to-b from-[#E2C37E]/60 via-[#A88438]/40 to-[#4A3814]/40 hover:from-[#FFF0CA] hover:to-[#D4AF63]"
                  }`}
                >
                  {/* ================= FULL-BLEED HD PHOTO + TOTAL GLASS CONTAINER ================= */}
                  <div className="relative w-full h-full rounded-[31.5px] overflow-hidden bg-black flex flex-col justify-between">
                    
                    {/* 1. FULL-BLEED HD PHOTOGRAPHY (Spans the entire card seamlessly) */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 300px, 360px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      priority={isActive}
                    />

                    {/* 2. SPECULAR GLASS HIGHLIGHT (Diagonal crystal reflection across top) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/[0.05] to-transparent pointer-events-none z-20" />
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent z-20" />

                    {/* 3. TOP FLOATING BADGE */}
                    <div className="relative z-30 p-5">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#FFF0CA] bg-black/60 backdrop-blur-xl border border-[#D4AF63]/50 shadow-[0_4px_15px_rgba(0,0,0,0.7)]">
                        <Sparkles className="w-2.5 h-2.5 text-[#FFF0CA]" />
                        {card.badge}
                      </span>
                    </div>

                    {/* 4. TOTAL GLASS BOTTOM CONTENT OVERLAY (Liquid frosted glass seamlessly over image) */}
                    <div className="relative z-30 p-5 sm:p-6 pt-10 pb-6 flex flex-col items-center text-center bg-gradient-to-t from-black/95 via-black/65 to-transparent backdrop-blur-[12px] border-t border-white/10">
                      
                      <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-200 font-light tracking-wider mt-1 mb-4 drop-shadow">
                        {card.subtitle}
                      </p>

                      {/* Explore Button */}
                      <Link
                        href={`/services#${card.serviceSlug}`}
                        onClick={(e) => {
                          if (!isActive) {
                            e.preventDefault();
                            setActiveIndex(index);
                          }
                        }}
                        className={`inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] text-black shadow-[0_0_25px_rgba(212,175,99,0.6)] hover:scale-105 hover:shadow-[0_0_35px_rgba(243,217,155,0.8)]"
                            : "bg-black/60 text-[#FFF0CA] border border-[#D4AF63]/50 hover:bg-[#D4AF63] hover:text-black hover:border-transparent"
                        }`}
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Bottom rim gold reflection line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFF0CA] to-transparent z-30 opacity-90" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= TIERED METALLIC PLATFORM WITH RADIANT GOLD HALO ================= */}
        <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-[370px] sm:w-[540px] md:w-[720px] lg:w-[860px] h-[75px] sm:h-[95px] md:h-[120px] pointer-events-none -z-10">
          {/* Main outer tiered platform ring */}
          <div className="w-full h-full rounded-[100%] border-[2.5px] border-[#F3D99B]/85 bg-radial-gradient from-[#D4AF63]/30 via-[#3a2c14]/50 to-black/90 shadow-[0_0_50px_rgba(243,217,155,0.65),inset_0_0_40px_rgba(212,175,99,0.4)] transform rotate-x-[68deg]" />

          {/* Inner concentric neon gold track ring */}
          <div className="absolute inset-x-8 inset-y-2.5 rounded-[100%] border border-[#FFF0CA]/70 shadow-[0_0_20px_rgba(255,240,202,0.5)] transform rotate-x-[68deg]" />

          {/* Upward golden spotlight cast on bottom of cards */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-gradient-to-t from-[#D4AF63]/40 to-transparent blur-2xl" />

          {/* Polished floor reflection pool */}
          <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-full h-20 bg-gradient-to-b from-[#D4AF63]/25 via-[#D4AF63]/5 to-transparent blur-3xl" />
        </div>
      </div>

      {/* ================= CONTROLS: PREV / NEXT & PAGINATION ================= */}
      <div className="relative z-30 mt-8 sm:mt-10 flex items-center justify-center gap-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 border border-[#D4AF63]/40 hover:border-[#F3D99B] hover:bg-[#D4AF63]/25 flex items-center justify-center text-[#F3D99B] transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(212,175,99,0.25)] focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={card.id}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}: ${card.title}`}
                className={`transition-all duration-500 rounded-full ${
                  isActive
                    ? "w-8 h-2.5 bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] shadow-[0_0_15px_#F3D99B]"
                    : "w-2.5 h-2.5 bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 border border-[#D4AF63]/40 hover:border-[#F3D99B] hover:bg-[#D4AF63]/25 flex items-center justify-center text-[#F3D99B] transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(212,175,99,0.25)] focus:outline-none"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}
