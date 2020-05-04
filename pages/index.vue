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
	import Video from '../components/video'
	import Certificates from '../components/certificates'
	import TestSpeed from '../components/testSpeed'
	import CallAction from '../components/callAction'
	import OurWorks from '../components/ourWorks'
	import Slider from '../components/slider'
	export default {
		components: { Video, Certificates, TestSpeed, CallAction, OurWorks, Slider },
	}
</script>

<style lang="scss" scoped>
	.container {
		@include container;
	}
</style>
