<template>
	<div>
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>
<script>
	import Header from '../components/constLayouts/header'
	import Footer from '../components/constLayouts/footer'

	export default {
		components: { Header, Footer },
	}
</script>
<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		@include a;
		@include baseProps;
	}

	html {
		font-size: 0.8vw;
	}

	body {
		background-color: $bg;
		font-family: 'Arial', 'Helvetica', sans-serif;
	}

	ul {
		list-style-type: none;
	}
</style>
