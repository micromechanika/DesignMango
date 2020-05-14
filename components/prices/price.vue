<template>
	<div class="price">
		<h2>Our <span>prices</span> and packages </h2>
		<aside></aside>
		<Packajes />
	</div>
</template>

<script>
	import Packajes from '../base/packajes'
	export default {
		name: 'price',
		components: { Packajes },
	}
</script>

<style lang="scss" scoped>
	.price {
		margin: 5rem 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h2 {
		font-weight: 500;
		font-size: 4rem;
		line-height: 130%;
		color: $white;
		span {
			color: $green;
		}
	}
</style>
