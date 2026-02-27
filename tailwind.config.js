/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ground: "var(--color-bg-ground)",
        surface: "var(--color-bg-surface)",
        elevated: "var(--color-bg-elevated)",
        border: "var(--color-border)",
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          subtle: "var(--color-accent-subtle)",
        },
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        muted: "var(--color-text-muted)",
      },
      borderColor: {
        DEFAULT: "var(--color-border)",
        subtle: "var(--color-border-subtle)",
      },
      boxShadow: {
        elevated: "var(--shadow-elevated)",
        hover: "var(--shadow-hover)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
    },
  },
  plugins: [],
};
