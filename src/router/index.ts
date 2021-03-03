import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Top from '../views/Top.vue';
import MediastreamVideoTest from '../views/MediastreamVideoTest.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TOP',
    component: Top,
    meta: {
      title: '',
    },
  },
  {
    path: '/mediastream_video_test',
    name: 'MediastreamVideoTest',
    component: MediastreamVideoTest,
    meta: {
      title: 'Mediastreamを使ったカメラデバイスの表示確認',
    },
  },
];

const router = new VueRouter({
  routes,
});

const DEFAULT_TITLE = 'tools.gomiba.co';
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title !== '' ? `${to.meta.title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  });
});

export default router;
