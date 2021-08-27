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
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-one-expression-per-line': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-use-before-define': ['off'],
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'react/destructuring-assignment': 0,
  },
};
