import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional light-mode palette
        background: '#FFFFFF',
        'background-alt': '#F8FAFC',
        'background-muted': '#F1F5F9',

        // Text colors
        'text-primary': '#0F172A',
        'text-secondary': '#334155',
        'text-muted': '#64748B',
        'text-subtle': '#94A3B8',

        // Accent - sophisticated indigo (more distinctive than generic blue)
        accent: {
          DEFAULT: '#6366F1',
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },

        // Border colors
        border: {
          DEFAULT: '#E2E8F0',
          muted: '#F1F5F9',
          strong: '#CBD5E1',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        // Typography scale
        'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        // Section spacing
        'section': '6rem',
        'section-lg': '8rem',
      },
      maxWidth: {
        'content': '64rem',
        'prose': '42rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(15, 23, 42, 0.08)',
        'medium': '0 4px 16px -4px rgba(15, 23, 42, 0.12)',
        'strong': '0 8px 24px -6px rgba(15, 23, 42, 0.16)',
      },
      animation: {
        // Base animations
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',

        // Staggered fade-up variants (for sequential reveals)
        'fade-in-up-1': 'fadeInUp 0.6s ease-out 0.1s both',
        'fade-in-up-2': 'fadeInUp 0.6s ease-out 0.2s both',
        'fade-in-up-3': 'fadeInUp 0.6s ease-out 0.3s both',
        'fade-in-up-4': 'fadeInUp 0.6s ease-out 0.4s both',
        'fade-in-up-5': 'fadeInUp 0.6s ease-out 0.5s both',

        // Scale animation for buttons/cards
        'scale-in': 'scaleIn 0.4s ease-out',

        // Mobile menu animations
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',

        // Spinner for loading states
        'spin-slow': 'spin 1.5s linear infinite',

        // Success checkmark
        'check-draw': 'checkDraw 0.4s ease-out forwards',

        // Character reveal for text
        'char-reveal': 'charReveal 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { opacity: '0', height: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', height: 'var(--menu-height, auto)', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '1', height: 'var(--menu-height, auto)', transform: 'translateY(0)' },
          '100%': { opacity: '0', height: '0', transform: 'translateY(-8px)' },
        },
        checkDraw: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        charReveal: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
