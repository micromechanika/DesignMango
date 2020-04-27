<template>
	<header>
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
			<p>en</p>
		</aside>
	</header>
</template>

<script>
	export default {
		name: 'Header',
	}
</script>

<style lang="scss" scoped>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	img {
		width: 9.25em;
		margin: 1.5em 0;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		font-size: 1em;
		line-height: 1.25em;
		a {
			margin: 0 1.875em;
			@include a;
		}
	}
	aside {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		.button {
			position: relative;
			width: 5.625em;
			height: 2.75em;
			border: 0.125em solid $green;
			p {
				position: absolute;
				left: 0.2375em;
				bottom: 0.3625em;
				color: $green;
			}
			img {
				width: 0.77em;
				position: absolute;
				top: -1.3125em;
				right: 0.1875em;
			}
		}
	}
</style>
