<template>
	<video controls autoplay muted loop poster="assets/video/roadster.jpg">
		<source src="@/assets/video/Roadster.mp4" type="video/mp4" />
		Элемент video не поддерживается вашим браузером.
	</video>
</template>

<script>
	export default {
		name: 'Video',
	}
</script>

<style scoped lang="scss">
	video {
		width: 100%;
		height: 800px;
	}
</style>
