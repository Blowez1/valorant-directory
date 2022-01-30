import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    agent : {},
    agents : [],
    weapons : [],
  },
  mutations: {},
  actions: {},
  getters: {}
})

export default store;