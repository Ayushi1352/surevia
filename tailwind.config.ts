import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1020px",
      w1100: "1021px",
      xl: "1022px",
      w1360: "1023px",
      w1440: "1024px",
    },
    extend: {
      borderColor: {
        DEFAULT: "currentColor",
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        heading: ["var(--font-heading)"],
      },
      transitionDuration: {
        250: "250ms",
        600: "600ms",
        800: "800ms",
      },
      transitionDelay: {
        120: "120ms",
        240: "240ms",
        320: "320ms",
        440: "440ms",
        560: "560ms",
      },
    },
  },
  plugins: [
    // Variants built into Tailwind v4 that v3 does not have.
    plugin(({ addVariant }) => {
      addVariant("starting", "@starting-style");
      addVariant("noscript", "@media (scripting: none)");
    }),
  ],
};
export default config;
