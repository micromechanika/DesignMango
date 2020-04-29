<template>
	<div class="slider">
		<div class="message">
			<h2>
				{{ message.h2 }}
				<span> {{ message.span }} </span>
			</h2>
		</div>
		<div v-for="(slide, slideID) in sliders" :key="slideID" class="item">
			<img :src="require(`@/assets/img/slider/${slide.img.src}`)" :alt="`${slide.img.alt}`" />
			<section>
				<div class="container">
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
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Slider',
		props: {
			message: {
				type: Object,
				default() {
					return {
						h2: 'How it',
						span: 'works',
					}
				},
			},
			sliders: {
				type: Array,
				default() {
					return [
						{
							img: { src: 'slide1.png', alt: 'slide1' },
							description: {
								h6: 'First step',
								h2: 'Prepare',
								p:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin proin adipiscing mi dictum scelerisque eget. Porttitor adipiscing rhoncus mattis felis semper mattis tempus nullam.',
							},
							cards: [
								{ h3: 'Personal', h4: 'designer', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
								{ h3: 'preference', h4: 'consideration ', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
								{ h3: 'keyword', h4: 'pre-cheking', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
							],
						},
						{
							img: { src: 'slide2.png', alt: 'slide2' },
							description: {
								h6: 'Second step',
								h2: 'Action',
								p:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin proin adipiscing mi dictum scelerisque eget. Porttitor adipiscing rhoncus mattis felis semper mattis tempus nullam.',
							},
							cards: [
								{ h3: 'Personal', h4: 'designer', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
								{ h3: 'preference', h4: 'consideration ', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
								{ h3: 'keyword', h4: 'pre-cheking', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
							],
						},
						{
							img: { src: 'slide3.png', alt: 'slide3' },
							description: {
								h6: 'Third step',
								h2: 'Final Webpage',
								p:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin proin adipiscing mi dictum scelerisque eget. Porttitor adipiscing rhoncus mattis felis semper mattis tempus nullam.',
							},
							cards: [
								{ h3: 'Personal', h4: 'designer', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
								{ h3: 'preference', h4: 'consideration ', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
								{ h3: 'keyword', h4: 'pre-cheking', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
							],
						},
					]
				},
			},
		},
	}
</script>

<style lang="scss" scoped>
	.slider {
		width: 100%;
		height: 50rem;
		margin: 12.5rem 0;
	}
	.message {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		h2 {
			font-weight: 600;
			font-size: 5.5rem;
			line-height: 130%;
			color: $white;
			span {
				color: $green;
			}
		}
	}
	.item {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		img {
			width: 33.75%;
			height: 100%;
			object-fit: cover;
		}
		section {
			width: 66.25%;
			height: 100%;
		}
	}
	.container {
		width: 66.79%;
		margin: 0 auto;
	}
	.description {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: $white;
		margin: 3.28rem 0;
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
		}
	}
	.cards {
		margin: 3.28rem 0;
		color: $white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		article {
			word-break: break-word;
			width: 30%;
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
		}
	}
</style>
