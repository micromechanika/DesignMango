<template>
	<main>
		<div class="container">
			<Header />
		</div>
		<Video />
		<div class="container">
			<Certificates />
			<TestSpeed />
			<CallAction />
			<OurWorks />
			<Slider />
		</div>
	</main>
</template>

<script>
	import Header from '../components/header'
	import Video from '../components/video'
	import Certificates from '../components/certificates'
	import TestSpeed from '../components/testSpeed'
	import CallAction from '../components/callAction'
	import OurWorks from '../components/ourWorks'
	import Slider from '../components/slider'
	export default {
		components: { Video, Header, Certificates, TestSpeed, CallAction, OurWorks, Slider },
	}
</script>

<style lang="scss" scoped>
	.container {
		@include container;
	}
</style>
