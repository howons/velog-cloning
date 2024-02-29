module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-shadow': 'off',
  },
};
