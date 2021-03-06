export default {
  // state
  state: {
    show: false
  },
  getters: {
    not_show (state) {
      return !state.show
    }
  },
  mutations: {
    switch_dialog (state) {
      state.show = state.show ? !true : true
    }
  },
  actions: {
    switch_dialog (context) {
      context.commit('switch_dialog')
    }
  }
}
