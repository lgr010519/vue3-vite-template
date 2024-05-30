import '@/assets/styles/index.scss'
import './plugins/dayjs'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import elementUi from '@/plugins/element-ui'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(elementUi)

app.mount('#app')
