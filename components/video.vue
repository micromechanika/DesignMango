<template>
	<div class="myVideo">
		<div class="container">
			<div class="message">
				<h1>Your customers need <span>a website!</span></h1>
			</div>
			<div class="button">
				<img src="@/assets/img/blackBow.svg" />
				<p>Get Started</p>
			</div>
		</div>
		<div class="gradientTop" @click="show = !show"></div>
		<img v-show="!show" src="@/assets/video/roadster.jpg" />
		<video v-show="show" autoplay muted loop>
			<source src="@/assets/video/Roadster.mp4" type="video/mp4" />
			please update you browser
		</video>
		<div class="gradientBottom" @click="show = !show"></div>
	</div>
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
	.myVideo {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		width: 100%;
		height: 80vh;
		z-index: -100;
		.gradientTop,
		.gradientBottom {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			display: block;
			width: 100%;
			height: 100%;
		}
		.gradientTop {
			@include grayGradient(0deg);
		}
		.gradientBottom {
			@include grayGradient(180deg);
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.container {
		@include container;
	}

	.button {
		position: absolute;
		top: 37.5rem;
		z-index: 100;
		width: 18.25rem;
		height: 6.18rem;
		background-color: $green;
		p {
			position: absolute;
			left: 0.4625rem;
			bottom: 0.1375rem;
			color: $bg;
			font-size: 1.875rem;
		}
		img {
			position: absolute;
			margin: 0;
			width: 1.4rem;
			height: auto;
			top: 0.3125rem;
			right: 0.1875rem;
		}
	}

	.message {
		position: absolute;
		z-index: 100;
		top: 14.5rem;
		width: 48.8%;
		h1 {
			margin: 0;
			font-size: 4rem;
			color: $white;
			span {
				color: $green;
			}
		}
	}
</style>
