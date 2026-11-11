import React from "react";
import Image from "next/image";

export default function LuxuryBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden select-none">
      {/* ================= REAL HIGH-RES BLACK & GOLD MARBLE TEXTURE ================= */}
      <div className="absolute inset-0">
        <Image
          src="/images/luxury-marble-gold.jpg"
          alt="Luxury Black and Gold Marble Texture"
          fill
          priority
          className="object-cover object-center opacity-85 contrast-125 brightness-80 scale-105"
        />
        {/* Deep rich vignette overlay to enhance contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090807]/50 via-transparent to-[#090807]/75" />
        <div className="absolute inset-0 bg-radial-vignette opacity-50" />
      </div>

      {/* ================= ORGANIC FLUID GOLDEN MARBLE STRIPS & VEINS (NO STRAIGHT LINES) ================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          {/* Radiant Liquid Gold Gradient */}
          <linearGradient id="liquidGold1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7A5818" stopOpacity="0.2" />
            <stop offset="20%" stopColor="#D4AF63" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#FFF8E7" stopOpacity="1" />
            <stop offset="70%" stopColor="#E2C37E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4A340E" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="liquidGold2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A340E" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#E2C37E" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="80%" stopColor="#C99E4B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7A5818" stopOpacity="0.1" />
          </linearGradient>

          {/* Golden Ribbon Glow Filter */}
          <filter id="curvedGoldGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="softVeinGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur2" />
            <feComposite in="SourceGraphic" in2="blur2" operator="over" />
          </filter>
        </defs>

        {/* 1. Primary Flowing Golden Strip (Sweeping from top-left through center to bottom-right) */}
        <path
          d="M -80 140 C 240 80, 480 320, 780 260 S 1180 120, 1520 220"
          fill="none"
          stroke="url(#liquidGold1)"
          strokeWidth="4.5"
          filter="url(#curvedGoldGlow)"
        />
        <path
          d="M -80 140 C 240 80, 480 320, 780 260 S 1180 120, 1520 220"
          fill="none"
          stroke="#FFFDF5"
          strokeWidth="1.2"
          opacity="0.95"
        />

        {/* 2. Secondary Elegant Golden Ribbon (Sweeping gracefully through mid-screen) */}
        <path
          d="M 1520 440 C 1220 520, 960 380, 680 480 S 260 620, -80 540"
          fill="none"
          stroke="url(#liquidGold2)"
          strokeWidth="3.5"
          filter="url(#curvedGoldGlow)"
        />
        <path
          d="M 1520 440 C 1220 520, 960 380, 680 480 S 260 620, -80 540"
          fill="none"
          stroke="#FFF8E7"
          strokeWidth="1"
          opacity="0.9"
        />

        {/* 3. Lower Bold Liquid Gold Wave Strip (As seen in Reference Images 2 & 3) */}
        <path
          d="M -100 760 C 320 890, 720 710, 1080 790 S 1360 740, 1540 680"
          fill="none"
          stroke="url(#liquidGold1)"
          strokeWidth="5"
          filter="url(#curvedGoldGlow)"
        />
        <path
          d="M -100 760 C 320 890, 720 710, 1080 790 S 1360 740, 1540 680"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <path
          d="M -90 780 C 330 910, 730 730, 1090 810 S 1370 760, 1550 700"
          fill="none"
          stroke="url(#liquidGold2)"
          strokeWidth="2.5"
          opacity="0.6"
        />

        {/* 4. Fine Organic Marble Vein Branches (Natural Marble Fissures) */}
        <path
          d="M 480 320 C 560 390, 610 440, 680 480"
          fill="none"
          stroke="url(#liquidGold1)"
          strokeWidth="1.8"
          strokeOpacity="0.75"
          filter="url(#softVeinGlow)"
        />
        <path
          d="M 780 260 C 860 190, 920 160, 1020 130"
          fill="none"
          stroke="url(#liquidGold2)"
          strokeWidth="1.5"
          strokeOpacity="0.7"
          filter="url(#softVeinGlow)"
        />
        <path
          d="M 240 80 C 290 140, 320 180, 360 250"
          fill="none"
          stroke="url(#liquidGold1)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        <path
          d="M 1080 790 C 1140 840, 1200 870, 1260 890"
          fill="none"
          stroke="url(#liquidGold2)"
          strokeWidth="1.5"
          strokeOpacity="0.65"
        />
      </svg>

      {/* Atmospheric Warm Golden Halos around the ribbons */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-[#D4AF63]/18 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] bg-[#F3D99B]/15 rounded-full blur-[160px]" />
    </div>
  );
}
