<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a young, responsible individual with the ability to work in a team and a strong motivation to integrate into a work environment where I can contribute my knowledge and education. My main objective is to increase my professional experience in a real-world setting, beyond the academic sphere. I am enthusiastic about putting into practice everything I have learned and continuing to learn from real-life situations in the workplace.',
				},
				{
					id: 2,
					bio:
						'Moreover, I possess excellent communication and interpersonal skills, which enable me to effectively collaborate with colleagues and stakeholders from diverse backgrounds. I thrive in collaborative settings, valuing the exchange of ideas and the opportunity to learn from others.',
				},
				{
					id: 3,
					bio:
						'In addition to my academic achievements, I actively seek out opportunities for self-improvement and professional growth. I am proactive in staying updated with the latest industry trends, technologies, and best practices. I believe in a lifelong learning approach and strive to continuously enhance my skill set to remain adaptable and relevant in a dynamic work environment.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
