<template>
	<div class="botAssistant">
		<aside />
		<article>
			<div class="message">
				<h2>Your personal</h2>
				<h3>bot-assistant</h3>
			</div>
			<h6>Our chat bot makes regular customers your clients</h6>
		</article>
	</div>
</template>

<script>
	export default {
		name: 'BotAssistant',
	}
</script>

<style lang="scss" scoped>
	.botAssistant {
		margin: 12rem auto;
		width: 100%;
		height: 80vh;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
	aside {
		width: 50%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		background-image: url('../../assets/img/botAssistant.svg');
	}
	article {
		width: 50%;
		h6 {
			margin: 2.125rem 0 0 0;
			color: $white;
			font-size: 1rem;
			line-height: 130%;
		}
	}
	.message {
		h2,
		h3 {
			width: 100%;
			height: 100%;
			font-weight: 500;
			font-size: 2.5rem;
			line-height: 130%;
		}
		h2 {
			color: $white;
		}
		h3 {
			color: $green;
		}
		margin: 0 0 2.125rem 0;
	}
</style>
