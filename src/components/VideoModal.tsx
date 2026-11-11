"use client";

import React, { useState } from "react";
import { X, Play, Volume2, VolumeX, Sparkles, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-[#121212] border border-[#D4AF63]/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(212,175,99,0.3)] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0d0d0d]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF63]" />
            <span className="font-serif text-lg text-white font-medium">
              LUXE Salon Experience • Chelsea Flagship
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-800/80 hover:bg-[#D4AF63] hover:text-black flex items-center justify-center text-zinc-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cinematic Video Showcase */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          {/* Ambient image background portraying video playback */}
          <Image
            src="/images/about-hero.jpg"
            alt="LUXE Studio interior reel"
            fill
            className="object-cover brightness-75 scale-105 transition-transform duration-1000 group-hover:scale-100"
          />

          {/* Golden lighting gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

          {/* Central Play Indicator / Status */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="w-20 h-20 rounded-full bg-black/60 border-2 border-[#F3D99B] backdrop-blur-md flex items-center justify-center text-[#F3D99B] shadow-[0_0_30px_rgba(212,175,99,0.6)] animate-pulse">
              <Play className="w-8 h-8 ml-1 fill-current" />
            </div>
            <p className="font-serif text-2xl md:text-3xl text-white font-medium mt-6 drop-shadow-lg">
              Crafting Confidence Through Artistry
            </p>
            <p className="text-sm text-[#F3D99B]/90 font-light tracking-widest uppercase mt-2">
              Behind the Scenes • Master Stylists in Motion
            </p>
          </div>

          {/* Bottom Video Controls Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs text-zinc-300">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="font-medium tracking-wide">LUXE Cinema Edition (4K HDR)</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex items-center gap-1.5 hover:text-[#D4AF63] transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isMuted ? "Unmute" : "Muted"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#0e0e0e] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800">
          <p className="text-xs text-zinc-400">
            Ready to experience Chelsea&apos;s leading luxury salon?
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-white"
            >
              Close
            </button>
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F3D99B] via-[#D4AF63] to-[#AA8030] shadow-[0_0_20px_rgba(212,175,99,0.35)] hover:scale-105 transition-transform"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

