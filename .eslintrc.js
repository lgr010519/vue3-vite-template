/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    BMapGL: 'writable',
  },
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    // 这里必须要在后面
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 'prettier/prettier': 'warn',
    // 圈复杂度
    // complexity: ['warn', { max: 15 }],
    // 组件名多单词
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
    // 使用组件使用 PascalCase 形式
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    //
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        multiline: 'never',
      },
    ],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always',
        },
      },
    ],
  },
}
