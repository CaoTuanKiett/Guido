import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import Root from './Root.vue'
import router from './router'
import 'element-plus/dist/index.css'

const app = createApp(Root)
app.use(router)
app.use(ElementPlus)
router.isReady().then(() => {
  app.mount('#root')
})
