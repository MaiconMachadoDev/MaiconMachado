import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        surface: '#FAFAFA',
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        code: {
          tag: '#7C3AED',
          text: '#374151',
          string: '#059669',
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
        blob: 'blob 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '25%': {
            transform: 'translate(24px, -32px) scale(1.06)',
          },
          '50%': {
            transform: 'translate(-16px, 20px) scale(0.94)',
          },
          '75%': {
            transform: 'translate(12px, 28px) scale(1.03)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
