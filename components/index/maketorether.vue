<template>
	<div class="maketogether">
		<aside>
			<section>
				<h2>Let’s make your website together!</h2>
				<button>
					<aside />
					<p>Get Started</p>
				</button>
			</section>
		</aside>
	</div>
</template>

<script>
	export default {
		name: 'Maketorether',
	}
</script>

<style lang="scss" scoped>
	.maketogether {
		width: 100%;
		margin: 5.625rem 0;
	}
	aside {
		width: 100%;
		height: 60vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		background-image: url('../../assets/img/maketogether.svg');
	}
	section {
		top: 8.75rem;
		left: 6rem;
		position: relative;
		z-index: 110;
	}
	h2 {
		width: 50%;
		margin: 0 0 0 0;
		font-size: 4rem;
		color: $bg;
		position: relative;
		top: 2.5rem;
	}
	button {
		margin: 0 0 0 0;
		position: relative;
		top: 15rem;
		width: 18rem;
		height: 6rem;
		background-color: transparent;
		border: 0.1rem solid $bg;
		padding: 0;

		aside {
			position: absolute;
			top: 1rem;
			left: 16rem;
			width: 1rem;
			height: 1rem;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			background-image: url('../../assets/img/blackBow.svg');
		}

		p {
			box-sizing: border-box;
			display: block;
			position: absolute;
			left: 1rem;
			bottom: 1rem;
			font-size: 2rem;
			margin: 0;
			color: $bg;
		}
	}
</style>
