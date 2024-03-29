/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      readexPro: ['Readeax Pro']
    },
    extend: {
      colors: {
        'primary': {
          100: '#CBEBFF',
          200: '#7CABF7',
          300: '#5493F7',
          400: '#317EF7',
          500: '#1D4E7A',
        },
        'secondary': {
          100: '#F5BA84',
          200: '#F5AD6C',
          300: '#F5A153',
          400: '#F58722',
          500: '#C26B1B',
        },
        'success': {
          100: '#B9EAD0',
          200: '#A1EAC3',
          300: '#73EAA9',
          400: '#44EA90',
          500: '#2E9E61',
        },
        'warning': {
          100: '#EBC97D',
          200: '#E8BC4F',
          300: '#E8BC4F',
          400: '#E8A809',
          500: '#C29011',
        },
        'error': {
          100: '#EA8A8A',
          200: '#EA7373',
          300: '#EA5B5B',
          400: '#EA4444',
          500: '#B83636',
        },
        'shades': {
          0: '#002053',
          100: '#FFFFFF',
        },
        'neutral': {
          50: '#F5FCFF',
          100: '#D4D8DB',
          150: '#B9CBD2',
          200: '#8BA2B2',
          250: '#6D8495',
          300: '#6D6E85',
          350: '#485569',
          400: '#2F3847',
          450: '#1F2B3F',
          500: '#102A53',
        },
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'sueess-100': 'var(--sueess-100)',
        'sueess-200': 'var(--sueess-200)',
        'sueess-300': 'var(--sueess-300)',
        'sueess-400': 'var(--sueess-400)',
        'sueess-500': 'var(--sueess-500)',
        'warning-100': 'var(--warning-100)',
        'warning-200': 'var(--warning-200)',
        'warning-300': 'var(--warning-300)',
        'warning-400': 'var(--warning-400)',
        'warning-500': 'var(--warning-500)',
        'error-100': 'var(--error-100)',
        'error-200': 'var(--error-200)',
        'error-300': 'var(--error-300)',
        'error-400': 'var(--error-400)',
        'error-500': 'var(--error-500)',
        'shades-0': 'var(--shades-0)',
        'shades-50': 'var(--shades-50)',
        'neutral-100': 'var(--neutral-100)',
        'neutral-150': 'var(--neutral-150)',
        'neutral-200': 'var(--neutral-200)',
        'neutral-250': 'var(--neutral-250)',
        'neutral-300': 'var(--neutral-300)',
        'neutral-350': 'var(--neutral-350)',
        'neutral-400': 'var(--neutral-400)',
        'neutral-450': 'var(--neutral-450)',
        'neutral-500': 'var(--neutral-500)',
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
};
