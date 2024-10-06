import { createStore } from 'vuex'
import userAuth from '@/store/modules/auth/credential.store.js'
import globalParam from '@/store/modules/global/parameter.store.js'

/**
 * HOW TO CALL THIS METHOD ACTION USING
 * dispatch('[moduleName]/[Action Method Name]', [Parameter], { root: true })
 *
 * @type {Store<createStore>}
 */

const store = createStore({
  modules: {
    modelAuth: userAuth,
    modelGlobal: globalParam
  }
})

export default store