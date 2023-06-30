import { fileURLToPath, URL } from 'node:url'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 手动导入组件 但按需自动导入样式
    ElementPlus({
      useSource: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    // 定义全局变量
    preprocessorOptions: {
      scss: {
        // 引入覆盖el默认变量得变量文件，并且使用
        // 您应该使用 @use 'xxx.scss' as *; 代替 @import 'xxx.scss';。因为 sass 团队说他们最终会删除 @import 语法。
        additionalData: `@use "@/assets/styles/element-var.scss" as *;`,
      },
    },
  },
  server: {
    host: '0.0.0.0',
  },
  esbuild: {
    pure: ['console.log'],
    minify: true,
  },
})
