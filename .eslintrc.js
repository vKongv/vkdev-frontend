module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
      "indent": ["error", 4],
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "global-require": "off",
      "max-len": "off",
  },
  globals: {}
}
