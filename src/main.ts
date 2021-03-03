import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-36849335-1',
  router,
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
