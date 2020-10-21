import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    columns: ["First Name", "Last Name", "Title", "Company", "Phone Number"],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    columns (state){
      return state.columns;
    }
  }
})
