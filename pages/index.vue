<template>
	<div class="mediaSection">
		<div class="container">
			<Header />
		</div>
		<div class="videoSection">
			<div class="container ">
				<div class="message">
					<h1>Your customers need <span>a website!</span></h1>
				</div>
				<div class="button">
					<img src="@/assets/img/blackBow.svg" />
					<p>Get Started</p>
				</div>
			</div>
			<Video />
		</div>
	</div>
</template>

<script>
	import Header from '../components/header'
	import Video from '../components/video'
	export default {
		components: { Video, Header },
	}
</script>

<style lang="scss">
	.container {
		@include container;
	}
	.videoSection {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: -100;
		.button {
			position: absolute;
			top: 37.5em;
			z-index: 100;
			width: 18.25em;
			height: 6.18em;
			background-color: $green;
			p {
				position: absolute;
				left: 0.4625em;
				bottom: 0.1375em;
				color: $bg;
				font-size: 1.875em;
			}
			img {
				margin: 0;
				width: 1.4em;
				position: absolute;
				top: 0.3125em;
				right: 0.1875em;
			}
		}
	}
	.message {
		position: absolute;
		z-index: 100;
		top: 14.5em;
		width: 45.8%;
		h1 {
			margin: 0;
			font-size: 4em;
			color: $white;
			span {
				color: $green;
			}
		}
	}
</style>
