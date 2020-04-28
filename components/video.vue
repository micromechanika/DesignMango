<template>
	<div class="myVideo">
		<div class="gradientTop" @click="show = !show"></div>
		<img v-show="!show" src="@/assets/video/roadster.jpg" />
		<video v-show="show" autoplay muted loop>
			<source src="@/assets/video/Roadster.mp4" type="video/mp4" />
			Элемент video не поддерживается вашим браузером.
		</video>
		<div class="gradientBottom" @click="show = !show"></div>
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
		.gradientTop,
		.gradientBottom {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			display: block;
			width: 100%;
			height: 100%;
		}
		.gradientTop {
			@include grayGradient(0deg);
		}
		.gradientBottom {
			@include grayGradient(180deg);
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
