<template>
	<div class="overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24">
		<div class="relative mx-auto max-w-xl">
			<svg class="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none"
				viewBox="0 0 404 404" aria-hidden="true">
				<defs>
					<pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
						patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
			</svg>
			<svg class="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none"
				viewBox="0 0 404 404" aria-hidden="true">
				<defs>
					<pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
						patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
			</svg>
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch</h2>
				<p class="mt-4 text-lg leading-6 text-gray-500">
					Don't hesitate to reach out if you have any question, need help with a specific project, or would
					like to schedule a consultation.
				</p>
			</div>
			<div class="mt-12">
				<form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
					<div class="sm:col-span-2">
						<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
						<div class="mt-1">
							<input required type="text" name="name" id="name" autocomplete="given-name"
								class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
						<div class="mt-1">
							<input required id="email" name="email" type="email" autocomplete="email"
								class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
						<div class="mt-1">
							<textarea required id="message" name="message" rows="4"
								class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
						</div>
					</div>
					<div class="sm:col-span-2">
						<button type="submit"
							class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							Let's talk
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>