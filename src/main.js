import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import './styles/global.css'
import errorHandler from './plugins/errorHandler'

const app = createApp(App)

// 注册 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(errorHandler, {
  enabled: true,
  capturePromiseRejection: true,
  captureResourceError: true,
  showConsoleError: process.env.NODE_ENV === 'development',
  autoReport: process.env.NODE_ENV === 'production'
})

app.mount('#app')
