<template>
	<div class="package">
		<h2>Choose your <span>perfect package</span></h2>
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
			</article>
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
			</article>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h2 {
		margin: 2.5rem 0;
		font-weight: 500;
		font-size: 2.5rem;
		line-height: 130%;
		color: $white;
		span {
			color: $green;
		}
	}
	section {
		margin: 2.5rem 0;
		width: 68%;
		height: 80vh;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	article {
		color: $white;
		width: 33.3333%;
		height: 100%;
		border: 0.125rem solid $white;
		h2 {
			font-size: 2rem;
			line-height: 130%;
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
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
