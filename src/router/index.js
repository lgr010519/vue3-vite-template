import { createRouter, createWebHistory } from 'vue-router'
import { getToken, setToken, ssoLoginUrl } from '@/utils/config'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = to.query.id_token || getToken()
  if (!token) {
    window.location.href = ssoLoginUrl
  } else {
    setToken(token)
    next()
  }
})

export default router
