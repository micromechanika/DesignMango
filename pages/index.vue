<template>
	<div class="mediaSection">
		<div class="container">
			<Header />
		</div>
		<div class="videoSection">
			<Video />
		</div>
	</div>
</template>

<script>
	import Header from '../components/header'
	import Video from '../components/video'
	export default {
		components: { Video, Header },
	}
</script>

<style lang="scss">
	.container {
		@include container;
	}
	.videoSection {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -100;
	}
</style>
