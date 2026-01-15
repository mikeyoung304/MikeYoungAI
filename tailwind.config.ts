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

        // Text colors - deep navy foundation
        ink: '#0B1220',
        'ink-muted': '#4A5568',
        'ink-subtle': '#6B7280',
        'text-primary': '#0F172A',
        'text-secondary': '#334155',
        'text-muted': '#64748B',
        'text-subtle': '#94A3B8',

        // Enterprise blue spectrum - primary for CTAs
        primary: {
          DEFAULT: '#1E3A8A',
          hover: '#1E40AF',
          light: '#EFF6FF',
          dark: '#1E3A5F',
        },

        // Accent - electric blue for key highlights
        accent: {
          DEFAULT: '#3B82F6',
          glow: 'rgba(59, 130, 246, 0.4)',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },

        // Glass morphism tokens
        glass: {
          bg: 'rgba(255, 255, 255, 0.85)',
          'bg-scrolled': 'rgba(255, 255, 255, 0.95)',
          border: 'rgba(255, 255, 255, 0.2)',
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
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      transitionDuration: {
        '400': '400ms',
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
        // Premium shadow hierarchy
        'card': '0 1px 3px rgb(0 0 0 / 0.04), 0 4px 6px rgb(0 0 0 / 0.02)',
        'card-hover': '0 4px 12px rgb(0 0 0 / 0.06), 0 8px 16px rgb(0 0 0 / 0.04)',
        'elevated': '0 8px 24px rgb(0 0 0 / 0.08), 0 16px 32px rgb(0 0 0 / 0.04)',
        'glow': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.2)',
      },
      animation: {
        // Base animations - minimum 400ms for polished feel
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',

        // Staggered fade-up variants (for sequential reveals)
        // 150ms intervals for unhurried, considered pacing
        'fade-in-up-1': 'fadeInUp 0.5s ease-out 0.15s both',
        'fade-in-up-2': 'fadeInUp 0.5s ease-out 0.30s both',
        'fade-in-up-3': 'fadeInUp 0.5s ease-out 0.45s both',
        'fade-in-up-4': 'fadeInUp 0.5s ease-out 0.60s both',
        'fade-in-up-5': 'fadeInUp 0.5s ease-out 0.75s both',

        // Scale animation for buttons/cards
        'scale-in': 'scaleIn 0.5s ease-out',

        // Mobile menu animations
        'slide-down': 'slideDown 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',

        // Spinner for loading states
        'spin-slow': 'spin 1.5s linear infinite',

        // Success checkmark
        'check-draw': 'checkDraw 0.5s ease-out forwards',

        // Character reveal for text
        'char-reveal': 'charReveal 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { opacity: '0', height: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', height: 'var(--menu-height, auto)', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '1', height: 'var(--menu-height, auto)', transform: 'translateY(0)' },
          '100%': { opacity: '0', height: '0', transform: 'translateY(-6px)' },
        },
        checkDraw: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        charReveal: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
