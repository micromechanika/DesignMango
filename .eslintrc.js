module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'error',
    semi: 'off',
    'comma-dangle': 'off',
    'no-plusplus': 'off',
    'max-len': [
      'error',
      300,
      {
        code: 80,
        ignoreUrls: true,
        tabWidth: 4,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prefer-destructuring': 'off',
    // indent: [
    //   'error',
    //   'tab',
    //   {
    //     SwitchCase: 1,
    //     VariableDeclarator: 'first',
    //     outerIIFEBody: 0,
    //     MemberExpression: 1,
    //     FunctionDeclaration: {
    //       parameters: 'first',
    //     },
    //     FunctionExpression: {
    //       parameters: 'first',
    //     },
    //     CallExpression: {
    //       arguments: 'first',
    //     },
    //     ArrayExpression: 1,
    //     ObjectExpression: 1,
    //     ImportDeclaration: 1,
    //     flatTernaryExpressions: true,
    //     ignoreComments: true,
    //   },
    // ],
    'no-tabs': [
      'error',
      {
        allowIndentationTabs: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: ['fs'],
        patterns: ['eslint/*'],
      },
    ],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
