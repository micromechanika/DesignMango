<template>
	<div class="certificates">
		<img
			v-for="(img, index) in techologiesImages"
			:key="index"
			:src="require(`@/assets/img/certificates/${img.src}`)"
			:alt="`${img.alt}`"
		/>
	</div>
</template>

<script>
	export default {
		name: 'Techologiespanel',
		props: {
			techologiesImages: {
				type: Array,
				default() {
					return [
						{
							src: 'vue.svg',
							alt: 'vue',
						},
						{
							src: 'tuv.svg',
							alt: 'tuv',
						},
						{
							src: 'nuxt.svg',
							alt: 'nuxt',
						},
						{
							src: 'kfw.svg',
							alt: 'kfw',
						},
					]
				},
			},
		},
	}
</script>

<style lang="scss" scoped>
	.certificates {
		margin: 2rem auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		img {
			width: auto;
			height: 4rem;
		}
	}
</style>
