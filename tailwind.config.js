/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        gray_100: '#667085',
        gray_200: '#D0D5DD',
        gray_300: '#344054',
        gray_400: '#EAECF0',
        lightgray_100: '#F2F4F7',
        lightgray_200: '#F9FAFB',
        black_100: '#101828',
        purple_100: '#6941C6',
        purple_200: '#53389E',
        purple_300: '#F9F5FF',
        purple_400: '#D6BBFB',
        green_100: '#ECFDF3',
        green_200: '#027A48',
      }
    },
    borderWidth: {
      xsm: '0.0625rem'
    },
    boxShadow: {
      shadow_100: '0px 1px 2px rgba(16, 24, 40, 0.05);',
      shadow_200: 'box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);'
    },
    fontSize: {
      xxl_bold: ['1.875rem',
      {
        fontWeight: '500',
        lineHeight: '2.375rem'
      }],
      xmd_bold: ['1.125rem',
      {
        fontWeight: '500',
        lineHeight: '1.75rem'
      }],
      xxxsm_bold: ['0.75rem',
      {
        fontWeight: '500',
        lineHeight: '1.25rem'
      }],
      xxsm: ['0.875rem',
      {
        fontWeight: '400',
        lineHeight: '1.25rem'
      }],
      xxsm_bold: ['0.875rem',
      {
        fontWeight: '500',
        lineHeight: '1.25rem'
      }],
      xsm: ['1rem',
      {
        fontWeight: '400',
        lineHeight: '1.5rem'
      }],
      xsm_bold: ['1rem',
      {
        fontWeight: '500',
        lineHeight: '1.5rem'
      }]
    }
  },
  plugins: [],
}
