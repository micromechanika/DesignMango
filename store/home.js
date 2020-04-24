const state = () => ({
  callToActionData: [],
})

const mutations = {
  callToActionData(state, payload) {
    state.callToActionData = payload
  },
}

const getters = {
  callToActionData: (state) => state.callToActionData,
}

const actions = {
  getCallToActionsData({commit}) {
    const data = [
      {
        image: 'https://ik.imagekit.io/nz3xsf2fh/p1/chatbot-by-mangowebdesign.com_0ZgOHkXCo.svg',
        header: 'MIT heigtech zu mehr kunden',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci animi corporis debitis deleniti deserunt dolore eligendi error esse fugit ipsa ipsam laborum molestiae natus odit quasi sequi tempora voluptatem!',
        items: [
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/1/1_1hN4kKyhLG.svg',
            action: 'Home page Besucher die zu Kunder werden',
          },
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/1/11_E-qoBa-PY_.svg',
            action: 'Kine streunden Werbecosten',
          },
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/1/111_s_cwzXdV1.svg',
            action: 'ein Service den Ihre Kunden liben werden',
          },
        ],
        btn: 'https://ik.imagekit.io/nz3xsf2fh/btn/video-outline-btn_b1vcVFKUwg.png',
      },
      {
        image: 'https://ik.imagekit.io/nz3xsf2fh/p1/moderne-homepage_cM2GJP330.svg',
        header: 'In kurzen Zeit zur Top Homepage',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci animi corporis debitis deleniti deserunt dolore eligendi error esse fugit ipsa ipsam laborum molestiae natus odit quasi sequi tempora voluptatem!',
        items: [
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/2/2_IaCoPjknE.svg',
            action: 'Unverbindliches Gespraech vereinbaren',
          },
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/2/22_Zz6-WFgyA.svg',
            action: 'Planung Ihrer Dgitalstrategie',
          },
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/2/222_M5X1mvrgJ0.svg',
            action: 'Umsetnzung Ihrer Wuensche',
          },
        ],
        btn: '',
      },
      {
        image: 'https://ik.imagekit.io/nz3xsf2fh/p1/Umsetzung-einer-website_LQ4ZTuXTc.svg',
        header: 'Die Umsetzung',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci animi corporis debitis deleniti deserunt dolore eligendi error esse fugit ipsa ipsam laborum molestiae natus odit quasi sequi tempora voluptatem!',
        items: [
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/3/3_zCoFoAktX-.svg',
            action: 'Homepage entwurf in kurzer zeit',
          },
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/3/33_jnE7HETSh.svg',
            action: 'Anpassungen und Anderungen',
          },
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/3/333_kbdGQsbp5-.svg',
            action: 'Ihre Hompage ist ist erstellt und online',
          },
        ],
        btn: '',
      },
      {
        image: 'https://ik.imagekit.io/nz3xsf2fh/p1/schnell-und-gut_QU342f_RJ.svg',
        header: 'Mehr als eine homepage',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci animi corporis debitis deleniti deserunt dolore eligendi error esse fugit ipsa ipsam laborum molestiae natus odit quasi sequi tempora voluptatem!',
        items: [
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/4/4_12Sgmuq7E.svg',
            action: 'seo - optimiert',
          },
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/4/44_yc3-HvhXxt.svg',
            action: 'Social media ready',
          },
          {
            imageLink: 'https://ik.imagekit.io/nz3xsf2fh/icons/body/4/444_ufPrRw0yC5.svg',
            action: 'Ideal um Neukenden zu generieren',
          },
        ],
        btn: '',
      },
    ]
    commit('callToActionData', data)
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
