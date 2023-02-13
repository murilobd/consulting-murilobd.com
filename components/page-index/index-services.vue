<template>
	<div class="bg-white pb-24 sm:pb-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<!-- <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">{{ title }}</h2> -->
				<p class="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">{{ title }}</p>
				<!-- <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p> -->
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
					<div v-for="feature in features" :key="feature.name" class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div
								class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
								<component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
							</div>
							{{ feature.name }}
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon } from '@heroicons/vue/20/solid'

const title = "Service Offerings";

const features = [
	{
		name: 'Web Development',
		description:
			"With extensive experience in JavaScript development and shipping projects, I offer custom web application development services to help you bring your ideas to life, from code to deployment.",
		icon: CloudArrowUpIcon,
	},
	{
		name: 'Technical Consultancy',
		description:
			"As a senior software engineer, I provide expert technical consultancy services to help you make informed decisions about your web development projects, from architecture design to technology selection.",
		icon: LockClosedIcon,
	},
	{
		name: 'Performance Optimization',
		description:
			"Whether you need help with optimization for specific platforms or need a full performance review, I can help you improve the speed, reliability, and scalability of your website or web application.",
		icon: ArrowPathIcon,
	},
	{
		name: 'Code Reviews',
		description:
			"Ensuring that your code is efficient, scalable, and easy to maintain is crucial to the success of your web development projects. I can help you identify areas of improvement, optimize your code, and ensure that it meets industry standards.",
		icon: FingerPrintIcon,
	},
]
</script>