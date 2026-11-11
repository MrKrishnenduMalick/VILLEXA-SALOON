import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingConcierge from "@/components/FloatingConcierge";
import LuxuryBackground from "@/components/LuxuryBackground";
import { CurrencyProvider } from "@/context/CurrencyContext";

export const metadata: Metadata = {
  title: "LUXE Hair Studio | Premium International Salon",
  description: "Bespoke hair styling, multidimensional balayage, luxury bridal hair, and precision grooming in an award-inspired salon environment.",
  keywords: ["luxury hair salon", "Chelsea London hair studio", "balayage specialist", "bridal hair", "expert stylist"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080706] text-luxe-ivory antialiased min-h-screen flex flex-col selection:bg-luxe-gold selection:text-black font-sans relative">
        <LuxuryBackground />
        <CurrencyProvider>
          <Navbar />
          <main className="flex-grow pt-20 relative z-10">
            {children}
          </main>
          <Footer />
          <FloatingConcierge />
        </CurrencyProvider>
      </body>
    </html>
  );
}
