<template>
	<div class="container">
		<Header />
		<Video />
		<div class="empty"></div>
		<Certificates />
	</div>
</template>

<script>
	import Header from '../components/header'
	import Video from '../components/video'
	import Certificates from '../components/certificates'
	export default {
		components: { Video, Header, Certificates },
	}
</script>

<style lang="scss" scoped>
	.container {
		@include container;
	}
	.empty {
		width: auto;
		height: 800px;
		margin: 0;
		padding: 0;
	}
</style>
