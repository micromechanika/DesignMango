<template>
	<section>
		<Video />
		<div class="container">
			<Certificates />
			<TestSpeed />
			<CallAction />
			<OurWorks />
		</div>
		<Slider />
		<div class="container">
			<BotAssistant />
		</div>
		<Package />
	</section>
</template>

<script>
	import Video from '../components/index/video'
	import Certificates from '../components/index/certificates'
	import TestSpeed from '../components/index/testSpeed'
	import CallAction from '../components/index/callAction'
	import OurWorks from '../components/index/ourWorks'
	import Slider from '../components/index/slider'
	import BotAssistant from '../components/index/botAssistant'
	import Package from '../components/index/package'
	export default {
		components: { Video, Certificates, TestSpeed, CallAction, OurWorks, Slider, BotAssistant, Package },
	}
</script>

<style lang="scss" scoped>
	.container {
		@include container;
	}
</style>
