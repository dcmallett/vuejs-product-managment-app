/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vue/vue3-strongly-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    //setting it to 1 make it warn us instead of showing an error
    'no-unused-vars': 1
  }
}
