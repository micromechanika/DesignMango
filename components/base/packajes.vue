<template>
	<section>
		<article
			v-for="(item, pakageKey) in packages"
			:key="pakageKey"
			:class="pakageKey === 1 ? 'active' : ''"
		>
			<div class="info">
				<h2>{{ item.name }}</h2>
				<div
					v-for="(include, includeKey) in item.includes"
					:key="includeKey"
					class="inPackage"
				>
					<img src="@/assets/img/like.svg" alt="like" />
					<h3>{{ include.offers }}</h3>
				</div>
			</div>
			<div class="price">
				<p class="curency">{{ item.curensy }}</p>
				<p class="rate">{{ item.rate }}</p>
				<p class="time"><span>/</span>{{ item.time }}</p>
			</div>
			<button type="submit">
				<p>Get started</p>
			</button>
		</article>
	</section>
</template>

<script>
	export default {
		name: 'Packajes',
		props: {
			packages: {
				type: Array,
				default() {
					return [
						{
							name: 'Pro',
							includes: [
								{ offers: 'Own domain to connect' },
								{ offers: 'Own domain to connect' },
								{ offers: 'Visitor statistics' },
							],
							curensy: '$',
							rate: '69,99',
							time: 'mo',
						},
						{
							name: 'Business',
							includes: [
								{ offers: 'Own domain to connect' },
								{ offers: 'Own domain to connect' },
								{ offers: 'Visitor statistics' },
							],
							curensy: '$',
							rate: '39,99',
							time: 'mo',
						},
						{
							name: 'Starter',
							includes: [
								{ offers: 'Own domain to connect' },
								{ offers: 'Own domain to connect' },
								{ offers: 'Visitor statistics' },
							],
							curensy: '$',
							rate: '29,99',
							time: 'mo',
						},
					]
				},
			},
		},
	}
</script>

<style lang="scss" scoped>
	.active {
		@include lilacGradient;
	}

	section {
		width: 100%;
		height: 80vh;
		margin: 2.5rem 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	article {
		color: $white;
		width: 30%;
		border: 0.125rem solid $white;
		margin: 0.3rem;
		button {
			width: 100%;
			height: 10vh;
			border: 0.125rem solid $bg;
			background-color: $white;
			p {
				color: $bg;
				font-size: 1.5rem;
				line-height: 130%;
			}
		}
	}
	.info {
		width: 72%;
		height: 50vh;
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
	.price {
		width: 100%;
		height: 10vh;
		border: 0.125rem solid $white;
		border-left: 0;
		border-right: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: $white;
	}
	.curency {
		margin: 0 0.8rem 0 0;
	}
	.curency,
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
</style>
