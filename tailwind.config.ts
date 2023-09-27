import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'var(--white)',
      black: '#000',
      dark: 'var(--dark)',
      green: 'var(--green)',
      yellow: 'var(--yellow)',
      orange: 'var(--orange)',
      pink: 'var(--pink)',
      magenta: 'var(--magenta)',
      purple: {
        100: 'var(--purple-100)',
        200: 'var(--purple-200)',
      },
      blue: {
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
        500: 'var(--blue-500)',
        600: 'var(--blue-600)',
      },
      gray: {
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        650: 'var(--gray-650)',
        700: 'var(--gray-700)',
        900: 'var(--gray-900)',
       
      },
      red: {
        500: 'var(--red-500)',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
