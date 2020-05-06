<template>
	<section>
		<Video />
		<div class="container">
			<Certificates />
			<TestSpeed />
			<CallAction />
			<OurWorks />
		</div>
		<div class="container">
			<BotAssistant />
		</div>
	</section>
</template>

<script>
	import Video from '../components/index/video'
	import Certificates from '../components/index/certificates'
	import TestSpeed from '../components/index/testSpeed'
	import CallAction from '../components/index/callAction'
	import OurWorks from '../components/index/ourWorks'
	import BotAssistant from '../components/index/botAssistant'
	export default {
		components: { Video, Certificates, TestSpeed, CallAction, OurWorks, BotAssistant },
	}
</script>

<style lang="scss" scoped>
	.container {
		@include container;
	}
</style>
