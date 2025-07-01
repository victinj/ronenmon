/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'irish-grover': ['Irish Grover', 'cursive'],
      },
      colors: { 
        'dark-gray-bg': '#333',
        'blue-primary-btn': '#0B6DA3',
        'yellow-secondary-btn': '#D3BF2C',
        'game-card-bg': '#CACACA',
        'game-card-border': '#474747',
        'modal-gradient-dark': '#661A38',
        'modal-gradient-mid': '#AE2C5F',
        'modal-gradient-light': '#CC3470',
        'exit-btn-border': '#D8C967',
        'tv-border-dark': '#666',
        'tv-bg-light': '#dedede',
        'tv-controls-bg': '#4a4a4a',
        'tv-control-red': '#e74c3c',
        'tv-control-green': '#2ecc71',
        'monster-grid-bg': 'rgba(204, 52, 112, 0.64)',
        'monster-grid-border': 'rgba(80, 200, 255, 0.7)',
        'monster-slot-bg-light': 'rgba(180, 180, 180, 0.2)',
        'monster-slot-border': '#D3BF2C',
        'empty-slot-bg': 'rgba(100, 100, 100, 0.1)',
        'energy-bar-fill': '#ff0077',
        'wallet-grad-end': '#EBE5B5',
        'red-error': '#dc2626',
        'play-outer-light': '#DEDFDE', 
        'play-outer-dark': '#787978', 
        'play-inner-bg': '#CC3470', 
        'play-text-color': '#D8C967',
        'play-border-light': '#E0E0E0', 
        'play-middle-grad-start': '#787978', 
        'play-middle-grad-end': '#DEDFDE',
        'play-inner-shadow-color-inset': 'rgba(0, 0, 0, 0.25)', 
        'play-inner-shadow-color-drop': '#494A58',
        'sidebar-inner-first': '#646464', 
        'sidebar-inner-second': '#CACACA', 
        'play-inner-border': '#494A58',
        'tv-bg-first': '#DBDBDB',
        'tv-bg-second': "#757575",
        'monster-bg-box': 'rgba(204, 52, 112, 0.64)'
      },
      boxShadow: { 
        'button-default': '0px 10px 10px rgba(0, 0, 0, 0.56)',
        'button-hover': '0px 2px 5px rgba(0, 0, 0, 0.4)',
        'button-active-inset': 'inset 0px 3px 6px rgba(0,0,0,0.43)',
        'modal-base': '0px 8px 20px rgba(0, 0, 0, 0.8)',
        'tv-base': '0px 8px 20px rgba(0,0,0,0.7)',
        'tv-controls-btn': '0 2px 5px rgba(0,0,0,0.4)',
        'tv-controls-btn-hover': '0 1px 3px rgba(0,0,0,0.6)',
        'tv-controls-btn-active-inset': 'inset 0 1px 2px rgba(0,0,0,0.7)',
        'sidebar-btn-base': '0px 4px 8px rgba(0,0,0,0.5)',
        'sidebar-btn-hover': '0px 2px 5px rgba(0,0,0,0.6)',
        'sidebar-btn-active': '0px 1px 3px rgba(0,0,0,0.7)',
        'monster-img': '2px 2px 4px rgba(0,0,0,0.6)',
        'play-subtle-shadow': '0px 2px 5px rgba(0,0,0,0.4)',
        'play-inner-hover': '0 4px 8px rgba(0,0,0,0.6)',
        'play-inner-active': 'inset 0 2px 4px rgba(0,0,0,0.7)',
        'play-inner-inset': 'inset 0 -10px 15px -3px rgba(0, 0, 0, 0.70)'
      },
      dropShadow: { 
        'icon-base': '1px 1px 2px rgba(0,0,0,0.7)',
        'info-icon-prominent-light': '0 0 4px rgba(255, 255, 255, 0.6)',
        'info-icon-prominent-dark': '0 0 8px rgba(0, 0, 0, 0.8)',
        'resource-icon-prominent-light': '0 0 5px rgba(255, 255, 255, 0.7)',
        'resource-icon-prominent-dark': '0 0 10px rgba(0, 0, 0, 0.9)',
        'logo-roninmon': '0 0 10px rgba(0,0,0,0.7)',
        'logo-roninmon-hover-light': '0 0 15px rgba(255,255,255,0.6)',
        'logo-roninmon-hover-dark': '0 0 25px rgba(255,255,255,0.4)',
        'modal-logo': '0 0 8px rgba(0,0,0,0.7)',
      },
      borderRadius: { 
        'sm-btn': '10px',
        'sm-mdl': '15px',
        'md-card': '20px',
        'lg-btn': '40px',
        'full-circle': '50%',
        'exit-btn': '100px', 
        'rounded-100px': '100px', 
        'play-button-rounded': '15px', 
      },
      borderWidth: { 
        '3': '3px',
        '4': '4px',
        '5': '5px', 
      },
      spacing: { 
        '10px': '10px',
        '15px': '15px',
        '16px': '16px', 
        '20px': '20px',
        '28px': '28px', 
        '30px': '30px',
        '35px': '35px', 
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '75px': '75px',
        '100px': '100px',
        '120px': '120px',
        '150px': '150px',
        '180%': '180%',
        '187px': '187px', 
        '497px': '497px', 
        '535px': '535px', 
        'calc-100-40px': 'calc(100% - 40px)',
        'calc-100-70px': 'calc(100% - 70px)',
        'inset-19px': '19px', 
        'inset-10px': '10px', 
        'play-mid-w': '200px',
        'play-mid-h': '80px',
        'play-inner-inset': '2px', 
        'sidebar-inner-inset': '10px', 
        // NEW: Sidebar button dimensions
        'sidebar-btn-w': '115px',
        'sidebar-btn-h': '115px',
      },
      fontSize: { 
        '1-2em': '1.2em',
        '1-3em': '1.3em',
        '1-4em': '1.4em',
        '1-5em': '1.5em',
        '1-8em': '1.8em',
        '2em': '2em',
        '3em': '3em',
        '3-8em': '3.8em',
        '4em': '4em',
        '5em': '5em',
        '6em': '6em',
        '7em': '7em',
        '8em': '8em',
        '9em': '9em',
        '10em': '10em',
        'text-base': '1rem', 
      },
      // NEW: Add a custom text-stroke utility
      textStroke: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        'paint-order': 'stroke fill'
      },
      textOutsideStroke: {
        'paint-order': 'stroke fill'
      },
      textStrokeColor: {
        'black': '#000000',
        'white': '#ffffff',
        'yellow-border': '#D8C967', // A color from your WalletModal
        // You can add more custom colors here
      },
      textShadow: {
        'heavy': '0px 0px 2px rgba(0, 0, 0, 1), 0px 0px 2px rgba(0, 0, 0, 1), 0px 0px 2px rgba(0, 0, 0, 1)',
        'glow': '0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.5)',
        'none': 'none',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'text-shadow': (value) => ({ textShadow: value }) },
        { values: theme('textShadow') }
      );
    },
    // NEW: Plugin to generate the text-stroke utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow-md': {
          textShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
        },
        // You can keep other custom utilities you have
      };
      
      // Generate the text-stroke classes
      const textStrokeUtilities = {};
      Object.entries(theme('textStroke')).forEach(([key, value]) => {
        Object.entries(theme('textStrokeColor')).forEach(([colorKey, colorValue]) => {
          textStrokeUtilities[`.text-stroke-${key}-${colorKey}`] = {
            WebkitTextStrokeWidth: value,
            WebkitTextStrokeColor: colorValue,
          };
        });
      });
      addUtilities(textStrokeUtilities, ['responsive', 'hover']);

      const textShadowUtilities = {
              '.text-shadow-heavy': { textShadow: theme('textShadow.heavy') },
              '.text-shadow-glow': { textShadow: theme('textShadow.glow') },
              '.text-shadow-none': { textShadow: theme('textShadow.none') },
            };
            addUtilities(textShadowUtilities, ['responsive']);

      // Add a utility to remove default text shadow
      addUtilities({
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }, ['responsive']);
    },
  ],
}