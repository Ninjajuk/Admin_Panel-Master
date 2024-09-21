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
        // Button Colors
        buttonPrimary: "#3498db",
        buttonSecondary: "#2ecc71",
        buttonDanger: "#e74c3c",
        buttonWarning: "#f39c12",

        primary: "#800000",

        //background
        bgPrimary: "#f8f9fa",
        bgSecondary: "#00BFA5" /*Teal Modern and Sleek */,
        tertary: "#00ACC1",
        quadliterily: "#8E24AA",

        // Theme Background Colors
        themeLight: "#ffffff",
        themeDark: "#000000",
        themePrimary: "#f8f9fa",
        themeSecondary: "#ecf0f1",

        // Text Paragraph Colors
        textPrimary: "#2c3e50",
        textSecondary: "#95a5a6",
        textMuted: "#7f8c8d",

        //text Heading
        txtHeading1: "#008080" /* Teal   Provides a fresh, modern feel.*/,
        txtHeading2: "#708090" /* Slate Gray */,
        txtHeading3: "#DC143C" /*Crimson Red: Bold and attention-grabbing.*/,
      },
    },
  },
  plugins: [],
};
export default config;
