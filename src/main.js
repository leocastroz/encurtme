// STYLE - CSS
import './assets/main.css'
import "vue-toastification/dist/index.css";

// LIBS - Vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";

const app = createApp(App)

// !IMPORTANT - INSTANTIATE LIBS
app.use(Toast)
app.use(router)
app.mount('#app')
