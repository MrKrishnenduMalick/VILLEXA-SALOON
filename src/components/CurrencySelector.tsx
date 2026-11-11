"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCurrency, CURRENCIES, CurrencyCode } from "@/context/CurrencyContext";
import { ChevronDown, Globe } from "lucide-react";

export default function CurrencySelector() {
  const { currency, setCurrencyCode } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-zinc-300 hover:text-white bg-black/50 border border-white/10 hover:border-[#D4AF63]/50 backdrop-blur-md transition-all"
        aria-label="Select Currency"
      >
        <span className="text-xs">{currency.flag}</span>
        <span className="tracking-wider">{currency.code}</span>
        <ChevronDown className={`w-3 h-3 text-[#D4AF63] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-[#111111]/95 border border-[#D4AF63]/30 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-1.5 z-50 animate-fadeIn">
          <div className="px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-zinc-500 border-b border-zinc-800">
            Market Currency
          </div>
          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
            const item = CURRENCIES[code];
            const isSelected = item.code === currency.code;
            return (
              <button
                key={code}
                onClick={() => {
                  setCurrencyCode(code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                  isSelected
                    ? "text-[#F3D99B] bg-[#D4AF63]/15 font-semibold"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{item.flag}</span>
                  <span>{item.code}</span>
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">{item.symbol}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

