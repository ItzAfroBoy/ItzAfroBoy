const tailwindcssZoom = require('tailwindcss-zoom');

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				avatar: "url('nasa.jpg')"
			}),
			fontFamily: {
				mono: [ 'Space Mono', 'monospace' ]
			},
			colors: {
				'candy-pink': '#E96B6A',
				bittersweet: '#FF6F61',
				gunmetal: '#282c34',
				raisin: '#21242B'
			}
		}
	},
	variants: {
		extend: {
			scale: [ 'hover', 'group-hover' ]
		}
	},
	plugins: [ require('tailwindcss-zoom') ]
};
