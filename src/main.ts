import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import("@/base/main.css")

import App from './App.vue'
import router from '@/router'
import VueCalendarHeatmap from 'vue3-calendar-heatmap'


const app = createApp(App)

app.use(ElementPlus)
app.use(VueCalendarHeatmap)
app.use(router)

app.mount('#app')
