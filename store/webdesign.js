const state = () => ({
	calltoAction: {},
})

const mutations = {
	calltoAction(state, payload) {
		state.calltoAction = payload
	},
}

const getters = {
	calltoAction: state => state.calltoAction,
}

const actions = {
	getCallToActionsData({ commit }) {
		const data = {
			image:
				'https://ik.imagekit.io/nz3xsf2fh/p5/webdesign-preise_ZPdXpbgkKT.svg',
			header: 'Som Header',
			text:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci animi corporis debitis deleniti deserunt dolore eligendi error esse fugit ipsa ipsam laborum molestiae natus odit quasi sequi tempora voluptatem!',
			items: [
				{
					imageLink:
						'https://ik.imagekit.io/nz3xsf2fh/icons/body/2/2_IaCoPjknE.svg',
					action: 'Home page Besucher die zu Kunder werden',
				},
				{
					imageLink:
						'https://ik.imagekit.io/nz3xsf2fh/icons/body/2/2_IaCoPjknE.svg',
					action: 'Home page Besucher die zu Kunder werden',
				},
			],
			btn: 'https://ik.imagekit.io/nz3xsf2fh/p4/contact-us_n30Ph5FDR.png',
		}
		commit('calltoAction', data)
	},
}

export default {
	state,
	mutations,
	getters,
	actions,
}
