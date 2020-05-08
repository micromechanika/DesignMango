<template>
	<div class="faq">
		<article>
			<h2>Frequently</h2>
			<h3>Asked</h3>
			<h4>Questions</h4>
			<h6>Haven’t found what you’re looking for?</h6>
			<a href="">Contact us!</a>
		</article>
		<ul>
			<itemLi v-for="(item, idx) in FAQS" :key="idx" :item="item" :is-selected="selectedItem" @click.native="handleClick(item)" />
		</ul>
	</div>
</template>

<script>
	import itemLi from '../base/faq'
	export default {
		name: 'Faq',
		components: { itemLi },
		props: {
			// eslint-disable-next-line vue/prop-name-casing
			FAQS: {
				type: Array,
				default() {
					return [
						{
							head: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut debitis esse expedita iure natus quas quod ullam? Asperiores, impedit, itaque! A cupiditate expedita ipsa molestiae neque optio, repellat soluta.',
						},
						{
							head: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut debitis esse expedita iure natus quas quod ullam? Asperiores, impedit, itaque! A cupiditate expedita ipsa molestiae neque optio, repellat soluta.',
						},
						{
							head: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut debitis esse expedita iure natus quas quod ullam? Asperiores, impedit, itaque! A cupiditate expedita ipsa molestiae neque optio, repellat soluta.',
						},
						{
							head: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut debitis esse expedita iure natus quas quod ullam? Asperiores, impedit, itaque! A cupiditate expedita ipsa molestiae neque optio, repellat soluta.',
						},
					]
				},
			},
		},
		data() {
			return {
				selectedItem: null,
			}
		},
		methods: {
			handleClick(item) {
				if (this.selectedItem !== item) {
					this.selectedItem = item
				} else {
					this.selectedItem = ''
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.faq {
		margin: 10rem 0;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
	article {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 27%;
		h2,
		h3,
		h4 {
			font-weight: 500;
			font-size: 2.5rem;
			line-height: 130%;
			color: $white;
		}
		h4 {
			color: $green;
		}
		h6,
		a {
			font-size: 1rem;
			line-height: 130%;
			color: $white;
		}
		a {
			color: $green;
		}
	}
	ul {
		width: 60%;
		display: flex;
		flex-direction: column;
		li {
			margin: 1rem 0;
		}
	}
</style>
