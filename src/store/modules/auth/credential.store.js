
export const userAuth = {
  namespaced: true,
  state() {
    return {
      user: {
        require: true
      },
      role: {
        default: null,
        type: String
      },
      accessedMenu: {
        default: null,
        type: Array
      },
      isAuthenticated: false
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      state.isAuthenticated = true
    },
    logout(state) {
      state.user = null
      state.isAuthenticated = false
    },
    menuAccess(state, menu) {
      state.accessedMenu = menu
    }
  },
  actions: {}
}

export default userAuth
