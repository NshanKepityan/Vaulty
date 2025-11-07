

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        solanaCyan: "#00FFE0",
        solanaPurple: "#7B00FF",
        vaultGold: "#FFD700",
        midnight: "#0A0118",
        ink: "#140B2E",
      },
      boxShadow: {
        neon: "0 0 30px rgba(0,255,224,0.25)",
        card: "0 10px 30px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        bob:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        glow:  { "0%,100%": { boxShadow: "0 0 0 rgba(0,0,0,0)" }, "50%": { boxShadow: "0 0 38px rgba(0,255,224,0.35)" } },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        coinFall: {
          "0%": { transform: "translateY(-20vh) rotate(0deg)", opacity: 0 },
          "15%": { opacity: 1 },
          "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: 0 }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        bob: "bob 7s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        coin: "coinFall 7s linear infinite",
        marquee: "marquee 18s linear infinite",
      },
      backgroundSize: {
        "shimmer": "200% 100%",
      }
    },
  },
  plugins: [],
};

