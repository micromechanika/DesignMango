<template>
	<div :class="`${actionClass}`">
		<picture>
			<source :src="`${actionData.image}`" />
			<img :src="`${actionData.image}`" />
		</picture>
		<article>
			<h3>{{ actionData.header }}</h3>
			<p>{{ actionData.text }}</p>
			<div v-for="(item, itemIndex) in actionData.items" :key="itemIndex" class="action">
				<img :src="`${item.imageLink}`" />
				<p>{{ item.action }}</p>
			</div>
			<img :src="`${actionData.btn}`" />
		</article>
	</div>
</template>

<script>
	export default {
		name: 'CallToAction',
		props: {
			left: {
				type: Boolean,
				default: true,
			},
			actionData: {
				type: Object,
				default() {
					return {
						image: 'https://ik.imagekit.io/nz3xsf2fh/p5/webdesign-preise_ZPdXpbgkKT.svg',
						header: 'Som Header',
						text:
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci animi corporis debitis deleniti deserunt dolore eligendi error esse fugit ipsa ipsam laborum molestiae natus odit quasi sequi tempora voluptatem!',
						items: [
							{
								imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/2/2_IaCoPjknE.svg',
								action: 'Home page Besucher die zu Kunder werden',
							},
							{
								imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/2/2_IaCoPjknE.svg',
								action: 'Home page Besucher die zu Kunder werden',
							},
						],
						btn: 'https://ik.imagekit.io/nz3xsf2fh/p4/contact-us_n30Ph5FDR.png',
					}
				},
			},
		},
		computed: {
			actionClass() {
				return this.left ? 'left' : 'right'
			},
		},
	}
</script>

<style lang="scss" scoped>
	.left {
		margin: 6em 0;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-around;
	}
	.right {
		margin: 6em 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	picture {
		width: 40%;
		img {
			width: 100%;
			height: auto;
		}
	}
	article {
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		h3 {
			font-size: 1.35em;
			font-weight: 700;
			margin: 0 0 1.4em 0;
		}
		p {
			font-size: 1em;
			margin: 0 0 1.4em 0;
		}
		img {
			width: 14.7em;
		}
		.action {
			margin: 0 0 1.4em 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			img {
				width: 2em;
				margin: 0 1em 0 0;
			}
			p {
				margin: 0;
				font-weight: 600;
				font-size: 0.9em;
			}
		}
	}
</style>