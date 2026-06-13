import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        panel: "#0b1020",
        panelSoft: "#11182b",
        line: "rgba(255,255,255,0.08)",
        glow: "#7c3aed",
        cyanGlow: "#06b6d4"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(124,58,237,0.35), 0 0 30px rgba(124,58,237,0.18)"
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at top, rgba(124,58,237,0.18), transparent 30%), radial-gradient(circle at 80% 20%, rgba(6,182,212,0.14), transparent 28%)",
        "mesh-dark":
          "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.18), transparent 30%), radial-gradient(circle at 80% 10%, rgba(6,182,212,0.12), transparent 28%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.04), transparent 30%)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
