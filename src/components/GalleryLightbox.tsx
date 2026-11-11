"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from "lucide-react";
import { GalleryItem } from "@/config/salon";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % items.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null) return null;
  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-2xl animate-fadeIn">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Controls */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-4">
        <span className="text-xs tracking-widest text-[#D4AF63] font-mono">
          {currentIndex + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-zinc-900/90 border border-white/10 hover:border-[#D4AF63] hover:text-[#D4AF63] flex items-center justify-center text-zinc-300 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-[#D4AF63]/30 hover:border-[#F3D99B] hover:bg-[#D4AF63]/20 flex items-center justify-center text-[#F3D99B] transition-all hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-[#D4AF63]/30 hover:border-[#F3D99B] hover:bg-[#D4AF63]/20 flex items-center justify-center text-[#F3D99B] transition-all hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Lightbox Content Container */}
      <div
        className="relative z-10 max-w-4xl w-full bg-[#111111] border border-[#D4AF63]/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(212,175,99,0.3)] flex flex-col md:flex-row max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Section */}
        <div className="relative w-full md:w-3/5 h-[340px] md:h-[540px] bg-black">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#F3D99B] bg-black/70 border border-[#D4AF63]/30 backdrop-blur-md">
              {currentItem.categoryLabel}
            </span>
          </div>
        </div>

        {/* Details & CTA Section */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#161616] to-[#0d0d0d]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#D4AF63] uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transformation Spotlight</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-snug">
              {currentItem.title}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              {currentItem.description}
            </p>

            <div className="pt-4 border-t border-zinc-800">
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Salon Technique Highlights
              </h4>
              <ul className="text-xs text-zinc-400 space-y-1.5 list-disc list-inside">
                <li>Bespoke undertone neutralization</li>
                <li>Micro-dimensional hand painting</li>
                <li>Bond-strengthening shine gloss</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800 mt-6">
            <Link
              href={`/contact?service=${encodeURIComponent(currentItem.categoryLabel)}`}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F3D99B] via-[#D4AF63] to-[#AA8030] shadow-[0_0_20px_rgba(212,175,99,0.35)] hover:scale-[1.02] transition-transform"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book This Look</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

