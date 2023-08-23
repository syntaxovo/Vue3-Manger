import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store';
const app = createApp(App);
import './assets/css/base.css'
app.use(router).use(pinia).mount('#app')
