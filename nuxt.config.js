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
	/*
	 ** Headers of the page
	 */
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
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap' },
		],
	},
	rootDir: __dirname,
	...(!isDev && {
		html: {
			minify: {
				collapseBooleanAttributes: true,
				collapseWhitespace: false,
				decodeEntities: true,
				minifyCSS: true,
				minifyJS: true,
				processConditionalComments: true,
				removeAttributeQuotes: false,
				removeComments: false,
				removeEmptyAttributes: true,
				removeOptionalTags: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: false,
				removeStyleLinkTypeAttributes: false,
				removeTagWhitespace: false,
				sortAttributes: true,
				sortClassName: false,
				trimCustomFragments: true,
				useShortDoctype: true,
			},
		},
	}),
	splitChunks: {
		layouts: true,
		pages: true,
		commons: true,
	},
	optimization: {
		minimize: !isDev,
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
	/*
	 ** Customize the progress-bar color
	 */
	loading: false,
	/*
	 ** Global CSS
	 */
	css: ['normalize.css'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		// https://github.com/nuxt-community/style-resources-module
		'@nuxtjs/style-resources',
		'nuxt-trailingslash-module',
		'nuxt-webfontloader',
	],
	styleResources: {
		scss: ['./assets/style/_loadStyles.scss'],
	},
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	render: {
		// http2: {
		//     push: true,
		//     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
		//     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
		//   },
		// compressor: false,
		resourceHints: false,
		etag: false,
		static: {
			etag: false,
		},
	},
	filenames: {
		app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
		chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
		css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
		img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
		font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
		video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'),
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/gi'
			const vueSvgLoader = [
				{
					loader: 'vue-svg-loader',
					options: {
						svgo: false,
					},
				},
			]
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

			config.module.rules.forEach(rule => {
				if (rule.test.toString() === ORIGINAL_TEST) {
					rule.test = /\.(png|jpe?g|gif|webp)$/gi
					rule.use = [
						{
							loader: 'url-loader',
							options: {
								limit: 1000,
								name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
							},
						},
					]
				}
			})

			const svgRule = {
				test: /\.svg$/,
				oneOf: [
					{
						resourceQuery: /inline/,
						use: vueSvgLoader,
					},
					{
						resourceQuery: /data/,
						loader: 'url-loader',
					},
					{
						resourceQuery: /raw/,
						loader: 'raw-loader',
					},
					{
						loader: 'file-loader', // By default, always use file-loader
					},
				],
			}

			config.module.rules.push(svgRule)
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
