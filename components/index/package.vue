<template>
	<div class="package">
		<div class="message">
			<h2>Choose your </h2>
			<h3>perfect package</h3>
		</div>
		<section>
			<article>
				<div class="info">
					<h2>Starter</h2>
					<div class="inPackage">
						<img src="@/assets/img/like.svg" alt="like" />
						<h3>Own domain to connect</h3>
					</div>
					<div class="inPackage">
						<img src="@/assets/img/like.svg" alt="like" />
						<h3>Own domain to connect</h3>
					</div>
					<div class="inPackage">
						<img src="@/assets/img/like.svg" alt="like" />
						<h3>Visitor statistics</h3>
					</div>
				</div>
				<div class="price">
					<p class="curensy">$</p>
					<p class="rate">39,99</p>
					<p class="time"><span>/</span>mo</p>
				</div>
				<button type="submit">
					<p>Get started</p>
				</button>
			</article>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Package',
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
	section {
		width: 100%;
		height: 80vh;
		margin: 2.5rem 0;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	article {
		color: $white;
		width: 33.3333%;
		border: 0.125rem solid $white;
		.price {
			width: 100%;
			height: 14vh;
			border: 0.125rem solid $white;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			color: $white;
			.curensy {
				margin: 0 0.8rem 0 0;
			}
			.curensy,
			.rate {
				font-weight: 500;
				font-size: 3rem;
				line-height: 4.5rem;
			}
			.time {
				font-weight: 500;
				font-size: 1.5rem;
				line-height: 2.25rem;
				span {
					margin: 0 0.8rem;
				}
			}
		}
		button {
			width: 100%;
			height: 14vh;
			border: 0.125rem solid $bg;
			background-color: $white;
			p {
				color: $bg;
				font-size: 1.5rem;
				line-height: 130%;
			}
		}
	}
	.inPackage {
		margin: 2rem 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		img {
			width: 1rem;
			height: 1rem;
			margin: 0 0.625rem 0 0;
		}
		h3 {
			margin: 0 0 0 0.625rem;
			font-size: 1.25rem;
			line-height: 130%;
		}
	}
	.info {
		width: 72%;
		height: 56vh;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		h2 {
			margin: 1.75rem 0 3.125rem 0;
			font-size: 2rem;
			line-height: 130%;
		}
	}
</style>
