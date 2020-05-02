<template>
	<header v-scroll="handleScroll">
		<div class="container">
			<nuxt-link to="/">
				<img src="@/assets/img/logo.svg" />
			</nuxt-link>
			<nav>
				<nuxt-link to="/">
					<p>Web-design</p>
				</nuxt-link>
				<nuxt-link to="/seo">
					<p>SEO</p>
				</nuxt-link>
				<nuxt-link to="/marketing">
					<p>Marketing</p>
				</nuxt-link>
				<nuxt-link to="/preise">
					<p>Preise</p>
				</nuxt-link>
				<nuxt-link to="/referenzen">
					<p>Referenzen</p>
				</nuxt-link>
			</nav>
			<aside>
				<div class="button">
					<img src="@/assets/img/bow.svg" />
					<p>Sign in</p>
				</div>
				<div class="lang">
					<p>eng</p>
					<img src="@/assets/img/mark.svg" />
				</div>
			</aside>
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
		computed: {},
		methods: {
			handleScroll(evt, el) {
				return window.scrollY >= 800
					? el.setAttribute('style', 'background-color: #05041E; top:0; transition: top 1s;')
					: el.setAttribute('style', 'background-color:transparent; top:1.5rem; transition: top 1s;')
			},
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		@include container;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 5rem;
	}
	header {
		position: fixed;
		top: 1.5rem;
		width: 100%;
		z-index: 1200;
	}
	img {
		width: 9.25rem;
		height: auto;
		line-height: 0;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		font-size: 1rem;
		line-height: 1.25rem;
		a {
			margin: 0 1.875rem;
			@include a;
		}
	}
	aside {
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
			img {
				margin: 0;
				width: 0.77rem;
				height: auto;
				position: absolute;
				top: 0.3125rem;
				right: 0.1875rem;
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
			img {
				width: 0.635rem;
				height: auto;
			}
		}
	}
</style>
