module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/button-has-type': 'error',
    '@typescript-eslint/naming-convention': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      onlyAttribute: ['']
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'max-len': ['error', { code: 100, ignoreComments: true }],
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  globals: {
    __IS_DEV__: true
  }
}
