/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Accent-LightRed': 'hsl(0, 100%, 67%)',
        'Accent-OrageyYellow': 'hsl(39, 100%, 56%)',
        'Accent-GreenTeal': 'hsl(166, 100%, 37%)',
        'Accent-CobaltBlue': 'hsl(234, 85%, 45%)',
        'BGG-LightSlateBlue': 'hsl(252, 100%, 67%)',
        'BGG-RoyalBlue': 'hsl(241, 81%, 54%)',
        'BG-VoiletBlue': 'hsla(256, 72%, 46%, 1)',
        'BG-PersianBlue': 'hsla(241, 72%, 46%, 0)',
        'Neutral-White': 'hsl(0, 0%, 100%)',
        'Neutral-PaleBlue': 'hsl(221, 100%, 96%)',
        'Neutral-LightLavender': 'hsl(241, 100%, 89%)',
        'Neutral-DarkGrayBlue': 'hsl(224, 30%, 27%)'
      },
      fontFamily: {
        'Hanken': 'Hanken Grotesk, sans-serif',
      }
    },
  },
  plugins: [require("tailwind-extended-shadows")],
}