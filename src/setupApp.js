import router from './router'
import store from './store'
import initFlowBite from '@/utils/library.flowbite.js'

export function setupApp(app) {
  app.use(initFlowBite)
  app.use(router)
  app.use(store)
}
