<template>
	<div class="video" @click="show = !show">
		<figure v-show="!show" :style="{ backgroundSize: '100% 100%', backgroundImage: 'url(videos/roadster400.jpg);' }" @click="show = !show">
			<img v-show="!show" :src="`videos/${changPicture.src}`" :srcset="`videos/${changPicture.src}`" :alt="`videos/${changPicture.alt}`" />
		</figure>

		<video v-show="show" autoplay preload="none" muted loop>
			<source src="videos/Roadster.mp4" type="video/mp4" />
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
		props: {},
		data() {
			return {
				window: {
					width: 0,
				},
				show: false,
				picture: {
					'3840': { src: 'roadster3840.jpg', alt: 'roadster3840' },
					'1600': { src: 'roadster1600.jpg', alt: 'roadster1600' },
					'1440': { src: 'roadster1440.jpg', alt: 'roadster1440' },
					'1024': { src: 'roadster1024.jpg', alt: 'roadster1024' },
					'800': { src: 'roadster800.jpg', alt: 'roadster800' },
					'700': { src: 'roadster700.jpg', alt: 'roadster700' },
					'400': { src: 'roadster400.jpg', alt: 'roadster400' },
				},
			}
		},
		computed: {
			changPicture() {
				const w = this.window.width
				switch (true) {
					case w >= 3000:
						return this.picture['3840']
					case w >= 1440:
						return this.picture['1600']
					case w >= 1024:
						return this.picture['1440']
					case w >= 800:
						return this.picture['1024']
					case w >= 700:
						return this.picture['800']
					case w >= 400:
						return this.picture['700']
					default:
						return this.picture['400']
				}
			},
		},
		beforeMount() {
			this.window.width = window.innerWidth
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
	figure,
	source,
	img,
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
