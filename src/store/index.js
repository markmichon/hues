import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  state: {
    foreground: {
      h: 0,
      s: 0,
      l: 95
    },
    background: {
      h: 145,
      s: 68,
      l: 42
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
