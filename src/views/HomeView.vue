<template>
  <div class="page">
    <ElButton
      type="primary"
      @click="logout">
      退出登录
    </ElButton>
  </div>
</template>

<script setup>
  import * as apis from '@/api/sso'
  import { ssoLoginUrl } from '@/utils/config'

  const logout = async () => {
    await apis.logout()
    window.location.href = ssoLoginUrl
  }
</script>
