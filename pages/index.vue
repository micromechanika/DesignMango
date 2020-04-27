<template>
	<div class="container">
		<Header />
		<techologiespanel />
	</div>
</template>

<script>
	import Header from '../components/header'
	import techologiespanel from '../components/techologiespanel'

	export default {
		components: { Header, techologiespanel },
	}
</script>

<style lang="scss">
	.container {
		@include container;
	}
</style>
