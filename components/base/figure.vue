<template>
	<figure :style="{ backgroundImage: `url(${suitablePicture.src});` }">
		<img
			:src="`${suitablePicture.src}`"
			:srcset="`${suitablePicture.src}`"
			:alt="`${suitablePicture.alt}`"
		/>
	</figure>
</template>

<script>
	export default {
		name: 'Figure',
		props: {
			figures: {
				type: Object,
				default() {
					return {
						'3840': { src: 'img/videos/roadster3840.jpg', alt: 'roadster3840' },
						'1600': { src: 'img/videos/roadster1600.jpg', alt: 'roadster1600' },
						'1440': { src: 'img/videos/roadster1440.jpg', alt: 'roadster1440' },
						'1024': { src: 'img/videos/roadster1024.jpg', alt: 'roadster1024' },
						'800': { src: 'img/videos/roadster800.jpg', alt: 'roadster800' },
						'700': { src: 'img/videos/roadster700.jpg', alt: 'roadster700' },
						'400': { src: 'img/videos/roadster400.jpg', alt: 'roadster400' },
					}
				},
			},
		},
		data() {
			return {
				width: 0,
			}
		},
		computed: {
			suitablePicture() {
				const w = this.width
				switch (true) {
					case w >= 3000:
						return this.figures['3840']
					case w >= 1440:
						return this.figures['1600']
					case w >= 1024:
						return this.figures['1440']
					case w >= 800:
						return this.figures['1024']
					case w >= 700:
						return this.figures['800']
					case w >= 400:
						return this.figures['700']
					default:
						return this.figures['400']
				}
			},
		},
		mounted() {
			this.$nextTick(function() {
				window.addEventListener('resize', this.getWindowWidth)
				this.getWindowWidth()
			})
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.getWindowWidth)
		},
		methods: {
			getWindowWidth(event) {
				this.width = document.documentElement.clientWidth
			},
		},
	}
</script>

<style lang="scss" scoped>
	figure {
		background-size: contain;
		background-position: center;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
