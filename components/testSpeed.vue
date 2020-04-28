<template>
	<div class="testSpeed">
		<section class="action">
			<h2>Why is your bussines <span>need a website?</span></h2>
		</section>
		<section class="message">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nec pulvinar praesent sed viverra quam malesuada et. Fusce enim, quis habitant
				ut sed a non, ac non.
			</p>
			<form class="checkspeed">
				<input type="text" name="checkSite" placeholder="www.google.com" />
				<button type="submit">
					<div>
						<img src="@/assets/img/blackBow.svg" />
						<p>Let’s Check!</p>
					</div>
				</button>
			</form>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'TestSpeed',
	}
</script>

<style lang="scss" scoped>
	.testSpeed {
		margin: 15.5em 0 15em 0;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
	.action {
		width: 48.8%;
		margin: 0 1em 0 0;
		h2 {
			font-weight: 500;
			line-height: 130%;
			word-wrap: break-word;
			color: $white;
			font-size: 2.5em;
			span {
				color: $green;
			}
		}
	}
	.message {
		width: 40.3%;
		margin: 0 0 0 1em;
		font-size: 1em;
		line-height: 130%;
		word-wrap: break-word;
		color: $white;
		p {
			margin: 0 0 5em 0;
		}
	}

	.checkspeed {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		p {
			margin: 0;
			padding: 0;
		}
		input {
			background-color: $bg;
			width: 28.125em;
			height: 6.18em;
			border: 0.125em solid $green;
			color: $green;
			padding: 0 0 0 1.25em;
			&:focus {
				background-color: $bg;
				color: $green;
			}
			&:active {
				background-color: $bg;
				color: $green;
			}
			&::placeholder {
				color: $green;
			}
		}
		button {
			position: relative;
			z-index: 100;
			width: 15.875em;
			height: 6.18em;
			border: 0.125em solid $green;
			border-left: none;
			background-color: $green;
			padding: 0;
			margin: 0;
			p {
				position: absolute;
				left: 0.4625em;
				bottom: 0.1375em;
				color: $bg;
				font-size: 1.25em;
			}
			img {
				position: absolute;
				margin: 0;
				width: 1.4em;
				height: auto;
				top: 0.3125em;
				right: 0.1875em;
			}
		}
	}
</style>
