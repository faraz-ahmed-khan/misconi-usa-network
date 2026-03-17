import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // .cursorrules governed color system
        brand: {
          navy: "#0F172A",
          "navy-light": "#1C2E45",
          blue: "#1E3A8A",
          "blue-hover": "#2563eb",
          gold: "#E3C27A",
        },
        surface: {
          white: "#FFFFFF",
          gray: "#F2F2F2",
          "gray-alt": "#F0F2F5",
          "gray-warm": "#E8E8E8",
          "gray-border": "#E5E7EB",
          "gray-muted": "#9CA3AF",
          "gray-light": "#F8FAFC",
          "blue-tint": "#F0F4FF",
          "blue-pale": "#EFF6FF",
          "blue-pale-hover": "#FAFCFF",
        },
        type: {
          heading: "#0F172A",
          body: "#374151",
          muted: "#6B7280",
        },
        footer: {
          dark: "#0F1E30",
          text: "#94A3B8",
          border: "rgba(255,255,255,0.08)",
        },
        stats: {
          label: "#BFD3F7",
          sublabel: "#93B4E8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "section": ["2.25rem", { lineHeight: "1.2" }],
        "subhead": ["1.25rem", { lineHeight: "1.4" }],
        "body": ["1.0625rem", { lineHeight: "1.7" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "caption": ["0.875rem", { lineHeight: "1.5" }],
      },
      maxWidth: {
        content: "1200px",
        "hero-text": "760px",
        "subhead": "680px",
        "subhead-sm": "600px",
        "video": "780px",
        "video-caption": "560px",
        "faq": "800px",
      },
      borderRadius: {
        card: "16px",
        button: "8px",
        tag: "20px",
        "icon-box": "10px",
        "icon-box-sm": "8px",
        video: "20px",
      },
      boxShadow: {
        nav: "0 1px 3px rgba(0,0,0,0.06)",
        button: "0 4px 12px rgba(30,58,138,0.18)",
        card: "0 8px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.07)",
        testimonial: "0 4px 24px rgba(0,0,0,0.06)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.02)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
