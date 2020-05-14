<template>
	<section>
		<div class="container">
			<Price />
		</div>
	</section>
</template>

<script>
	import Price from '../components/prices/price'
	export default {
		components: { Price },
	}
</script>

<style lang="scss">
	.container {
		@include container;
	}
</style>
