<template>
	<div class="ourWorks">
		<h2>Our <span>works</span></h2>
		<section>
			<button>
				<img src="@/assets/img/blackBow.svg" alt="blackBow" />
				<div class="text">
					<p>Yam-Yam</p>
					<p>Bakery Website</p>
				</div>
			</button>
			<div class="examples">
				<Figure v-for="(work, workKey) in examples" :key="workKey" :figures="work" />
			</div>
		</section>
	</div>
</template>

<script>
	import Figure from '../base/figure'
	export default {
		name: 'OurWorks',
		components: { Figure },
		props: {
			examples: {
				type: Array,
				default() {
					return [
						{
							'3840': { src: 'img/works/work1/work368.jpeg', alt: 'work368' },
							'1600': { src: 'img/works/work1/work368.jpeg', alt: 'work368' },
							'1440': { src: 'img/works/work1/work368.jpeg', alt: 'work368' },
							'1024': { src: 'img/works/work1/work300.jpeg', alt: 'work300' },
							'800': { src: 'img/works/work1/work200.jpeg', alt: 'work200' },
							'700': { src: 'img/works/work1/work150.jpeg', alt: 'work150' },
							'400': { src: 'img/works/work1/work100.jpeg', alt: 'work100' },
						},
						{
							'3840': { src: 'img/works/work2/work368.jpeg', alt: 'work368' },
							'1600': { src: 'img/works/work2/work368.jpeg', alt: 'work368' },
							'1440': { src: 'img/works/work2/work368.jpeg', alt: 'work368' },
							'1024': { src: 'img/works/work2/work300.jpeg', alt: 'work300' },
							'800': { src: 'img/works/work2/work200.jpeg', alt: 'work200' },
							'700': { src: 'img/works/work2/work150.jpeg', alt: 'work150' },
							'400': { src: 'img/works/work2/work100.jpeg', alt: 'work100' },
						},
						{
							'3840': { src: 'img/works/work3/work368.jpeg', alt: 'work368' },
							'1600': { src: 'img/works/work3/work368.jpeg', alt: 'work368' },
							'1440': { src: 'img/works/work3/work368.jpeg', alt: 'work368' },
							'1024': { src: 'img/works/work3/work300.jpeg', alt: 'work300' },
							'800': { src: 'img/works/work3/work200.jpeg', alt: 'work200' },
							'700': { src: 'img/works/work3/work150.jpeg', alt: 'work150' },
							'400': { src: 'img/works/work3/work100.jpeg', alt: 'work100' },
						},
						{
							'3840': { src: 'img/works/work1/work368.jpeg', alt: 'work368' },
							'1600': { src: 'img/works/work1/work368.jpeg', alt: 'work368' },
							'1440': { src: 'img/works/work1/work368.jpeg', alt: 'work368' },
							'1024': { src: 'img/works/work1/work300.jpeg', alt: 'work300' },
							'800': { src: 'img/works/work1/work200.jpeg', alt: 'work200' },
							'700': { src: 'img/works/work1/work150.jpeg', alt: 'work150' },
							'400': { src: 'img/works/work1/work100.jpeg', alt: 'work100' },
						},
					]
				},
			},
		},
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
		figure {
			width: 50%;
			height: 50%;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
