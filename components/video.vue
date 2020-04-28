<template>
	<div class="myVideo">
		<img v-show="!show" src="../assets/video/logoVideo.jpg" @click="show = !show" />
		<video v-show="show" autoplay muted loop @dblclick="show = !show">
			<source src="../assets/video/Roadster.mp4" type="video/mp4" />
			Элемент video не поддерживается вашим браузером.
		</video>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 800px;
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
