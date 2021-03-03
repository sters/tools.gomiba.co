import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showGlobalMenuDrawer: false,
  },
  mutations: {
    switchGlobalMenuDrawer(state, n) {
      state.showGlobalMenuDrawer = n == null ? !state.showGlobalMenuDrawer : n;
    },
  },
  actions: {
  },
  modules: {
  },
});
