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
  },
  actions: {
    async getAgents({commit}) {
        const req = await axios.get(`${API_URL}/agents?isPlayableCharacter=true`)
        .catch(err => console.log(err))
        .then(res => res.data.data)

        commit('SET_AGENTS', req)
    },
  },
  mutations: {
    SET_AGENTS(state, payload) {
      state.agents = payload
    }
  },
  getters: {
    getAgents: state => state.agents,
  }
})

export default store;