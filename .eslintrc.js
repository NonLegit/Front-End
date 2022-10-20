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
    'react/react-in-jsx-scope': 'off',
  },
};
