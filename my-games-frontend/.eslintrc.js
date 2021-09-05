module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      0,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-one-expression-per-line': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-use-before-define': ['off'],
    'no-console': [
      'error',
      {
        allow: ['log', 'warn', 'error'],
      },
    ],
    'react/destructuring-assignment': 0,
    'import/order': 0,
    'react/require-default-props': 0,
    'object-curly-newline': 'off',
    'operator-linebreak': ['off'],
    'import/prefer-default-export': 'off',
    'no-useless-constructor:': 0,
    'implicit-arrow-linebreak': ['off'],
    'no-confusing-arrow': [0, { allowParens: true }],
    'react/no-array-index-key': 'off',
    'function-paren-newline': 'off',
  },
};
