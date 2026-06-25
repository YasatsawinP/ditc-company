import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F48E2E",
          hover: "#E86230",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#694535",
          hover: "#B8775D",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        surface: "#F0F0E9",
        success: "#0B9B0B",
        error: "#D93838",
        warning: "#FFE137",
        info: "#FF7744",
        border: "rgba(0,0,0,0.10)",
        foreground: "#0f172a",
        content: "#2F1D19",
        muted: {
          DEFAULT: "#F0F0E9",
          foreground: "#64748b",
        },
      },
      borderRadius: {
        hard: "2px",
        soft: "8px",
        medium: "16px",
        large: "24px",
        full: "9999px",
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0,0,0,0.16)",
        medium: "0 4px 8px rgba(0,0,0,0.14)",
        strong: "0 8px 16px rgba(0,0,0,0.15)",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-thai)", "Noto Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
