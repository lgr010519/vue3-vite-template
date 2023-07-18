module.exports = {
  extends: [
    // 用于排序
    'stylelint-config-hudochenkov/order',
    // 用于scss
    'stylelint-config-standard-scss',
    // 用于解析vue中的scss和css
    'stylelint-config-standard-vue/scss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': null,
    'no-empty-source': null,
  },
}
