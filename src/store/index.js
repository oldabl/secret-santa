import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count1: 0,
    count2: 3
  },
  mutations: {
    increment: (state) => {
      state.count1++;
      state.count2++;
  	}
  }
})

export default store;
