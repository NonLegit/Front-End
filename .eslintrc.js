module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Error FL not CRFL
    'linebreak-style': 0,
    // Should tell propes
    'react/prop-types': 0,
    // Shouldn't import jsx in js
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // console warning
    'no-console': 0,
    // disabling importing React
    'react/jsx-uses-react': 'off',
    // disabling importing react in jsx scope
    'react/react-in-jsx-scope': 'off',
    // disabling prefer default export
    'import/prefer-default-export': 'off',
    // disables line length check
    'max-len': ['error', { code: 2000 }],
    // disabling disallow nested ternary expressions
    'no-nested-ternary': 'off',
    // disabling props spreading
    'react/jsx-props-no-spreading': 'off',
    // disabling no shadow
    'no-shadow': 'off',
    // disabling no await in loop
    'no-await-in-loop': 'off',
    // disabling no-underscore-dangle
    'no-underscore-dangle': 'off',
  },
};
