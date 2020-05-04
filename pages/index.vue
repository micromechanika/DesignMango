<template>
	<section>
		<Video />
		<div class="container">
			<Certificates />
			<TestSpeed />
			<CallAction />
			<OurWorks />
			<Slider />
		</div>
	</section>
</template>

<script>
	import Video from '../components/index/video'
	import Certificates from '../components/index/certificates'
	import TestSpeed from '../components/index/testSpeed'
	import CallAction from '../components/index/callAction'
	import OurWorks from '../components/index/ourWorks'
	import Slider from '../components/index/slider'
	export default {
		components: { Video, Certificates, TestSpeed, CallAction, OurWorks, Slider },
	}
</script>

<style lang="scss" scoped>
	.container {
		@include container;
	}
</style>
