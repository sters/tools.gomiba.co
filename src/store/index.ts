import router from '@/router';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const routeList = router.getRoutes();

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
  getters: {
    routeList() {
      return routeList;
    },
  },
});
