<template>
	<article>
		<h2>Why are you need to work <span>with us?</span></h2>
		<section>
			<article v-for="(card, id) in cards" :key="id" class="cards">
				<h3>{{ card.h3 }}</h3>
				<h4>{{ card.h4 }}</h4>
				<p>{{ card.p }}</p>
			</article>
		</section>
	</article>
</template>

<script>
	export default {
		name: 'CallToAction',
		props: {
			cards: {
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
	article {
		margin: 12.56rem auto;
	}

	h2 {
		display: block;
		width: 50%;
		margin: 0 0 6rem 0;
		font-weight: 500;
		line-height: 130%;
		word-wrap: break-word;
		color: $white;
		font-size: 2.5rem;
		span {
			color: $green;
		}
	}
	section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		article .cards {
			margin: 0 1rem;
			width: 25%;
			h3,
			h4 {
				font-size: 1.5rem;
				line-height: 130%;
				text-transform: uppercase;
			}
			h3 {
				color: $green;
			}
			h4 {
				color: $white;
				margin: 0 0 2.875rem 0;
			}
			p {
				line-height: 1.5rem;
				font-size: 1rem;
				color: $white;
			}
			&:first-of-type {
				margin-left: 0;
			}
			&:last-of-type {
				margin-right: 0;
			}
		}
	}
</style>
