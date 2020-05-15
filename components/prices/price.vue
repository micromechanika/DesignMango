<template>
	<div class="price">
		<h2>Our <span>prices</span> and packages </h2>

		<section>
			<h3 :class="{ active: toggle }">Monthly</h3>
			<aside :class="toggle ? 'monthly' : 'yearly'">
				<button @click.stop="toggle = !toggle" />
			</aside>
			<h3 :class="{ active: !toggle }">Yearly</h3>
		</section>

		<Packajes />
	</div>
</template>

<script>
	import Packajes from '../base/packajes'
	export default {
		name: 'Price',
		components: { Packajes },
		data() {
			return {
				toggle: false,
			}
		},
		methods: {},
	}
</script>

<style lang="scss" scoped>
	.price {
		margin: 10rem 0 0 0;
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
	section {
		margin: 5rem 0 0 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: $white;
	}
	h3 {
		font-size: 1.5rem;
		line-height: 130%;
		&:first-of-type {
			margin-right: 2rem;
		}
		&:last-of-type {
			margin-left: 2rem;
		}
	}
	aside {
		margin: 3rem 0;
		border: 0.1rem solid $green;
		width: 110px;
		height: 60px;
		display: flex;
		flex-direction: row;
		align-items: center;

		button {
			background-color: $green;
			margin: 0.25rem;
			border: 0.1rem solid $green;
			width: 48%;
			height: 90%;
		}
	}
	.active {
		color: $green;
	}
	.monthly {
		justify-content: flex-start;
	}
	.yearly {
		justify-content: flex-end;
	}
</style>
