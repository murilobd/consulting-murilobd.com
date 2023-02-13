// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: { shim: false, strict: true },
	modules: ["@nuxtjs/tailwindcss"],
	tailwindcss: {
		cssPath: "./assets/css/tailwind.css"
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
