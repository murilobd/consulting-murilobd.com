<template>
	<div class="bg-white">
		<div class="mx-auto max-w-7xl pb-12 px-6 lg:px-8">
			<div class="mt-6 grid grid-cols-1 gap-0.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:mt-8">
				<div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8" v-for="logo of logos">
					<img class="max-h-12" :src="'/imgs/tech-logos/' + logo + '.svg'" :alt="logo" />
				</div>
			</div>
		</div>
	</div>
</template>


<script setup>
const logos = [
	// "html5",
	"javascript",
	"typescript",
	"vue",
	"react",
	"sass",
	"nodejs",
	"laravel",
	"mysql",
	"php",
	"python",
	"docker",
	"aws",
]
</script>