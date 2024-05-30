<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView />
  </ElConfigProvider>
</template>

<script setup>
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import { RouterView } from 'vue-router'
</script>
