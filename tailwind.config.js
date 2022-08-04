/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				bgImage: "url('/src/assets/bg/bg.svg')",
			},
		},
	},
	plugins: [],
};
