const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: 'universal',
	...(!isDev && {
		modern: 'client',
	}),
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
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	rootDir: __dirname,
	...(!isDev && {
		html: {
			minify: {
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				decodeEntities: true,
				minifyCSS: true,
				minifyJS: true,
				processConditionalComments: true,
				removeAttributeQuotes: true,
				removeComments: true,
				removeEmptyAttributes: true,
				removeOptionalTags: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				removeTagWhitespace: true,
				sortAttributes: true,
				sortClassName: true,
				trimCustomFragments: true,
				useShortDoctype: true,
			},
		},
	}),
	optimization: {
		minimize: !isDev,
		splitChunks: {
			chunk: 'all',
		},
	},
	...(!isDev && {
		extractCSS: {
			ignoreOrder: false,
		},
	}),
	transpile: ['vue-lazy-hydration', 'intersection-observer'],
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
	loading: false,
	css: ['normalize.css', '@/assets/style/main.scss'],
	plugins: [],
	buildModules: ['@nuxtjs/eslint-module'],
	modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/style-resources', 'nuxt-trailingslash-module', 'nuxt-webfontloader'],
	styleResources: {
		scss: ['@/assets/style/main.scss'],
	},
	axios: {},
	filenames: {
		app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
		chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
		css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
		img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
		font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
		video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'),
	},
	build: {
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

			if (ctx.isDev) config.plugins.push(imageMinPlugin)

			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				})
			}
		},
	},
	router: {
		prefetchLinks: false,
		base: '/',
	},
	env: {
		BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
	},
}
