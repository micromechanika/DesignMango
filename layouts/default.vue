<template>
	<div>
		<Header />
		<nuxt />
	</div>
</template>
<script>
	import Header from '../components/header'
	export default {
		components: { Header },
	}
</script>
<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		@include baseProps;
		@include font;
		font-family: 'Poppins', sans-serif;
	}

	html {
		font-size: 0.8vw;
	}

	body {
		background-color: $bg;
	}
</style>
