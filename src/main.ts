import { createSSRApp } from 'vue'
import App from './App.vue'
import store from './store'
import { routeInterceptor, requestInterceptor, prototypeInterceptor } from './interceptors'
import 'virtual:uno.css'
import '@/style/index.scss'
import '@/style/guazi.scss'

// 初始化 vConsole（仅在 H5 开发环境）
// #ifdef H5
// 动态加载 vConsole
// 判断地址是否含有isDev
const url = window.location.href
const isDev = url.includes('payment_dev')
if (isDev) {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js'
  script.onload = () => {
    // @ts-ignore
    if (typeof VConsole !== 'undefined') {
      // @ts-ignore
      new VConsole()
      console.log('vConsole 已启用')
    }
  }
  document.head.appendChild(script)
}
// #endif

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(routeInterceptor)
  app.use(requestInterceptor)
  app.use(prototypeInterceptor)
  return {
    app,
  }
}
