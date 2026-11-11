"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyCode = "USD" | "GBP" | "CAD" | "AUD";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  flag: string;
  name: string;
  rate: number; // Multiplier relative to USD base
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", flag: "🇺🇸", name: "USD ($)", rate: 1 },
  GBP: { code: "GBP", symbol: "£", flag: "🇬🇧", name: "GBP (£)", rate: 0.78 },
  CAD: { code: "CAD", symbol: "C$", flag: "🇨🇦", name: "CAD (C$)", rate: 1.35 },
  AUD: { code: "AUD", symbol: "A$", flag: "🇦🇺", name: "AUD (A$)", rate: 1.5 },
};

interface CurrencyContextType {
  currency: CurrencyConfig;
  setCurrencyCode: (code: CurrencyCode) => void;
  formatPrice: (usdBaseAmount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: CURRENCIES.USD,
  setCurrencyCode: () => {},
  formatPrice: (amount) => `$${amount}`,
});

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<CurrencyConfig>(CURRENCIES.USD);

  useEffect(() => {
    const saved = localStorage.getItem("luxe_currency") as CurrencyCode;
    if (saved && CURRENCIES[saved]) {
      setCurrency(CURRENCIES[saved]);
    }
  }, []);

  const setCurrencyCode = (code: CurrencyCode) => {
    if (CURRENCIES[code]) {
      setCurrency(CURRENCIES[code]);
      localStorage.setItem("luxe_currency", code);
    }
  };

  const formatPrice = (usdBaseAmount: number): string => {
    const converted = Math.round(usdBaseAmount * currency.rate);
    return `${currency.symbol}${converted}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrencyCode, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);

