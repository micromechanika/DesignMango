<template>
	<div class="callAction">
		<section class="action">
			<h2>Why are you need to work <span>with us?</span></h2>
		</section>
		<div class="cards">
			<article v-for="(item, id) in items" :key="id">
				<h3>{{ item.h3 }}</h3>
				<h4>{{ item.h4 }}</h4>
				<p>{{ item.p }}</p>
			</article>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CallToAction',
		props: {
			items: {
				type: Array,
				default() {
					return [
						{ h3: 'Advanced ', h4: 'technologies', p: 'Our developers use advanced technologies in website development.' },
						{
							h3: 'Excellent ',
							h4: 'SEO',
							p: 'We work with the best SEO in Europe. You do not need to think about attracting new customers - we will take care of everything!',
						},
						{ h3: 'FULL', h4: 'SERVICE', p: 'We provide full service of your website from the beginning of our cooperation!' },
						{ h3: 'BEST', h4: 'PRICE EVER', p: 'Do you think that having unique website in 2020 is expensive? Not at all! Our price - 29 EUR/MONTH' },
					]
				},
			},
		},
	}
</script>

<style lang="scss" scoped>
	.callAction {
		margin: 12.56rem 0;
	}
	.action {
		width: 44%;
		margin: 0 0 6rem 0;
		h2 {
			font-weight: 500;
			line-height: 130%;
			word-wrap: break-word;
			color: $white;
			font-size: 2.5rem;
			span {
				color: $green;
			}
		}
	}
	.cards {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
	}
	article {
		word-break: break-word;
		width: 23%;
		h3,
		h4 {
			margin: 0;
			padding: 0;
			font-size: 1.5rem;
			line-height: 130%;
			text-transform: uppercase;
		}
		h3 {
			color: $green;
		}
		h4 {
			color: $white;
		}
		p {
			margin: 2.875rem 0 0 0;
			line-height: 1.5rem;
			font-size: 1rem;
			padding: 0;
			color: $white;
		}
	}
</style>
