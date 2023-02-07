module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:mobx/recommended', 'plugin:react/recommended', 'standard-with-typescript', 'prettier', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'mobx/missing-observer': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-confusing-void-expression': ['error', {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true
    }]
  },
  settings: {
    react: {
      version: '18.2.0'
    }
  }
};