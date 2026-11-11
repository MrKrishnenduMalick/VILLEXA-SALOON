"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp, X, Sparkles } from "lucide-react";
import { SALON_DATA } from "@/config/salon";

export default function FloatingConcierge() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Scroll To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-black/70 border border-[#D4AF63]/40 text-[#F3D99B] hover:bg-[#D4AF63] hover:text-black hover:border-transparent flex items-center justify-center backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all hover:scale-110"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Expanded Quick Contact Menu */}
      {isExpanded && (
        <div className="p-3 rounded-2xl bg-[#121212]/95 border border-[#D4AF63]/40 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col gap-2 min-w-[210px] animate-fadeIn">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-zinc-800">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#F3D99B] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#D4AF63]" />
              Salon Concierge
            </span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-zinc-500 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* WhatsApp Direct */}
          <a
            href={SALON_DATA.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-white hover:bg-white/5 transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <span>Chat on WhatsApp</span>
              <span className="text-[10px] text-zinc-400">Instant response</span>
            </div>
          </a>

          {/* Call Salon */}
          <a
            href={`tel:${SALON_DATA.phoneClean}`}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-white hover:bg-white/5 transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-[#D4AF63]/20 border border-[#D4AF63]/40 flex items-center justify-center text-[#F3D99B]">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <span>Call Chelsea Desk</span>
              <span className="text-[10px] text-zinc-400">{SALON_DATA.phone}</span>
            </div>
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] shadow-[0_0_25px_rgba(212,175,99,0.5)] hover:shadow-[0_0_35px_rgba(243,217,155,0.7)] hover:scale-105 transition-all"
        aria-label="Open concierge options"
      >
        <MessageCircle className="w-4 h-4 fill-black" />
        <span className="hidden sm:inline">Concierge</span>
      </button>
    </div>
  );
}

