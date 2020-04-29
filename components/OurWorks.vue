<template>
	<div class="ourWorks">
		<section class="message">
			<h2>Our <span>works</span></h2>
		</section>
		<section class="examples">
			<div class="main">
				<div class="button">
					<img src="@/assets/img/blackBow.svg" />
					<p>Yam-Yam Bakery Website</p>
				</div>
			</div>
			<div class="many">
				<img src="../assets/img/works/2Work.png" />
				<img src="../assets/img/works/3Work.png" />
				<img src="../assets/img/works/2Work.png" />
				<img src="../assets/img/works/3Work.png" />
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'OurWorks',
	}
</script>

<style scoped lang="scss">
	.ourWorks {
		margin: 9.3125em 0;
		.message {
			margin: 0 0 3em 0;
			width: 44%;
			h2 {
				font-weight: 500;
				line-height: 130%;
				color: $white;
				font-size: 2.5em;
				span {
					color: $green;
				}
			}
		}
		.examples {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			justify-content: center;
		}
		.main {
			width: 50%;
			height: 456.33px;
			.button {
				width: 100%;
				height: 100%;
				position: relative;
				background-color: $green;
				p {
					position: absolute;
					left: 0.6em;
					bottom: 0.6em;
					color: $bg;
					font-weight: 500;
					font-size: 4em;
					line-height: 130%;
				}
				img {
					position: absolute;
					margin: 0;
					width: 2.8125em;
					height: auto;
					top: 0.3125em;
					right: 0.3125em;
				}
			}
		}
		.many {
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
	}
</style>
