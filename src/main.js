import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'
import './assets/css/main.css'
import App from './App.vue'

const app = Vue.createApp(App)

app.use(router)

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
