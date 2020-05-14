<template>
	<div class="package">
		<div class="message">
			<h2>Choose your </h2>
			<h3>perfect package</h3>
		</div>
		<Packajes />
	</div>
</template>

<script>
	import Packajes from '../base/packajes'
	export default {
		name: 'Package',
		components: { Packajes },
	}
</script>

<style lang="scss" scoped>
	.package {
		margin: 0 auto;
		width: 67%;
	}
	.message {
		width: 100%;
		margin: 2.5rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h2,
		h3 {
			font-weight: 500;
			font-size: 2.5rem;
			line-height: 130%;
		}
		h2 {
			color: $white;
		}
		h3 {
			color: $green;
		}
	}
</style>
