<template>
	<div class="slider">
		<div class="message">
			<h2>
				{{ message.h2 }}
				<span> {{ message.span }} </span>
			</h2>
		</div>
		<div v-for="(slide, slideID) in sliders" :key="slideID" class="sliders">
			<img :src="require(`@/assets/img/slider/${slide.img.src}`)" :alt="`${slide.img.alt}`" />
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
		<aside>
			<img src="../assets/img/pointerLeft.svg" alt="leftPointer" />
			<img src="../assets/img/pointerRight.svg" alt="rightPointer" />
		</aside>
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
		margin: 12.5rem auto;
		position: relative;
		width: 100%;
		height: 80vh;
	}
	aside {
		position: absolute;
		right: -0.5rem;
		bottom: 2rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 8.375rem;
		height: 3rem;
		img {
			width: 100%;
			height: 100%;
			&:first-of-type {
				margin: 0 2rem 0 0;
			}
			&:last-of-type {
				margin: 0 0 0 2rem;
			}
		}
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
	.sliders {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		img {
			width: 34%;
			height: 100%;
			object-fit: cover;
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
