import {nextui} from "@nextui-org/react";
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-2':"url('/bg-2.png')",
        'bg-1':"url('/bg-1.png')",
        'bg-3':"url('/bg-3.png')",
        'bg-4':"url('/bg-4.png')",
        'bg-5':"url('/bg-5.png')",
        'bg-6':"url('/bg-6.png')",
        'aboutbg':"url('/aboutbg.png')",
        'award-bg':"url('/awardbg.png')",
        'bg-grade': "url('/grade1.png')",

      },
      fontFamily: {
        'clash-variable': ['ClashDisplay-Variable', 'sans'],
        'clash-extralight': ['ClashDisplay-Extralight', 'sans'],
        'clash-light': ['ClashDisplay-Light', 'sans'],
        'clash-regular': ['ClashDisplay-Regular', 'sans'],
        'clash-medium': ['ClashDisplay-Medium', 'sans'],
        'clash-semibold': ['ClashDisplay-Semibold', 'sans'],
        'clash-bold': ['ClashDisplay-Bold', 'sans'],
      },
    },
  },
  darkMode: "class",

  plugins: [nextui()]
}
export default config
