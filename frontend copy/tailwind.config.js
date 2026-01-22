/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
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
        heading: ['Playfair Display', 'serif'],
        body: ['Manrope', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8DA399",
          foreground: "#FFFFFF",
          50: "#F2F5F4",
          100: "#E5EBE9",
          200: "#CCD7D3",
          300: "#B3C3BD",
          400: "#9AAFA7",
          500: "#8DA399",
          600: "#71827A",
          700: "#55625C",
          800: "#38413D",
          900: "#1C211F",
        },
        secondary: {
          DEFAULT: "#E6B8B8",
          foreground: "#2C3E30",
          50: "#FCF8F8",
          100: "#F9F1F1",
          200: "#F3E3E3",
          300: "#EDD4D4",
          400: "#E6B8B8",
          500: "#D99A9A",
          600: "#CC7C7C",
          700: "#BF5E5E",
          800: "#B34040",
          900: "#A62222",
        },
        bg: {
          DEFAULT: "#F9F9F7",
          paper: "#FFFFFF",
          subtle: "#F2F2F0",
        },
        text: {
          DEFAULT: "#2C3E30",
          muted: "#5C6B5F",
          light: "#8A968D",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          gold: "#D4AF37",
          warm: "#FFFAF0",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(44, 62, 48, 0.05)",
        hover: "0 20px 40px -10px rgba(44, 62, 48, 0.1)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}