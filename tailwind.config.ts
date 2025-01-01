import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/domains/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#1B1B1B',
      astronautBlue: '#013660',
      bgGray: '#F7F8FA',
      borderLine: '#DEE2E9',
      errorBg: '#D80D3D10',
      error: '#D80D3D',
      neutral: {
        0: '#FFFFFF',
        50: '#F6F6F6',
        75: '#BDC5DB',
        100: '#E7E7E7',
        200: '#D1D1D1',
        300: '#B0B0B0',
        400: '#888888',
        500: '#6D6D6D',
        600: '#5D5D5D',
        700: '#474747',
        800: '#454545',
        900: '#3D3D3D',
        950: '#222222',
      },
    },
    extend: {
      width: {
        mobile: '767px',
        desktop: '1440px',
      },
      maxWidth: {
        mobile: '767px',
        desktop: '1440px',
      },

      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
      },

      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3.4rem',
        '7xl': '4rem',
      },
    },
    screens: {
      sm: '390px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
  },
  plugins: [],
} satisfies Config;
