/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './content/**/*.md',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      container: {
        padding: '1rem',
        center: true,
      },
      colors: {
        primary: {
          300: '#5ac500',
          400: '#58cc02',
          500: '#35AF00',
          600: '#2b8c00',
          700: '#1d6300',
        },
        secondary: {
          300: '#5AA0F2',
          400: '#4A90E2',
          500: '#3A80D2',
          600: '#2A70C2',
          700: '#1A60B2',
        },
        accent: {
          300: '#F6B633',
          400: '#F5A623',
          500: '#E59613',
          600: '#D58603',
          700: '#C57603',
        },
        neutral: {
          300: '#4D5461',
          400: '#3D4451',
          500: '#2D3441',
          600: '#1D2431',
          700: '#0D1421',
        },
        info: {
          300: '#4ACFF8',
          400: '#3ABFF8',
          500: '#2AAFF8',
          600: '#1A9FF8',
          700: '#0A8FE8',
        },
        success: {
          300: '#46E3A9',
          400: '#36D399',
          500: '#26C389',
          600: '#16B379',
          700: '#06A369',
        },
        warning: {
          300: '#FBCD33',
          400: '#FBBD23',
          500: '#EBAD13',
          600: '#DB9D03',
          700: '#CB8D03',
        },
        error: {
          300: '#F88282',
          400: '#F87272',
          500: '#E86262',
          600: '#D85252',
          700: '#C84242',
        },
      },
      screens: {
        xs: '450px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        '2xl': '1218px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#35AF00',
          'primary-content': '#FFFFFF',
          secondary: '#4A90E2',
          accent: '#F5A623',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
}
