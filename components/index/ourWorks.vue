<template>
	<div class="ourWorks">
		<h2>Our <span>works</span></h2>
		<section>
			<button>
				<img src="@/assets/img/blackBow.svg" />
				<div class="text">
					<p>Yam-Yam</p>
					<p>Bakery Website</p>
				</div>
			</button>
			<div class="examples">
				<img src="../../assets/img/works/2Work.png" />
				<img src="../../assets/img/works/3Work.png" />
				<img src="../../assets/img/works/2Work.png" />
				<img src="../../assets/img/works/3Work.png" />
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'OurWorks',
	}
</script>

<style lang="scss" scoped>
	.ourWorks {
		margin: 10rem auto;
		width: 100%;
		height: 50vh;
	}
	h2 {
		margin: 0 0 3rem 0;
		width: 50%;
		font-weight: 500;
		line-height: 130%;
		color: $white;
		font-size: 2.5rem;
		span {
			color: $green;
		}
	}
	section {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
	}

	button {
		width: 50%;
		height: 100%;
		position: relative;

		background-color: $green;

		border: 0;
		padding: 0;

		img {
			box-sizing: border-box;
			position: absolute;
			display: block;
			top: 2%;
			right: 2%;
			width: 4rem;
			height: 4rem;
		}
		.text {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			position: absolute;
			left: 2%;
			bottom: 1%;
			p {
				display: block;
				font-weight: 500;
				font-size: 4rem;
				line-height: 130%;
			}
		}
	}
	.examples {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		img {
			width: 50%;
			height: 50%;
			object-fit: cover;
		}
	}
</style>
