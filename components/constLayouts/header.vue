<template>
	<header v-scroll="handleScroll">
		<div class="container">
			<nav>
				<nuxt-link to="/">
					<aside />
				</nuxt-link>
				<ul>
					<li v-for="(item, menuKey) in navMenu" :key="menuKey">
						<nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
					</li>
				</ul>
				<section>
					<div class="button">
						<aside />
						<p>Sign in</p>
					</div>
					<div class="lang">
						<p>eng</p>
						<aside />
					</div>
				</section>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		directives: {
			scroll: {
				inserted(el, binding) {
					const f = function(evt) {
						if (binding.value(evt, el)) {
							window.removeEventListener('scroll', f)
						}
					}
					window.addEventListener('scroll', f)
				},
			},
		},
		props: {
			navMenu: {
				type: Array,
				default() {
					return [
						{ title: 'Web-design', link: '/' },
						{ title: 'SEO', link: '/seo' },
						{ title: 'Marketing', link: '/marketing' },
						{ title: 'Preise', link: '/preise' },
						{ title: 'Referenzen', link: '/referenzen' },
					]
				},
			},
		},
		computed: {},
		methods: {
			handleScroll(evt, el) {
				return window.scrollY >= 50
					? el.setAttribute(
							'style',
							'background-color: #05041E; top:0; transition: top; 1s;'
					  )
					: el.setAttribute(
							'style',
							'background-color:transparent; top:1.5rem; transition: top; 1s;'
					  )
			},
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		@include container;
	}
	header {
		position: fixed;
		top: 1.5rem;
		width: 100%;
		z-index: 1200;
	}
	aside {
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
		justify-content: space-between;
		align-items: center;
		height: 5rem;
		ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			li {
				a {
					font-size: 1rem;
					line-height: 1.25rem;
					margin: 0 1.875rem;
				}
			}
		}
	}
	section {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-content: space-between;
		align-items: center;
		.button {
			margin: 0 2.5rem 0 0;
			position: relative;
			width: 5.625rem;
			height: 2.75rem;
			border: 0.125rem solid $green;
			p {
				position: absolute;
				left: 0.2375rem;
				bottom: 0.3625rem;
				color: $green;
			}
			aside {
				width: 0.77rem;
				height: 0.77rem;
				position: absolute;
				top: 0.3125rem;
				right: 0.1875rem;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				background-image: url('../../assets/img/bow.svg');
			}
		}
		.lang {
			margin: 0 0 0 2.5rem;
			color: $white;
			text-transform: uppercase;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			p {
				font-size: 0.875rem;
				margin: 0 0.3125rem 0 0;
			}
			aside {
				width: 0.635rem;
				height: 0.635rem;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				background-image: url('../../assets/img/mark.svg');
			}
		}
	}
</style>
