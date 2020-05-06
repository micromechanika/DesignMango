<template>
	<div class="botAssistant">
		<div class="showAssistant">
			<img src="@/assets/img/botAssistant.svg" alt="botAssistant" />
		</div>
		<article>
			<h2>Your personal <span>bot-assistant</span></h2>
			<h6>Our chat bot makes regular customers your clients</h6>
		</article>
	</div>
</template>

<script>
	export default {
		name: 'botAssistant',
	}
</script>

<style lang="scss" scoped>
	.botAssistant {
		margin: 12rem auto;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
	.showAssistant {
		width: 50%;
		height: auto;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	article {
		width: 50%;
		h2 {
			width: 100%;
			height: 100%;
			font-weight: 500;
			font-size: 2.5rem;
			line-height: 130%;
			color: $white;
			span {
				color: $green;
			}
			margin: 0 0 2.125rem 0;
		}
		h6 {
			margin: 2.125rem 0 0 0;
			color: $white;
			font-size: 1rem;
			line-height: 130%;
		}
	}
</style>
