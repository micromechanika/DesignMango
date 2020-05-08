<template>
	<footer>
		<div class="container">
			<div class="footerBar">
				<nuxt-link to="/">
					<aside />
				</nuxt-link>
				<nav>
					<section v-for="(menu, navKey) in navMenu" :key="navKey">
						<h2>{{ menu.h2 }}</h2>
						<ul>
							<li v-for="(list, listKey) in menu.ul" :key="listKey">
								<nuxt-link :to="`/${list}`">{{ list }}</nuxt-link>
							</li>
						</ul>
					</section>
				</nav>
			</div>
			<hr />
			<div class="end">
				<div class="copyright">
					<p>
						Copyright © 2020
						<nuxt-link to="/">Mango Development</nuxt-link>
						| All rights reserved.
					</p>
				</div>
				<div class="privacy">
					<nuxt-link to="/">
						Privacy Policy
					</nuxt-link>
					<nuxt-link to="/">
						Terms and conditions
					</nuxt-link>
				</div>
			</div>
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
	}
	.footerBar {
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
	hr {
		margin: 2rem 0;
		width: 100%;
		border: 0;
		font-size: 0;
		height: 0.1rem;
		line-height: 0;
		background-color: $white;
	}
	.end {
		margin: 0 0 3.1875rem 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.copyright {
		width: 60%;
		display: flex;
		flex-direction: row;
		align-content: flex-start;
		a {
			padding: 0 0.3rem;
		}
	}
	.privacy {
		width: 20%;
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: flex-end;
		justify-content: space-between;
		a {
			text-decoration: $white underline;
		}
	}
</style>
