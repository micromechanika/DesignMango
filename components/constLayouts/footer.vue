<template>
	<footer>
		<div class="container">
			<nuxt-link to="/">
				<aside />
			</nuxt-link>
			<nav>
				<section v-for="(menu, navKey) in navMenu" :key="navKey">
					<h2>{{ menu.h2 }}</h2>
					<ul>
						<li v-for="(list, listKey) in menu.ul" :key="listKey">
							<nuxt-link to="/">{{ list }}</nuxt-link>
						</li>
					</ul>
				</section>
			</nav>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		props: {
			navMenu: {
				type: Array,
				default() {
					return [
						{ h2: 'Company', ul: ['About us', 'Team', 'Careers'] },
						{ h2: 'Support', ul: ['About us', 'Team', 'Careers'] },
						{ h2: 'Services', ul: ['About us', 'Team', 'Careers'] },
						{ h2: 'Get in touch', ul: ['Facebook', 'Instagram', 'Twitter'] },
						{ h2: 'Company', ul: ['About us', 'Team', 'Careers'] },
						{ h2: 'Company', ul: ['About us', 'Team', 'Careers'] },
					]
				},
			},
		},
	}
</script>

<style lang="scss" scoped>
	footer {
		width: 100%;
	}
	.container {
		@include container;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	aside {
		margin: 2rem 0;
		width: 10rem;
		height: 3.5rem;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		background-image: url('../../assets/img/logo.svg');
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		flex-wrap: wrap;
		a {
			@include a;
		}
	}
	section {
		margin: 2rem 3.75rem;
		color: $white;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
	}
	h2 {
		font-size: 1.5rem;
		line-height: 130%;
	}
	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		li {
			margin: 1rem 0;
			a {
				font-size: 1.25rem;
				line-height: 130%;
			}
			&::marker {
				display: none;
			}
		}
	}
</style>
