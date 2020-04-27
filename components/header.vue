<template>
	<header>
		<nuxt-link to="/">
			<img src="https://ik.imagekit.io/nz3xsf2fh/logo/mango-webdesign-logo_uQ43lNpTk.png" />
		</nuxt-link>
		<nav>
			<nuxt-link to="/">
				<p>webdesign</p>
			</nuxt-link>
			<nuxt-link to="/seo">
				<p>seo</p>
			</nuxt-link>
			<nuxt-link to="/marketing">
				<p>marketing</p>
			</nuxt-link>
			<nuxt-link to="/preise">
				<p>preise</p>
			</nuxt-link>
			<nuxt-link to="/referenzen">
				<p>referenzen</p>
			</nuxt-link>
		</nav>
		<address>
			<nuxt-link to="/">
				<img src="https://ik.imagekit.io/nz3xsf2fh/icons/nav/mango-phone-icon_s5VRoTyeE.svg" />
			</nuxt-link>
			<nuxt-link to="/" href="tel:0800/77766677" rel="nofollow">
				<p>0800/77766677</p>
			</nuxt-link>
			<nuxt-link to="/">
				<p>uber uns</p>
			</nuxt-link>
		</address>
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
		width: 11.875em;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-transform: uppercase;
		font-size: 1.15em;
		font-weight: bold;
		a {
			margin: 0 0.5em;
			@include a;
		}
	}
	address {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-style: normal;
		font-size: 1.15em;
		font-weight: bold;
		img {
			width: auto;
			height: 1.5em;
		}
		a {
			margin: 0 0.5em;
			@include a;
		}
	}
</style>
