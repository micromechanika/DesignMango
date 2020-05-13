<template>
	<div class="slider">
		<div v-show="mes" class="message">
			<h2>
				{{ message.h2 }}
				<span> {{ message.span }} </span>
			</h2>
		</div>
		<Slide v-show="!mes" :slide="sliders[currentIndex]" />
		<aside>
			<img
				src="../../assets/img/pointerLeft.svg"
				alt="leftPointer"
				@click="stepLeft"
			/>
			<img
				src="../../assets/img/pointerRight.svg"
				alt="rightPointer"
				@click="stepRight"
			/>
		</aside>
	</div>
</template>

<script>
	import Slide from '../base/slide'
	export default {
		name: 'Slider',
		components: { Slide },
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
						},
						{
							img: {
								'3840': {
									src: 'img/slider/slide2/slide500.jpeg',
									alt: 'slide500',
								},
								'1600': {
									src: 'img/slider/slide2/slide500.jpeg',
									alt: 'slide500',
								},
								'1440': {
									src: 'img/slider/slide2/slide500.jpeg',
									alt: 'slide500',
								},
								'1024': {
									src: 'img/slider/slide2/slide500.jpeg',
									alt: 'slide500',
								},
								'800': {
									src: 'img/slider/slide2/slide400.jpeg',
									alt: 'slide400',
								},
								'700': {
									src: 'img/slider/slide2/slide300.jpeg',
									alt: 'slide300',
								},
								'400': {
									src: 'img/slider/slide2/slide200.jpeg',
									alt: 'slide200',
								},
							},
							description: {
								h6: 'Second step',
								h2: 'Action',
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
						},
						{
							img: {
								'3840': {
									src: 'img/slider/slide3/slide500.jpeg',
									alt: 'slide500',
								},
								'1600': {
									src: 'img/slider/slide3/slide500.jpeg',
									alt: 'slide500',
								},
								'1440': {
									src: 'img/slider/slide3/slide500.jpeg',
									alt: 'slide500',
								},
								'1024': {
									src: 'img/slider/slide3/slide500.jpeg',
									alt: 'slide500',
								},
								'800': {
									src: 'img/slider/slide3/slide400.jpeg',
									alt: 'slide400',
								},
								'700': {
									src: 'img/slider/slide3/slide300.jpeg',
									alt: 'slide300',
								},
								'400': {
									src: 'img/slider/slide3/slide200.jpeg',
									alt: 'slide200',
								},
							},
							description: {
								h6: 'Third step',
								h2: 'Final Webpage',
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
						},
					]
				},
			},
		},
		data() {
			return {
				mes: true,
				currentIndex: 0,
			}
		},
		methods: {
			stepRight() {
				if (this.currentIndex < this.sliders.length - 1) {
					this.mes = false
					this.currentIndex += 1
				}
			},
			stepLeft() {
				if (this.currentIndex !== 0) {
					this.currentIndex -= 1
				} else {
					this.mes = true
				}
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
		right: 6rem;
		bottom: 4rem;
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
</style>
