<template>
	<table>
		<thead>
			<tr>
				<th>General Futures</th>
				<th class="plan">
					<div class="name"><p>Pro</p></div>
					<div class="cost">
						<p>69.99<span>$</span></p>
						<p class="term">Per Month</p>
					</div>
				</th>
				<th class="plan">
					<div class="name"><p>Pro</p></div>
					<div class="cost">
						<p>69.99<span>$</span></p>
						<p class="term">Per Month</p>
					</div>
				</th>
				<th class="plan">
					<div class="name"><p>Pro</p></div>
					<div class="cost">
						<p>69.99<span>$</span></p>
						<p class="term">Per Month</p>
					</div>
				</th>
			</tr>
		</thead>
		<tbody></tbody>
	</table>
</template>

<script>
	export default {
		name: 'fullPriceTabe',
	}
</script>

<style lang="scss" scoped>
	table {
		width: 100%;
		border-collapse: collapse;
	}
	thead tr {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	thead th {
		width: 100%;
		margin: 0 1rem 0 1rem;
		border-bottom: 1px solid $white;
	}
	.plan {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		.cost {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			.term {
				opacity: 0.4;
			}
		}
	}
</style>
