/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif']
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
          "success": "#81e4d5",
          "warning": "#f1c84b",
          "error": "#f63777",
        }
      }
    ]
  }
}

