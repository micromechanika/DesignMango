<template>
	<div class="techonologiespanel">
		<img v-for="(img, index) in techologiesImages" :key="index" :src="require(`@/assets/img/certificates/${img.src}`)" :alt="`${img.alt}`" />
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
	.techonologiespanel {
		margin: 2.68rem 0 0 0;
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
