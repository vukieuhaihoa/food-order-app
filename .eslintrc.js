module.exports = {
  env: {
    // provide environment for eslint can work
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    // setting some extend for make code pro :V
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser', // default eslint can not parser code ts => need @typescript-eslint
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error', // make error when unfollow prettier format
    'import/extensions': 'off', // index instead of index.js
    'import/no-unresolved': 'error', // turn on errors for missing imports
    'import/prefer-default-export': 'off',
    'no-console': 'off', // allow using console
    camelcase: 'error',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-shadow': ['error'],
    'no-underscore-dangle': ['error', { allow: ['__v'] }],
    'import/order': [
      // setting rank of import
      'error',
      {
        'newlines-between': 'never',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; true by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['ts'], // only parser all file have tail is ts
    },
    'import/resolver': {
      // help us import module
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: './tsconfig.json',
      },
    },
  },
};
