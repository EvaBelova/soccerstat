import { createApp } from 'vue'
import router from "./router"
import './scss/styles.scss'


import App from './App.vue'

const app = createApp(App);

app.use(router).mount('#app')
