<template>
	<div class="myVideo">
		<img v-show="!show" src="../assets/video/logoVideo.png" />
		<video v-show="show" autoplay muted loop>
			<source src="../assets/video/Roadster.mp4" type="video/mp4" />
			Элемент video не поддерживается вашим браузером.
		</video>
		<div class="gradient" @click="show = !show"></div>
	</div>
</template>

<script>
	export default {
		name: 'Video',
		data() {
			return {
				show: false,
			}
		},
	}
</script>

<style scoped lang="scss">
	.myVideo {
		width: 100%;
		height: 800px;
		.gradient {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			display: block;
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, rgba(5, 4, 30, 0.15) 0%, #05041e 100%);
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
