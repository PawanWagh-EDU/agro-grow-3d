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
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        leaf: "var(--leaf)",
        "leaf-glow": "var(--leaf-glow)",
        berry: "var(--berry)",
        cream: "var(--cream)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero": "var(--gradient-hero)",
        "leaf-gradient": "var(--gradient-leaf)",
        "berry-gradient": "var(--gradient-berry)",
      },
      boxShadow: {
        "3d": "var(--shadow-3d)",
        "glow": "var(--shadow-glow)",
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-medium": "float-medium 5s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "grow-in": "grow-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "tilt": "tilt-hover 6s ease-in-out infinite",
        shimmer: "shimmer 30s linear infinite",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(-4deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "grow-in": {
          from: { opacity: "0", transform: "translateY(30px) scale(0.95)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "tilt-hover": {
          "0%, 100%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "50%": { transform: "rotateY(6deg) rotateX(-3deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
