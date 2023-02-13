// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
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
	app: {
		head: {
			title: "Murilo Boareto Delefrate - JavaScript Consulting Services",
			meta: [
				{name: "description", property: "og:description", content: "As an experienced and skilled JavaScript developer, I offer a wide range of services to help you take your web development projects to the next level"}
			]
		}
	}
});
