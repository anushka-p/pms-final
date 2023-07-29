/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import store from './store'
// Composables
import { createApp } from 'vue'
import './axios'
import httpInterceptor from './interceptor'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(store)
registerPlugins(app)
httpInterceptor()
app.mount('#app')
