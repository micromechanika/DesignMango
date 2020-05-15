<template>
	<section>
		<div class="container">
			<Price />
			<Faq />
		</div>
	</section>
</template>

<script>
	import Price from '../components/prices/price'
	import Faq from '../components/base/faq'
	export default {
		components: { Price, Faq },
	}
</script>

<style lang="scss">
	.container {
		@include container;
	}
</style>
