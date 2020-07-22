<template>
	<div class="plansInfoTable">
		<article>
			<h2>Full price</h2>
			<h3>comparision</h3>
		</article>
		<table>
			<thead>
				<tr>
					<th><div class="property">General Futures</div></th>
					<th v-for="(plan, planKey) in plans" :key="planKey">
						<div class="plan">
							<div class="name">
								<p> {{ plan.name }}</p>
							</div>
							<div class="cost">
								<p>
									{{ plan.cost }}<span>{{ plan.currency }}</span>
								</p>
								<p class="term">{{ plan.term }}</p>
							</div>
						</div>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(values, name, nameKey) in properties" :key="nameKey">
					<td>{{ name }}</td>
					<td v-for="(value, valueKey) in values" :key="valueKey">
						<div :class="['propertyValue', selectValueClass(value)]">
							{{ value }}
						</div>
					</td>
				</tr>
			</tbody>
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
				type: Object,
				default() {
					return {
						'Free domain': [true, true, true],
						'Http encryption': [true, true, true],
						'Storage space': [Infinity, '15 GB', '10 GB'],
						'Response time support': [
							'Premium support 1 hour',
							'Support via E-Mail & Chat',
							'E-Mail support',
						],
						'Number of syb-pages': [Infinity, '50', '10'],
						'Bussiness listings': [true, null, null],
						'Professional design analysis': [true, null, null],
					}
				},
			},
		},
		methods: {
			selectValueClass(value) {
				let selectClass
				switch (true) {
					case value === true:
						selectClass = 'check'
						break
					case value === Infinity:
						selectClass = 'infinity'
						break
					case value === null:
						selectClass = ''
						break
					default:
						selectClass = value
						break
				}
				return selectClass
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
		vertical-align: bottom;

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
		width: 25%;
	}

	thead th .plan,
	thead th .property {
		margin: 0 1rem 0 1rem;
		padding: 0 0 1rem 0;
		border-bottom: 1px solid $white;
	}

	tbody td {
		padding: 1rem;
		margin: 3rem;
		border-bottom: 0.5px solid rgba($white, 0.5);
		font-weight: 600;
		font-size: 1rem;
		line-height: 130%;

		&:first-of-type {
			border-bottom: 0;
		}

		.propertyValue {
			text-align: center;
			height: 1rem;
		}
	}

	.infinity,
	.check,
	.queryWhat {
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		font-size: 0;
	}
	.queryWhat {
		background-image: url('../../assets/img/queryWhat.svg');
	}
	.infinity {
		background-image: url('../../assets/img/infinyty.svg');
	}
	.check {
		background-image: url('../../assets/img/check.svg');
	}
</style>
