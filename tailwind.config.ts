import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxe: {
          bg: "#090909",
          card: "#121212",
          surface: "#181818",
          charcoal: "#202020",
          border: "rgba(212, 175, 99, 0.2)",
          borderGlow: "rgba(212, 175, 99, 0.45)",
          gold: "#D4AF63",
          goldLight: "#F3D99B",
          goldDark: "#A88438",
          ivory: "#F5F0E6",
          muted: "#9E9E9E",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 99, 0.35)',
        'gold-glow-lg': '0 0 50px -10px rgba(212, 175, 99, 0.45)',
        'platform-glow': '0 0 80px 20px rgba(212, 175, 99, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3D99B 0%, #D4AF63 50%, #9B7629 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #FFFFFF 0%, #F3D99B 50%, #D4AF63 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
