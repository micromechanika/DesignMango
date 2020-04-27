<template>
	<div class="techonologiespanel">
		<img v-for="(img, index) in techologiesImages" :key="index" :src="`${img.src}`" :alt="`${img.alt}`" />
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
							src: 'https://ik.imagekit.io/nz3xsf2fh/proof/FB-mango_rkgftF2JPv.png',
							alt: 'FB-mango',
						},
						{
							src: 'https://ik.imagekit.io/nz3xsf2fh/proof/kfwmango_OwTU3Q9nIM.png',
							alt: 'kfwmango',
						},
						{
							src: 'https://ik.imagekit.io/nz3xsf2fh/proof/VueLogoMango_6EWjffxdT.png',
							alt: 'VueLogoMango',
						},
						{
							src: 'https://ik.imagekit.io/nz3xsf2fh/proof/Nuxtlogo-mangowebdesign_s-j8eFNr9.png',
							alt: 'Nuxtlog',
						},
						{
							src: 'https://ik.imagekit.io/nz3xsf2fh/proof/mangogernany_f0mS08t6CX.png',
							alt: 'mangogernany',
						},
						{
							src: 'https://ik.imagekit.io/nz3xsf2fh/proof/mangoexpert_rax2gfmRa.png',
							alt: 'mangoexper',
						},
						{
							src: 'https://ik.imagekit.io/nz3xsf2fh/proof/mangotuv-icon_CEYk3gXyL.png',
							alt: 'mangotuv-icon',
						},
					]
				},
			},
		},
	}
</script>

<style lang="scss" scoped>
	.techonologiespanel {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		img {
			width: auto;
			height: 2.68em;
		}
	}
</style>
