<template>
	<div class="container">
		<Header />
		<techologiespanel />
		<callToAction v-for="(item, index) in callToActionData" :key="index" :action-data="item" :left="index % 2 !== 0" />
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Header from '../components/header'
	import techologiespanel from '../components/techologiespanel'
	import callToAction from '../components/callToAction'

	export default {
		components: { Header, techologiespanel, callToAction },
		computed: {
			...mapGetters('home', ['callToActionData']),
		},
		beforeMount() {
			this.$store.dispatch('home/getCallToActionsData')
		},
	}
</script>

<style lang="scss">
	.container {
		@include container;
	}
</style>