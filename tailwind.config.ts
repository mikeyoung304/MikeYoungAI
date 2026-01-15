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
        // ===========================================
        // DARK MODE PREMIUM PALETTE
        // Inspired by Linear, Apple, Vercel
        // ===========================================

        // Background hierarchy
        background: {
          DEFAULT: '#0A0A0B',      // Near-black base
          elevated: '#141417',     // Cards, modals
          muted: '#1C1C21',        // Subtle differentiation
          accent: '#0F172A',       // Navy accent areas
        },

        // Surface colors for depth layering
        surface: {
          1: 'rgba(255, 255, 255, 0.02)',
          2: 'rgba(255, 255, 255, 0.04)',
          3: 'rgba(255, 255, 255, 0.06)',
          4: 'rgba(255, 255, 255, 0.08)',
        },

        // Text hierarchy on dark
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#71717A',
          subtle: '#52525B',
        },

        // Legacy aliases for compatibility
        ink: '#FAFAFA',
        'ink-muted': '#A1A1AA',
        'ink-subtle': '#71717A',
        'text-primary': '#FAFAFA',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
        'text-subtle': '#52525B',

        // Electric accent system
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#60A5FA',
          muted: '#2563EB',
          glow: 'rgba(59, 130, 246, 0.5)',
          'glow-soft': 'rgba(59, 130, 246, 0.2)',
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

        // Primary alias for accent
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#60A5FA',
          light: 'rgba(59, 130, 246, 0.1)',
          dark: '#1D4ED8',
        },

        // Warm accent for special CTAs
        warm: {
          DEFAULT: '#F97316',
          hover: '#FB923C',
          glow: 'rgba(249, 115, 22, 0.4)',
        },

        // Success/error states
        success: {
          DEFAULT: '#22C55E',
          glow: 'rgba(34, 197, 94, 0.3)',
        },
        error: {
          DEFAULT: '#EF4444',
          glow: 'rgba(239, 68, 68, 0.3)',
        },

        // Glass morphism tokens for dark mode
        glass: {
          bg: 'rgba(20, 20, 23, 0.6)',
          'bg-strong': 'rgba(20, 20, 23, 0.85)',
          'bg-scrolled': 'rgba(20, 20, 23, 0.95)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.12)',
        },

        // Border colors for dark mode
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          muted: 'rgba(255, 255, 255, 0.04)',
          strong: 'rgba(255, 255, 255, 0.12)',
          accent: 'rgba(59, 130, 246, 0.3)',
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
        // ===========================================
        // BOLD EDITORIAL TYPOGRAPHY
        // Statement headings with tight tracking
        // ===========================================

        // Display - oversized statement headings
        'display-2xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],

        // Headings
        'h1': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],

        // Body - slightly larger for readability on dark
        'body-lg': ['1.25rem', { lineHeight: '1.7' }],
        'body': ['1.0625rem', { lineHeight: '1.7' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],

        // Caption/label
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '600' }],
      },

      spacing: {
        'section': '6rem',
        'section-lg': '8rem',
      },

      maxWidth: {
        'content': '64rem',
        'prose': '42rem',
      },

      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      boxShadow: {
        // ===========================================
        // DARK MODE SHADOWS & GLOW EFFECTS
        // ===========================================

        // Subtle dark shadows
        'soft': '0 2px 8px rgba(0, 0, 0, 0.4)',
        'medium': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'strong': '0 16px 48px rgba(0, 0, 0, 0.6)',

        // Card shadows for dark mode
        'card': '0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        'elevated': '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',

        // Glass card shadows
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',

        // Electric glow effects
        'glow-sm': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.5), 0 0 120px rgba(59, 130, 246, 0.2)',
        'glow-button': '0 0 20px rgba(59, 130, 246, 0.4), 0 4px 16px rgba(0, 0, 0, 0.4)',
        'glow-intense': '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)',

        // Inner glow for premium depth
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'inner-glow-strong': 'inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2)',

        // Warm glow variant
        'glow-warm': '0 0 40px rgba(249, 115, 22, 0.4)',
        'glow-warm-button': '0 0 20px rgba(249, 115, 22, 0.4), 0 4px 16px rgba(0, 0, 0, 0.4)',

        // Success glow
        'glow-success': '0 0 30px rgba(34, 197, 94, 0.4)',
      },

      animation: {
        // Base animations
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in-down': 'fadeInDown 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',

        // Staggered fade-up variants
        'fade-in-up-1': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both',
        'fade-in-up-2': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both',
        'fade-in-up-3': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both',
        'fade-in-up-4': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both',
        'fade-in-up-5': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both',

        // Statement animations
        'hero-reveal': 'heroReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'blur-in': 'blurIn 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 20s ease-in-out 10s infinite',

        // Mobile menu
        'slide-down': 'slideDown 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',

        // Utility
        'spin-slow': 'spin 1.5s linear infinite',
        'check-draw': 'checkDraw 0.5s ease-out forwards',
        'char-reveal': 'charReveal 0.4s ease-out forwards',

        // Gradient rotation
        'gradient-rotate': 'gradientRotate 8s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
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
        heroReveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(12px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
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
        gradientRotate: {
          '0%': { '--gradient-angle': '0deg' },
          '100%': { '--gradient-angle': '360deg' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
