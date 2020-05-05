// https://www.npmjs.com/package/dotenv
require('dotenv').config()
const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: 'universal',
	...(!isDev && {
		modern: 'client',
	}),
	head: {
		htmlAttrs: {
			lang: 'en',
		},
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
		],
		link: [
			{ rel: 'canonical', href: process.env.BASE_URL },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},
	loading: false,
	cache: {
		max: 0,
		maxAge: 8.64e8,
		updateAgeOnGet: true,
		length(n, key) {
			return n * 2 + key.length
		},
		dispose(key, n) {
			n.close()
		},
	},
	css: ['normalize.css', '@/assets/style/main.scss'],
	styleResources: {
		scss: ['@/assets/style/main.scss'],
	},
	plugins: [],
	buildModules: ['@nuxtjs/eslint-module', 'nuxt-purgecss', '@nuxtjs/google-analytics'],
	modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', 'nuxt-trailingslash-module', '@nuxtjs/sitemap', '@nuxtjs/robots'],
	axios: {},
	build: {
		optimizeCss: false,
		filenames: {
			app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
			chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
			css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
			img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
			font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
			video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'),
		},
		...(!isDev && {
			html: {
				minify: {
					collapseBooleanAttributes: true,
					decodeEntities: true,
					minifyCSS: true,
					minifyJS: true,
					processConditionalComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					trimCustomFragments: true,
					useShortDoctype: true,
				},
			},
		}),
		...(!isDev && {
			extractCSS: {
				ignoreOrder: true,
			},
		}),
		postcss: {
			plugins: {
				...(!isDev && {
					cssnano: {
						preset: [
							'advanced',
							{
								autoprefixer: false,
								cssDeclarationSorter: false,
								zindex: false,
								discardComments: {
									removeAll: true,
								},
							},
						],
					},
				}),
			},
			...(!isDev && {
				preset: {
					browsers: 'cover 99.5%',
					autoprefixer: true,
				},
			}),
			order: 'cssnanoLast',
		},
		transpile: ['vue-lazy-hydration', 'intersection-observer'],
		optimization: {
			minimize: !isDev,
		},
		splitChunks: {
			chunk: 'all',
		},
		extend(config, ctx) {
			const imageMinPlugin = new ImageminPlugin({
				pngquant: {
					quality: '5-30',
					speed: 7,
					strip: true,
				},
				jpegtran: {
					progressive: true,
				},
				gifsicle: {
					interlaced: true,
				},
				plugins: [
					imageminMozjpeg({
						quality: 70,
						progressive: true,
					}),
				],
			})

			if (!ctx.isDev) config.plugins.push(imageMinPlugin)

			config.module.rules.push({
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /(node_modules)/,
			})
		},
	},
	router: {
		prefetchLinks: false,
		base: '/',
	},
	googleAnalytics: {
		id: process.env.GOOGLE_ANALYTICS_ID,
	},
	sitemap: {
		hostname: process.env.BASE_URL,
		gzip: true,
		exclude: ['/admin/**'],
	},
	robots: {
		UserAgent: '*',
		Disallow: ['/admin'],
		Sitemap: process.env.BASE_URL + '/sitemap.xml',
	},
}
