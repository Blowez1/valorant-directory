import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = "https://valorant-api.com/v1"

const store = new Vuex.Store({
  state: {
    agent: {},
    agents: [],
    weapons: [],
    menu: false,
  },
  actions: {
    async getAgents({
      commit
    }) {
      const req = await axios.get(`${API_URL}/agents?isPlayableCharacter=true`)
        .catch(err => console.log(err))
        .then(res => res.data.data)

      commit('SET_AGENTS', req)
    },
    toggleMenu({
      commit,
      state
    }) {

      if (state.menu) {
        commit('TOGGLE_MENU', {
          toggle: false
        })
      } else {
        commit('TOGGLE_MENU', {
          toggle: true
        })
      }

    }
  },
  mutations: {
    SET_AGENTS(state, payload) {
      state.agents = payload
    },
    TOGGLE_MENU(state, payload) {
      state.menu = payload.toggle
    }
  },
  getters: {
    getAgents: state => state.agents,
    checkToggle(state) {
      if (state.menu) {
        return "active"
      }
    }
  }
})

export default store;