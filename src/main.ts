import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import vue3GoogleLogin from 'vue3-google-login'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Root from './Root.vue'
import router from './router'
import 'element-plus/dist/index.css'

const app = createApp(Root)
for (const [key, component] of Object.entries(ElementPlusIconsVue))
  app.component(key, component)

app.use(router)
app.use(ElementPlus)
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.YOUR_GOOGLE_CLIENT_ID,
})
router.isReady().then(() => {
  app.mount('#root')
})
