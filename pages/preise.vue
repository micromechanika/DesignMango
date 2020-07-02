<template>
	<section>
		<div class="container">
			<Price />
			<Packajes />
			<FullPriceTabe />
			<Faq />
		</div>
	</section>
</template>

<script>
	import Price from '../components/prices/price'
	import FullPriceTabe from '../components/prices/fullPriceTabe'
	import Packajes from '../components/base/packajes'
	import Faq from '../components/base/faq'
	export default {
		components: { FullPriceTabe, Price, Packajes, Faq },
	}
</script>

<style lang="scss">
	.container {
		@include container;
	}
</style>
