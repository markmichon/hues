import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  state: {
    foreground: {
      h: 100,
      s: 80,
      l: 80
    },
    background: {
      h: 300,
      s: 20,
      l: 20
    }
  },
  getters: {
    getActiveColors: state => {
      return { foreground: state.foreground, background: state.background }
    },
    getForeground: ({ foreground }) => foreground,
    getBackground: ({ background }) => background
  },
  mutations: {
    updateColor(state, { target, reference, val }) {
      state[target] = Object.assign({}, state[target], {
        [reference]: Number(val)
      })
    }
  },
  strict: debug
})
