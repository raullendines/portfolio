<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some companies I have worked with',
			clients: [
				{
					id: 1,
					title: 'Digalix Solutions',
					img: require('@/assets/images/brands/digalix_grey.png'),
				},
				{
					id: 2,
					title: 'Institut Broggi',
					img: require('@/assets/images/brands/broggi_grey.png'),
				},
				{
					id: 3,
					title: "Centre d'Estudis Politecnics",
					img: require('@/assets/images/brands/cep_grey.png'),
				},
				{
					id: 4,
					title: "Casino de Barcelona",
					img: require('@/assets/images/brands/casino_grey.png'),
				},
				{
					id: 5,
					title: "Aigues de Barcelona",
					img: require('@/assets/images/brands/aigues_grey.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
