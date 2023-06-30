# vite-vue-project-template

## 通过`vite`脚手架创建

https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project

`pnpm create vite`

## 配置`eslint`

因为初始化项目默认存在 eslint,只需要修改配置项

```javascript
// eslintrc.cjs
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
```

## 使用`prettier`格式化代码

因为默认安装了`prettierrc`, 所以只需要修改配置项

因为`@vue/eslint-config-prettier/skip-formatting`插件的缘故，解决了 eslint 把 prettier 的格式化错误进行自动修复因此导致以下问题

```
<button
>确定</button
>

<img //>
```

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": false,
  "trailingComma": "all",
  "bracketSameLine": true,
  "bracketSpacing": true,
  "singleAttributePerLine": true,
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "ignore",
  "overrides": [
    {
      "files": ".prettierrc",
      "options": {
        "parser": "json"
      }
    },
    {
      "files": ".lintstagedrc",
      "options": {
        "parser": "json"
      }
    }
  ]
}
```

## 使用`stylelint`

`pnpm install --save-dev stylelint postcss-scss sass stylelint-config-standard-scss stylelint-order stylelint-config-hudochenkov postcss-html stylelint-config-standard-vue`

```javascript
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
  },
}
```

## 与 git 工作流结合

### 配置`lint-staged`

pnpm install --save-dev lint-staged

单独在根目录新建.lintstagedrc 文件

```
{
  "*.{md,json}": ["prettier --write"],
  "*.{js,jsx,vue}": ["eslint --fix", "prettier --write"],
  "*.{css,less,scss,vue}": ["stylelint --fix", "prettier --write"]
}
```

### 配置`husky`

https://typicode.github.io/husky/#/?id=usage

1. pnpm install husky --save-dev
2. npx husky install (Enable Git hooks)
3. pnpm pkg set scripts.prepare="husky install" (在 package.json 中添加 prepare 脚本，确保另外的人在安装依赖时也能正确安装钩子并初始化钩子文件夹)
4. npx husky add .husky/pre-commit "npm test" (创建钩子) 写入的钩子内容如下：

## 配置`Tailwind CSS`

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## element-plus

安装

`pnpm install element-plus`

### 按需导入

采用手动导入组件，自动导入组件样式的方法

1、手动导入组件

```vue
<template>
  <el-button>我是 ElButton</el-button>
</template>
<script>
import { ElButton } from 'element-plus'
export default {
  components: { ElButton },
}
</script>
```

1、自动导入组件样式 `pnpm i unplugin-element-plus -D`

```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  // ...
  plugins: [ElementPlus()],
})
```

WARNING

如果使用 unplugin-element-plus 并且只使用组件 API，你需要手动导入样式。

Example:

import 'element-plus/es/components/message/style/css' import { ElMessage } from 'element-plus'

### 国际化

全局配置 <template> <el-config-provider :locale="locale"> <app /> </el-config-provider> </template>

<script>
  import { defineComponent } from 'vue'
  import { ElConfigProvider } from 'element-plus'

  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

  export default defineComponent({
    components: {
      ElConfigProvider,
    },
    setup() {
      return {
        locale: zhCn,
      }
    },
  })
</script>

dayjs 配置

`pnpm i dayjs -D`

```
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

```
