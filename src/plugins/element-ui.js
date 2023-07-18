import { ElButton } from 'element-plus'

import { Search } from '@element-plus/icons-vue'

// icon 组件以 ELIcon 为前缀命名
export default {
  install: (app) => {
    app.use(ElButton)
    app.component('ELIconSearch', Search)
  },
}
