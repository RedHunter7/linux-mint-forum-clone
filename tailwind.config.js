/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      serif: ['"Merriweather"', 'serif'],
      mono: ['"Source Code Pro"', 'monospace']
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mintTheme: {
          "primary": "#68C174",
          "secondary": "#CCEED3",
          "accent": "#FAF9F9",
          "accent-content": "#000000",
          "neutral": "#0A1829",
          "neutral-content": "#FFFFFF",
          "base-100": "#F0F0F0",
          "info": "#7a8bd6",
          "success": "#00804c",
          "warning": "#f1c84b",
          "error": "#c70606",
        }
      }
    ]
  }
}

