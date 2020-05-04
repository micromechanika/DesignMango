<template>
	<div class="testSpeed">
		<h2>Why is your bussines <span>need a website?</span></h2>
		<section>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nec pulvinar praesent sed viverra quam malesuada et. Fusce enim, quis habitant
				ut sed a non, ac non.
			</p>
			<form>
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
		margin: 10rem auto;
		width: 100%;
		height: 30vh;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
	h2 {
		width: 50%;
		height: 100%;
		margin: 0 1rem 0 0;
		font-weight: 500;
		line-height: 130%;
		color: $white;
		font-size: 2.5rem;
		span {
			color: $green;
		}
	}
	section {
		width: 50%;
		height: 100%;
		margin: 0 0 0 1rem;
		font-size: 1.25rem;
		line-height: 130%;
		word-wrap: break-word;
		color: $white;
		p {
			margin: 0 0 5rem 0;
		}
	}
	form {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 40px;
		input {
			background-color: $bg;
			width: 64%;
			height: 100%;
			border: 0.125rem solid $green;
			border-right: none;
			color: $green;
			padding: 0 0 0 1.25rem;
			margin: 0;
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
			width: 36%;
			height: 100%;
			border: 0.125rem solid $green;
			border-left: none;
			background-color: $green;
			padding: 0;
			margin: 0;
			p {
				position: absolute;
				left: 0.1625rem;
				bottom: 0.1375rem;
				color: $bg;
				font-size: 1.25rem;
			}
			img {
				position: absolute;
				margin: 0;
				width: 1.4rem;
				height: auto;
				top: 0.3125rem;
				right: 0.1875rem;
			}
		}
	}
</style>
