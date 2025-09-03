const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    black: '#000000',
                    dark: '#111111',
                },
                secondary: {
                    yellow: '#facc15',
                    'yellow-light': '#fbbf24',
                },
                accent: {
                    yellow: '#facc15',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backgroundImage: {
                'lineasPatron': "url('/images/lineasPatron__.png')",
                'otoFondo': 'linear-gradient(to bottom, rgb(88, 119, 155), rgb(119, 172, 212), rgb(143, 184, 217), rgb(119, 172, 212), rgb(88, 119, 155))',
                'otoFondoDos': 'linear-gradient(to bottom, rgb(119, 172, 212), rgb(88, 119, 155))',
                'otoFondoRatioFondo': 'radial-gradient(ellipse at 0 0 , rgb(119, 172, 212), rgb(88, 119, 155))',
                'otoFondoRatioFondoHover': 'radial-gradient(ellipse at 0 0 , rgb(119, 172, 212), rgb(43, 59, 77))',
                'otoFondoCitasFondo': 'linear-gradient(240deg, rgb(119, 172, 212) 0%, rgb(88, 119, 155) 100%)',
                'otoFondoNosotrosGradient': 'linear-gradient(220deg, rgb(119, 172, 212) 44%, rgb(88, 119, 155) 100%)',
                'otoContactoGradient': 'linear-gradient(230deg, #B3DAFF 49%, #006BA8 95%)',
                'otoBlackTransparenteFondo': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 3%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',

                'fucsiaAzulFondo': 'linear-gradient(to bottom, rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77))',
                'fucsiaAzulFondoDos': 'linear-gradient(to bottom, rgb(211, 0, 126), rgb(18, 33, 77))',
                'fucsiaAzulFondoTres': 'linear-gradient(to bottom, rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126))',
                'transparentBlackFondo': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))',
                'blackTransparenteFondo': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
                'whiteFadedFondo': 'linear-gradient(to bottom, rgba(225, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 8rem, rgba(255, 255, 255, 1) calc(100% - 8rem), rgba(255, 255, 255, 0) 100% )',
                'whiteFadedFondoDos': 'linear-gradient(to bottom, rgba(225, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 3rem, rgba(255, 255, 255, 1) calc(100% - 4rem), rgba(255, 255, 255, 0) 100% )',
                'dsfsd': 'linear-gradient(to bottom, rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77))',
                'fucsiaAzulRatioFondo': 'radial-gradient(ellipse at 0 0, rgb(211, 0, 126), rgb(18, 33, 77))',
                'fucsiaAzulRatioFondoHover': 'radial-gradient(ellipse at 80% 100%, rgb(211, 0, 126), rgb(18, 33, 77))',
                'citasFondo': 'linear-gradient(240deg, rgb(246, 187, 14) 0%, rgb(242, 41, 91) 100%)',
                'nosotrosGradient': 'linear-gradient(200deg, rgb(18, 33, 77) 47%, rgb(211, 0, 126) 100%)'
            },
            clipPath: {
              'triangle': 'polygon(0 0, calc(50% - 25px) 0, 50% 10%, calc(50% + 25px) 0, 100% 0, 100% 100%, 0 100%)',
            },
            colors: {
                'fucsiaFundo': 'rgb(211, 0, 126)',
                'azulFundo': 'rgb(18, 33, 77)',
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                Cabin: ['Cabin', ...defaultTheme.fontFamily.sans],
                BebasNeue:  ['Bebas Neue', ...defaultTheme.fontFamily.sans],
                Roboto:  ['Roboto', ...defaultTheme.fontFamily.sans],
                RobotoCondensed:  ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
                NotoSerif:  ['Noto Serif', ...defaultTheme.fontFamily.sans]
            },
            screens: {
              'sm': '640px',
              'md': '870px',
              'lg': '1024px',
              'gx': '1160px',
              'xl': '1280px',
              '2xl': '1536px',
            },
            boxShadow: {
              'navVertical': '0.8rem 0 1rem -0.2rem rgb( 0, 0, 0, 0.3), 0.25rem 0 0.3rem -0.25rem rgb( 0, 0, 0, 0.3);',
              'navHorizontal': '0 0.8rem 1rem -0.2rem rgb( 0, 0, 0, 0.5), 0 0.25rem 0.3rem -0.25rem rgb( 0, 0, 0, 0.5);',
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                }
            }
        ]
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio'),
        addDynamicIconSelectors(),
        function ({ addUtilities }) {
          const newUtilities = {
            '.no-scrollbar': {
              /* Hide scrollbar for WebKit browsers */
              '-webkit-overflow-scrolling': 'touch',
              'scrollbar-width': 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            },
            '.scroll-smooth': {
              'scroll-behavior': 'smooth',
            },
          };
          addUtilities(newUtilities, ['responsive']);
        },
    ]
};
