<template>
	<div class="slider">
		<div class="message">
			<h2>How it <span>works</span></h2>
		</div>
		<div class="item">
			<img src="../assets/img/slider/slide1.png" alt="slide1" />
			<section>
				<div class="container">
					<div class="description">
						<h6>First step</h6>
						<h2>Prepare</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin proin adipiscing mi dictum scelerisque eget. Porttitor adipiscing rhoncus
							mattis felis semper mattis tempus nullam.
						</p>
					</div>
					<div class="cards"> </div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'slider',
	}
</script>

<style lang="scss" scoped>
	.slider {
		width: 100%;
		height: 50em;
		margin: 12.5em 0;
	}
	.message {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		h2 {
			font-weight: 600;
			font-size: 88px;
			line-height: 130%;
			color: $white;
			span {
				color: $green;
			}
		}
	}
	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		img {
			width: 33.75%;
			height: 100%;
			object-fit: cover;
		}
		section {
			width: 66.25%;
			height: 100%;
		}
		.container {
			width: 66.79%;
			margin: 0 auto;
		}
		.description {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			color: $white;
			margin: 3.28em 0;
			h6 {
				font-size: 1em;
				line-height: 1.5em;
				margin: 0 0 0.25em 0;
			}
			h2 {
				font-weight: 500;
				font-size: 4em;
				line-height: 130%;
				margin: 0 0 2em 0;
			}
			p {
				font-size: 1.25em;
				line-height: 130%;
			}
		}
		.cards {
			margin: 3.28em 0;
			color: $white;
		}
	}
</style>
