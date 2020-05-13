<template>
	<div class="sliders">
		<Figure :figures="slide.img" />
		<section>
			<div class="description">
				<h6>{{ slide.description.h6 }}</h6>
				<h2>{{ slide.description.h2 }}</h2>
				<p>{{ slide.description.p }}</p>
			</div>
			<div class="cards">
				<article v-for="(card, cardID) in slide.cards" :key="cardID">
					<h3>{{ card.h3 }}</h3>
					<h4>{{ card.h4 }}</h4>
					<p>{{ card.p }}</p>
				</article>
			</div>
		</section>
	</div>
</template>

<script>
	import Figure from './figure'
	export default {
		name: 'slide',
		components: { Figure },
		props: {
			slide: {
				type: Object,
				default() {
					return {
						img: {
							'3840': {
								src: 'img/slider/slide1/slide500.jpeg',
								alt: 'slide500',
							},
							'1600': {
								src: 'img/slider/slide1/slide500.jpeg',
								alt: 'slide500',
							},
							'1440': {
								src: 'img/slider/slide1/slide500.jpeg',
								alt: 'slide500',
							},
							'1024': {
								src: 'img/slider/slide1/slide500.jpeg',
								alt: 'slide500',
							},
							'800': {
								src: 'img/slider/slide1/slide400.jpeg',
								alt: 'slide400',
							},
							'700': {
								src: 'img/slider/slide1/slide300.jpeg',
								alt: 'slide300',
							},
							'400': {
								src: 'img/slider/slide1/slide200.jpeg',
								alt: 'slide200',
							},
						},
						description: {
							h6: 'First step',
							h2: 'Prepare',
							p:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin proin adipiscing mi dictum scelerisque eget. Porttitor adipiscing rhoncus mattis felis semper mattis tempus nullam.',
						},
						cards: [
							{
								h3: 'Personal',
								h4: 'designer',
								p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
							},
							{
								h3: 'preference',
								h4: 'consideration ',
								p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
							},
							{
								h3: 'keyword',
								h4: 'pre-cheking',
								p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
							},
						],
					}
				},
			},
		},
	}
</script>

<style lang="scss" scoped>
	.sliders {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		figure {
			width: 34%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		section {
			width: 66%;
			height: 100%;
			margin: 0 5vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	.description {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		margin: 0 0 5rem 0;
		color: $white;
		h6 {
			font-size: 1rem;
			line-height: 1.5rem;
			margin: 0 0 0.25rem 0;
		}
		h2 {
			font-weight: 500;
			font-size: 4rem;
			line-height: 130%;
			margin: 0 0 2rem 0;
		}
		p {
			font-size: 1.25rem;
			line-height: 130%;
			margin: 0;
		}
	}
	.cards {
		width: 100%;
		height: 50%;
		color: $white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		margin: 5rem 0 0 0;
		article {
			word-break: break-word;
			width: 33.333333%;
			height: 100%;
			margin: 0 2rem;
			h3 {
				font-size: 1.5rem;
				line-height: 130%;
				text-transform: uppercase;
			}
			h4 {
				font-size: 1.5rem;
				line-height: 130%;
				text-transform: uppercase;
				color: $green;
				margin: 0 0 2.6875rem 0;
			}
			p {
				font-size: 1rem;
				line-height: 1.5rem;
			}
			&:first-of-type {
				margin-left: 0;
			}
			&:last-of-type {
				margin-right: 0;
			}
		}
	}
</style>
