import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './assets/exsetup/tailwind.index.css'
import { setupApp } from '@/setupApp.js'

const app = createApp(App)

/**
 * External Create App for aim to external App Create there have been created from another component
 */
setupApp(app)
app.mount('#app')
