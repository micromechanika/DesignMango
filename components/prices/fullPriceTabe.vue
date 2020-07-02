<template>
	<div class="plansInfoTable">
		<article>
			<h2>Full price</h2>
			<h3>comparision</h3>
		</article>
		<table>
			<thead>
				<tr>
					<th class="property">General Futures</th>
					<th class="plan" v-for="(plan, planKey) in plans" :key="planKey">
						<div class="name">
							<p> {{ plan.name }}</p>
						</div>
						<div class="cost">
							<p>
								{{ plan.cost }}<span>{{ plan.currency }}</span>
							</p>
							<p class="term">{{ plan.term }}</p>
						</div>
					</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'FullPriceTabe',
		props: {
			plans: {
				type: Array,
				default() {
					return [
						{
							name: 'Pro',
							cost: '69.99',
							currency: '$',
							term: 'Per Month',
						},
						{
							name: 'Business',
							cost: '39.99',
							currency: '$',
							term: 'Per Month',
						},
						{
							name: 'Starter',
							cost: '29.99',
							currency: '$',
							term: 'Per Month',
						},
					]
				},
			},
			properties: {
				type: Array,
				default() {
					return [
						{ name: 'Free domain', value: 'link to image or string or empty' },
					]
				},
			},
		},
	}
</script>

<style lang="scss" scoped>
	article {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 27%;
		margin: 0 0 7.45rem 0;
		h2,
		h3 {
			font-weight: 500;
			font-size: 2.5rem;
			line-height: 130%;
			color: $white;
		}
		h3 {
			color: $green;
		}
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}
	thead tr {
		display: flex;
		flex-direction: row;
		.property {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
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
	}
	thead th {
		width: 100%;
		margin: 0 1rem 0 1rem;
		padding: 0 0 1rem 0;
		border-bottom: 1px solid $white;
	}
</style>
