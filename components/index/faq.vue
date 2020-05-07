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
			<li @click="showFAQ = !showFAQ">
				<article>
					<div class="button" :class="!showFAQ ? 'active' : ''">
						<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
						<img src="@/assets/img/mark.svg" alt="mark" />
					</div>
					<p v-show="!showFAQ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut debitis esse expedita iure natus quas quod ullam? Asperiores,
						impedit, itaque! A cupiditate expedita ipsa molestiae neque optio, repellat soluta.
					</p>
				</article>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Faq',
		data() {
			return {
				showFAQ: true,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.faq {
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
		article {
			width: 100%;
			color: $white;

			.button {
				margin: 0 0 1.43rem 0;
				width: 100%;
				height: 5vh;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				border-bottom: 0.0625rem solid $white;
				h3 {
					font-weight: 600;
					font-size: 1.5rem;
					line-height: 130%;
				}
				img {
					width: 1.35rem;
					height: auto;
				}
			}
			.active {
				border-bottom: 0.0625rem solid transparent;
				h3 {
					color: $green;
				}
			}

			p {
				margin: 1.43rem 0 0 0;
				font-size: 1.5rem;
				line-height: 130%;
			}
		}
		li {
			margin: 1rem 0;
		}
	}
</style>
