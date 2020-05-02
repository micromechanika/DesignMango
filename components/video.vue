<template>
	<section @click="show = !show">
		<img v-show="!show" src="@/assets/video/roadster.jpg" />
		<video v-show="show" autoplay preload="none" muted loop>
			<source src="@/assets/video/Roadster.mp4" type="video/mp4" />
			please update you browser
		</video>

		<div class="container">
			<h1>Your customers need <span>a website!</span></h1>
			<button>
				<img src="@/assets/img/blackBow.svg" />
				<p>Get Started</p>
			</button>
		</div>

		<div class="gradient"></div>
	</section>
</template>

<script>
	export default {
		name: 'Video',

		data() {
			return {
				show: false,
			}
		},
	}
</script>

<style scoped lang="scss">
	section {
		width: 100%;
		height: 80vh;
		position: relative;
	}
	.gradient {
		position: absolute;
		z-index: 100;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		display: block;
		width: 100%;
		height: 100%;
		@include grayGradient(180deg);
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	video {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.container {
		top: 8.75rem;
		position: relative;
		z-index: 110;
		@include container;

		h1 {
			width: 50%;
			margin: 0 0 10px 0;
			font-size: 5rem;
			color: $white;
			span {
				color: $green;
			}
		}
		button {
			margin: 8.25rem 0 0 0;
			position: relative;
			width: 18rem;
			height: 6rem;
			background-color: $green;

			border: 0;
			padding: 0;

			img {
				box-sizing: border-box;
				position: absolute;
				display: block;
				top: 1rem;
				left: 16rem;
				width: 1rem;
				height: 1rem;
			}
			p {
				box-sizing: border-box;
				display: block;
				position: absolute;
				left: 1rem;
				bottom: 1rem;
				font-size: 2rem;
				margin: 0;
			}
		}
	}
</style>
