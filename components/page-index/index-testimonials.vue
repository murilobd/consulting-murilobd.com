<template>
	<section id="testimonials" aria-label="What our customers are saying" class="bg-slate-50 py-20 sm:py-32">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
				What professionals says about me
			</h2>
		</div>
		<ul role="list"
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-6xl lg:grid-cols-2">
			<li v-for="groupTestimonial of testimonials">
				<ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
					<li v-for="testimonial of groupTestimonial">
						<figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg
								aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
								<path
									d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
								</path>
							</svg>
							<blockquote class="relative">
								<p class="text-lg tracking-tight text-slate-900">{{ testimonial.description }}</p>
							</blockquote>
							<figcaption
								class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
								<div>
									<div class="font-display text-base text-slate-900">{{ testimonial.name }}</div>
									<div class="mt-1 text-sm text-slate-500">{{ testimonial.position }}</div>
								</div>
								<div class="overflow-hidden rounded-full bg-slate-50"><img alt="" :src="testimonial.img"
										decoding="async" data-nimg="1" class="h-14 w-14 object-cover" loading="lazy"
										style="color:transparent" width="56" height="56"></div>
							</figcaption>
						</figure>
					</li>
				</ul>
			</li>
		</ul>
	</section>
</template>

<script setup>
const testimonials = [
	[
		{
			name: "Leonardo Ferreira",
			description: "I have worked with Murilo on multiple projects and have been consistently impressed by his technical expertise, problem-solving abilities, and commitment to delivering outstanding results",
			position: "Product Design Director at XNV.io",
			img: "https://media.licdn.com/dms/image/C4D03AQFsrRpwiBi_Yw/profile-displayphoto-shrink_400_400/0/1624796675671?e=1681344000&v=beta&t=QD0XnkQpTI76PBdARSSd4g274Pvg_edM5JK-X3UU3IY"
		},
		{
			name: "Helder Conde",
			description: "It was crucial for us to find a software engineer who could build and ship a robust and scalable web application that met the technical requirements and the needs of our users",
			position: "Founder NossosPsicologos.com.br",
			img: "https://media.licdn.com/dms/image/C4E03AQEcglz6vOj4oQ/profile-displayphoto-shrink_400_400/0/1590850069083?e=1681344000&v=beta&t=PUbdYkHCHSpdo12302l7ZG1aWhG-hS7ORC_Nf4oUhyQ"
		},
	],
	[
		{
			name: "André Renato Takeda de Queiroz",
			description: "As a lawyer, it's important for me to work with professionals who are reliable and knowledgeable in their field. Murilo always took the time to understand my needs, offer creative solutions, and deliver results that exceeded the expectations",
			position: "Specialist Lawyer in GDPL and Business Law",
			img: "https://media.licdn.com/dms/image/C4E03AQFZHa0g-GWOwA/profile-displayphoto-shrink_400_400/0/1591203200000?e=1681344000&v=beta&t=dK_vsyW_3EQR5EghsSkbBGsloZAgFzimgxsi2xf0RKo"
		},
		{
			name: "Gabriela Souto Ferraz",
			description: " I highly recommend Murilo to any organization looking for a top-notch software engineer and consultant who is dedicated to delivering exceptional results.",
			position: "CEO Ápice Guindastes",
			img: "https://pps.whatsapp.net/v/t61.24694-24/69702141_2990948047590600_147559942185792357_n.jpg?ccb=11-4&oh=01_AdTU0X7sLOxD9__tsFj7EeuDXkmLA9Iw7XGdpp0x2JXb8Q&oe=63F4C7EB"
		},
	]
]
</script>