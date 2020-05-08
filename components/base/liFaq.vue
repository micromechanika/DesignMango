<template>
	<li>
		<article>
			<div
				:class="['button', { active: selected === item && selected != null }]"
			>
				<h3>{{ item.head }}</h3>
				<aside
					:class="[selected === item && selected != null ? 'open' : 'close']"
				/>
			</div>
			<p v-show="selected === item && selected != null">
				{{ item.description }}
			</p>
		</article>
	</li>
</template>

<script>
	export default {
		name: 'LiFaq',
		props: {
			item: {
				type: Object,
				default() {
					return {
						head: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut debitis esse expedita iure natus quas quod ullam? Asperiores, impedit, itaque! A cupiditate expedita ipsa molestiae neque optio, repellat soluta.',
					}
				},
			},
			selected: {
				type: null,
				default() {
					return null
				},
			},
		},
		data() {
			return {}
		},
	}
</script>

<style lang="scss" scoped>
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
			padding: 0 2rem 0 2em;

			h3 {
				font-weight: 600;
				font-size: 1.5rem;
				line-height: 130%;
			}

			aside {
				width: 1.35rem;
				height: 1.35rem;
			}
		}
		.open,
		.close {
			width: 100%;
			height: 100%;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.close {
			background-image: url('../../assets/img/mark.svg');
		}
		.open {
			background-image: url('../../assets/img/greenMark.svg');
		}

		.active {
			border-bottom: 0.0625rem solid transparent;

			h3 {
				color: $green;
			}
		}

		p {
			margin: 1.43rem 0 0 0;
			padding: 0 2rem 0 2rem;
			font-size: 1.5rem;
			line-height: 130%;
		}
	}
</style>
