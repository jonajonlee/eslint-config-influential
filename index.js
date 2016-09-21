
module.exports = {
  extends: 'eslint:recommended',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {}
  },

  env: {
    node: true
  },

  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    defaultParams: true,
    destructuring: true,
    spread: true,
    templateStrings: true
  },

  rules: {
    'semi': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-var': 'error',
    'no-continue': 'error',
    'max-depth': [ 'error', 4 ],
    'max-len': [ 'error', 80 ],
    'max-nested-callbacks': [ 'error', 3 ],
    'max-statements': [ 'error', 20 ],
    'complexity': [ 'error', 5 ],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-global-assign': 'error',
    'no-lone-blocks': 'error',
    'no-magic-numbers': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-useless-concat': 'error',
    'yoda': ['error', 'always'],
    'wrap-iife': ['error', 'outside'],
    'init-declarations': ['error', 'always'],
    'no-shadow': ['error', { 'hoist': 'all' }],
    'no-use-before-define': 'error',
    'global-require': 'error',
    'no-useless-computed-key': 'error',
    'prefer-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-const': 'error'
  }
}