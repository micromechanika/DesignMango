<template>
	<figure :style="{ backgroundImage: `url(${src});` }">
		<img :src="src" :srcset="src" :alt="alt" />
	</figure>
</template>

<script>
	export default {
		name: 'Figure',
		props: {
			src: {
				type: String,
				default() {
					return this.suitablePicture.src
				},
			},
			alt: {
				type: String,
				default() {
					return this.suitablePicture.alt
				},
			},
			figures: {
				type: Object,
				default() {
					return {
						'3840': { src: 'video/roadster3840.jpg', alt: 'roadster3840' },
						'1600': { src: 'video/roadster1600.jpg', alt: 'roadster1600' },
						'1440': { src: 'video/roadster1440.jpg', alt: 'roadster1440' },
						'1024': { src: 'video/roadster1024.jpg', alt: 'roadster1024' },
						'800': { src: 'video/roadster800.jpg', alt: 'roadster800' },
						'700': { src: 'video/roadster700.jpg', alt: 'roadster700' },
						'400': { src: 'video/roadster400.jpg', alt: 'roadster400' },
					}
				},
			},
		},
		data() {
			return {
				width: window.innerWidth,
			}
		},
		computed: {
			changeWidth() {
				return window.innerWidth
			},
			suitablePicture() {
				const w = this.width !== this.changeWidth() ? this.changeWidth() : this.width
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
