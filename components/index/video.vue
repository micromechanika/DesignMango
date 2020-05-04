<template>
	<div class="video" @click="show = !show">
		<picture v-show="!show">
			<source media="(min-width: 650px)" srcset="img_pink_flowers.jpg" />
			<source media="(min-width: 465px)" srcset="img_white_flower.jpg" />
			<img v-show="!show" :src="require(`@/assets/videos/${picture.src}`)" :alt="`${picture.alt}`" />
		</picture>

		<video v-show="show" autoplay preload="none" muted loop>
			<source src="@/assets/videos/Roadster.mp4" type="video/mp4" />
			please update you browser
		</video>
		<div class="container">
			<h1>Your customers need <span>a website!</span></h1>
			<button>
				<img src="@/assets/img/blackBow.svg" />
				<p>Get Started</p>
			</button>
		</div>
		<div class="gradient"></div>
	</div>
</template>

<script>
	export default {
		name: 'Video',
		directives: {
			screenWidth: {
				componentUpdated(el) {
					return Math.max(window.innerWidth, window.screen.width)
				},
			},
		},
		props: {
			picture: {
				type: Object,
				default() {
					return {
						MAX: { src: 'roadsterMAX.jpg', alt: 'roadsterMAX' },
						'1600': { src: 'roadster1600.jpg', alt: 'roadster1600' },
						'1440': { src: 'roadster1440.jpg', alt: 'roadster1440' },
						'1024': { src: 'roadster1024.jpg', alt: 'roadster1024' },
						'800': { src: 'roadster800.jpg', alt: 'roadster800' },
						'700': { src: 'roadster700.jpg', alt: 'roadster700' },
						'400': { src: 'roadster400.jpg', alt: 'roadster400' },
					}
				},
			},
		},
		data() {
			return {
				show: false,
			}
		},
		methods: {
			changPicture(el) {
				const w = Math.max(window.innerWidth, window.screen.width)
				const insertImg = src => el.setAttribute('style', `background-image: ${src};`)
				switch (true) {
					case w >= 3000:
						return insertImg(this.picture.MAX.src)
					case w >= 1440:
						return insertImg(this.picture['1600'].src)
					case w >= 1024:
						return insertImg(this.picture['1440'].src)
					case w >= 800:
						return insertImg(this.picture['1024'].src)
					case w >= 700:
						return insertImg(this.picture['800'].src)
					case w >= 400:
						return insertImg(this.picture['700'].src)
					default:
						return insertImg(this.picture['400'].src)
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.video {
		width: 100%;
		height: 80vh;
		position: relative;
	}
	.gradient {
		position: absolute;
		z-index: 100;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		display: block;
		width: 100%;
		height: 100%;
		@include grayGradient(180deg);
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	video {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.container {
		top: 8.75rem;
		position: relative;
		z-index: 110;
		@include container;

		h1 {
			width: 50%;
			margin: 0 0 10px 0;
			font-size: 5rem;
			color: $white;
			span {
				color: $green;
			}
		}
		button {
			margin: 8.25rem 0 0 0;
			position: relative;
			width: 18rem;
			height: 6rem;
			background-color: $green;

			border: 0;
			padding: 0;

			img {
				box-sizing: border-box;
				position: absolute;
				display: block;
				top: 1rem;
				left: 16rem;
				width: 1rem;
				height: 1rem;
			}
			p {
				box-sizing: border-box;
				display: block;
				position: absolute;
				left: 1rem;
				bottom: 1rem;
				font-size: 2rem;
				margin: 0;
			}
		}
	}
</style>
