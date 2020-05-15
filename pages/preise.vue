<template>
	<section>
		<div class="container">
			<Price />
			<Packajes />
			<Faq />
		</div>
	</section>
</template>

<script>
	import Price from '../components/prices/price'
	import Packajes from '../components/base/packajes'
	import Faq from '../components/base/faq'
	export default {
		components: { Price, Packajes, Faq },
	}
</script>

<style lang="scss">
	.container {
		@include container;
	}
</style>
