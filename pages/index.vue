<template>
	<div class="container">
		<Header />
		<Video />
		<div class="empty"></div>
		<Certificates />
		<TestSpeed />
		<CallAction />
	</div>
</template>

<script>
	import Header from '../components/header'
	import Video from '../components/video'
	import Certificates from '../components/certificates'
	import TestSpeed from '../components/testSpeed'
	import CallAction from '../components/callAction'
	export default {
		components: { Video, Header, Certificates, TestSpeed, CallAction },
	}
</script>

<style lang="scss" scoped>
	.container {
		@include container;
	}
	.empty {
		height: 800px;
		margin: 0;
		padding: 0;
	}
</style>
