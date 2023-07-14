/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        gotham: ["var(--font-gotham)"],
        mono: ["var(--font-mono)"],
      },
      fontWeight: {
        semilight: 350,
      },
      colors: {
        brown: {
          DEFAULT: "#70594C",
        },
        pink: {
          DEFAULT: "#EBA5B8",
        },
        stone: {
          DEFAULT: "#231F20",
        },
        gray: {
          50: "#FBFBFA",
          100: "#F8F7F6",
          200: "#F1E9E4",
          300: "#E0DCD9",
          400: "#BEB5AE",
          500: "#97887E",
          600: "#6D645B",
          700: "#554D46",
          900: "#231E1B",
        },
        divider: {
          DEFAULT: "rgba(35, 31, 32, 0.10)",
        },
        blue: {
          DEFAULT: "#0A5E9C",
        },
        teal: {
          DEFAULT: "#45B5BC",
        },
        yellow: {
          DEFAULT: "#F2C202",
        },
        orange: {
          DEFAULT: "#E24D0E",
        },
        green: {
          DEFAULT: "#58AE75",
        },
        purple: {
          DEFAULT: "#895698",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "rgba(35, 31, 32, 0.50)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          from: { opacity: 0, transform: "translateY(-10%)" },
          to: { opacity: 1, transform: "translateY(0%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in forwards"
      },
      lineHeight: {
        full: "100%",
      },
      boxShadow: {
        accordion: "0px 6px 16px 0px rgba(0, 0, 0, 0.03)",
        circle: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
        medium: "0 6px 16px rgba(0, 0, 0, 0.03)",
        "category-tag": "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
